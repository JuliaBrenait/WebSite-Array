var objects = ['Chair', 'Printer', 'Fork'];

function add(){
    //  recovery or value entered in the object id fiel
    var valor_campo= document.getElementById('input').value 

    //if you have any value entered enter the 'if'
    if(objects !=''){
       
    if(objects.indexOf(valor_campo) !== 0){
        alert('This item has been add')
    } else{
        objects.push(valor_campo)
        document.write(objects)

        document.getElementById('input').value=''
    }


    }else{
        alert('Ops! Please enter a valid amount :(')
        document.getElementById('input').value = ''
    
    }
};


//Puts the array in order
function order(){

    objects.sort()
    console.log(objects)

    document.getElementById('input').value = ''
};