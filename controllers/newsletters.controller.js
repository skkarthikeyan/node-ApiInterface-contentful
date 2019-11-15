const newsLetterService = require('./../services/newsletters.service');

export const getNewsLetters = async (req, res) => {
    const getNewsLetters = await newsLetterService.getNewsLetters();
    res.send(getNewsLetters);
}