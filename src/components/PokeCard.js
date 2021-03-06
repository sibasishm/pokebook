import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class PokeCard extends React.Component {
    state = {
        ...this.props,
        types: []
    };

    componentDidMount() {
        const { pokeId } = this.state;
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then(res => {
                let types = [];
                if (res.hasOwnProperty('data') && res.data.hasOwnProperty('types')) {
                    res.data.types.forEach(item => {
                        if (item.hasOwnProperty('type') && item.type.hasOwnProperty('name')) {
                            types.push(item.type.name);
                        }
                    })
                }
                this.setState({ types: types });
            })
            .catch(err => console.log("Error occured while fetching data :: " + err + " :: for pokeId :: " + pokeId))
    }

    render() {
        const { imgUrl, name, types, pokeId } = this.state;
        let classesForCard = ['card', types[types.length - 1]];
        return (
            <li className="cards-item">
                <div className={classesForCard.join(' ')}>
                    <div className="card-image">
                        <img src={imgUrl} alt={name} />
                    </div>
                    <div className="card-content">
                        <div className="card-title">{name}</div>
                        <div className="card-subtitle">{types.join(', ')}</div>
                    </div>
                    <Link to={`/details/${pokeId}`} className="btn btn-danger">View details</Link>
                </div>
            </li>
        )
    }
}

export default PokeCard
