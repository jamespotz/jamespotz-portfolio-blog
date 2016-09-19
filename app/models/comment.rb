class Comment < ActiveRecord::Base
  belongs_to :post

  def as_josn(options = {})
  	super(options.merge(include: :comments))
  end
end
