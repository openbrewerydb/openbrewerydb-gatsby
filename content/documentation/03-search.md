---
title: "Search Breweries"
metaTitle: "Search Breweries"
metaDescription: "Search for breweries based on a query"
---

Search for breweries based on a search term.

**Note:** For the `query` parameter, you can use underscores or [url encoding](https://en.wikipedia.org/wiki/Percent-encoding) for spaces.

### Example Output

`https://api.openbrewerydb.org/breweries/search?query=dog`

```javascript
[
  {
    id: 530,
    name: "Diving Dog Brewhouse",
    brewery_type: "micro",
    street: "1802 Telegraph Ave",
    address_2: null,
    address_3: null,
    city: "Oakland",
    county_province: null,
    state: "California",
    postal_code: "94612-2110",
    country: "United States",
    longitude: "-122.2698881",
    latitude: "37.807739",
    phone: "5103061914",
    website_url: "http://www.divingdogbrew.com",
    updated_at: "2018-08-23T23:27:26.494Z",
    created_at: "2018-08-23T23:24:11.758Z"
  },
  ...
]
```
