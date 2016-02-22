require "sinatra"
require "sendgrid-ruby"

get "/" do
  erb :index  
end

get "/about" do
  erb :about
end

get "/services" do
  erb :services  
end

get "/contact" do
  erb :contact 
end

post "/contact" do
	client = SendGrid::Client.new(api_key: ENV["MARS_API"])

	mail = SendGrid::Mail.new do |m|
    m.to = "samlubin@yahoo.com"

    m.from = params[:email]
    m.subject = params[:subject]

    m.text = params[:body]

    m.html = "<p style='color: red;'>#{params[:body]}</p>"
  end

  response = client.send(mail)

  if response.code == 200
    "Thank you. Your email has been sent."
  else
    "There has been an error sending your email. Please try again"
  end

end
