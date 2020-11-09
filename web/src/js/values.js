export default class Values {
    #$xSelect;
    #$yText;
    #$rSelect;

    constructor({$xSelect, $yText, $rSelect}) {
        this.#$xSelect = $xSelect;
        this.#$yText = $yText;
        this.#$rSelect = $rSelect;
    }

    getXValue = () => {
        return this.#$xSelect.val();
    };

    getYValue = () => {
        return this.#$yText.val();
    };

    getRValue = () => {
        return this.#$rSelect.val();
    };
}