import { useState } from "react";
import { Transition } from "react-transition-group";

const TransitionComp = () => {

  const [show , setShow] = useState(false);

  return (
 
    <>
      <Transition
      in = {show}
      timeout={2000}

      >
        { state => 
        // will be 4 states - entering , entered , exiting , exited

        // can be either
        // square-entering , square-entered , square-exiting , square-exited
          <div className={`square square-${state}`}>
            {`square square-${state}`}
          </div>
        }
      </Transition>
    <hr />
    <button className="btn btn-primary" onClick={()=> setShow(!show)}Show>Toggle</button>
    </>

  )
};

export default TransitionComp;