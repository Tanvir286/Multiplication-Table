








let namtaNumber = 7;
  
let ignor = 5;

for(i=1;i<=namtaNumber;i++){

    
    if(i != ignor){

        console.log("===========================");
        console.log(`${i} Multiplecation start`);
        console.log("===========================");

        for(j=1;j<=10;j++){
            if((i*j) % 2 == 0){
                console.log(i+"X"+j +"="+i*j+'Even');
            } else{
                console.log(i+"X"+j +"="+i*j+'odd');
            } 
            
         }

       console.log("==========================");
       console.log(`${i} Multiplecation end`);
       console.log("===========================");
    }
     else{
        console.log("===========================");
        console.log(`${i} is missing here`);
        console.log("===========================");
     }
        
 } 
 





