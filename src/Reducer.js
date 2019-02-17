const reducer = (gila = {}, action) => {

	switch (action.type) {
	      case 'HELLO_REACT':
	        return { ...gila, say : 'Hello World Redux'  };
	      case 'HELLO_REACTT':
	        return { ...gila, say : 'Hello World Gila'  };
	      default:
	        return gila;

	    }
    
  };
  
  export default reducer;

  //Reducers specify how the application's state changes in response to actions sent to the store.
  // Remember that actions only describe what happened, 
  //but don't describe how the application's state changes.