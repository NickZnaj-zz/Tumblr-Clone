json.meta do
  json.total_pages @search_results.total_pages
  json.query params[:query]
  json.page @search_results.current_page
end

json.search_results do
  json.array! @search_results.map(&:searchable) do |search_result|
    case search_result
    when Author
      json.partial! "api/authors/author", author: search_result
      # json._type "Author"
    when Post
      json.partial! "api/posts/post", post: search_result
      # json._type "Post"
    end
    json._type search_result.class.to_s
    
    # # Metaprogramming for general case
    # tableized = search_result.class.to_s.tableize
    # json.partial!(
    #   "api/#{tableized}/#{tableized.singularize}",
    #   tableized.singularize.to_sym => search_result
    # )
  end
end