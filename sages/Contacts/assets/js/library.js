function get(url, onSuccess, onFailure, isJson) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        var result;
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                result = isJson ? JSON.parse(xhr.responseText) : xhr.responseText;
                onSuccess(result);
            }
            else {
                onFailure(xhr);
            }
        }
    };
    xhr.send();
}