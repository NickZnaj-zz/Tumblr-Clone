class Api::PostsController < ApplicationController

  def index
    sleep(5)
    @posts = Post.includes(:author).order(updated_at: :desc)
    # will find view in views/api/posts
    # Looking for index.json because default format is json
    render :index
  end

end
