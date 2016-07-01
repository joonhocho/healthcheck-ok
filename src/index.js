export default (req, res) => {
  res.append('Cache-Control', 'no-cache, no-store, max-age=0');
  res.sendStatus(200);
};
