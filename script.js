let typingTimer;
let userNames;

const usernameCatcher = () => {
    let loaderPrompt = prompt("Enter your name : ", "your name here");
    userNames = loaderPrompt;
    console.log(userNames);
};

document.onload = usernameCatcher();

$("#formChat").submit(() => {
    let userResponse = $("#userResponse").val();
    $("#displayChat").append(`${userNames}:   ${userResponse}<br>`);
    $('body').scrollTop($('body')[0].scrollHeight);
    $("#userResponse").val("");
    timeoutFunction();
    return false;
});

$("#userResponse").keypress(() => {
    $("#typingPrompt").text("Typing...");
});

$("#userResponse").keyup(() => {
    clearTimeout(typingTimer);
    timeoutFunction();
});

const timeoutFunction = () => {
    typingTimer = setTimeout(() => {
        $("#typingPrompt").text("");
    }, 1000);
}

//function abc(p1,p2) {}
//(p1,p2) => {}
//const abc = (p1,p2) => {}
//const abc = function (p1,p2) {}