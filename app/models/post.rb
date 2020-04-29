class Post < ApplicationRecord
  mount_uploader :image, ImageUploader
  
  belongs_to :user
  validates :title, :author, :purchase_date, :book_image, :why_read, :what_info, :to_be, :author_genre, :image, presence: true
end
