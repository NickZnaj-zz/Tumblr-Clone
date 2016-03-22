class Api::PostsController < ApplicationController
  
  def index
    @posts = Post.includes(:author).order(updated_at: :desc)
    render :index
  end
  
end