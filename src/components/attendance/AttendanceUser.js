function AttendanceUser({ ids, setIds, state }) {
  const handleChange = (event) => {
    const checked = event.target.checked; //
    const newIds = new Map(ids);

    newIds.set(state.item._id, checked);
    setIds(newIds);
    console.log(newIds);
  };
  return (
    <div className="flex justify-between list-group-item  list-group-item-primary mb-2">
      <p className="font-bold">{state.item.name}</p>

      <div className="flex space-x-4">
        <div class="form-check">
          <input
            onChange={handleChange}
            className="form-check-input cursor-pointer"
            type="checkbox"
          />
        </div>
      </div>
    </div>
  );
}

export default AttendanceUser;
