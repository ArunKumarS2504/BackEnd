export const reducerCallback = (oldState, callbackDispatchAction) => {
    if (callbackDispatchAction.type === "change_age") {
      return { ...oldState,
        name: oldState.name, age: callbackDispatchAction.new_age };
    } else if (callbackDispatchAction.type === "onChange_name") {
      return { ...oldState
        ,name: callbackDispatchAction.name, age: oldState.age };
    } else if (callbackDispatchAction.type === "onChange_gender") {
      return { ...oldState,
        gender: callbackDispatchAction.gender, name: oldState.name, age: oldState.age };


    } else if (callbackDispatchAction.type === "change_mail") {
      return { ...oldState,
        mail: callbackDispatchAction.mail, name: oldState.name, age: oldState.age, gender: oldState.gender };
    }
  
     else if(callbackDispatchAction.type === "change_number"){
   return {...oldState,
    number:callbackDispatchAction.number, name: oldState.name, age: oldState.age, gender: oldState.gender, mail:oldState.mail}
}

return oldState;

  };