document.addEventListener('DOMContentLoaded', function () {
    // URLからパラメータを取得
    const urlParams = new URLSearchParams(window.location.search);
    const passParam = urlParams.get('pass');

    // パラメータが空の場合にリダイレクト
    if (passParam === '') {
        const redirectUrl = 'mobile?pass=error&error=empty';
        window.location.href = redirectUrl;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // URLからパラメータを取得
    const urlParams = new URLSearchParams(window.location.search);
    const passParam = urlParams.get('pass');

    // パラメータが任意の値で、かつ pass=error でない場合にリダイレクト
    if (passParam !== null && passParam !== '' && passParam !== 'error') {
        const redirectUrl = 'mobile?pass=error&error=error';
        window.location.href = redirectUrl;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the error query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const errorParam = urlParams.get("error");

    // Show the corresponding error message
    if (errorParam === "error") {
        showError();
    } else if (errorParam === "empty") {
        showEmpty();
    }
});

function showError() {
    // Display the error message and add the 'error' class
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
}

function showEmpty() {
    // Display the empty message and add the 'empty' class
    const emptyMessage = document.getElementById("empty-message");
    emptyMessage.style.display = "block";
}

function validateForm() {
    // Additional form validation logic goes here
    // You can return false to prevent the form submission if needed
    return true;
}
