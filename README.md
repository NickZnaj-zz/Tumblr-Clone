# Search ([`PgSearch`][pg_search] & [Kaminari][kaminari])


[pg_search]: https://github.com/Casecommons/pg_search
[kaminari]: https://github.com/amatsuda/kaminari

### Files to look at:
- [Gemfile][gemfile]
- [`PgSearch::multisearch` migration][multisearch_migration]
- [`Api::SearchesController`][searches_controller]
- [searches/index.json.jbuilder][searches_jbuilder]
- [`ApiUtil::search`][api_util]
- [`Search` component][search_component]
- [`SearchResultsStore`][sr_store]
- [React routes][react_entry]
- [Rails routes][rails_routes]
- [`PgSearch` config][pg_search_config]: Also see [docs][pg_search_options]

[gemfile]: ./Gemfile
[multisearch_migration]: ./db/migrate/20160401131308_create_pg_search_documents.rb
[searches_controller]: ./app/controllers/api/searches_controller.rb
[searches_jbuilder]: ./app/views/api/searches/index.json.jbuilder
[api_util]: ./frontend/utils/api_util.js
[search_component]: ./frontend/components/search.jsx
[sr_store]: ./frontend/stores/search_results_store.js
[react_entry]: ./frontend/tumblr_clone.jsx
[rails_routes]: ./config/routes.rb
[pg_search_config]: ./config/initializers/pg_search_config.rb
[pg_search_options]: https://github.com/Casecommons/pg_search#searching-using-different-search-features