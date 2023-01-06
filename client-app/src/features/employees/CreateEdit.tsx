export default function CreateEdit() {
  return (
    <div className="mt-5">
      <h3>CreateEdit</h3>

      <form>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="firstName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="lastName"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
