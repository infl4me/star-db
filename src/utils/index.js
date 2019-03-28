export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const compose = (...funcs) => Component => (
  funcs.reduceRight((acc, fn) => fn(acc), Component)
);
