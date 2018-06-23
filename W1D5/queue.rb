#We will need the following instance methods: enqueue(el), dequeue, and peek.
#Test your code to ensure it follows the principle of FIFO.
class Queue
  def initialize
    @ivar = []
  end

  def enqueue(el)
    @ivar.unshift(el)
  end

  def dequeue
    @ivar.pop
  end

  def peek
    @ivar[-1]
  end
end
