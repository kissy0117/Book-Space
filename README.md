# README

# ツール・ライブラリの名前
## 読書効率向上アプリ(IRM)
[![Image from Gyazo](https://i.gyazo.com/37cc4bbfa2fdbfecf78752619167769c.jpg)](https://gyazo.com/37cc4bbfa2fdbfecf78752619167769c)
# なぜ作ったか
実体験として、自己啓発本などを読み終わった後、内容を忘れてしまっていたり、行動に移せない時がありました。原因として、なんとなく本を選んでいたり、アウトプットが足りていないからだと考え、それを改善する為にアプリを作りました。

# アプリの概要
これから読む本を投稿できます。合わせて「本に期待すること」、「読んだ後どのような状態でいたいか」などを投稿することで読書の効率を向上させます。

# アプリの機能・技術一覧
- devise(ユーザーログイン・ログアウト機能)
- carrierwave(ユーザーアイコン投稿機能)
- 記事投稿機能
- Google books API
- pagination(kaminari)
- バックエンド
  - Ruby 2.5.1
- フレームワーク
  - Ruby on Rails 5.2.4.1
- フロントエンド
  - haml/scss/jQuery
- データベース
  - MySQL 5.6.47
- インフラ
  - AWS EC2
- デプロイ
  - Capistranoによる自動デプロイ


# テストアカウント
- Eメール : gest@gmail.com
- パスワード : aaaaaaaa

# 使い方
1. テストアカウントもしくは新規ユーザー登録にて会員ログインをします。
2. トップページ左下に出てくる投稿するを押します。
3. 画面上の検索ボックスから読む本を選択し、メンタルマップとキュリオシティギャップを入力後、投稿するボタンを押します。

# DB
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
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
