import React from "react";

class CraneChecksheet extends React.Component {
  onSubmit = e => {
    localStorage.setItem("crane", "true");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="form-label">Location of the main switch to disconnect supply</label>
            <br />
            <div className="form-check form-check-inline">
              <input
                name="shift3"
                type="radio"
                className="form-check-input"
                value="OK"
                required
              />
              <label title="" type="checkbox" className="form-check-label">
                OK
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                name="shift3"
                type="radio"
                className="form-check-input"
                value="NOT OK"
                required
              />
              <label title="" type="checkbox" className="form-check-label">
                NOT OK
              </label>
            </div>
          </div>




          <div className="form-group">
            <label className="form-label">Location of the main switch to disconnect supply</label>
            <br />
            <div className="form-check form-check-inline">
              <input
                name="shift4"
                type="radio"
                className="form-check-input"
                value="OK"
                required
              />
              <label title="" type="checkbox" className="form-check-label">
                OK
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                name="shift4"
                type="radio"
                className="form-check-input"
                value="NOT OK"
              />
              <label title="" type="checkbox" className="form-check-label">
                NOT OK
              </label>
            </div>
          </div>

          <input type="submit" />


        </form>
      </div>
    );
  }
}

export default CraneChecksheet;
