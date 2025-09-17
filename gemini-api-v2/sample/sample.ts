import {Chat} from "../src/geminiChat";

const chat = new Chat();

(async () => {
    const reply1 = await chat.ask("こんにちは");
    console.log("Gemini:", reply1);

    chat.resetSession(); // セッションをリセット
})();