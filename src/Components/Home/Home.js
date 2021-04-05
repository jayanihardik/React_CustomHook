import React from 'react'
import Button from '@material-ui/core/Button';
import useCounterHook from '../CustomHook'

const Home = () => {
  
  const counter1 = useCounterHook();
  const counter2 = useCounterHook();

  return (
    <div>
      <div className="mt-2 mb-2">
        <h1 className="ml-2">Counter 1 </h1>
        <div className="m-3">
          <h3>
            counter :  {counter1.counter}
          </h3>
        </div>
        <div className="d-flex">
          <div className="m-3">
            <Button variant="contained" onClick={counter1.handleCounterIncrement} color="primary">
              Increment
            </Button>
          </div>
          <div className="m-3">
            <Button variant="contained" onClick={counter1.handleCounterDecrement} color="secondary">
              Decrement
            </Button>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-2 mb-2">
        <h1 className="ml-2">Counter 2 </h1>
        <div className="m-3">
          <h3>
            counter :  {counter2.counter}
          </h3>
        </div>
        <div className="d-flex">
          <div className="m-3">
            <Button variant="contained" onClick={counter2.handleCounterIncrement} color="primary">
              Increment
            </Button>
          </div>
          <div className="m-3">
            <Button variant="contained" onClick={counter2.handleCounterDecrement} color="secondary">
              Decrement
           </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
