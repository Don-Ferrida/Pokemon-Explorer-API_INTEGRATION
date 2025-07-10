async function fetchPokemonData(name) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
  );
  if (!res.ok) throw new Error("Pokémon not found");
  return await res.json();
}

function displayPokemon(data) {
  const container = document.getElementById("resultContainer");
  const types = data.types.map((t) => t.type.name).join(", ");
  const abilities = data.abilities.map((a) => a.ability.name).join(", ");
  const height = (data.height / 10).toFixed(1);
  const weight = (data.weight / 10).toFixed(1);
  const moves = data.moves
    .slice(0, 5)
    .map((m) => m.move.name)
    .join(", ");
  const artwork = data.sprites.other["official-artwork"].front_default;

  container.innerHTML = `
    <h2>${capitalize(data.name)}</h2>
    <img src="${artwork}" alt="${data.name}" class="main-artwork" />
    <p><strong>Type:</strong> ${types}</p>
    <p><strong>Height:</strong> ${height} m</p>
    <p><strong>Weight:</strong> ${weight} kg</p>
    <p><strong>Abilities:</strong> ${abilities}</p>
    <p><strong>Moves:</strong> ${moves}</p>
  `;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

async function searchPokemon() {
  const input = document.getElementById("searchInput").value.trim();
  if (!input) return alert("Please enter a Pokémon name!");
  try {
    const data = await fetchPokemonData(input);
    displayPokemon(data);
  } catch (err) {
    document.getElementById("resultContainer").innerHTML =
      "<p>❌ Pokémon not found. Try again.</p>";
  }
}

function loadPokemon(name) {
  fetchPokemonData(name)
    .then(displayPokemon)
    .catch(() => {
      document.getElementById("resultContainer").innerHTML =
        "<p>❌ Pokémon not found.</p>";
    });
}
