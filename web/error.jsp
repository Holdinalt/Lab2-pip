<%--
  Created by IntelliJ IDEA.
  User: Holdest
  Date: 07.11.2020
  Time: 21:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<%
    String message = (String) request.getAttribute("Error-Message");
    if (message == null || message.trim().isEmpty()) {
        message = "No description presented.";
    }
%>

<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta content="width=400, maximum-scale=1" name="viewport"/>
    <title>Lab 2</title>
    <link rel = stylesheet type="text/css" href="${pageContext.request.contextPath}/src/csss/error.css">
</head>
<body>
<main id="error" class="error">
    <h3 class="convex-plate">Error. <%=message%>
    </h3>
    <button class="convex-button back-button" onclick="window.location.replace('index.jsp')">
        <span>⇦ main page</span>
    </button>
</main>
</body>
</html>
