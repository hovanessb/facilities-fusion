import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async function(event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body) as {
    name: string;
    org: string;
    email: string;
    phone: string;
    data: string;
  };

  //automatically generated snippet from the email preview
  //sends a request to an email handler for a subscribed email
  await fetch(
    `${process.env.URL}/.netlify/functions/emails/thankyou`,
    {
      headers: {
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
      },
      method: "POST",
      body: JSON.stringify({
        from: requestBody.email,
        to: "info@facilitiesfusion.com",
        subject: "Inquiry Request",
        parameters: {
          name: requestBody.name,
          org: requestBody.org,
          email: requestBody.email,
          phone: requestBody.phone,
          data: requestBody.data
        },
      }),
    }
  );

  return {
    statusCode: 200,
    body: JSON.stringify("Success!"),
  };
};

export { handler };
