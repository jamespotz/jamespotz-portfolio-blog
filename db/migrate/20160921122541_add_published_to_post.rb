class AddPublishedToPost < ActiveRecord::Migration
  def change
    add_column :posts, :published, :boolean
    add_column :posts, :published_at, :datetime
  end
end
