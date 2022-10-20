class Post < ApplicationRecord 
    has_one_attached :image
    has_one_attached :pdf

    def image_url 
        Rails.application.routes.url_helpers.url_for(image) if image.attached?
    end

    def pdf_url 
        Rails.application.routes.url_helpers.url_for(pdf) if pdf.attached?
    end
end
