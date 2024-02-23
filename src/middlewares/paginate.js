/* eslint-disable prefer-const */
/* eslint-disable radix */
async function paginate(req, res, next) {
  let { limite = 5, pagina = 1, ordenacao = '_id:1' } = req.query;

  limite = parseInt(limite);
  pagina = parseInt(pagina);

  let [campoOrdenacao, ordem] = ordenacao.split(':');

  ordem = parseInt([ordem]);

  if (limite > 0 && pagina > 0) {
    // const totalRegistros = await req.resultado.find().count()
    // console.log(totalRegistros)
    const buscaResultado = await req.resultado.find()
      .sort({ [campoOrdenacao]: ordem })
      .skip((pagina - 1) * limite)
      .limit(limite);

    req.resultado = buscaResultado;
    req.paginaAtual = pagina;
    req.limiteAtual = limite;
    next();
  }
}

export default paginate;
