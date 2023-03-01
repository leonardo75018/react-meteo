import  {useState} from 'react'
import './App.css';
import Time from './Components/Time/Time';
import Report from './Components/WeatherReport/Report';


function App() {

   const apiKey = "07c39328eb134ed3add233858230602";

  const [query, setQuery] = useState('');
  const  [meteo, setMeteo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
 

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch =  async (event) => {
    event.preventDefault();

     if(!query.trim()){
      return console.log("champ  vide")
     }
     fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`)
     .then(response  => response.json())
     .then((data) => {
      setMeteo(data);
      setIsLoading(false);
    });
  };


  return (
    <div className="App">
       <h1>React Weather  App</h1>
     <section>
     <p>Entrer la localisation</p>
      <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Rechercher..."
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit">Rechercher</button>
    </form>
     </section>
      <Report  {...meteo} isLoading={isLoading}  /> 
      <Time {...meteo} />
    </div>
  );
}

export default App;
