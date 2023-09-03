export const handleApiError = (err, res) => {
    console.error(err);
    res.status(500).send({ error: 'API error' });
  };