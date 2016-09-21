class Post < ActiveRecord::Base
	has_many :comments
  validates :title, :body, :published, presence: true

  before_save :set_published_time

  protected
    def set_published_time
      self.published_at = Time.current if check_if_published?
    end

    def check_if_published?
      !self.published_at.present? & self.published
    end
end
