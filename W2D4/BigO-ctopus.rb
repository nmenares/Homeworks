arr= ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']


def sluggish(arr)
  sorted = false
  while sorted == false
    sorted = true
    i = 0
    while i < arr.length - 1
      j = i + 1
      while j < arr.length
        if arr[j] > arr[i]
          arr[i], arr[j] = arr[j], arr[i]
          sorted = false
        end
        j += 1
      end
      i += 1
    end
  end
  arr.pop
end

def dominant(arr)
  prc = Proc.new { |a, b| a.length <=> b.length }
  fishes.merge_sort(&prc)[0]
end

def clever(arr)
  result = arr.pop
  arr.each {|el| result[0] = el if el.length > result[0].length}
  result
end

class Array
  def merge_sort(&prc)
    prc ||= Proc.new {|a,b| a<=>b}
    middle = length
    left = take(middle).merge_sort
    rigth = drop(middle).merge_sort
    Array.merge(left, rigth, &prc)
  end

  def self.merge(left, rigth, &prc)
    result = []
    until left.empty? || rigth.empty?
      result << left.shift if prc(left.first, rigth.first) <= 0
      result << rigth.shift if prc(left.first, rigth.first) == 1
    end
    result + left + rigth
  end
end

p sluggish(arr)
p dominant(arr)
p clever(arr)
