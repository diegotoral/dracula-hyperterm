exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    borderColor: '#282a36',
    cursorColor: '#f8f8f2',
    backgroundColor: '#282a36',
    foregroundColor: '#f8f8f2',
    css: `
      ${config.css || ''}

      .tabs_nav .tabs_list .tab_text {
        color: #bd93f9;
      }
      .tabs_nav .tabs_title {
        color: #bd93f9;
      }
      .tab_active:before {
        border-color: #44475a;
      }
    `
  });
}
