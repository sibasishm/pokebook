import React, { Component } from 'react';
import axios from 'axios';

class EvolutionContainer extends Component {
    state = {
        url: this.props.url,
        evolutionTree: []
    }

    returnPokeIdFromUrl(url) {
        const urlArray = url.split('/');
        return urlArray[urlArray.length - 2];
    }

    makeChildObj(species, level) {
        return {
            name: species.name,
            pokeId: this.returnPokeIdFromUrl(species.url),
            level: level
        };
    }

    traverseEvolutionTree(tree, level) {
        if (tree.evolves_to.length > 0) {
            for (let child in tree.evolves_to) {
                this.traverseEvolutionTree(child, level + 1)
            }
        } else {
            return this.makeChildObj(tree.species, level);
        }
    }

    componentDidMount() {
        let evolutionTree = [];
        axios
            .get(this.state.url)
            .then(res => {
                evolutionTree.unshift(this.traverseEvolutionTree(res.data.chain, 1));
                this.setState({ evolutionTree: evolutionTree });
            })
            .catch(err => {
                this.setState({ errorFlag: true });
                console.log("Error occured while fetching pokemon data :: " + err)
            })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                Coming Soon!!
            </div>
        )
    }
}

export default EvolutionContainer
