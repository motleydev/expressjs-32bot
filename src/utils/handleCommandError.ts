// Error handling functions
export const handleCommandError = (err, res) => {
    console.error(err);
    res.status(500).send({ error: 'Command processing error' });
  };