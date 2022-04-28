const Regex = {
  nationalcode: new RegExp(/(^\s*$)|(^[0-9]{10}$)/),
  email: new RegExp(/(^\s*$)|(^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$)/),
  mobileNumber: new RegExp(/(^\s*$)|(^09[0-9]{9}$)/),
  password: new RegExp(/(^\s*$)|(^[0-9]{6}$)/),
};

export default Regex;
