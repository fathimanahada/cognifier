import axios from 'axios';

  
    const response = await axios.post(
      'https://simple-chatgpt-api.p.rapidapi.com/ask',
      {question: props.route.params},
      {
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key':
            '78803b9923msh143d229a7125b9ep1592cejsn96e26d98eb80',
          'X-RapidAPI-Host': 'simple-chatgpt-api.p.rapidapi.com',
        },
      },
    );
  
/*const options = {
  method: 'POST',
  url: 'https://simple-chatgpt-api.p.rapidapi.com/ask',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'a102072cfcmsh4eaef88ea0952e1p1f818ejsna52f2406074c',
    'X-RapidAPI-Host': 'simple-chatgpt-api.p.rapidapi.com'
  },
  data: ' (message)=>{\n\n\n\n{\n    "question": message\n}\n}'
};*/

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}