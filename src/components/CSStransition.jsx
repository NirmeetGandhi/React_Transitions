import { useState } from 'react';
import { CSSTransition } from 'react-transition-group'

const CssTr = () => {
  let [show,setShow] = useState(false)

  const showDiv = () =>{
    setShow(!show);
  }

  return (
    <>
      <CSSTransition
        in={show}
        timeout={5000}
        // will automatically add this classname before any state updation only
        // ---------------------------
        // cssSq-enter-active
        // cssSq-enter-done
        // cssSq-exit-active
        // cssSq-exit-done
        
        classNames="cssSq"
      >
        <div className="cssSq">
            Hello
        </div>
      </CSSTransition>
      <hr/>
      <button className='btn btn-primary' onClick={showDiv}>Show</button>
    </>
  )
};
  
export default CssTr;