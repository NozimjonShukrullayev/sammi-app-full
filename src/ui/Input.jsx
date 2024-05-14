function Input({ label, id, type = "text", state, setState }) {

  return (
    <div className="form-floating">
      <input type={type} value={state} onChange={(e) => setState(e.target.value)} className="form-control" id={id} placeholder={label} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Input;