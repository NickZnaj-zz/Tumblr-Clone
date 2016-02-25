# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Country.destroy_all
usa = Country.create!(name: "USA!!!!!")
argentina = Country.create!(name: "Argentina!")

Author.destroy_all
lily = Author.create!(name: "Lily!", country_id: usa.id)
tommy = Author.create!(name: "Tommy", country_id: argentina.id)
leen = Author.create!(name: "Leen", country_id: usa.id)

Post.destroy_all
lily_post = lily.posts.create!(title: "lily is awesome at helping with lecture", body: "!!!")
tommy1 = tommy.posts.create!(title: "feelings", body: ":(")
tommy2 = tommy.posts.create!(title: "feelings", body: ":)")
tommy3 = tommy.posts.create!(title: "feelings", body: ":|")
