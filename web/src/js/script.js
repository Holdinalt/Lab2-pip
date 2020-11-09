import Values from './values';
import Graph from './graphic';
import Validator from './validator';
import Results from './modules/results';
import matcher from './plugins/matcher.jquery';
import validity from './plugins/validity.jquery';

import {loadSession, storeSession} from './modules/session';

$.fn.matcher = matcher;
$.fn.validity = validity;

const URL = 'server';

$(() => {
    const $body = $('body');

    const $inputForm = $('#input-from');
    const $submitButton = $('#submit-button');

    const $xSelect = $('#selectX');
    const $yText = $('#formTextY');
    const $rSelect = $('#selectR');

    const values = new Values({$xSelect, $yText, $rSelect});

    const $graphSvg = $('#graph-svg');

    const SCALE_X = $graphSvg.attr('viewBox').split(' ')[2] / $graphSvg.width();
    const SCALE_Y = $graphSvg.attr('viewBox').split(' ')[3] / $graphSvg.height();

    const graph = new Graph({
        $graphSvg,
        $rHalfPos: $('.r-half-pos'),
        $rWholePos: $('.r-whole-pos'),
        $rHalfNeg: $('.r-half-neg'),
        $rWholeNeg: $('.r-whole-neg'),
        xValues: $xSelect.children('option'),
    });

    const results = new Results({
        resultsTableSelector: '#results-plate > table',
        $noDataYetText: $('#results-plate > span:first-of-type'),
    });

    results.setLabel();

    $yText.matcher(/^[+-]?\d*?[.,]?\d*?$/);

    $rText.matcher(/^\+?\d*?[.,]?\d*?$/);

    $graphSvg.mouseleave(() => {
        $rText.keyup();
        $xSelect.change();
        $yText.keyup();
        graph.hideError();
    });

    $graphSvg.mousemove((event) => {
        const offset = $graphSvg.offset();
        graph.drawXLine((event.pageX - offset.left) * SCALE_X);
        graph.drawYLine((event.pageY - offset.top) * SCALE_Y);
    });

    $graphSvg.click(() => {
        $xSelect.validity('');
        $yText.validity('');

        if (Validator.c(values.getRValue())) {
            graph.valuesToForm({$xSelect, $yText, $rText});
            $submitButton.click();
        }
    });

    $xSelect.change(() => {
        const xValue = values.getXValue();
        if (Validator.checkX(xValue)) $xSelect.validity('');
        graph.setXValue(xValue);
    });

    $yText.keyup(() => {
        const yValue = values.getYValue();
        if (Validator.checkY(yValue)) $yText.validity('');
        graph.setYValue(yValue);
    });

    $rSelect.change(() => {
        const rValue = values.getRValue();
        if (Validator.checkX(rValue)) $rSelect.validity('');
        graph.setRValue(rValue);
    });

    $submitButton.click(() => {
        results.hideError();

        const xValue = values.getXValue();
        const yValue = values.getYValue();
        const rValue = values.getRValue();

        if (!Validator.validate(
            xValue, yValue, rValue
        )) return false;
    });

    loadSession({$xSelect, $yText, $rText, $body});
    graph.setLastResult(results.getLastResult());

    $(window).bind('beforeunload', () => storeSession({
        xValue: values.getXValue(),
        yValue: values.getYValue(),
        rValue: values.getRValue(),
        theme: $body.attr('class'),
    }));

    const trim = (str) =>{
        str = str.trim(" ");
        str.replace(',', '.');
        return str
    }
});