class Simon
  COLORS = %w(red blue green yellow)
  CHEERS = %w(Great! Sweet! Awesome! Cool! Marvelous! Amazing! Wonderful!)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until @game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    if @game_over == false
      self.round_success_message
      sleep 2
      system("clear")
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
    @seq.each do |color|
      puts color
      sleep 0.75
      system("clear")
    end
  end

  def require_sequence
    puts "Repeat the sequence by entering the first letter of each color on a new line."
    @seq.each do |color|
      user_color = gets.chomp
      if color[0] != user_color
        @game_over = true
        break
      end
    end
    sleep 1
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts "#{CHEERS.sample} You did it. Here's the next sequence:"
  end

  def game_over_message
    puts "Game over! You made #{@sequence_length - 1} rounds."
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end

if __FILE__ ==  $PROGRAM_NAME
  game = Simon.new()
  game.play
end
