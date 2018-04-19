var vm = new Vue({
	el: '#root',
	data: {
		tasks: [
			{
				description: 'Listar tareas',
				pending: true,
				editing: false
			},
			{
				description: 'Crear tareas',
				pending: true,
				editing: true
			},
			{
				description: 'Editar y Eliminar tareas',
				pending: false,
				editing: false
			}
		]
	}
});