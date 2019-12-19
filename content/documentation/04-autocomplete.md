---
title: "Autocomplete"
metaTitle: "Autocomplete"
metaDescription: "Autocomplete for drop-downs"
---

Return a list of names and ids of breweries based on a search term. This endpoint is typically used for a drop-down selection.

**Note:** For the `query` parameter, you can use underscores or [url encoding](https://en.wikipedia.org/wiki/Percent-encoding) for spaces.

### Example Output

`https://api.openbrewerydb.org/breweries/autocomplete?query=dog`

```javascript
[
  {
    id: "4263",
    name: "Lead Dog Brewing"
  },
  {
    id: "5359",
    name: "Boss Dog Brewing"
  },
  {
    id: "5925",
    name: "Running Dogs Brewery"
  },
  ...
]
```
