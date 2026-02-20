

async function triggerOTP(phone, dob) {
    const response = await fetch("https://your-beeceptor-url/triggerOTP", {
        method: "POST"
    });
    return response.json();
}



function verifyOTP(userOtp, apiOtp) {
    if (parseInt(userOtp) === parseInt(apiOtp)) {
        return true;
    }
    return false;
}



function resetAuth(session) {
    session.phone_number = null;
    session.dob = null;
    session.otp = null;
}