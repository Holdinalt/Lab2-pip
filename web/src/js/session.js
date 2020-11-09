const X_VALUE_KEY = 'x-value';
const Y_VALUE_KEY = 'y-value';
const R_VALUE_KEY = 'r-value';

const saveItem = (key, value) => {
    value == null
        ? sessionStorage.removeItem(key)
        : sessionStorage.setItem(key, String(value));
};

export const storeSession = ({xValue, yValue, rValue}) => {
    saveItem(X_VALUE_KEY, xValue);
    saveItem(Y_VALUE_KEY, yValue);
    saveItem(R_VALUE_KEY, rValue);
};

export const loadSession = ({$xSelect, $yText, $rText}) => {
    const rValue = sessionStorage.getItem(R_VALUE_KEY);
    const xValue = sessionStorage.getItem(X_VALUE_KEY);
    const yValue = sessionStorage.getItem(Y_VALUE_KEY);

    if (rValue != null) $rText.val(rValue).keyup();
    if (xValue != null) $xSelect.val(xValue).change();
    if (yValue != null) $yText.val(yValue).keyup();
};

export const getResults = () => {
    const storage = sessionStorage.getItem("results");
    return storage;
}