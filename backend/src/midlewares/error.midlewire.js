// Rota que não existe
export function notFound(req, res) {
  res.status(404).json({ error: 'Rota não encontrada' });
}

// Qualquer erro inesperado cai aqui.
// O Express identifica um middleware de erro pelos 4 parâmetros.
export function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({ error: 'Erro interno do servidor' });
}