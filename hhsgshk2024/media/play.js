document.addEventListener('DOMContentLoaded', function () {
    // URLからidパラメータの値を取得
    const urlParams = new URLSearchParams(window.location.search);
    const jsonId = urlParams.get('id');

    // JSONデータのURLを構築
    const jsonUrl = `/hhsgshk2024/media/data/db.json`;

    // Fetch APIを使用してJSONデータを取得
    fetch(jsonUrl)
        .then(response => response.json())
        .then(dataArray => {
            // 対応するidのJSONデータを検索
            const jsonData = dataArray.find(item => item.id == jsonId);

            if (jsonData) {
                // 取得したJSONデータを表示
                displayJSON(jsonData);
            } else {
                console.error('JSON data not found for id:', jsonId);
            }
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });

    function displayJSON(jsonData) {
        // HTMLに表示するための要素を取得
        const contentDiv = document.getElementById('content');

        // JSONデータを表示するHTMLを構築
        const html = `
            <title>${jsonData.title}</title>
            <h2>${jsonData.title}</h2>
            <br>
            <h3>説明</h3>
            <p>${jsonData.data.description}</p>
            <h3>発表者の情報</h3>
            <p>${jsonData.data.grade}年${jsonData.data.class}組 ${jsonData.data.name}</p>
            <p style="text-align: right;">${jsonData.data.field}を通じて学習しました。</p>
            <!-- Video Embedding -->
            <video width="100%" height="auto" controls inline poster="/hhsgshk2024/media/data/poster.png">
                <source src="/hhsgshk2024/media/data/${jsonId}.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;

        // HTMLを要素に挿入
        contentDiv.innerHTML = html;
    }
});