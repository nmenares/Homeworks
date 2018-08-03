class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      redirect_to links_url
    else
      flash.now[:errors] = ["nop"]
      render :new
    end
  end

  def destroy
    log_out if logged_in?
    render :new
  end
end
