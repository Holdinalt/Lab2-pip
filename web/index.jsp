<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE HTML>
<%--
Created by IntelliJ IDEA.
User: Holdest
Date: 04.11.2020
Time: 16:12
To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="ru">
<head>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="${pageContext.request.contextPath}/src/js/grafic.js" ></script>
    <script src="${pageContext.request.contextPath}/src/js/main.js" ></script>
    <link rel = stylesheet type="text/css" href="${pageContext.request.contextPath}/src/csss/index.css">
</head>
<body>
<header>
    <table width="100%">
        <tr>
            <td width="33%" align="center">
                    <span class = "header">P3213 Елохов Даниил
                    </span>
            </td>
            <td width="33%" align="center">
            </td>
            <td width="33%" align="center">
                    <span class = "header">Вариант: 2407
                    </span>
            </td>
        </tr>
    </table>
</header>
<div class="diagram">
    <div class="border">
        <div class="convex-plate" id="graph-plate">
            <svg id="graph-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" onclick="svgClick(event); clickSubmit()" onmousemove="svgMouth(event); validateAll()">

                <path class="graph-shape" d="M 100 150 A 50 50, 0, 0, 1, 150 100 L 150 150 Z"></path>

                <!-- square -->
                <rect class="graph-shape" height="100" width="50" x="150" y="150"></rect>

                <!-- triangle -->
                <polygon class="graph-shape" points="100,150 150,150 150,200"></polygon>

                <!-- axles -->
                <text class="graph-axle-text" x="290" y="140">x</text>
                <line class="graph-axle-line" x1="0" x2="525" y1="150" y2="150" stroke="black"></line>
                <polygon class="graph-axle-arrow" points="299,150 290,155 290,145"></polygon>

                <text class="graph-axle-text" x="160" y="10">y</text>
                <line class="graph-axle-line" x1="150" x2="150" y1="5" y2="550" stroke="black"></line>
                <polygon class="graph-axle-arrow" points="150,1 145,10 155,10"></polygon>

                <!-- points -->
                <line class="graph-point" x1="50" x2="50" y1="145" y2="155" stroke="black"></line>
                <line class="graph-point" x1="100" x2="100" y1="145" y2="155" stroke="black"></line>
                <line class="graph-point" x1="200" x2="200" y1="145" y2="155" stroke="black"></line>
                <line class="graph-point" x1="250" x2="250" y1="145" y2="155" stroke="black"></line>

                <line class="graph-point" x1="145" x2="155" y1="250" y2="250" stroke="black"></line>
                <line class="graph-point" x1="145" x2="155" y1="200" y2="200" stroke="black"></line>
                <line class="graph-point" x1="145" x2="155" y1="100" y2="100" stroke="black"></line>
                <line class="graph-point" x1="145" x2="155" y1="50" y2="50" stroke="black"></line>

                <!-- labels -->
                <text class="graph-label r-whole-neg" text-anchor="middle" x="50" y="140">-R</text>
                <text class="graph-label r-half-neg" text-anchor="middle" x="100" y="140">-R/2</text>
                <text class="graph-label r-half-pos" text-anchor="middle" x="200" y="140">R/2</text>
                <text class="graph-label r-whole-pos" text-anchor="middle" x="250" y="140">R</text>

                <text class="graph-label r-whole-neg" text-anchor="start" x="160" y="255">-R</text>
                <text class="graph-label r-half-neg" text-anchor="start" x="160" y="205">-R/2</text>
                <text class="graph-label r-half-pos" text-anchor="start" x="160" y="105">R/2</text>
                <text class="graph-label r-whole-pos" text-anchor="start" x="160" y="55">R</text>
                <g id="points">
                    <circle cx="150" cy="150" r="4" id="cursorDot" fill-opacity="0"></circle>
                </g>
            </svg>
        </div>
    </div>
</div>
<div class="mainForm">
    <div class="border" style="height: 100%">
        <form name=myForm method="post" action="server">
            <table class="Form">
                <tr><td colspan="2"><legend>Введите координаты точки</legend></td></tr>
                <tr>
                <tr><td colspan="2"><span id="errorAns" class="errorAns"></span></td></tr>
                <tr><td colspan="2"><span id="errorAns2" class="errorAns"></span></td></tr>
                <tr>
                    <td><div style="width: 120px">Изменение Х:</div></td>
                    <td><div style="width: 400px">
                        <select name="selectX" id="selectX" onchange="validateAll()">
                            <option value="-3" selected="selected">-3</option>
                            <option value="-2">-2</option>
                            <option value="-1">-1</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>Изменение Y:</td>
                    <td>
                        <label >(-3 ... 5) <input required id="formTextY"  name="formTextY"  type="text" onkeydown="antiEnter(event);" onkeyup="validateAll()"></label>
                    </td>
                </tr>
                <tr>
                    <td>Изменение R:</td>
                    <td>
                        <select id="selectR" name="selectR" onchange="resetR(); validateAll()">
                            <option value="1" selected="selected">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <label >Подтвердить: <button type="submit" name="submit" id=submitFormButton onmouseenter="validateAll()">Отправить</button></label>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" id="answer">
                    </td>
                    <td></td>
                </tr>
            </table>
        </form>
    </div>
</div>
<div class="answerTable">
    <div class="mainAns">
        <table class="formAns" id="prevAns" >
            <thead>
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Area hit</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach var="hitResult" items="${sessionScope.hitResultStorage.hitResultList}">
                <tr>
                    <td>${hitResult.x}</td>
                    <td>${hitResult.y}</td>
                    <td>${hitResult.r}</td>
                    <td>${hitResult.isHitted() ? "Yes" : "No"}</td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
</div>
</body>
</html>
