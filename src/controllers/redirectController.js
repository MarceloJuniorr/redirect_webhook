import axios from "axios";

export const sendToWebhookAuth = async (url, data, user, pass) => {
    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            },
            auth: {
                username: user,
                password: pass
            }
        });
        console.log('Webhook Enviado com sucesso!');
        return { status: response.status, message: 'Webhook enviado com sucesso!' };
    } catch (error) {
        if (error.response) {
            console.log('Erro ao enviar webhook');
            return { status: error.response.status, message: 'Erro ao enviar webhook!' };
        } else {
            throw error;
        }
    }
};