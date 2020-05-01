# README

# ツール・ライブラリの名前

読書効率向上アプリ
[![Image from Gyazo](https://i.gyazo.com/f8fa7d10830eece297249cd00ea6f261.jpg)](https://gyazo.com/f8fa7d10830eece297249cd00ea6f261)


# 簡単な説明

ユーザーは、投稿ボタンからこれから読む本を検索し、登録することができます。

・テストアカウント
Eメール : gest@gmail.com
パスワード : aaaaaaaa

***デモ***



# 使用技術
## ■言語
### バックエンド
- Ruby 2.5.1
### フロントエンド
- haml/scss
## ■フレームワーク
- Ruby on Rails 5.2.4.1
## ■データベース
- MySQL 5.6.47
## ■インフラ
- AWS EC2


# 使い方

1. テストアカウントもしくは新規ユーザー登録にて会員ログインをします。
2. トップページ左下に出てくる投稿するを押します。
3. 画面上の検索ボックスから読みたい本を選択し、メンタルマップとキュリオシティギャップを入力し、登録ボタンを押します。


# デプロイ

1. Capistranoによる自動デプロイ

## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|String|null: false, length: {minimum: 8}|
|image|String|null: false|

### Association
- has_many :posts

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|String|null: false|
|title|String|null: false|
|author|String|null: false|
|infomation|Integer|null: false|
|content|Text|null: false|
|image|Text|null: false|

### Association
- belongs_to :user
