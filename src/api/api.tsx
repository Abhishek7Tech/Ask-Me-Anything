
const getAnswer = async (question:string) => {

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_OPEN_API_KEY,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt:`Answer this, ${question} ?, like a pro in shortest form possible. Two sentences maximum.`,
      max_tokens: 50,
      temperature: 0.8,
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/completions",
      requestOptions
    );
    const answer = await response.json();
    return answer;
  } catch (err) {
    console.log(err);
  }
};

export default getAnswer;
