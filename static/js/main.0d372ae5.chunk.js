(window.webpackJsonppokebook=window.webpackJsonppokebook||[]).push([[0],{35:function(e,t,a){e.exports=a(63)},40:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),o=a.n(s),c=a(31),l=a(7),i=(a(40),a(9)),m=a(10),u=a(12),p=a(11),d=a(13),h=a(29),f=a.n(h),g=a(6),v=a.n(g),b=a(30);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.props,{types:[]}),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.pokeId;v.a.get("/pokemon/".concat(t)).then((function(t){var a=[];t.hasOwnProperty("data")&&t.data.hasOwnProperty("types")&&t.data.types.forEach((function(e){e.hasOwnProperty("type")&&e.type.hasOwnProperty("name")&&a.push(e.type.name)})),e.setState({types:a})})).catch((function(e){return console.log("Error occured while fetching data :: "+e+" :: for pokeId :: "+t)}))}},{key:"render",value:function(){var e=this.state,t=e.imgUrl,a=e.name,n=e.types,s=e.pokeId,o=["card",n[n.length-1]];return r.a.createElement("li",{className:"cards-item"},r.a.createElement("div",{className:o.join(" ")},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:t,alt:a})),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-title"},a),r.a.createElement("div",{className:"card-subtitle"},n.join(", "))),r.a.createElement("a",{href:"/details/".concat(s),className:"btn btn-danger"},"View details")))}}]),t}(r.a.Component),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={results:[],offset:0,limit:30,totalPokemons:0},a.fetchNextResults=function(){var e=a.state,t=e.offset,n=e.limit,r=e.results;a.setState({offset:t+n}),v.a.get("/pokemon?offset=".concat(t,"&limit=").concat(n)).then((function(e){return a.setState({results:r.concat(e.data.results)})})).catch((function(e){return console.log("Error occured while fetching data :: "+e)}))},a.doesHaveMore=function(){var e=a.state;return e.offset<e.totalPokemons},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state,a=t.offset,n=t.limit;v.a.get("/pokemon?offset=".concat(a,"&limit=").concat(n)).then((function(t){return e.setState({results:t.data.results,totalPokemons:t.data.count})})).catch((function(e){return console.log("Error occured while fetching data :: "+e)})),this.setState({offset:a+n})}},{key:"render",value:function(){var e=this.state.results?this.state.results:[];return r.a.createElement(f.a,{dataLength:e.length,next:this.fetchNextResults,hasMore:this.doesHaveMore,loader:r.a.createElement("h4",null,"Loading...")},r.a.createElement("ul",{className:"cards"},e.map((function(e){var t=e.url.split("/"),a=t[t.length-2],n="https://pokeres.bastionbot.org/images/pokemon/".concat(a,".png");return r.a.createElement(k,{key:a,name:e.name,imgUrl:n,pokeId:a})}))))}}]),t}(r.a.Component),N=function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"x-large"},"Pok\xe9book"),r.a.createElement("p",{className:"large"},"Get to know your pok\xe9mons better!"))),r.a.createElement("section",{className:"content"},r.a.createElement("div",{className:"container"},r.a.createElement(E,null))))},O=a(34),j=function(){return r.a.createElement("div",{className:"container-2 not-found"},r.a.createElement("a",{href:"/",className:"btn btn-light hide-sm"},"I miss home"),r.a.createElement("div",{className:"not-found-title"},r.a.createElement("p",{className:"x-large"},"Where am I?"),r.a.createElement("p",{className:"lead text-grey"},"Sorry, this page doesn't exist. Ask your favourite pokemon to guide you home.")),r.a.createElement("img",{src:"https://pokeres.bastionbot.org/images/pokemon/54.png",alt:"not-found",className:"not-found-image"}))},w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={pokeId:parseInt(a.props.match.params.id,10)||0,pokemonDetails:{},speciesDetails:{},errorFlag:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.pokeId;v.a.get("/pokemon/".concat(t)).then((function(t){var a={name:t.data.name,height:(t.data.height/10).toFixed(2)+" M",weight:(t.data.weight/10).toFixed(2)+" Kg",types:t.data.types.map((function(e){return e.type.name})).join(", "),stats:t.data.stats.map((function(e){return{name:e.stat.name,value:e.base_stat}})),abilities:t.data.abilities.map((function(e){return e.ability.name})).join(", ")};e.setState({pokemonDetails:a})})).catch((function(a){e.setState({errorFlag:!0}),console.log("Error occured while fetching pokemon data :: "+a+" :: for pokeId :: "+t)})),v.a.get("/pokemon-species/".concat(t)).then((function(t){var a={evolutionChainUrl:t.data.evolution_chain.url,description:t.data.flavor_text_entries.filter((function(e){return"en"===e.language.name&&"omega-ruby"===e.version.name}))[0]?t.data.flavor_text_entries.filter((function(e){return"en"===e.language.name&&"omega-ruby"===e.version.name}))[0].flavor_text:"NA",genus:t.data.genera.filter((function(e){return"en"===e.language.name}))[0]?t.data.genera.filter((function(e){return"en"===e.language.name}))[0].genus.split(" ").slice(0,-1).join(" "):"NA ",habitat:t.data.habitat?t.data.habitat.name:"NA"};e.setState({speciesDetails:a})})).catch((function(a){e.setState({errorFlag:!0}),console.log("Error occured while fetching species data :: "+a+" :: for pokeId :: "+t)}))}},{key:"renderComponent",value:function(){if(this.state.errorFlag)return r.a.createElement(j,null);var e="https://pokeres.bastionbot.org/images/pokemon/".concat(this.state.pokeId,".png"),t=this.state.pokemonDetails,a=t.name,n=t.height,s=t.weight,o=t.types,c=t.stats,l=t.abilities,i=this.state.speciesDetails,m=i.description,u=[{key:"Height",value:n},{key:"Weight",value:s},{key:"Category",value:i.genus},{key:"Habitat",value:i.habitat},{key:"Types",value:o},{key:"Abilities",value:l}],p=c?Object(O.a)(c):[];return r.a.createElement("div",{className:"container-2 details"},r.a.createElement("div",{className:"details-header"},r.a.createElement("a",{href:"/details/".concat(this.state.pokeId-1),className:"btn btn-light hide-sm"},"Previous"),r.a.createElement("h3",{className:"x-large text-capitalize"},a),r.a.createElement("a",{href:"/details/".concat(this.state.pokeId+1),className:"btn btn-light hide-sm"},"Next")),r.a.createElement("img",{src:e,alt:"pokemon"}),r.a.createElement("div",{className:"details-desc"},r.a.createElement("p",{className:"text-key"},"Description:"),r.a.createElement("p",{className:"text-justify"},m)),r.a.createElement("div",{className:"details-info"},r.a.createElement("p",{className:"text-key"},"Details:"),r.a.createElement("ul",{className:"p-1"},u.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("span",{className:"text-subkey"},"".concat(e.key,": ")),r.a.createElement("span",{className:"text-value"},"".concat(e.value)))})))),r.a.createElement("div",{className:"details-stats"},r.a.createElement("ul",null,p.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("span",{className:"text-value"},"".concat(e.name,": ")),r.a.createElement("div",{className:"progress-bar"},r.a.createElement("span",{style:{width:"".concat(e.value/2,"%")}})))})))),r.a.createElement("div",{className:"details-button hide-sm"},r.a.createElement("a",{href:"/",className:"btn btn-primary"},"Catch 'em all")))}},{key:"render",value:function(){return this.renderComponent()}}]),t}(r.a.Component),x=r.a.createElement(c.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:N}),r.a.createElement(l.a,{path:"/details/:id",component:w}),r.a.createElement(l.a,{component:j})));o.a.render(x,document.querySelector("#root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.0d372ae5.chunk.js.map