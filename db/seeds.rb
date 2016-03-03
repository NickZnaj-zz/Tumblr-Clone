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
netherlands = Country.create!(name: "Netherlands!")

Author.destroy_all
jonathan = Author.create!(name: "Tommy", password: "password", country_id: netherlands.id)
tommy = Author.create!(name: "Tommy", password: "password", country_id: argentina.id)
lily = Author.create!(name: "Lily", password: "password", country_id: usa.id)
carl = Author.create!(name: "Carl", password: "password", country_id: usa.id)
fred = Author.create!(name: "Fred", password: "password", country_id: usa.id)
leen = Author.create!(name: "Leen", password: "password", country_id: usa.id)

Post.destroy_all
lily_post = lily.posts.create!(title: "Lily is awesome at helping with lecture", body: "it's true!!!")
lily_post = lily.posts.create!(title: "Lily talks in the third person just because", body: "maybe post bodies should be longer than titles?")
tommy1 = tommy.posts.create!(title: "Feelings", body: ":(")
fred1 = fred.posts.create!(title: "tumbling", body: "Am I doing this right?")
tommy2 = tommy.posts.create!(title: "Feelings", body: ":)")
jonathan1 = jonathan.posts.create!(title: "Everybody...", body: "You can do it!")
tommy3 = tommy.posts.create!(title: "Feelings", body: ":|")
carl1 = carl.posts.create!(title: "Henceforth...", body: "you can call me, The Baron.")
