class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :validatable
        mount_uploader :image, ImageUploader
        has_many :posts

        validates :name,                  presence: true
        validates :email,                 presence: true
        validates :email,                 uniqueness: true
        validates :image,                 presence: true
end
