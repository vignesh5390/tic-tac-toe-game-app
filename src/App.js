
import Icon from "./components/Icon";
import { useState } from "react"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getValue } from "@testing-library/user-event/dist/utils";

const tictactoeArray = new Array(9).fill("")


const App = () => {
       const [isCross, setIsCross] = useState(true)
       const [winMessage, setWinMessage] = useState("")
         
      //reset game
       function resetGame(){
        tictactoeArray.fill("")

        setIsCross(true)
        setWinMessage("")
       }
      //check for winner
       function checkIsWinner(){
        if(tictactoeArray[0] == tictactoeArray[1] && tictactoeArray[0] == tictactoeArray[2] && tictactoeArray[0] !=""){
            setWinMessage(tictactoeArray[0] + "has won")
        }
         else if(tictactoeArray[3] == tictactoeArray[4] && tictactoeArray[3] == tictactoeArray[5] && tictactoeArray[3] !=""){
            setWinMessage(tictactoeArray[3] + "has won")
        }
         else if(tictactoeArray[6] == tictactoeArray[7] && tictactoeArray[6] == tictactoeArray[8] && tictactoeArray[6] !=""){
            setWinMessage(tictactoeArray[6] + "has won")
        }
         else if(tictactoeArray[0] == tictactoeArray[3] && tictactoeArray[0] == tictactoeArray[6] && tictactoeArray[0] !=""){
            setWinMessage(tictactoeArray[0] + "has won")
        }
         else if(tictactoeArray[1] == tictactoeArray[4] && tictactoeArray[1] == tictactoeArray[7] && tictactoeArray[1] !=""){
            setWinMessage(tictactoeArray[1] + "has won")
        }
         else if(tictactoeArray[2] == tictactoeArray[5] && tictactoeArray[2] == tictactoeArray[8] && tictactoeArray[2] !=""){
            setWinMessage(tictactoeArray[2] + "has won")
        }
         else if(tictactoeArray[0] == tictactoeArray[4] && tictactoeArray[0] == tictactoeArray[8] && tictactoeArray[0] !=""){
            setWinMessage(tictactoeArray[0] + "has won")
        }
         else if(tictactoeArray[2] == tictactoeArray[4] && tictactoeArray[2] == tictactoeArray[6] && tictactoeArray[2] !=""){
            setWinMessage(tictactoeArray[2] + "has won")
        }

       }

     //playGame
     function playGame(index){
        if(winMessage){
                return toast("game has alredy got over")
            }
        else if(tictactoeArray[index] !=""){
           return toast( "Aleardy filled")
        }
        else{
            tictactoeArray[index] = isCross == true? "cross" : "circle"
            setIsCross(!isCross)
        }
        checkIsWinner()

     }
    
return (
        <div className="header"> 
        <ToastContainer position="bottom-center"/>
            <h1>Lets play  Tic Toc Toe Game</h1>
            {winMessage?(
                <div className="header-message">
                    <h2>{winMessage}</h2>
                    <button onClick={resetGame}>Play Again</button>
                </div>
            ):(
                <h2> {isCross==true?"Cross":"circle"}'s turn</h2>
            )}
            <div className="container">
                { tictactoeArray.map( (value, index)=>(<div className="item1" onClick={()=>playGame(index)}>
                    <Icon icon={value}/>
                </div>
                ))} 
                
                 
            </div>
            
        </div>
    )
}
export default App