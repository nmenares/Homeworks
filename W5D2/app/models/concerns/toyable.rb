module Toyable
  extend ActiveSupport::Concern

  included do
    has_many :toys, through: :toyable
  end

# Any animal instance whose class includes the Toyable concern can call this method. This method should first find or create a toy whose name matches the argument. Next it should add this toy to self's toys. For both steps, you may wish to use the ActiveRecord #find_or_create_by

  def receive_toy(name)
    self.toys.find_or_create_by(name: name)
  end
end
