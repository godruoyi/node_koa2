export default class {
	
	constructor(router)
	{
		this.queue = [];
		this.queue_data = [];
	}

	push (data)
	{
		if (this.queue_data.length >= 200) return this.queue_data.length;
		if ((this.queue_data.length + data.length) > 200)
		{
			data = data.slice(0, (200 - this.queue_data.length));
		}
		for(let d of data)
		{
			if (!this.queue_data.includes(d)){
				this.queue.push(d);
				this.queue_data.push(d);
			}
		}
	}
	getData()
	{
		return this.queue;
	}

	getLength()
	{
		return this.queue_data.length;
	}

	next()
	{
		let u = this.queue.shift();
		if(typeof(u) === 'undefined') return false;
		return u;
	}

	getEmpty()
	{
		return this.queue_data.length === 0;
	}
}