//importing axios;
const axios = require('axios');


//token middleware;

const tokenMiddleware = async(req, res, next) => {


    const secreteKey = "kLfcARAWYCBK5R8U";
    const consumerKey = "0Bi55WfdjjRQOplWPCYFung4gGWzn6st";
    const auth = new Buffer.from(`${consumerKey}:${secreteKey}`).toString('base64');
    await axios.get("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
            headers: {
                authorization: `Basic ${auth}`
            }
        })
        .then((response) => {
            console.log(response.data.access_token);
            token = response.data.access_token;
            next();
        })
        .catch((err) => {
            console.log(err.message);
            res.status(err.statusCode).json(err.message);
        })
}


//exporting middleware;
module.exports = {
    tokenMiddleware,
}