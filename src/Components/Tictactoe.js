import React, { useEffect, useRef } from "react";
import * as p5 from "p5";

function Tictactoe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (s) => {
      let board = [['', '', ''],
                   ['', '', ''],
                   ['', '', '']];
      
      let x = 0;

      let winner = null;
      let turnCount = 0;
      
      let player1 = "X";
      let player2 = "O";

      let currentPlayer = player1;

      s.setup = () => {
        s.createCanvas(400, 400);
      }

      s.draw = () => {
        s.background(220);
        s.line(s.width / 3, 0, s.width / 3, s.height);
        s.line(s.width * 2 / 3, 0, s.width * 2 / 3, s.height);
        s.line(s.width, s.height / 3, 0, s.height / 3);
        s.line(s.width, s.height * 2 / 3, 0, s.height * 2 / 3);

        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            s.textSize(70);
            s.textAlign(s.CENTER, s.CENTER);
            s.text(board[i][j], (1 + 2 * j) * s.width / 6, (1 + 2 * i) * s.height / 6);
            s.text(String(winner), s.width/2, s.width/2);
          }
        }
      }

      

      function checkWin(){
        turnCount += 1;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if (board[i][0] == board [i][1] && board[i][1] == board[i][2] && board[i][1] != ""){ 
                    return currentPlayer;
                }
                if (board[0][i] == board [1][i] && board[1][i] == board[2][i] && board[2][i] != ""){
                    return currentPlayer;
                }
            }
        }

        if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[1][1] != ""){
            return currentPlayer;
        }
        if(board[1][1] == board[2][0] && board[2][0] == board[0][2] && board[1][1] != ""){
            return currentPlayer;
        }
        if(turnCount == 9){
            return "Tie";
        }
            
        return null;
            
         
    }

      s.mouseClicked = () => {
        let x = Math.floor(s.mouseX / (s.width / 3));
        let y = Math.floor(s.mouseY / (s.height / 3));
        if (board[y][x] == "" && winner == null){
            board[y][x] = currentPlayer;
            winner = checkWin();
            
            if(currentPlayer == "X"){
                currentPlayer = "O";
            }
            else{
                currentPlayer = "X";
            }
        }
      }

    };


    const p5Instance = new p5(sketch, canvasRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={canvasRef} />;
}

export default Tictactoe;