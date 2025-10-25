import * as dotenv from 'dotenv';
import { ChatOpenAI } from '@langchain/openai';

dotenv.config({ quiet: true });

const model = new ChatOpenAI({ model: 'gpt-4.1-nano' });
(async () => {
    try {
        const response = await model.invoke('Hi');
        console.log(response.content);
    } catch (e) {
        throw new Error(String(e));
    }
})();
