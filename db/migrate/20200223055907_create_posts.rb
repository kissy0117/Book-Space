class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.date    :purchase_date, null: false
      t.integer :user_id,       null: false, foreign_key: true
      t.string  :title,         null: false
      t.string  :author,        null: false
      t.string  :image,         null: false
      t.text    :book_image,    null: false
      t.text    :why_read,      null: false
      t.text    :what_info,     null: false
      t.text    :to_be,         null: false
      t.text    :author_genre
      t.timestamps
    end
  end
end
