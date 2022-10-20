class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :image_url
end
