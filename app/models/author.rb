class Author < ActiveRecord::Base

  # def self.num_posts # N + 1 query - BAD AND SAD
  #   num_posts = {}
  #
  #   Author.all.each do |author| # author load
  #     num_posts[author] = author.posts.length # post load for each author
  #   end
  #
  #   num_posts
  # end

  # def self.num_posts # 2 queries no matter how many authors - better!
  #   num_posts = {}
  #
  #   Author.includes(:posts).each do |author|
  #     num_posts[author] = author.posts.length
  #   end
  #
  #   num_posts
  # end

  def self.num_posts # 1 query!
    # query = <<-SQL
    #   SELECT
    #     authors.*, COUNT(posts.id) AS num_posts
    #   FROM
    #     authors
    #   LEFT OUTER JOIN
    #     posts
    #   ON
    #     posts.author_id = authors.id
    #   GROUP BY
    #     authors.id
    # SQL
    num_posts = {}

    Author
      .joins("LEFT OUTER JOIN posts ON posts.author_id = authors.id")
      .group(:id)
      .select("authors.*, COUNT(posts.id) AS num_posts")
      .each do |author|
        num_posts[author] = author.num_posts
      end

    num_posts
  end

  # belongs_to is a method that accepts:
    # 1: a symbol which is the name of the new method you're creating
    # 2: an options hash. We're passing it
      # class_name, to tell it which table to look through
      # primary_key, to tell it which column to search from
          # the associated table
      # foreign_key, to tell it which attribute to search by

  belongs_to(
    :country,
    class_name: 'Country',
    primary_key: :id,
    foreign_key: :country_id
  )

  # has_many also creates a method
  # options hash includes:
    # class_name, to tell it which table to look through
    # primary_key, to tell it which attribute to search by
    # foreign_key, to tell it which table to search from
      # the associated table

  has_many(
    :posts,
    class_name: 'Post',
    primary_key: :id, # <-- author.id
    foreign_key: :author_id
  )


end
