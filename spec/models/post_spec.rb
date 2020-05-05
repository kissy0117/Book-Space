# require 'rails_helper'
# describe Post do
#   describe '#create' do
#     it "titleがない場合は登録できないこと" do
#       post = Post.new(
#         id: "1",
#         user_id: "2",
#         title: "",
#         author: "著者",
#         purchase_date: "2020-5-5",
#         book_image: "google",
#         why_read: "なぜ",
#         what_info: "何を",
#         to_be: "どうなりたい",
#         author_genre: "他には",
#         image: Rack::Test::UploadedFile.new(File.join(Rails.root, 'spec/fixtures/default.png')),
#         created_at: "2020-05-05",
#         updated_at: "2020-05-05")
#       post.valid?
#       expect(post.errors[:title]).to include("can't be blank")
#     end
#   end
# end