console.log("Please enter a number: ")
var num1 = 5

console.log("Please enter a number: ")
var num2 = 10
		
var answer = getGCF(num1,num2)
		console.log(answer);		
		
function getGCF(num1,num2){
    
    var gcf = -1;
	for(var i = num1 ; i>0 ; i--){
	    var remainder = num1 % i; 
		    	
    	if(remainder == 0){
		    var remainder2 = num2 % i;
		    if(remainder2 == 0){
		    	gcf =i;
		    	break;
		}

	 }
		}
		 return gcf;
	}
