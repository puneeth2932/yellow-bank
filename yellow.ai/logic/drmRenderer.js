function renderCarousel(loans) {

    return {
        type: "carousel",
        items: loans.map(loan => ({
            title: loan.type,
            description: `Tenure: ${loan.tenure}`,
            buttons: [
                {
                    label: "Select",
                    type: "postback",
                    payload: {
                        loan_id: loan.loan_id
                    }
                }
            ]
        }))
    };
}

module.exports = { renderCarousel };