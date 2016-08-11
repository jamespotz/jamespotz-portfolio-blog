class PostsController < ApplicationController
	respond_to :json
	def index
		@post = Post.all
		render :json => @post
	end

	def destroy
		render Post.destroy(params[:id])
	end
end
