
// resume dowload function
document.getElementById("downloadButton").addEventListener("click", function () {
    const a = document.createElement("a");
    a.href = "./assests/Sibin Resume.pdf";
    a.target = "_blank";
    a.download = "Sibin_Resume.pdf";
    a.click();
});
