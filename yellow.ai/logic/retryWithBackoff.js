async function retryWithBackoff(apiCall, retries = 3, delay = 1000) {

    try {
        return await apiCall();
    } catch (err) {
        if (retries === 0) throw err;

        await new Promise(res => setTimeout(res, delay));

        return retryWithBackoff(apiCall, retries - 1, delay * 2);
    }
}

module.exports = retryWithBackoff;