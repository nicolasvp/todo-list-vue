Vue.component('icon',{
	template: '<span :class="cssClasses" aria-hidden="true"></span>',
	props: ['draw'],
	computed: {
		cssClasses: function(){
			return 'glyphicon glyphicon-' + this.draw;
		}
	}
});

Vue.component('list',{
	template: '#task-list',
	props: ['task','index','tasks','new_task'],
	methods: {
		toggleStatus: function(){
			this.task.pending = !this.task.pending;
			this.task.editing = false
		},
		editTask: function(){
			this.task.editing = true,
			this.task.draft = this.task.description
		},
		updateTask: function(){
			this.task.description = this.task.description,
			this.task.editing = false,
			this.task.draft = ''
		},
		cancelTask: function(){
			this.task.editing = false,
			this.task.description = this.task.draft,
			this.task.draft = ''
		},
		remove: function(){
			this.$emit('remove',this.index);
		}	
	}
});

var vm = new Vue({
	el: '#root',
	data: {
		new_task: '',
		tasks: [
			{
				description: 'Tarea 1',
				pending: true,
				editing: false,
				draft: ''
			},
			{
				description: 'Tarea 2',
				pending: true,
				editing: true,
				draft: ''
			},
			{
				description: 'Tarea 3',
				pending: false,
				editing: false,
				draft: ''
			}
		]
	},
	methods: {
		createTask: function(){
			if(this.new_task !== ''){
				this.tasks.push({
					description: this.new_task,
					pending: true,
					editing: false
				});
				this.new_task = '';
			}
		},
		deleteTask: function(index){
			this.tasks.splice(index, 1);
		}		
	}
});