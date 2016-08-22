class PostsController < ApplicationController
	respond_to :html, :json
	def index
		@post = Post.all
		render :json => @post
	end

	def destroy
		@post = Post.find(params[:id])
		@post.destroy
		render json: :ok
	end

	def show
		render json: Post.find(params[:id])
	end

	def new
		@post = Post.new
	end

	def create
		@post = Post.new(post_params)
		if @post.save
			render json: :ok
		else
			render json: @post.error_message
		end
	end

	private
		def post_params
			params.require(:post).permit(:title, :body)
		end
end
