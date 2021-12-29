import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const getMovie = async () => {
    const response = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)
    ).json();
    console.log(response);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <div>Detail</div>;
};

export default Detail;
