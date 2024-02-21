import express from "express";
import { sendToWebhookAuth } from "./controllers/redirectController.js";
import { config } from "./config.js";

export const router = express.Router();

 router.post('/*', async (req, res) => {
    const { webhookUrl, webhookUser, webhookPass } = config;
    console.log(config);
    console.log(req.body);

    try {
        const result = await sendToWebhookAuth(webhookUrl, req.body, webhookUser, webhookPass);
        res.status(result.status).send(result.message);
    } catch (error) {
        console.error('Erro ao enviar webhook:', error);
        res.status(500).send('Erro ao enviar webhook!');
    }
});
