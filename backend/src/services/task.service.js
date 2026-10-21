let tasks = [
    {
      id: 1,
      order: 'MANEQP-0001',
      requester: 'Adriano Alves Vieira',
      sector: 'Engenharia',
      code: 923512325,
      date: '10/02/26',
    },
    { 
      id: 2,
      order: 'MANEQP-0002',
      requester: 'Maria Fernanda Souza',
      sector: 'Produção',
      code: 823412678,
      date: '12/02/26',
    },
    {
      id: 3,
      order: 'MANPRED-0003',
      requester: 'João Carlos Mendes',
      sector: 'Infraestrutura',
      code: null,
      date: '15/02/26',
    },
    {
      id: 4,
      order: 'MANEQP-0004',
      requester: 'Patrícia Oliveira',
      sector: 'Qualidade',
      code: 456789123,
      date: '18/02/26',
    },
    {
      id: 5,
      order: 'MANPRED-0005',
      requester: 'Ricardo Lima',
      sector: 'Segurança',
      code: null,
      date: '20/02/26',
    },
    {
      id: 6,
      order: 'MANEQP-0006',
      requester: 'Carla Dias',
      sector: 'Engenharia',
      code: 987654321,
      date: '22/02/26',
    }
  ];



  export function listTasks() {
    return tasks
  }

  export function getTaskById(id) {
    return tasks.find((t) => t.id === id) ?? null;
  }

//   export function listTasks() {
//     return tasks
//   }
  
//   export function listTasks() {
//     return tasks
//   }
  
//   export function listTasks() {
//     return tasks
//   }
  
//   export function listTasks() {
//     return tasks
//   }
  
//   export function listTasks() {
//     return tasks
//   }