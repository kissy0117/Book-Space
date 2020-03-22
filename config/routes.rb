Rails.application.routes.draw do
  devise_for :users
  root to: "tops#index"
  resources :posts
  resources :tops, only: :index
  resources :users, only: [:show, :index]
end
