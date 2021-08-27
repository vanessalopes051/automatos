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
        var atual = this.inicial; //Estado atual vai ser igual ao estado inicial
        var i = -1; 
        while(++i<stream.length){ //Enquanto i for menor que a sentença 
            var next = this.programa[stream[i]][atual]; //O novo estado vai ser atualizado conforme a atualização da matriz
           
	//Tratamento de erro caso o o next exista então atualiza
	   if(next)
                atual = next;
            else //Senão é disparada uma mensagem de erro
                throw new Error("Estado de saída desconhecido para {" //
                + stream[i] + "," + atual + "}");
        }

	//Ele pega o tamanho do array de estados finais
        i = this.finais.length; 

/*O while executa enquanto é verdadeiro, ou sejam qualquer número que não seja 0.
 Quando chega em zero considera como false e portanto o laço deve ser encerrado.*/

       while(i--)//Vai decrementar até atingir falso
           if(atual == this.finais[i]) //Se o ultimo estado for igual ao estado final então ele retorna verdadeiro
                return true
       return false;

	/*Esse while vai decrementar até atingir 0, caso atinja 0 sem que a condição interna seja satisfeita ele retorna falso.
	Ou seja, a cadeia não foi aceita*/
    }
};