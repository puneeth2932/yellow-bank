

function projectLoanData(apiResponse) {

    const optimized = apiResponse.loans.map(loan => ({
        loan_id: loan.loan_id,
        type: loan.type,
        tenure: loan.tenure
    }));

    return optimized;
}

module.exports = { projectLoanData };