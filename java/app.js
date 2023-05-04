const apiKey = '64556d4b36914371e034f9cef5b8697c';

function searchMovies(query) {
	const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${query}`;

	$.getJSON(url, function(data) {
		const movies = data.results;

		$('#movies-container').empty();

		if (movies.length > 0) {
			$.each(movies, function(i, movie) {
				const movieElement = `
					<div class="movie">
						<img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
						<h2>${movie.title}</h2>
						<p>${movie.release_date}</p>
					</div>
				`;

				$('#movies-container').append(movieElement);
			});
		} else {
			const errorMessage = `
				<div class="movie">
					<h2>Nenhum filme encontrado</h2>
				</div>
			`;

			$('#movies-container').append(errorMessage);
		}
	});
}

$('form').submit(function(event) {
	event.preventDefault();
	const searchTerm = $('#search-input').val();
	searchMovies(searchTerm);
});
