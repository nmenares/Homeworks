class LRUCache
  def initialize(size)
    @size = size
    @cache = []
  end

  def count
    @cache.length# returns number of elements currently in cache
  end

  def add(el) # adds element to cache according to LRU principle
    if @cache.include?(el)
      @cache.delete(el)
      @cache << el
    elsif @cache.count > size
      @cache.shift
      @cache << el
    else
      @cache << el
    end
  end

  def show
    p @cache# shows the items in the cache, with the LRU item first
    nil
  end

end
