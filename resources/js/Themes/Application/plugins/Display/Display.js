export default class Display {

      constructor(){
      }

    //change Display
    changeDisplay(stateOneClass,stateTwoClass,stateOne,stateTwo){
      if (stateOne=='true') {
        alert('one')
        $(stateOneClass).show();
        $(stateTwoClass).hide();
      }
      else if (stateTwo=='true') {
        alert('two')
        $(stateOneClass).hide();
        $(stateTwoClass).show();
      }
    }

    //hide plugin features
    hidePluginFeatures(feature){
      $(feature).hide();
    }
}