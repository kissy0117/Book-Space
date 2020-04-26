class UsersController < ApplicationController

  def index
  end


  def show
    @user = User.find(params[:id])
    @posts = @user.posts.order("created_at DESC").page(params[:page]).per(2)
  end

  def new
    @user = User.new
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])

    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end

  end

  private

  def user_params
    params.require(:user).permit(:image, :remove_image, :image_cache)
  end

end
