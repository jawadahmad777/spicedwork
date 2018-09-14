var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var story = {
    q: "Are you ready ?",
    answers: {
        yes: {
            q: "You have a bug in the code: try or giveUp",
            answers: {
                try: {
                    q: "How many try will you give to it?",
                    answer: "Keep going you can do it!"
                },
                giveUp: "come on!!!"
            }
        },
        no: "Then...what are you doing here...."
    }
};

function game(story) {
    rl.question(story.q, function(answer) {
        if (answer === "yes") {
            rl.question(story.answers.yes.q, function(answer2) {
                if (answer2 === "try") {
                    rl.question(story.answers.yes.answers.try.q, function(
                        answer3
                    ) {
                        console.log(story.answers.yes.answers.try.answer);
                    });
                } else if (answer2 === "giveUp") {
                    console.log(story.answers.yes.answers.giveUp);
                } else {
                    console.log("No Way!!!!");
                    rl.close();
                }
            });
        } else if (answer === "no") {
            console.log(story.answers.no);
        } else {
            console.log("Why!!!!");
            rl.close();
        }
    });
}
game(story);
