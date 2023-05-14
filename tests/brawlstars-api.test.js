const { getPlayer } = require('../src/api/brawlstars-api');

describe('See if all the services used is online', () => {
    it('GET /v1/players/#2QPVJ099C - Should return one player', async () => {

        const playerTag = '#2QPVJ099C';
        return getPlayer(playerTag).then((data) => {

          data.forEach((post) => {
            expect(post).toEqual(
              expect.objectContaining({playerTag})
            );
          });

        });

        // expect().toThrow('Request failed with status code 403')
        // // expect(response.statusCode).toEqual(403);
    })
})

