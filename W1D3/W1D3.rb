def sum_to(n)
  return nil if n < 0
  return 1 if n <= 1
  n + sum_to(n-1)
end

def add_numbers(nums_array)
  return nums_array[0] if nums_array.length <= 1
  nums_array[0] + add_numbers(nums_array[1..-1])
end

def gamma_fnc(n) #4
  return nil if n == 0
  return 1 if n == 1
  (n-1) * gamma_fnc(n-1)
end

def ice_cream_shop(flavors, favorite)
  return flavors[0] == favorite if flavors.length <=1
  if flavors[0] == favorite
    return true
  else
    ice_cream_shop(flavors[1..-1], favorite)
  end
end

def reverse(string)
  return string if string.length <= 1
  string[-1] + reverse(string[0..-2])
end

if __FILE__ == $PROGRAM_NAME
p "SUM_TO"
p sum_to(5) == 15
p sum_to(1) == 1
p sum_to(9) == 45
p sum_to(-8) == nil
p "----"
p "ADD_NUMBERS"
p add_numbers([1,2,3,4]) == 10
p add_numbers([3]) == 3
p add_numbers([-80,34,7]) == -39
p add_numbers([]) == nil
p "----"
p "GAMMA_FUNCTION"
p gamma_fnc(0) == nil
p gamma_fnc(1) == 1
p gamma_fnc(4) == 6
p gamma_fnc(8) == 5040
p "----"
p "ICE_CREAM_SHOP"
p ice_cream_shop(['vanilla', 'strawberry'], 'blue moon') == false
p ice_cream_shop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea') == true
p ice_cream_shop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio') == false
p ice_cream_shop(['moose tracks'], 'moose tracks') == true
p ice_cream_shop([], 'honey lavender') == false
p "----"
p "REVERSE"
p reverse("house") == "esuoh"
p reverse("dog") == "god"
p reverse("atom") == "mota"
p reverse("q") == "q"
p reverse("id") == "di"
p reverse("") == ""

end
