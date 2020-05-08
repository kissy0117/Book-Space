require 'rails_helper'

describe User do
  describe '#create' do

    it "nameがない場合は登録できないこと" do
    user = build(:user, name: "")
    user.valid?

      expect(user.errors[:name]).to include("を入力してください")
    end
  end
end