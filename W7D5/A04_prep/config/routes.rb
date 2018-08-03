Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :links, only: [:new, :create, :index, :show, :update, :create, :destroy]
  resources :comments, only: [:new, :create, :index, :show, :update, :create, :destroy]
end
