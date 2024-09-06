import  { useState, useEffect } from 'react'

const LecturaApi = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=4')
          .then((response) => response.json())
          .then((json) => setData(json.results))
          .catch((error) => setError(error))
          .finally(() => setLoading(false));
      }, []);
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error} </p>;
   return (
    <div>
      {data.map((user, index) => (
        <div key={index}>
          <h3>{`${user.name.first} ${user.name.last}`}</h3>
          <img src={user.picture.medium} alt={user.name.first} />
          <p>Nacionalidad: {user.nat}</p>
        </div>
      ))}
    </div>
  );
}

export default LecturaApi
