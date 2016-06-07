export default class {
	
	constructor()
	{
		this.queue = [];
		this.queue_p = [];

	}

	push (data)
	{
		let l = data.length;
		if( (l + this.getLength()) >= 200)
		{
			data = data.slice(0, (201 - this.getLength()));
		}
		for(let a of data){
			if(!this.queue.includes(a)){
				this.queue.push(a);
				this.queue_p.push(a);
			}
		}
	}

	next()
	{
		let done = this.queue_p.shift();
		if( typeof(done) === 'undefined')
		{
			return false;
		}
		return done;
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