const SuccessResponse = (message, data = {}) => {
  return {
    status: "success",
    message,
    data,
  };
}
const FailureResponse = (message, data = {}) => {
  return {
    status: "failure",  
    message,
    data,
  };
}  