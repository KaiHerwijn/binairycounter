function Counter()
{
	var self = this;
	self.startLamp = new Lamp(8);


	self.step = function()
	{
		self.startLamp.switch();
	}
}