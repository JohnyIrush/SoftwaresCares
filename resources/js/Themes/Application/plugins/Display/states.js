export default class States {
    constructor(defaultValue,newValue){

        //Default states Values of application
        this.Default = localStorage.getItem('Default') ? localStorage.getItem('Default') :defaultValue;
        this.New = localStorage.getItem('New') ? localStorage.getItem('New') : newValue;
        
    
    }

    //set default States
    setDefault(){
        return this.Default;
    }
    
    //change state from Default to new
    defaulToNew(){
        //alert('New')
        localStorage.setItem('Default',false);
        localStorage.setItem('New',true);
    }
    //change state from  new to Default 
    newToDefault(){
        //alert('Default')
        localStorage.setItem('New',false);
        localStorage.setItem('Default',true);
    }

    //
    returnStateOne(){
        return this.Default;
    }

    returnStateTwo(){
        return this.New;
    }


}
