class PostsController < ApplicationController
  # #======= JSON post =========
  # "post" {
  #   "title": "something"
  #   },
  #   "body": "else"
  #   }
  # }

  def index
    #instance method of the PostsController class.
    @posts = Post.all

    # render({json: posts})
    # render json: posts2 #=> error, cannot render twice for single response.

    # looks for a view called index in the posts folder
    render :index
    # ^^ we don't need to explicitly render index...rails figures it out
    # because we're in the index action
  end

  def create
    # post = Post.new(
    #   title: params[:title],
    #   body: params[:body]
    # )
    # post_params = params.require(:post).permit(:title, :body, :author_id)
    post = Post.new(post_params)
    if post.save
      render json: post
    else
      render json: post.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    post = Post.find(params[:id])
    render json: post
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :author_id)
  end

end
