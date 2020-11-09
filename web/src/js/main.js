
function loadScripts(){
    $("#submitFormButton").click(function (event) {
        let formSelectX = $("#selectX").val();
        let formTextY = $("#formTextY").val();
        let formSelectR = $("#selectR").val();
        console.log(formSelectX)
        console.log(formTextY)
        console.log(formSelectR)
    })
}


const xInForm = {

}

const yInForm = {

    isSubmit : false,
    Str : "",



    checkStr : function (str){
        let path = /^0*((-[1-4](\.|,)[0-9]*)|([0-2](\.|,)[0-9]*)|-5(\.|,)0|3(\.|,)0|-[1-5]|[0-3])$/
        this.Str = "";
        if(path.test(str)){
        }else{
            this.makeError(" Y");
            return false
        }
        yInForm.delError();
        for (const char of str){
            if ((char === ",") || (char === ".")){
                this.Str += ".";
            }else{
                this.Str += char;
            }
        }
        console.log(this.Str)
        return this.Str
    },


    makeError : function (thing){
        let error = document.getElementById("errorAns");
        error.innerHTML = ("Введены неверные данные для " + thing.toString() );
        this.isSubmit = false;
        //buttonForm.checkSub(this.isSubmit);
    },

    delError : function (){
        let error = document.getElementById("errorAns");
        error.innerHTML = "";
        this.isSubmit = true;
        //buttonForm.checkSub(this.isSubmit);
    },

    isYSubmit : function (){
        let rad = document.getElementById("formTextY")
        if(!yInForm.checkStr(rad.value) === false){
            yInForm.delError();
            return true
        }
        buttonForm.check();
        return false
    },

    yListener : function yListener(){
        let rad = document.getElementById("formTextY")
        rad.addEventListener('input', function() {
            yInForm.isYSubmit();
        })
        $("#formTextY").keydown(function(event){
            if(event.keyCode == 13){
                event.preventDefault();
                alert("lol")
            }
        });
    },

    pop : function(str){
        str = str.replace(/^0+/, '')
        str = str.replace(/0+$/, '')
        return str
    },



}

const rInForm = {

}

const buttonForm = {

    check : function (){
        let error2 = document.getElementById("errorAns2");
        if(yInForm.isYSubmit() === true){
            error2.innerHTML = ("");
            return true
        }else{
            error2.innerHTML = ("Введены не все данные ");
            return false
        }

    },

    buttonListener : function (){
        let button = document.getElementById("submitFormButton")
        button.addEventListener("click", function (){
            if(buttonForm.check() === true){
                buttonForm.send();
            }
        })
    },

    send : function() {
            let formSelectX = $("selectX").val();
            let formTextY = yInForm.pop(yInForm.Str);
            let formSelectR = $("selectR").val();
            console.log(formSelectX)
            console.log(formTextY)
            console.log(formSelectR)
            $.ajax({
                type: 'POST',
                url: 'main.php',
                data: {
                    formRadiosX: formRadiosX,
                    formTextY: formTextY,
                    formCheckBoxesR: formBoxR,
                },
                success: function (data) {
                    $('#answer').html(data);
                }
            }).then(preveusAnsvers)
    }
}









