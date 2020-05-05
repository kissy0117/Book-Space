require 'rails_helper'

RSpec.describe User, type: :model do

    it "emailがない場合は登録できないこと" do

    user = User.new(
      id: "1",
      name: "俺",
      image: Rack::Test::UploadedFile.new(File.join(Rails.root, 'spec/fixtures/picker.jpg')),
      email: "",
      password: "qqqqqqqq",
      created_at: "2020-05-04",
      updated_at: "2020-05-04")

      user.valid?
      
      expect(user.errors[:email]).to include("can't be blank")
  end
end