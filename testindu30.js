let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
    try {
        let data = await ses.sendEmail({
            Source: "indunil+142@adroitlogic.com",
            Destination: {
                ToAddresses: ['sachithrarajapakse1992@gmail.com'],
                BccAddresses: ['indunil@adroitlogic.com']
            },
            Message: {
                Subject: {
                    Data: "hi bcc"
                },
                Body: {
                    Text: {
                        Data: "bcc"
                    }
                }
            }
        }).promise();

    } catch (err) {
        // error handling goes here
    };


    return { "message": "Successfully executed:bcc" };
};