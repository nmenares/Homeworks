class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14){[]}
    (0..5).each {|idx| @cups[idx] = [:stone, :stone, :stone, :stone]}
    (7..12).each {|idx| @cups[idx] = [:stone, :stone, :stone, :stone]}

  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
    raise ArgumentError.new "Invalid starting cup" if start_pos > 14
    raise ArgumentError.new "Starting cup is empty" if @cups[start_pos] == []
  end

  def make_move(start_pos, current_player_name)
    num_stones = @cups[start_pos].length
    @cups[start_pos] = []
    (1..num_stones).each do|idx|
      @cups[(start_pos+idx)%14] = @cups[(start_pos+idx)%14] + [:stone]
    end
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
  end

  def winner
  end
end
