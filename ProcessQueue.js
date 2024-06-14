export function getFinalState(baseState, queue){
    let finalState = baseState;
  
    // TODO: do something with the queue...
    for(let ele of queue)
    {
      if(ele instanceof Object)
      {
        finalState=ele(finalState);
      }
      else
      {
        finalState=ele;
      }
    }
    return finalState;
}
  
/*
Base state: 0

Queue: [1, 1, 1]

Expected result: 1

Your result: 1 (correct)

Base state: 0

Queue: [n => n+1, n => n+1, n => n+1]

Expected result: 3

Your result: 3 (correct)

Base state: 0

Queue: [5, n => n+1]

Expected result: 6

Your result: 6 (correct)

Base state: 0

Queue: [5, n => n+1, 42]

Expected result: 42

Your result: 42 (correct)
*/