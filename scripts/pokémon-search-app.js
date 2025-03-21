const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const nameText = document.getElementById("pokemon-name");
const idText = document.getElementById("pokemon-id");
const weightText = document.getElementById("weight");
const heightText = document.getElementById("height");
const typesText = document.getElementById("types");
const pokemonImg = document.getElementById("img");
const hpText = document.getElementById("hp");
const attackText = document.getElementById("attack");
const defenseText = document.getElementById("defense");
const specialAttackText = document.getElementById("special-attack");
const specialDefenseText = document.getElementById("special-defense");
const speedText = document.getElementById("speed");
const specText = document.getElementById("spec");

const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
let pokemonStats = [];
let pokemonTypes = [];
let imgUrl = "";

const clear = () => {
  nameText.innerHTML = "";
  idText.innerHTML = "";
  weightText.innerHTML = "";
  heightText.innerHTML = "";
  typesText.innerHTML = "";
  pokemonImg.innerHTML = "";
  hpText.innerHTML = "";
  attackText.innerHTML = "";
  defenseText.innerHTML = "";
  specialAttackText.innerHTML = "";
  specialDefenseText.innerHTML = "";
  speedText.innerHTML = "";
}

const searchPokemon = () => {
  clear();
  fetch(`${url}${searchInput.value.toLowerCase()}`)
    .then((res) => res.json())
    .then((pokemon) => {pokemonStats = pokemon.stats;
      pokemonTypes = pokemon.types;
      imgUrl = pokemon.sprites.front_default;
      pokemonTypes.forEach(({type}) => {typesText.innerHTML += `<element class="types">${type.name.toUpperCase()}</element>`});
      nameText.innerHTML = `${pokemon.name.toUpperCase()}`;
      idText.innerHTML = `#${pokemon.id}`;
      weightText.innerHTML = `Weight: ${pokemon.weight}`;
      heightText.innerHTML = `Height: ${pokemon.height}`;
      pokemonImg.innerHTML = `<img id="sprite" src="${imgUrl}">`;
      hpText.innerHTML = `${pokemonStats[0].base_stat}`;
      attackText.innerHTML = `${pokemonStats[1].base_stat}`;
      defenseText.innerHTML = `${pokemonStats[2].base_stat}`;
      specialAttackText.innerHTML = `${pokemonStats[3].base_stat}`;
      specialDefenseText.innerHTML = `${pokemonStats[4].base_stat}`;
      speedText.innerHTML = `${pokemonStats[5].base_stat}`;
      specText.classList.remove("hide");})
    .catch((err) => {
      alert("Pokémon not found");
      console.log(err);
    });
}

searchBtn.addEventListener("click", searchPokemon);