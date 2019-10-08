import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import NotFound from './NotFound';
// import TypesContainer from './TypesContainer';
// import EvolutionContainer from './EvolutionContainer';

class Details extends React.Component {
    state = {
        pokeId: parseInt(this.props.match.params.id, 10) || 0,
        pokemonDetails: {},
        speciesDetails: {},
        errorFlag: false
    }

    componentDidMount() {
        const { pokeId } = this.state;
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then(res => {
                const pokemonDetails = {
                    name: res.data.name,
                    height: (res.data.height / 10).toFixed(2) + ' M',
                    weight: (res.data.weight / 10).toFixed(2) + ' Kg',
                    types: res.data.types.map((typeObj) => typeObj.type.name).join(', '),
                    stats: res.data.stats.map((statsObj) => {
                        return { name: statsObj.stat.name, value: statsObj.base_stat }
                    }),
                    abilities: res.data.abilities.map(abilityObj => abilityObj.ability.name).join(', ')
                }
                this.setState({ pokemonDetails: pokemonDetails });
            })
            .catch(err => {
                this.setState({ errorFlag: true });
                console.log("Error occured while fetching pokemon data :: " + err + " :: for pokeId :: " + pokeId)
            })
        axios
            .get(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}`)
            .then(res => {
                const speciesDetails = {
                    evolutionChainUrl: res.data.evolution_chain.url
                    ,
                    description: (res.data.flavor_text_entries.filter(item => (item.language.name === 'en' && item.version.name === 'omega-ruby'))[0]) ? (res.data.flavor_text_entries.filter(item => (item.language.name === 'en' && item.version.name === 'omega-ruby'))[0]).flavor_text : 'NA',
                    genus: (res.data.genera.filter(item => item.language.name === 'en')[0]) ? (res.data.genera.filter(item => item.language.name === 'en')[0]).genus.split(' ').slice(0, -1).join(' ') : 'NA ',
                    habitat: (res.data.habitat) ? res.data.habitat.name : 'NA'
                };
                this.setState({ speciesDetails: speciesDetails });
            })
            .catch(err => {
                this.setState({ errorFlag: true });
                console.log("Error occured while fetching species data :: " + err + " :: for pokeId :: " + pokeId)
            })

    }

    updatePokeId(updateBy) {
        this.setState({
            pokeId: this.state.pokeId + updateBy
        })
    }

    componentWillReceiveProps(nextProps) {
        const pokeId = parseInt(nextProps.match.params.id, 10) || 0;
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then(res => {
                const pokemonDetails = {
                    name: res.data.name,
                    height: (res.data.height / 10).toFixed(2) + ' M',
                    weight: (res.data.weight / 10).toFixed(2) + ' Kg',
                    types: res.data.types.map((typeObj) => typeObj.type.name).join(', '),
                    stats: res.data.stats.map((statsObj) => {
                        return { name: statsObj.stat.name, value: statsObj.base_stat }
                    }),
                    abilities: res.data.abilities.map(abilityObj => abilityObj.ability.name).join(', ')
                }
                this.setState({ pokemonDetails: pokemonDetails });
            })
            .catch(err => {
                this.setState({ errorFlag: true });
                console.log("Error occured while fetching pokemon data :: " + err + " :: for pokeId :: " + pokeId)
            })
        axios
            .get(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}`)
            .then(res => {
                const speciesDetails = {
                    evolutionChainUrl: res.data.evolution_chain.url
                    ,
                    description: (res.data.flavor_text_entries.filter(item => (item.language.name === 'en' && item.version.name === 'omega-ruby'))[0]) ? (res.data.flavor_text_entries.filter(item => (item.language.name === 'en' && item.version.name === 'omega-ruby'))[0]).flavor_text : 'NA',
                    genus: (res.data.genera.filter(item => item.language.name === 'en')[0]) ? (res.data.genera.filter(item => item.language.name === 'en')[0]).genus.split(' ').slice(0, -1).join(' ') : 'NA ',
                    habitat: (res.data.habitat) ? res.data.habitat.name : 'NA'
                };
                this.setState({ speciesDetails: speciesDetails });
            })
            .catch(err => {
                this.setState({ errorFlag: true });
                console.log("Error occured while fetching species data :: " + err + " :: for pokeId :: " + pokeId)
            })

    }

    renderComponent() {
        if (this.state.errorFlag) {
            return <NotFound />
        } else {
            const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${this.state.pokeId}.png`;

            const { name, height, weight, types, stats, abilities } = this.state.pokemonDetails;
            const { description, genus, habitat } = this.state.speciesDetails;

            const infoList = [
                { key: 'Height', value: height },
                { key: 'Weight', value: weight },
                { key: 'Category', value: genus },
                { key: 'Habitat', value: habitat },
                { key: 'Types', value: types },
                { key: 'Abilities', value: abilities }
            ];
            const statsList = stats ? [...stats] : [];

            return (
                <div className="container-2 details">
                    <div className="details-header">
                        <Link to={`/details/${this.state.pokeId - 1}`} className="btn btn-light hide-sm" onClick={() => this.updatePokeId(-1)}>Previous</Link>
                        <h3 className="x-large text-capitalize">
                            {name}
                        </h3>
                        <Link to={`/details/${this.state.pokeId + 1}`} className="btn btn-light hide-sm" onClick={() => this.updatePokeId(1)}>Next</Link>
                    </div>
                    <img src={imgUrl} alt="pokemon" />
                    <div className="details-desc">
                        <p className="text-key">
                            Description:
                        </p>
                        <p className="text-justify">
                            {description}
                        </p>
                    </div>
                    <div className="details-info">
                        <p className="text-key">
                            Details:
                        </p>
                        <ul className="p-1">
                            {
                                infoList.map((info, id) => {
                                    return (<li key={id}>
                                        <span className="text-subkey">
                                            {`${info.key}: `}
                                        </span>
                                        <span className="text-value">
                                            {`${info.value}`}
                                        </span>
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                    <div className="details-stats">
                        <ul>
                            {
                                statsList.map((stat, id) => {
                                    return (<li key={id}>
                                        <span className="text-value">
                                            {`${stat.name}: `}
                                        </span>
                                        <div className="progress-bar">
                                            <span style={{ width: `${stat.value / 2}%` }}></span>
                                        </div>
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                    <div className="details-button hide-sm">
                        <Link to="/" className="btn btn-primary">Catch 'em all</Link>
                    </div>

                </div>
            )
        }
    }

    render() {
        return (
            this.renderComponent()
        )
    }
}

export default Details;