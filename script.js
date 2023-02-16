//Gathering elements

const user_Content = document.getElementById("user_content");
const submit_btn = document.querySelector(".submit-btn");

const clipboard_btn = document.querySelector(".copy_btn");

submit_btn.addEventListener("click", () =>{
    // alert("demo");
    document.execCommand("copy");
    alert("Content Copied to Clipboard Successfully");
    const copiedcontent = document.getElementById("user_content").value;
    clipboard_btn.innerHTML = copiedcontent;
    
});