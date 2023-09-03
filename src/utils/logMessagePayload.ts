// Function to log the JSON payload of the message
export const logMessagePayload = (message) => {

    /*
    * Telegram message command properties:
    * - message_id: Unique message identifier
    * - from: Sender
    * - date: Date the message was sent in Unix time
    * - chat: Conversation the message belongs to
    * - forward_from: For forwarded messages, sender of the original message
    * - forward_date: For forwarded messages, date the original message was sent
    * - reply_to_message: For replies, the original message
    * - text: For text messages, the actual UTF-8 text of the message
    * - entities: For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
    * - caption: For messages with a caption, the actual UTF-8 text of the caption
    */
  
    console.log(JSON.stringify(message));
  };