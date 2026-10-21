import * as taskService from '../services/task.service.js'

export function index(req, res){
    res.json(taskService.listTasks())
}

export function show(req, res) {
  const task = taskService.getTaskById(Number(req.params.id))

  if (!task) {
    return res.status(404).json({error: 'Chamado não encontrado!'})
  }

  res.json(task)
}