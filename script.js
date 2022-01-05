function upper(){
    return document.getElementById('textarea').value.toUpperCase();
}

function lower(){
    return document.getElementById('textarea').value.toLowerCase();
}

function proper(){
    let text = document.getElementById('textarea').value;
    let words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(' ');
}

function sentence(){
    let text = document.getElementById('textarea').value;
    let words = text.split('. ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join('. ');
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById('upper-case').addEventListener('click', () => document.getElementById('textarea').value = upper());
document.getElementById('lower-case').addEventListener('click', () => document.getElementById('textarea').value = lower());
document.getElementById('proper-case').addEventListener('click', () => document.getElementById('textarea').value = proper());
document.getElementById('sentence-case').addEventListener('click', () => document.getElementById('textarea').value = sentence());
document.getElementById('save-text-file').addEventListener('click', () => download("text.txt", document.getElementById('textarea').value));