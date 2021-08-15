import { UserAddIcon, UserRemoveIcon, PlusCircleIcon, ArchiveIcon, CheckCircleIcon } from '@heroicons/react/solid'
import { useHistory } from 'react-router'
function Card({ title, icon_one, icon_two }) {
    const History = useHistory();
    const redirectToPages = () => {
        console.log('IMOK')
        switch (title) {
            case 'Add or Remove User':
                History.push('/admin/addremove')
                break;
            case 'Add Course':
                History.push('/admin/addcourse')
                break;
            case 'Assign Course to User':
                History.push('/admin/assign')
                break;
            case 'Mark Attendance':
                History.push('/admin/mark')

                break;
            default:
                break;
        }
    }

    return (
        <div onClick={redirectToPages} className='group mb-4 p-5 border-2 hover:border-indigo-700 hover:bg-gray-300 transform  cursor-pointer bg-gray-100 md:w-[250px] rounded-md flex items-center flex-col   md:mt-20 md:ml-20'>
            <div className='flex'>
                {icon_one === 'UserAddIcon' && <UserAddIcon className='h-20 w-20 text-[#06202A]' />}
                {icon_two && <UserRemoveIcon className='h-20 w-20 text-[#06202A]' />}
                {icon_one === 'PlusCircleIcon' && <PlusCircleIcon className='h-20 w-20 text-[#06202A]' />}
                {icon_one === 'ArchiveIcon' && <ArchiveIcon className='h-20 w-20 text-[#06202A]' />}
                {icon_one === 'MarkAttendance' && <CheckCircleIcon className='h-20 w-20 text-[#06202A]' />}
            </div>

            <h1 className='  font-bold text-[#06202B] text-center'>{title}</h1>
        </div>
    )
}

export default Card
