  module.exports = function check(str, bracketsConfig) {

    stack = [];
    flag = true;
    for (var i = 0; i < str.length; i ++) {
      var char = str[i];
      for (var j = 0; j < bracketsConfig.length; j ++) {
        if (char == bracketsConfig[j][0]) {
          stack.push(char);
        } else if (char == bracketsConfig[j][1]) {
          if (typeof stack == 'undefined' && stack.length == 0) {
            return false;
          } else if (stack[stack.length - 1] == bracketsConfig[j][0]) {
            stack.pop();
          
          }
        }
      }
        if (stack[stack.length-1] == stack[stack.length-2]) {
          stack.pop();
          stack.pop();
        }
    }
    if (typeof stack !== 'undefined' && stack.length > 0) {
        return false;
    }
    return flag;
}
