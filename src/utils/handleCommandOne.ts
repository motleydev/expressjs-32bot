import { handleCommandError } from "./handleCommandError";

export const handleCommandOne = async (req, res) => {
    try {
      // CommandOne logic here
      res.status(200).send({ status: 'CommandOne processed' });
    } catch (err) {
      handleCommandError(err, res);
    }
  };