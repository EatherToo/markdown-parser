import parseHead from '../../src/parser/parseTitle';

it('parse head test', () => {
  const str = '#### 1234';
  const parseRes = parseHead(str, 0);
  expect(parseRes).toEqual({
    level: 4,
    text: '1234',
  });
});
