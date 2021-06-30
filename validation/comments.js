const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateCommentContent(comment) {
  let errors = {};

  comment.content = validText(comment.content) ? comment.content : "";

  if (Validator.isEmpty(comment.content)) errors.message = "Content field is required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
