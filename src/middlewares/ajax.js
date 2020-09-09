export default ({ dispatch }) => (next) => (action) => {
  const { payload } = action;
  if (!payload || !payload.then) {
    return next(action);
  }
  payload.then((resp) => {
    const newAction = { ...action, payload: resp };
    next(newAction);
  });
};
