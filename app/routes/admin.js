module.exports = (app) => {
    app.get('/form_inclusao_noticia', (req, res) => {
        res.render("admin/form_add_noticia")
    })
    app.post('/noticias/salvar', (req, res) => {
        var noticias = req.body;
        res.send(noticias);
    })
}