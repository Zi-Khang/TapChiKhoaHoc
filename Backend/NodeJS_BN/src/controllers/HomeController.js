
const printHelloWorld = (req, res) =>
{
    res.render('home.ejs');
}

const printHelloWorldH1 = (req, res) =>
{
    res.send('<h1>Hello World</h1>');
}

const loadSample = (req, res) =>
{
    res.render('sample.ejs');
}

module.exports = {
    printHelloWorld, printHelloWorldH1, loadSample
}