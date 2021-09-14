function injectorsAvailable(injectors){
  var injectorsAvailable = 0;
  if(injectors.A > 0){
    injectorsAvailable +=1;
  }
  if(injectors.B > 0){
    injectorsAvailable +=1;
  }
  if(injectors.C > 0){
    injectorsAvailable +=1;
  }
  return injectorsAvailable;
}

module.exports = injectorsAvailable;