const React = require('react');

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;

   
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
      <div>
        <h1 style={{ color: 'White', backgroundColor: 'Green' }}>
          See All The Pokemon!
        </h1>
        <ul>
          {pokemon.map((poke, index) => (
            <li key={index}>{capitalize(poke.name)}</li>
          ))}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
