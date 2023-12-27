import { useState } from 'react';
import '../App.css'

type ButtonState = 'CLICKED'|'DEFAULT' | 'WRONG';
type Choice = {
    value : string ;
    state : ButtonState;
}


function CountryCapital({data} : {data :Record<string , string>}) {

    const capitals :string[] = Object.values(data);
    const countries : string[] = Object.keys(data);
    const [choices , setChoices] = useState<Choice[]>(
       [...countries,...capitals].map((value) => ({
        value,
        state : "DEFAULT",
       }))
    );
    const [firstChoice,setFirstChoice] = useState<Choice>();

    const weGotWinner = choices.length === 0 ;

    const  handleButtonClick =  (choice : Choice) => {
          if(!handleSelected(choice)){
         
                if ( choice.state === 'DEFAULT') {
                setChoices(choices.map((ch) => {
                return choice.value === ch.value ? {
                        ...ch, state:"CLICKED", }
                        : {...ch,state:"DEFAULT"} ;
                }));
            }else if(choice.state==='CLICKED') {
                setChoices(choices.map((ch) => {
                    return choice.value === ch.value ? {
                        ...ch, state:"DEFAULT", }
                        : ch ;
                }));
            }
    }else {
        setFirstChoice(undefined);
    }
    };

    const handleSelected =  (choice : Choice) => {
        if(!firstChoice) {
           setFirstChoice(choice);
           return false;
        }else {
            if(firstChoice.value === data[choice.value] || data[firstChoice.value] === choice.value) {
              setChoices(choices.filter((choix) => {
                return !(choix.value === firstChoice.value || choix.value === choice.value) ;
              }))
            }else {
                setChoices(choices.map((choix) => {
                    return (choix.value === firstChoice.value || choix.value === choice.value) ? {
                        ...choix, state:"WRONG", }
                        : choix ;
                }));
            }
            return true ;
        }
    }

    const getButtonClass = (button : Choice) => {
        return button.state==='CLICKED' ? 'clicked' : button.state === 'WRONG' ? 'wrong' : ''
    }
    

    return (
        <>
        <div className='flexit'>
        <h1 className='title'> Guess the Capital</h1>
        {
            choices.map( (choice) => 
                (<button key={choice.value} className={getButtonClass(choice)}
                 onClick={
                    ()=>{handleButtonClick(choice)
                    }}> 
                {choice.value}
                </button>)
                )
        }
        { weGotWinner && ( 
            <h2> Congratulations !!</h2>
        )}
        </div>
        </>
    )
}

export default CountryCapital