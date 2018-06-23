class Map
  def initialize
    @mymap = Array.new(){Array.new(2)}
  end

  def set(key, value)
    keys = @mymap.map {|dpl| dpl[0]}
    if keys.include?(key)
      @mymap.each do |dpl|
        dpl[1] = value if dpl[0] == key
      end
    else
      @mymap.push([key, value])
    end
  end

  def get(key)
    dupla = @mymap.select {|dpl| dpl[0] == key }
    dupla[0]
  end

  def delete(key)
    @mymap.select! {|dpl| dpl[0] != key}
  end

  def show
    @mymap
  end
end
