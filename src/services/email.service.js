const { Resend } = require("resend");
const logger = require("../utilities/logger");

const resend = new Resend("re_2QDCTFoV_Bd9xNHjyNyLHvv7eG4PoKMW1");
async function sendEmail(userId, tasksNearToExpire) {
  resend.emails.send({
    from: "taskmanager@resend.dev",
    to: "harshit.srivastava1608@gmail.com",
    subject: `Hello ${userId}`,
    html: `<p>Dear User These are the tasks due today: ${tasksNearToExpire}  <strong>first email</strong>!</p>`,
  });
  logger.info("Email sent successfully");
}
module.exports = sendEmail;
