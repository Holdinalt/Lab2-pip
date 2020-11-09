export default class Validator{

    static #xValues = [-3, -2, -1, -0, 1, 2, 3, 4, 5];
    static #rValues = [1, 2, 3, 4, 5];

    static checkX = (xValue) => this.#xValues.includes(xValue);
    static checkR = (rValue) => this.#rValues.includes(rValue);

    static checkY = (str) => {
        let path = /^0*((-[1-4](\.|,)[0-9]*)|([0-2](\.|,)[0-9]*)|-5(\.|,)0|3(\.|,)0|-[1-5]|[0-3])$/
        if(path.test(str)){
        }else{
            return false
        }
        console.log(str)
        return true
    };

    static validate = (xValue, yValue, rValue) => {
        let flag = true;
        if(!this.checkX(xValue)){
            flag = false;
        }
        if(!this.checkY(yValue)){
            flag = false;
        }
        if(!this.checkR(rValue)){
            flag = false;
        }
        return flag;
    }

}