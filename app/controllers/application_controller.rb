class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  respond_to :json

  before_action :configure_permitted_parameters, if: :devise_controller?

  private
  	def configure_permitted_parameters
  		devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
  	end
end
