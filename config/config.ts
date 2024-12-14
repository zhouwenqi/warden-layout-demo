import { defineConfig } from "umi";
import routes from './routes';
export default defineConfig({
  plugins: [
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',
    '@umijs/plugins/dist/locale'
  ],
  initialState: {},
  model: {},
  locale:{
    default:"en-US",
    baseSeparator: '-',
    baseNavigator: false,
    title: true,
  },  
  routes: routes,
  npmClient: 'yarn',  
  mfsu:false,
  define:{
    'process.env.ENABLE_SETTING':process.env.ENABLE_SETTING
  }
});
