
var cadeia = document.getElementById("inputText");
var btn = document.getElementById("inputBtn");

     btn.addEventListener('click', function() {
     	
            if(fsm.aceitar(cadeia.value)){
            	//alert("Válido")
            	inputText.classList.add("valido")
                btn.innerHTML="Palavra aceita!";
            }else{

            	inputText.classList.add("error")
                btn.innerHTML="Palavra recusada!";}

     })


	var fsm = {
    alfabeto : ['0','1'],
    estados : ['q0','q1','q2','q3'],
    inicial : 'q0',
    finais : ['q3'],
    programa : {
        0 : {
	q0 : "q3",
	q1 : "q2",
	q2 : "q3",
	q3 : "q3"
        },
        1 : {
	q0 : "q1",
	q3 : "q1"
        }
    },
    aceitar : function(stream){
        var atual = this.inicial;
        var i = -1; 
        while(++i<stream.length){ 
            var next = this.programa[stream[i]][atual]; 
	   if(next){
                atual = next;}
 
        }

        i = this.finais.length; 

       while(i--)
           if(atual == this.finais[i])
                return true
       return false;
    }
};
