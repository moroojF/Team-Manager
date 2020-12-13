import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import moment from 'moment';
import axios from 'axios';

function One(props) {
  const [player, setPlayer] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/player/${props._id}`)
      .then(res => {
        setPlayer(res.data.player);
      })
  }, [])
  return (
    <>
      <div class="row my-4">
        <h2 className="text-secondary mx-5 textStyle"><Link to="/players/list" className="textStyle text-secondary">List </Link>|<Link to="/players/addplayer" className="textStyle text-secondary"> Add Player</Link></h2>
      </div>      
      <div className="row mx-4">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="card">
            <h3 className="card-header text-center textStyle" style={{ backgroundColor: "#D1E4EC", fontSize: '35px' }}>{player.name}</h3>
            <div className="card-body text-left" style={{ fontSize: '22px' }}>
              <div className="my-3">
                <h5 className="card-text d-inline">Preferred Position: </h5>
                <p className="d-inline">{player.preferredPosition}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </>
  )
}

export default One
