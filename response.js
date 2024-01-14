const responses = {
    UserResponse: {
      description: 'User response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/User',
          },
        },
      },
    },
  
    StatusResponse: {
      description: 'Status response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Status',
          },
        },
      },
    },
  
    SubTaskResponse: {
      description: 'SubTask response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/SubTask',
          },
        },
      },
    },
  
    TaskResponse: {
      description: 'Task response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Task',
          },
        },
      },
    },
  };
  
  module.exports = responses;
  