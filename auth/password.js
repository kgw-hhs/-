function redirect() {
    var passwordInput = document.getElementById('password').value;
    var redirectURL = 'login?pass=' + encodeURIComponent(passwordInput);

    // パスワードの検証はサーバーサイドで行うべきですが、ここでは簡単な例として設定しています。
    var predefinedPassword = 'password';

    if (passwordInput === predefinedPassword) {
        // パスワードが一致する場合は指定のページにリダイレクト
        window.location.href = 'redirect';
    } else {
        // パスワードが一致しない場合は、入力値を含んだURLにリダイレクト
        window.location.href = redirectURL;
    }
}
