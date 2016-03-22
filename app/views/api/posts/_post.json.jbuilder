json.extract! post, :id, :title, :body, :created_at

json.author_name post.author.name