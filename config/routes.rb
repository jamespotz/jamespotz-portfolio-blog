Rails.application.routes.draw do
  devise_for :users
  scope :api do
  	resources :posts
  end
  
  root to: 'home#index'

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  get "*path" => "home#index"
end
