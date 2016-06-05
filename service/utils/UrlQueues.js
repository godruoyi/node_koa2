export default class {
	
	constructor(router)
	{
		this.queue = [];
		this.length = 0;
	}

	push (data)
	{
		if (this.queue.length >= 200) return this.queue.length;
		if ((this.length + data.length) > 200)
		{
			data = data.slice(0, (200 - this.length));
		}
		for(let d of data)
		{
			if (!this.queue.includes(d)){
				this.length ++;
				this.queue.push(d);
			}
		}
	}
	getData()
	{
		return this.queue;
	}

	getLength()
	{
		return this.length;
	}

	next()
	{
		return this.queue.shift();
	}

	getEmpty()
	{
		return this.length === 0;
	}
}