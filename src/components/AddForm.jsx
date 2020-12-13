import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddForm = props => {
  const [errors, setErrors] = useState("");
  const [name, setName] = useState("");
  const [preferredPosition, setPreferredPosition] = useState("");
  const [frontErrors, setFrontErrors] = useState({});


  const nameErrors = e => {
    let value = e.target.value;
    let message = "";
    if (!value) {
      message = "Name is required!"
    } else if (value.length < 2) {
      message = "Name must be 2 characters or longer!"
    }
    setFrontErrors({ ...frontErrors, name: message });
  }

  const myCreate = e => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/player/new", {
      name,
      preferredPosition
    }).then(res => {
      if (res.data.errors) {
        setErrors(res.data.errors);
      } else {
        navigate("/players/list");
      }
    })
      .catch(err => console.log(err))
  }

  return (
    <>
      <div class="row my-4">
        <h2 className="text-secondary mx-5 textStyle"><Link to="/players/list" className="textStyle text-secondary">List </Link>|<Link to="/players/addplayer" className="textStyle text-secondary"> Add Player</Link></h2>
      </div>
      <div className="row d-flex justify-content-center mx-4">
        <div className="col-6">


          <div className="card">
            <h3 className="card-header text-center textStyle" style={{ backgroundColor: "#D1E4EC", fontSize: '35px' }}>Add Player</h3>
            <div className="card-body text-left" style={{ fontSize: '22px' }}>
              <form onSubmit={myCreate}>
                <div className="form-grpup">
                  <h5 className="card-text d-inline">Name:</h5>
                  <input type="text" className="form-control" onChange={e => setName(e.target.value)} onBlur={nameErrors} value={name} />
                  <p className="text-danger">{errors.name ? errors.name.message : ''}</p>
                  <p className="text-danger">{frontErrors.name}</p>
                </div>
                <div className="form-grpup">
                  <h5 className="card-text d-inline">Preferred Position:</h5>
                  <input type="text" className="form-control" onChange={e => setPreferredPosition(e.target.value)} value={preferredPosition} />
                  <p className="text-danger">{errors.preferredPosition ? errors.preferredPosition.message : ''}</p>
                </div>
                <div className="card-footer text-center">
                  <div className="btn-group">
                    <input type="submit" className="btn btn-outline-secondary my-3" value="ADD" />
                    <Link className="btn btn-outline-secondary my-3" to="/players/list" >Cancel</Link>
                  </div>
                </div>
              </form>
              </div>
              <div className="col-3"></div>
          </div>
        </div>
      </div>
    </>
  )

}
export default AddForm;
