function CitySelector({ onSelect }) {
  return (
    <select
      onChange={(e) => onSelect(JSON.parse(e.target.value))}
      style={{ padding: "0.5rem", margin: "1rem 0" }}
    >
      <option value="">Select a city</option>
      <option value='{"name":"Riga","lat":56.9496,"lon":24.1052}'>
        Riga
      </option>
      <option value='{"name":"Berlin","lat":52.52,"lon":13.405}'>
        Berlin
      </option>
      <option value='{"name":"London","lat":51.5072,"lon":-0.1276}'>
        London
      </option>
    </select>
  );
}

export default CitySelector;
