const smashbros = require('./smashbros');

(async () => {

    await smashbros.initialize('10-12-2018-super-smash-bros-ultimate-characters-moves-type-every-character-on-the-super-smash-bros-ultimate-roster');

    let results = await smashbros.getResults(10);

})();