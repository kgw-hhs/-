        // JSONデータが提供されるURL
        var jsonUrl = "/hhsgshk2024/media/data/db.json";

        // HTMLにデータを表示するための処理
        $.getJSON(jsonUrl, function(jsonData) {
            jsonData.forEach(function(item) {
                var divId = item.id.toString();
                var div = document.getElementById(divId);

                var htmlContent = "<a href='play?id=" + item.id + "'><h2>" + item.title + "</h2>";
                htmlContent += "<p style='text-align: right;'>" + item.data.grade + "年" + item.data.class + "組" + item.data.name + "</p>";
                htmlContent += "<p class='excerpt'>" + item.data.excerpt + "</p>";
                htmlContent += "<p style='text-align: right;'>" + item.data.field + "</p></a>";

                div.innerHTML = htmlContent;
            });
        });