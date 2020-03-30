let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
    try {
        let data = await ses.sendEmail({
            Source: "indunil+142@adroitlogic.com",
            Destination: {
                ToAddresses: ['sachithrarajapakse1992@gmail.com'],
                CcAddresses: ['indunil@adroitlogic.com']
            },
            Message: {
                Subject: {
                    Data: "hi cc"
                },
                Body: {
                    Text: {
                        Data: ""
                    }
                }
            }
        }).promise();

    } catch (err) {
        // error handling goes here
    };


    return { "message": "Successfully executed" };
};