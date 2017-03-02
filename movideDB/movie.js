var movies = [
  {
    title: "titanic",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Taxi",
    rating: 1,
    hasWatched: false
  },
  {
    title: "Love",
    rating: 7,
    hasWatched: true
  },
  {
  title: "Sex & drugs",
  rating: 2,
  hasWatched: false
  }
]

movies.forEach(function(movie){

  var result = "you have "

  if(movie.hasWatched)
  {
    result += "watched ";
  }

  else
  {
    result += "not seen ";
  }

  result += "\"" + movie.title + "\" - "
  result += movie.rating + " starts";

  console.log(result);
})
