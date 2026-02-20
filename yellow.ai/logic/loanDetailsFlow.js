async function getLoanDetails(loan_id) {

    const response = await fetch(
        `https://your-beeceptor-url/loanDetails?loan_id=${loan_id}`
    );

    return response.json();
}

function formatLoanDetails(data) {

    return `
Loan Type: ${data.type}
Tenure: ${data.tenure}
Interest Rate: ${data.interest_rate}
Outstanding: ${data.outstanding_amount}
EMI: ${data.emi_amount}
Next Due Date: ${data.next_due_date}
`;
}

module.exports = { getLoanDetails, formatLoanDetails };