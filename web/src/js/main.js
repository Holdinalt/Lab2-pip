let xValues = [-3, -2, -1, -0, 1, 2, 3, 4, 5];
let rValues = [1, 2, 3, 4, 5];

let checkX = (xValue) => this.xValues.includes(xValue);
let checkR = (rValue) => this.rValues.includes(rValue);

function checkY(str){
    let path = /^0*((-[1-4](\.|,)[0-9]*)|([0-2](\.|,)[0-9]*)|-5(\.|,)0|3(\.|,)0|-[1-5]|[0-3])$/
    if(path.test(str)){
    }else{
        return false
    }
    console.log(str)
    return true
}

function validate(xValue, yValue, rValue){
    let flag = true;
    if(!checkX(xValue)){
        flag = false;
    }
    if(!checkY(yValue)){
        flag = false;
    }
    if(!checkR(rValue)){
        flag = false;
    }
    if(flag){
        hideError();
    }else{
        showError();
    }
    return flag;
}

function showError(error){
    $('#errorAns').innerHTML = error;
    $('#submitFormButton').removeAttr("type");
};

function hideError(){
    $('#errorAns').innerHTML = '';
    $('#submitFormButton').attr("type", "submit");
};

function validateAll(){
    let formSelectX = $("#selectX").val();
    let formTextY = $("#formTextY").val();
    let formSelectR = $("#selectR").val();
    if(validate(formSelectX, formTextY, formSelectR)){
        hideError();
    }else{
        showError("Неверные данные");
    }
}

