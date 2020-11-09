
export default class Results {

    resultTable =  "<tr> <td>X</td><td>Y</td><td>R</td><td>Результат</td><td>Время вопроса</td><td>Время выполнения (мс)</td></tr>";

    addResult = (str) => {
        this.resultTable += str;
    }

    getResult = () =>{
        return this.resultTable;
    }

    showError = (error) => {
        $('#errorAns').innerHTML = error;
    };

    hideError = () => {
        $('#errorAns').innerHTML = '';
    };
}