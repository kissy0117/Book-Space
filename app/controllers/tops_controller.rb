class TopsController < ApplicationController
  before_action :move_to_index, except: :index

  def index
    @posts = Post.all.order(created_at: :desc)
  end

  def show
    
  end

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end
end
