
import './App.css'
import CountryCapital from './components/CountryCapital'

function App() {
 

  return (
    <>
    <div className='container'>
     <CountryCapital data={{ Morocco: "Rabat", France :"Paris"}} />
     </div>
    </>
  )
}

export default App
