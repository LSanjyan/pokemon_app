const React = require('react');

class Show extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { id } = this.props.match.params;
    const selectedPokemon = pokemon[id];
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
      <div>
        <h1 style={{ color: 'White', backgroundColor: 'green' }}>
          Gotta Catch 'Em All
        </h1>
        <h2>{capitalize(selectedPokemon.name)}</h2>
        <img src={selectedPokemon.img} alt={selectedPokemon.name} />
        <a href="/pokemon" style={{ display: 'block' }}>
          Back
        </a>
      </div>
    );
  }
}

module.exports = Show;

