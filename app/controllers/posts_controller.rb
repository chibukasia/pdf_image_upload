class PostsController < ApplicationController
    def index 
        posts = Post.all 
        render json: posts
    end

    def create
        post = Post.create(post_params)
        render json: post, status: :created
    end 

    def latest
        post = Post.last
        render json: post, status: :ok
    end 

    private 

    def post_params 
        params.permit(:title, :image)
    end
end
