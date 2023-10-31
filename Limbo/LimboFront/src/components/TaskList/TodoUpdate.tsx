export default function TodoUpdate(id: string, isComplete: boolean) {
    const postData = isComplete;
      fetch(`https://localhost:49157/api/TodoItem/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // Handle the response if needed
          console.log('POST request successful');
        })
        .catch((error) => {
          // Handle errors
          console.error('POST request error', error);
        });
}