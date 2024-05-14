

function TextArea({ label, state, setState, height = '100px' }) {
  return (
    <div className="form-floating">
      <textarea className="form-control" value={state} onChange={(e) => setState(e.target.value)} placeholder="Leave a comment here" id="floatingTextarea2" style={{height: height}}></textarea>
      <label htmlFor="floatingTextarea2">{label}</label>
    </div>
  )
}

export default TextArea;