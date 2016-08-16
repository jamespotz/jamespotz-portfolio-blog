# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#AdminUser.create!(email: 'thepoltergeist23@gmail.com', password: 'james143lala', password_confirmation: 'james143lala')
(0..10).each do |i|
	Post.create!(
		title: "First Post",
		body: "Remember that Devise uses flash messages to let users know if sign in was successful or unsuccessful. Devise expects your application to call flash[:notice] and flash[:alert] as appropriate. Do not print the entire flash hash, print only specific keys. In some circumstances, Devise adds a :timedout key to the flash hash, which is not meant for display. Remove this key from the hash if you intend to print the entire hash."
	)
end