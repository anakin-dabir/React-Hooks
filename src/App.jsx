import { useEffect, useState } from 'react';
import { Next } from './next';
import { Asynx } from './Asyncx';
import { Theme } from './Theme';
import Ref from './Ref';
import ThemeComponent from './ThemeComponent';
import Reducer from './Reducer';
import { Transition } from './Transition';
import ToDoApp from './ToDoApp';
import { CustomHook } from './CustomHook';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  // state is data or data that changes
  const [count, setCount] = useState(0);
  const [state, setState] = useState({ id: 1, theme: 'green' });
  const increment = () => {
    //setCount(count + 1);
    //setCount(count + 1); // but when are we doing this it should be doubled but not bcz count is 0
    // -> Updater Function
    setCount(prevCount => prevCount + 1); // so we use this for betterment
    //alert(count);
    // now setting an object
    // so we should use multiple states like making separete state for theme
    setState(prevState => {
      return { ...prevState, id: prevState.id + 1 }
    })
    //import {useImmer} from 'use-immer' do the same thing but directly changing state.id = e.target.value;
  }

  // useEffect
  useEffect(() => {
    console.log('hi');


    return () => console.log("cleanUp"); // it is clean up at the end of current component
  }, [])    // [] agr ye use nahi krain gay to jab b koi data change hoga to useEffect re-render hoGa
  // [] empty brackets doesn't re-render it at any change
  // [] it is dependency array depend on value it conntain when that changes it re-renders



  // useEffect(() => {

  //   window.addEventListener('resize', newF);


  // })


  return (
    <div className="container">
      <h1>React-Hooks</h1>
      <hr />

      <dl>
        <dt>1: useState</dt>
        <dd>
          <h1>{count}</h1>
          <p>{state.id} & {state.theme}</p>
          <button onClick={increment}>+</button>
        </dd>
        <br />

        <dt>2: useEffect</dt>
        <dd>
          <Next />
        </dd>
        <br />
        <dt>3: useContext</dt>
        <dd>
          <Theme>
            <ThemeComponent />
          </Theme>
        </dd>


        <br />

        <dt>4: useRef</dt>
        <dd>
          <Ref />
        </dd>

        <br />

        <dt>5: useReducer</dt>
        <dd>
          <Reducer />
        </dd>
        <br />

        <dt>6: useTransition</dt>
        <dd>
          <Transition />
        </dd>

        <hr />
        <section>
          <Asynx />
        </section>


        <hr />
        <section>
          <ToDoApp />
        </section>
        <hr />
        <section>
          <CustomHook />
        </section>





      </dl>

    </div>



  )
}

export default App
