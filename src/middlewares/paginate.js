async function paginate (req, res, next) {
    let { limite = 5, pagina = 1, ordenacao = "id:1" } = req.query;

    limite = parseInt(limite);
    pagina = parseInt(pagina);

    let [campoOrdenacao, ordem] = ordenacao.split(":")

    ordem = parseInt([ordem])

    if (limite > 0 && pagina > 0) {
        const buscaResultado = await req.resultado.find()
        .sort({[campoOrdenacao] : ordem})
        .skip((pagina-1)*limite)
        .limit(limite);

        res.status(200).json(buscaResultado);
    };
};

export default paginate;