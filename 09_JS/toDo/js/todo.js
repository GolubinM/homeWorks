
/**
 * @param {object} data
 */
export function createTodo(data) {
	return {
		title: data?.todoTitle,
		isCompleted: data?.completed,
		icon: data?.completed ? '✅' : '⏳',
		category: data?.chosenCategory,
		author: {
		  firstName: data?.user?.first,
		  lastName: data?.user?.last
		}
	  }
}