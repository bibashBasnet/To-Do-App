const testingController = (req, res) => {
    res.status(200).send('<h1>REsponse from MVC pattern</h1>')
};


module.exports = {testingController}