import '../App.css'

function CountryCapital({data} : {data :Record<string , string>}) {

    const capitals :string[] = Object.values(data);
    const countries : string[] = Object.keys(data);
    const buttons : string[] = [...countries , ...capitals];

    return (
        <>
        <div className='flexit'>
        <h1 className='title'> Guess the Capital</h1>
        {
            buttons.map( (button) => 
                (<button> {button}</button>)
                )
        }
        </div>
        </>
    )
}

export default CountryCapital