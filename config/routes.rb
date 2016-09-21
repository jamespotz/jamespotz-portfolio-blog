Rails.application.routes.draw do
  devise_for :users, skip: :registrations
  scope :api do
  	resources :posts do
      collection do
        get :not_published, path: 'not-published'
      end
    end
  end

  root to: 'home#index'

  get "*path" => "home#index"
end
