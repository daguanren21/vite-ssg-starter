import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'
const routes = setupLayouts(generatedRoutes)
export const createApp = ViteSSG(App, { routes })