function showCSATButton() {
    return {
        text: "Please rate our chat service:",
        quickReplies: [
            { label: "Good", payload: "Good" },
            { label: "Average", payload: "Average" },
            { label: "Bad", payload: "Bad" }
        ]
    };
}

function storeCSAT(rating) {
    console.log("User CSAT:", rating);
}