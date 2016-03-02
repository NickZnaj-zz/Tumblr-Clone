class AuthorsController < ApplicationController

  def new

  end

  def create
    @author = Author.new(author_params)
    # @author. is an Author object, valid or not.
    # @author.save returns false if author is invalid
    if @author.save
      redirect_to posts_url
      # sends instruction to browser:
      # 'make a get request to the posts url!'
    else
      render :new
      # goes to views/authors/new
    end
  end


  private

  def author_params
    params.require(:author).permit(:name, :country_id)
  end
end
