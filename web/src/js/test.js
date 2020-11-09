    var X = 0;
    var Y = 0;
    var R = 0;
    var posX = 0;
    var posY = 0;

   function svgClick(event) {
        let target = event.currentTarget.getBoundingClientRect();
        let x = event.clientX - target.left;
        let y = event.clientY - target.top;
        setNewCircle(x/2 , y/2)
    }

    function svgMouth(event){
        let target = event.currentTarget.getBoundingClientRect();
        let x = event.clientX - target.left;
        let y = event.clientY - target.top;
        drawCircle(x/2, y/2);
        if(x < 0) x = 0;
        if(y < 0) y = 0;
        this.posX = x - 300;
        this.posY = 300 - y;
        this.R = $("#selectR").val();
        x = makeX(this.posX);
        y = makeY(this.posY);
        $("#selectX").val(x);
        $("#formTextY").val(y);
        $('#answer').html( x + ', ' + y);
    }


    function makeX(xps){
        let rawX = (xps / (200/this.R));
        let x = Math.trunc(rawX);
        if(rawX * 10 % 10 > 5) x += Number(1);
        if(x < -3) x = -3;
        if(x > 5) x = 5;
        return x
    }

    function makeY(yps){
        let y = yps / (200/ this.R);
        if(y < -3) y = -3;
        if(y > 5) y = 5;
        return y
    }

    function drawCircle(xps, yps){
        xps = clipX(xps);
        yps = clipY(yps);
        $('#cursorDot').attr("fill", "red");
        $('#cursorDot').attr("cx",xps);
        $('#cursorDot').attr("cy", yps);
        $('#cursorDot').attr("fill-opacity", "1");
    }

    function clipX(xps){
        let clipx = xps - 150;
        let koef = clipx / (100 / R);
        let clepp =  Math.trunc(koef);
        if(Math.abs(koef) * 10 % 10 > 5){
            if(koef < 0){
                clepp -= Number(1);
            }else{
                clepp += Number(1);
            }
        }
        if(clepp < -3) clepp = -3;
        if(clepp > 5) clepp = 5;
        return  clepp * (100 / R) + 150
    }

    function clipY(yps){
        let clipy = yps - 150;
        let koef = clipy / (100 / R); //scale
        let clepp =  Math.trunc(koef);
        if(koef * 10 % 10 > 1) clepp += Number(1);
        if(clepp < -4) return -5 * (100 / R) + 150;
        if(clepp > 3) return 3 * (100 / R) + 150;
        return yps
    }

    function setNewCircle(px, py){
        px = clipX(px);
        py = clipY(py);
        document.getElementById("points").appendChild(makeSVGEl("circle", {
            cx: String(px),
            cy: String(py),
            fill: "red",
            r: 4
        }));
    }

    function makeSVGEl(tag, attrs) {
        let el = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (let k in attrs) {
            el.setAttribute(k, attrs[k]);
        }
        return el;
    }

    function resetR(){
        let newR = $("#selectR").val();
        if(Number(newR) === Number(R)) return;
        $("#points").find("*").each(function (){
                let koef = newR/R;
                let newElem = $(this);
                let newcx = (newElem.attr("cx")-150)/koef+150;
                let newcy = (newElem.attr("cy")-150)/koef+150;
                newElem.attr("cx",newcx);
                newElem.attr("cy",newcy);
            })
        R = newR
    }

    function antiEnter(event){
        if(event.keyCode == 13){
            event.preventDefault();
            alert("lol")
        }
   }

