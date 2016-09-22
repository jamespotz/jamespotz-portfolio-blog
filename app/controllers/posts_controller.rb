class PostsController < ApplicationController
	before_filter :authenticate_user!, only: [:create, :destroy, :update, :not_published]

	def index
		@post = Post.all.where(published: true)
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

	def edit
		render json: Post.find(params[:id])
	end

	def update
		@post = Post.find(params[:id])
		if @post.update_attributes(post_params)
			render json: :ok
		end
	end

	def not_published
		@post = Post.all.where(published: [false, nil])
		render json: @post
	end

	private
		def post_params
			params.require(:post).permit(:title, :body, :published, :published_at)
		end
end
