

export const calcWinner = ({arr,ox}) => {

  let turn = ox;

  (turn === 'X') ? turn = 'O' :turn = 'X';


  for(let i=0;i<arr.length;i++){

    if(i !== 0 && i !== 3 && i !== 12 && i !== 15){

      if( ( (arr[i-5] !== '') && (arr[i-5] === turn) && (arr[i+5] !== '') && (arr[i+5] === turn) && (arr[i] === turn) ) || 
          ( (arr[i-4] !== '') && (arr[i-4] === turn) && (arr[i+4] !== '') && (arr[i+4] === turn) && (arr[i] === turn) ) || 
          ( (arr[i-3] !== '') && (arr[i-3] === turn) && (arr[i+3] !== '') && (arr[i+3] === turn) && (arr[i] === turn) ) || 
          ( (arr[i-2] !== '') && (arr[i-2] === turn) && (arr[i+2] !== '') && (arr[i+2] === turn) && (arr[i] === turn) ) || 
          ( (arr[i-1] !== '') && (arr[i-1] === turn) && (arr[i+1] !== '') && (arr[i+1] === turn) && (arr[i] === turn) )  ) {
            
           return `The winner is ${arr[i]}`;

      }
    }
  }  

  if(!arr.includes("")){
    return 'The game was a draw';		
  } 

  return null;

}


