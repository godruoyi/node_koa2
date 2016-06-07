export default class {
	
	constructor(router)
	{
		this.queue = [];
	}

	push (data)
	{
		
	}


	getData()
	{
		return this.queue;
	}

	getLength()
	{
		return this.queue.length;
	}

	isEmpty()
	{
		return this.queue.length === 0;
	}
}