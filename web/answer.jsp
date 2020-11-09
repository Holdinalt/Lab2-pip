<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="models.HitResult" %>
<%
    HitResult hitResult = (HitResult) request.getAttribute("Hit-Result");
    if (hitResult == null) {
        request.setAttribute("Error-Message", "Hit result not found.");
        request.getRequestDispatcher("/error.jsp").forward(request, response);
        return;
    }
%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link rel = stylesheet type="text/css" href="${pageContext.request.contextPath}/src/csss/answer.css">
    <title>Answer</title>
</head>
<body>
<div>
    <div class="answerTable">
        <div class="mainAns">
            <table class="ansTable">
                <thead>
                <tr>
                    <th>X value</th>
                    <th>Y value</th>
                    <th>R value</th>
                    <th>Area hit</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><%=hitResult.getX()%>
                    </td>
                    <td><%=hitResult.getY()%>
                    </td>
                    <td><%=hitResult.getR()%>
                    </td>
                    <td><%=hitResult.isHitted() ? "Yes" : "No"%>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<button class="convex-button back-button" onclick="window.location.replace('index.jsp')">
    <span>⇦ main page</span>
</button>
</body>
</html>
