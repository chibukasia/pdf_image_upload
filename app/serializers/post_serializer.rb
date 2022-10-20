class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :pdf_url
end
