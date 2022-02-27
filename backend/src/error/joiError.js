module.exports = (schema, object) => {
  const { error } = schema.validate(object);
  if (error) {
    throw error;
  }
};