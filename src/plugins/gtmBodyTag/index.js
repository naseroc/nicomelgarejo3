export default function () {
  return {
    name: 'docusaurus-plugin-gtm-body-tag',
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: 'noscript',
            innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MTJ4B88C"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          },
        ],
      };
    },
  };
}