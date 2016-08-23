Rails.application.routes.draw do
  scope :api do
  	resources :posts
  end
  
  root to: 'home#index'
  get "*path" => "home#index"

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
end
