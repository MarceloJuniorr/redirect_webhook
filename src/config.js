import dotenv from 'dotenv';
dotenv.config();
export const config = {
    webhookUrl: process.env.WEBHOOK_URL || "" ,
    webhookUser: process.env.WEBHOOK_USER || "",
    webhookPass: process.env.WEBHOOK_PASS || "",
    port: process.env.PORT || ""
}