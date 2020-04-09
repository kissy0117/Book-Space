class UsersController < ApplicationController

  def index
  end


  def show
    @user = User.find(params[:id])
    @posts = @user.posts.order("created_at DESC").page(params[:page]).per(2)
  end


end
