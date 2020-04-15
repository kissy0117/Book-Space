class Post < ApplicationRecord
  mount_uploader :image, ImageUploader
  belongs_to :user

  # validates :image, :title, :author, :infomation, :content, presence: true
end
