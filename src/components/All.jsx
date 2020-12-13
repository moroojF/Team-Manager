import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
const All = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/players')
      .then(res => {
        setPlayers(res.data.players)
      })
  }, [players]);

  const myDelete = (playerId) => {
    axios.delete("http://localhost:8000/api/player/delete/" + playerId)
      .then(res => {
        setPlayers(players.filter(player => player._id = !playerId));
        navigate("/players/list");
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className="row my-4" style={{ fontSize: '40px' }}>
        <h2 className="text-secondary mx-5 textStyle"><Link to="/players/list" className="textStyle text-secondary">List </Link>|<Link to="/players/addplayer" className="textStyle text-secondary"> Add Player</Link></h2>
      </div>
      <div className="row mx-4">
          <table class="table">
            <thead>
              <tr>
              <th scope="col">
                Team Name
              </th>
              <th scope="col">
                Preferred Position
              </th>
              <th scope="col">Actions</th></tr>
            </thead>
            {players.map(player =>
            <tbody>
              <tr>
                <td>
                  <Link to={`/view/${player._id}`} className="textStyle" style={{ backgroundColor: "#D1E4EC", fontSize: '25px' }}>{player.name}</Link>
                </td>
                <td>
                  {player.preferredPosition}
                </td>
                <td>
                  <button onClick={e => { myDelete(player._id) }} className="btn btn-outline-secondary btn-block my-3">DELETE</button>
                </td>
              </tr>
            </tbody>
            )}
          </table>
        </div>
    </>
  )
}
export default All;