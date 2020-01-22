import test from 'ava';
import varops from '.';

test('plus', (t) => {
  t.is(varops['+'](1, 10), 1 + 10);
});

test('minus', (t) => {
  t.is(varops['-'](10, 1), 10 - 1);
});

test('times', (t) => {
  t.is(varops['*'](10, 5), 10 * 5);
});

test('divide', (t) => {
  t.is(varops['/'](10, 5), (10 / 5));
});
