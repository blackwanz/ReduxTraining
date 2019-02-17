import React from 'react'
import { connect } from 'react-redux'
import { saayHello, sayHelloo } from './ActionCreator'

let Button = ({ whatsUp, stateObject, saaySomething,}) => (

<div >
    <button onClick={saaySomething}>
        PRESS TO DISPATCH FIRST ACTION
    </button>
    <h2>{whatsUp}</h2>
  </div>
)

const mapStateToProps = (state) => ({
  whatsUp: state.say,
  stateObject: state
})

const mapDispatchToProps = (dispatch) => ({
   saaySomething: () => { dispatch(saayHello())}	
})



Button = connect(mapStateToProps,mapDispatchToProps)(Button)
export default Button;



/* mapState lets components get data from the redux store
mapDispatch lets components dispatch actions to update the store
connect handles the work of talking to the store for you,
 so you don't have to write that yourself every time */ 