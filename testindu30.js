let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
    try {
        let data = await ses.sendEmail({
            Source: "sachithrarajapakse1992@gmail.com",
            Destination: {
                ToAddresses: ['indunil@adroitlogic.com', 'indunil+34@adroitlogic.com']
            },
            Message: {
                Subject: {
                    Data: "hi (to)"
                },
                Body: {
                    Text: {
                        Data: "test 1"
                    }
                }
            }
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};