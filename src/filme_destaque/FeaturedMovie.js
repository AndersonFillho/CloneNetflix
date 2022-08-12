import React from 'react';
import '../filme_destaque/FeaturedMovie'
import '../filme_destaque/FeaturedMovie.css'

export default ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push( item.genres[i].name );
    }

    let description = item.overview;
    if(description.length > 300) {
        description = description.substring(0, 300)+'...';
    }

    return (
        <section className='destaque' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='destaque--vertical'>
                <div className='destaque--horizontal'>
                    <div className='destaque--nome'>{item.original_name}</div>
                    <div className='destaque--info'>
                        <div className='destaque--pontos'>{item.vote_average} pontos</div>
                        <div className='destaque--ano'>{firstDate.getFullYear()}</div>
                        <div className='destaque--temporadas'>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className='destaque--descricao'>{description}</div>
                    <div className='destaque--botao'>
                        <a href={`/watch/${item.id}`} className='botao--assistir'>▶ Assistir</a>
                        <a href={`/list/add/${item.id}`} className='botao--lista'>+ Minha Lista</a>
                    </div>
                    <div className='destaque--generos'><strong>Gêneros</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}
