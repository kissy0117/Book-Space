class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :user_id,    null: false, foreign_key: true
      t.string  :title,      null: false
      t.string  :author,     null: false
      t.integer :infomation, null: false
      t.text    :content,    null: false
      t.text    :image,      null: false
      t.timestamps
    end
  end
end
