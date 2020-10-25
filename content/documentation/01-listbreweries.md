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
    address_2: null,
    address_3: null,
    city: "Alameda",
    state: "California",
    county_province: null,
    postal_code: "94501-5047",
    country: "United States",
    longitude: "-122.306283180899",
    latitude: "37.7834497667258",
    phone: "4159326531",
    website_url: "http://almanacbeer.com",
    updated_at: "2018-08-23T23:24:11.758Z",
    created_at: "2018-08-23T23:24:11.758Z"
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
`https://api.openbrewerydb.org/breweries?by_state=new_york`
`https://api.openbrewerydb.org/breweries?by_state=new%20mexico`

### by_postal

Filter breweries by postal code

May be filtered by basic (5 digit) postal code or more precisely filtered by postal+4 (9 digit) code.

**Note** If filtering by postal+4 the search must include either a hyphen or an underscore.

#### Examples

`https://api.openbrewerydb.org/breweries?by_postal=44107`
`https://api.openbrewerydb.org/breweries?by_postal=44107-4020`
`https://api.openbrewerydb.org/breweries?by_postal=44107_4020`

### by_type

Filter by type of brewery.

Must be one of:

* `micro` - Most craft breweries. For example, Samual Adams is still considered a micro brewery.
* `nano` - An extremely small brewery which typically only distributes locally.
* `regional` - A regional location of an expanded brewery. Ex. Sierra Nevada's Asheville, NC location.
* `brewpub` - A beer-focused restaurant or restaurant/bar with a brewery on-premise.
* `large` - A very large brewery. Likely not for visitors. Ex. Miller-Coors. (deprecated)
* `planning` - A brewery in planning or not yet opened to the public.
* `bar` - A bar. No brewery equipment on premise. (deprecated)
* `contract` - A brewery that uses another brewery's equipment.
* `proprietor` - Similar to contract brewing but refers more to a brewery incubator.
* `closed` - A location which has been closed.

#### Example

`https://api.openbrewerydb.org/breweries?by_type=micro`

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

* `-` for ascending order (default)
* `+` for decending order

#### Examples

`https://api.openbrewerydb.org/breweries?by_state=ohio&sort=type,-name`
`https://api.openbrewerydb.org/breweries?by_city=san_diego&sort=-name`
