function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}

function addToBlog(postContent) {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var ampm = 'AM';
    var text = document.createTextNode(postContent);
    var b = document.createElement('b');
    var column0 = document.createElement('div');
    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var row = document.createElement('div');
    var postTime, dateString;

    if (hour < 10) {
        hour = '0' + hour.toString();
    } else if (hour < 12) {
        hour = hour.toString();
    }
    else {
        hour -= 12;
        hour = hour.toString();
        ampm = 'PM';
    }

    if (min < 10) {
        min = '0' + min.toString();
    } else {
        min = min.toString();
    }

    if (sec < 10) {
        sec = '0' + sec.toString();
    } else {
        sec = sec.toString();
    }

    dateString = date.getFullYear().toString();
    dateString += "-";
    dateString += date.getMonth().toString();
    dateString += "-";
    dateString += date.getDate().toString();
    dateString += " ";
    dateString += hour + ':' + min + ':' + sec + ampm;
    postTime = document.createTextNode(dateString);

    column0.className = "col-2";
    column1.className = "col text-justify font-weight-normal";
    b.appendChild(postTime);
    column1.appendChild(b);
    column1.appendChild(document.createElement('br'));
    column1.appendChild(document.createElement('br'));
    column1.appendChild(text);
    column2.className = "col-2";
    row.className = "row align-items-center fix-row-margin-top";
    row.appendChild(column0);
    row.appendChild(column1);
    row.appendChild(column2);

    document.getElementById('blogPostsSpan').appendChild(row);
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
        addToBlog(postContent);
        blogEntryHide();
    }
}