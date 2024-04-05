const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=d708d98cdd52c8ec683fa8e82cb9faa6", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  
