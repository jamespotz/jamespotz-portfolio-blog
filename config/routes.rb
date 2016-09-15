Rails.application.routes.draw do
  devise_for :users, skip: :registrations
  scope :api do
  	resources :posts
  end

  root to: 'home#index'

  get "*path" => "home#index"
end
