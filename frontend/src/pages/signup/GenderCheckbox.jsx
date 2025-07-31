const GenderCheckbox = () => {
  return (
    <div className="flex mt-2 gap-2">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="radio"
            name="gender"
            className="radio border-slate-900"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input
            type="radio"
            name="gender"
            className="radio border-slate-900"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
