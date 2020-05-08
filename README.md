# README
# ツール・ライブラリの名前
## 読書効率向上アプリ(IRM)
### URL
- http://18.180.96.173/
### テストアカウント
- Eメール : gest@gmail.com
- パスワード : aaaaaaaa
[![Image from Gyazo](https://i.gyazo.com/37cc4bbfa2fdbfecf78752619167769c.jpg)](https://gyazo.com/37cc4bbfa2fdbfecf78752619167769c)
# なぜ作ったか
実体験として、自己啓発本などを読み終わった後、内容を忘れてしまっていたり、行動に移せない時がありました。原因として、なんとなく本を選んでいるせいで、記憶に残りにくかったり、今の自分にとって必要なのかという観点が足りなかったのだと気付き、それを改善する為に本アプリを作りました。

# アプリの概要
本の記録ができます。合わせて「なぜ読もうと思ったか」、「本から得たいことは何か」「読んだ後どのような状態でいたいか」などを考え、投稿することで読書効率を向上させます。

# アプリの機能・技術一覧
- devise(ユーザーログイン・ログアウト機能)
- carrierwave(ユーザーアイコン投稿機能)
- 記事投稿機能
- Google books API
- pagination(kaminari)
- フロントエンド
  - haml/scss/jQuery
- バックエンド
  - Ruby 2.5.1
- フレームワーク
  - Ruby on Rails 5.2.4.1
- データベース
  - MySQL 5.6.47
- テスト
  - rspec-rails
  - factory_bot_rails
- インフラ
  - AWS EC2
- デプロイ
  - Capistranoによる自動デプロイ

# 使い方
1. テストアカウントもしくは新規ユーザー登録にて会員ログインをします。
2. トップページ左下に出てくる投稿するを押します。
3. 画面上の検索ボックスから読む本を選択し、メンタルマップとキュリオシティギャップを入力後、投稿するボタンを押します。

# 工夫したこと
1. 本を登録するのであれば、画像付きの方がUI/UXが良くなるだろうと思い、新たにGoogle books APIの使い方を学習しました。
2. さらに検索精度を高める為にsearch_books.jsにて検索項目別にif文で条件分岐させました。

# 今後実装したい機能
投稿した内容がしおりサイズのカードデータとなり、電子書籍のしおりとして活用できるような機能を実装していきたいと考えております。

# DB
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false, length: {minimum: 8}|
|image|string|null: false|

### Association
- has_many :posts

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|purchase_date|date|null: false|
|user_id|integer|null: false|
|title|string|null: false|
|author|string|null: false|
|image|string|null: false|
|book_image|Text|null: false|
|why_read|Text|null: false|
|what_info|Text|null: false|
|to_be|Text|null: false|
|author_genre|Text|null: false|

### Association
- belongs_to :user
