import type { App } from 'vue'

// import i18nPlugin from 'my-vue-i18n-plugin';

export default (app: App) => {
  // app.use(i18nPlugin);
  app.use(() => {
    console.log('init app')
  })
}
