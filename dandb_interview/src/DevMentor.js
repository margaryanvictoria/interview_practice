import React, { useState, useEffect } from 'react';
import Datatable from './datatable';

function DevMentor() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchColumns, setSearchColumns] = useState(['name', 'height']);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      fetch("https://swapi.dev/api/people")
        .then(response => response.json())
        .then(json => setData(json.results));
      setLoading(false);
    };

    fetchData();
    /* fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(json => setData(json)); */
    console.log("useeffect", data)
  }, []);

  function search(rows) {
    if(rows === undefined) {console.log("search" + rows); return rows;}
    const columns = rows && Object.keys(rows[0]).slice(0, 8);
    console.log("search2", rows)
    return rows.filter((row) => {
        columns.some(
        (col) => row[col].toString().toLowerCase().includes(q.toLowerCase())
      )}
    );
  }

  if (loading) {
    return (
      <div>Loading from API...</div>
    );
  }

  const temp = [
    {
      "birth_year": "19 BBY",
      "eye_color": "Blue",
      "films": [
          "https://swapi.dev/api/films/1/",
      ],
      "gender": "Male",
      "hair_color": "Blond",
      "height": "172",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "mass": "77",
      "name": "Luke Skywalker",
      "skin_color": "Fair",
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-10T13:52:43.172000Z",
      "species": [
          "https://swapi.dev/api/species/1/"
      ],
      "starships": [
          "https://swapi.dev/api/starships/12/",
      ],
      "url": "https://swapi.dev/api/people/1/",
      "vehicles": [
          "https://swapi.dev/api/vehicles/14/"
      ]
    },
    {
      "birth_year": "19 BBY",
      "eye_color": "Blue",
      "films": [
          "https://swapi.dev/api/films/1/",
      ],
      "gender": "Male",
      "hair_color": "Blond",
      "height": "172",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "mass": "77",
      "name": "Luke Skywalker",
      "skin_color": "Fair",
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-10T13:52:43.172000Z",
      "species": [
          "https://swapi.dev/api/species/1/"
      ],
      "starships": [
          "https://swapi.dev/api/starships/12/",
      ],
      "url": "https://swapi.dev/api/people/1/",
      "vehicles": [
          "https://swapi.dev/api/vehicles/14/"
      ]
    },
  ]

  return (
    <div>
      <div>
        <input type='text' placeholder='name or height' value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div>
        <Datatable data={search(data)} />
        {data.map((p, i) => <p key={i}>{JSON.stringify(p)}</p>)}
      </div>
    </div>
  );
}

export default DevMentor;
