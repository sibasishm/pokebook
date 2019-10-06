import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

import PokeCard from './PokeCard';

class CardHolder extends React.Component {
    state = {
        results: [],
        offset: 0,
        limit: 30,
        totalPokemons: 0
    };

    componentDidMount() {
        const { offset, limit } = this.state;
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
            .then(res => this.setState({ results: res.data.results, totalPokemons: res.data.count }))
            .catch(err => console.log("Error occured while fetching data :: " + err));
        this.setState({ offset: offset + limit })
    }

    fetchNextResults = () => {
        const { offset, limit, results } = this.state;
        this.setState({ offset: offset + limit })
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
            .then(res => this.setState({ results: results.concat(res.data.results) }))
            .catch(err => console.log("Error occured while fetching data :: " + err))
    }

    doesHaveMore = () => {
        const { offset, totalPokemons } = this.state;
        return (offset < totalPokemons);
    }

    render() {
        let dataArr = (this.state.results) ? this.state.results : [];
        return (
            <InfiniteScroll
                dataLength={dataArr.length}
                next={this.fetchNextResults}
                hasMore={this.doesHaveMore}
                loader={<h4>Loading...</h4>}
            >
                <ul className="cards">
                    {
                        dataArr.map(cardItem => {
                            // getting the unique id of each pokemons from the url
                            let urlArray = cardItem.url.split('/');
                            let pokeId = urlArray[urlArray.length - 2];
                            // getting high res images from bastionbot
                            let imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`
                            return <PokeCard key={pokeId} name={cardItem.name} imgUrl={imgUrl} pokeId={pokeId} />
                        })
                    }
                </ul>
            </InfiniteScroll>
        )
    }
}

export default CardHolder
