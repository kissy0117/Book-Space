require 'rails_helper'
describe User do
  describe '#create' do
    it "nameがない場合は登録できないこと" do
      user = build( email: "test@lookout", name: "", image: "qqq")
      user.valid?
      expect(user.errors[:name]).to include("can't be blank")
    end
  end
end
