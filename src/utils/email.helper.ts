const mailgun = require("mailgun-js");

export default {
  SendEmail: async (data: any): Promise<any> => {
    try {
      const mg = mailgun({
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN,
      });
      await mg.messages().send(data);
    } catch (error) {}
  },
};
