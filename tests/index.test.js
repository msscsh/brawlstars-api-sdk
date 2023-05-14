const index = require('../src/index')
test('Can create a brawler object', () => {
    const brawler = index.getPlayer();
    expect(brawler).toBeUndefined();
})
  