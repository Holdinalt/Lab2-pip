const $body = $('body');

const $inputForm = $('#input-from');
const $submitButton = $('#submit-button');

const $xSelect = $('#selectX');
const $yText = $('#formTextY');
const $rSelect = $('#selectR');

const $graphSvg = $('#graph-svg');

const SCALE_X = $graphSvg.attr('viewBox').split(' ')[2] / $graphSvg.width();
const SCALE_Y = $graphSvg.attr('viewBox').split(' ')[3] / $graphSvg.height();






const getPositionX = (e) => {
    let target = $graphSvg.getBoundingClientRect();
    return e.clientX - target.left;
};

const getPositionY = (e) => {
    let target = $graphSvg.getBoundingClientRect();
    return e.clientY - target.top;
};