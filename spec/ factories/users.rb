FactoryBot.define do

  factory :user do
    id            {"1"}
    name          {"あああ"}
    image         {Rack::Test::UploadedFile.new(File.join(Rails.root, 'spec/fixtures/picker.jpg'))}
    email         {"test@gmail.com"}
    password      {"qqqqqqqq"}
    created_at    {"2020-05-08"}
    updated_at    {"2020-05-08"}
  end

end