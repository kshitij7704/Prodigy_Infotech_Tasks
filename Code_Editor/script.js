const run = () => {    
    let htmlCode = document.querySelector("#html-code").value;
    let cssCode = "<style>" + document.querySelector("#css-code").value + "</style>";
    let jsCode = "<script>" + document.querySelector("#js-code").value + "</script>";
    
    let output = document.querySelector("#output").contentWindow.document;
    
    output.open();
    output.write(htmlCode + cssCode + jsCode);
    output.close();
}