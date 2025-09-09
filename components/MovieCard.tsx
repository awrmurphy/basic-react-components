export default function MovieCard(){
    const movie = {
    title: "Forrest Gump",
    overview:
    "The presidencies of Kennedy and Johnson are shown through the eyes of an Alabama man with an IQ of 75.",
    poster_path:
    "https://originalvintagemovieposters.com/wp-content/uploads/2016/08/Forrest-Gump-5048.jpg",
    release_date: "1994-07-06",
    vote_average: 8.8,
    };

    return <div style={{
        border: "",
        width: 300,
        height: 400,
        marginTop: 16
    }}>
        <img src={movie.poster_path} alt={movie.title} style={{
            height:300,
            width: 300
        }} />
        <div>{movie.title}</div>
        <div>{movie.release_date}</div>
        <div>Rating: {movie.vote_average}</div>
    </div>
}