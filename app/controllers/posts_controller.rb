class PostsController < ApplicationController
	respond_to :json
	def index
		@post = Post.all
		render :json => @post
	end

	def destroy
		@post = Post.find(params[:id])
		@post.destroy
		render json: :ok
	end
end
