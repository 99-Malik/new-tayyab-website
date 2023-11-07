export const GTM_ID = "AW-11364296756"

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}