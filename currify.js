let currify = f => _c(f, f.length),
  _c = (func, argLen, ...args) =>
  argLen == 1
  ? arg => func(...args, arg)
  : arg => _c(func, argLen - 1, ...args, arg)