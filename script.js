function prebaraj(){
    var input = document.getElementById("vlez").value;
    var niza = ['Pero','Stanko','Vanco','Vesna','Jana','Irena'];
    
   for(var i=0;i<niza.length;i++){
        if(input == niza[i]){
            
        }
        else{
            continue;
        }
    }
    console.log("Imeto e najdeno" + " "  + input);
}