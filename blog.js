function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}

function addToBlog() {
}

function blogEntryHide() {
    printError("postContentErr", "");
    document.blogForm.blogText.className = "";
    document.blogForm.blogText.value = "";
    document.getElementById('blogEntry').style.display = 'none';
    document.getElementById('blogShowButton').style.display = 'inline';
}

function blogEntryShow() {
    document.getElementById('blogShowButton').style.display = 'none';
    document.getElementById('blogEntry').style.display = 'inline';
}

function blogPost() {
    var postContent = document.blogForm.blogText.value;


    if (postContent == "") {
        printError("postContentErr", "You must enter something to post");
        document.blogForm.blogText.className = "input-error";
    } else {
        blogEntryHide();
    }
}