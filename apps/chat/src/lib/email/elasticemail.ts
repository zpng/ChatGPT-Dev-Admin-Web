/**
 * Elastice Email sender
 */
const apiKey = process.env.ELASTICE_EMAIL_API_KEY!;
const senderEmail = process.env.ELASTICE_EMAIL_SENDER!;

export default async function sendEmail(to: string, code: string | number) {
  const params = {
    apikey: apiKey,
    from: senderEmail,
    to: to,
    subject: "[ChatGPT国内] 激活码",
    bodyHtml: `感谢您的注册，您的激活码是：${code}，祝您使用愉快~~~ ^_^`,
  };

  const formData = new FormData();
  for (const key in params) {
    // @ts-ignore
    formData.append(key, params[key]);
  }

  const response = await fetch("https://api.elasticemail.com/v2/email/send", {
    method: "POST",
    body: formData,
  });

  return response.ok;
}
