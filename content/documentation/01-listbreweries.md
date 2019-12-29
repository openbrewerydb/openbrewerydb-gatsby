---
title: 'List Breweries'
metaTitle: 'List Breweries'
metaDescription: 'List and filter breweries'
---

Returns a list of breweries.

### Example Output

`https://api.openbrewerydb.org/breweries`

```javascript
[
  ...
  {
    id: 299,
    name: "Almanac Beer Company",
    brewery_type: "micro",
    street: "651B W Tower Ave",
    city: "Alameda",
    state: "California",
    postal_code: "94501-5047",
    country: "United States",
    longitude: "-122.306283180899",
    latitude: "37.7834497667258",
    phone: "4159326531",
    website_url: "http://almanacbeer.com",
    updated_at: "2018-08-23T23:24:11.758Z",
    tag_list: []
  },
  ...
]
```

### by_city

Filter breweries by city.

**Note:** For the parameters, you can use underscores or [url encoding](https://en.wikipedia.org/wiki/Percent-encoding) for spaces.

#### Examples

`https://api.openbrewerydb.org/breweries?by_city=san_diego`
`https://api.openbrewerydb.org/breweries?by_city=san%20diego`

### by_name

Filter breweries by name.

**Note:** For the parameters, you can use underscores or [url encoding](https://en.wikipedia.org/wiki/Percent-encoding) for spaces.

#### Examples

`https://api.openbrewerydb.org/breweries?by_name=cooper`
`https://api.openbrewerydb.org/breweries?by_name=modern%20times`

### by_state

Filter breweries by state.

**Note:** Full state name is required; no abbreviations. For the parameters, you can use underscores or [url encoding](https://en.wikipedia.org/wiki/Percent-encoding) for spaces.

#### Examples

`https://api.openbrewerydb.org/breweries?by_state=ohio`
`https://api.openbrewerydb.org/breweries?by_name=new_york`
`https://api.openbrewerydb.org/breweries?by_name=new%20mexico`

### by_postal

Filter breweries by postal code

May be filtered by basic (5 digit) postal code or more precisely filtered by postal+4 (9 digit) code. 

**Note** If filtering by postal+4 the search must include either a hyphen or an underscore. 

#### Examples

`https://api.openbrewerydb.org/breweries?by_postal=44107`
`https://api.openbrewerydb.org/breweries?by_postal=44107-4020`

### by_type

Filter by type of brewery.

Must be one of: `micro`, `regional`, `brewpub`, `large`, `planning`, `bar`, `contract`, `proprietor`

#### Example

`https://api.openbrewerydb.org/breweries?by_type=micro`

### by_tag

Filter by one tag.

One of: dog-friendly, patio, food-service, food-truck, tours

**Note:** This is a work in progress. The production database does not yet have many tags associated with breweries.

#### Example

`https://api.openbrewerydb.org/breweries?by_tag=patio`

### by_tags

Filter by multiple, comma-separated tags. Combined by AND.

List of: dog-friendly, patio, food-service, food-truck, tours

#### Example

`https://api.openbrewerydb.org/breweries?by_tags=patio,dog-friendly`

### page

The offset or page of breweries to return.

#### Example

`https://api.openbrewerydb.org/breweries?page=15`

### per_page

Number of breweries to return each call.

**Note:** Default per page is 20. Max per page is 50.

#### Example

`https://api.openbrewerydb.org/breweries?per_page=25`

### sort

Sort the results by one or more fields.

- `-` for ascending order (default)
- `+` for decending order

#### Examples

`https://api.openbrewerydb.org/breweries?by_state=ohio&sort=type,-name`
`https://api.openbrewerydb.org/breweries?by_city=san_diego&sort=-name`
