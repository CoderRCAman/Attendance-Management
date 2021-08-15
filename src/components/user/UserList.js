import ReactTooltip from "react-tooltip";
import { deleteUser } from "../../admin/helper/AdminHelper";

function UserList({ state,dispatch ,setOpenModal}) {
    const delUser =(_id) => {
        deleteUser(_id).then(data=>{
            if(data.status){
                alert('Unable to delete') ;
            }
            else {
                alert('Delete Success');
            }
        })
    }
    return (
        <div className='flex justify-between list-group-item  hover:bg-[#BACBE6]  list-group-item-primary mb-2 rounded'>
            <p>{state.name}</p>
            <div className='flex space-x-4'>
                <div>
                    <button data-tip data-for="viewTip"
                       onClick={e => {
                           setOpenModal(true);
                        dispatch({ type: 'set-user', payload: state });
                    }}>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                    </button>
                    <ReactTooltip id="viewTip" place="left" effect="solid">
                        View Profile
                    </ReactTooltip>
                </div>
                <div>
                    <button data-tip data-for="EditTip"
                        onClick={e => {
                            dispatch({ type: 'edit-modal' });
                            dispatch({ type: 'set-user', payload: state });
                        }}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
                    </button>
                    <ReactTooltip id="EditTip" place="left" effect="solid">
                        Edit User
                    </ReactTooltip>
                </div>
                <div>
                    <button data-tip data-for="deleteTip" onClick={e=>{delUser(state._id)}}>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                    </button>
                    <ReactTooltip id="deleteTip" place="left" effect="solid" >
                        Delete User
                    </ReactTooltip>
                </div>

            </div>
        </div>
    )
}

export default UserList
