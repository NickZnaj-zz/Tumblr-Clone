Rails.application.routes.draw do
  root "sessions#new"
  # get("/posts", {to: "posts#index"})

  # get "/posts", to: "posts#index"
  # post "/posts", to: "posts#create"
  # get "/posts/:id", to: "posts#show", as: :post

  # When someone navigates to '/posts',
  # create an instance of the PostsController and call the #index method.

  # resources(:posts, {only: [:index, :show, :create]})
  resources :posts, only: [:index, :show, :create]
  resources :authors, only: [:create, :new]
  resource :session, only: [:new, :create, :destroy]
  # resources :authors do
  #   resources :posts
  # end

  get 'get_cookie', to: 'cookies#get'
  # look for get action in CookiesController
    # in file named cookies_controller.rb
  get 'set_cookie', to: 'cookies#set'
  get 'set_flash', to: 'cookies#set_flash'
end
