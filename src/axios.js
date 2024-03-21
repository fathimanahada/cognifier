import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://simple-chatgpt-api.p.rapidapi.com/ask',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'a102072cfcmsh4eaef88ea0952e1p1f818ejsna52f2406074c',
    'X-RapidAPI-Host': 'simple-chatgpt-api.p.rapidapi.com'
  }
};

export async function sendMsgToOpenAI(message) {
  try {
    const response = await axios.request({
      ...options,
      data: {
        question: message
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to send message to chatbot');
  }
}
