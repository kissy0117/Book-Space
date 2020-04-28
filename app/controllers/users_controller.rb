class UsersController < ApplicationController


  def show
    @user = User.find(params[:id])
    @posts = @user.posts.order("created_at DESC").page(params[:page]).per(2)
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to user_path, notice: '更新しました'
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:image, :image_cache)
  end

end
