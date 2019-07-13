export const fetchGet = (body) => {
  return fetch('http://localhost:9200/job_board/_search', {
    method: 'POST',
    body: JSON.stringify(
      body
    ),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(res => res.json())
};