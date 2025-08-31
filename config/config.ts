import { defineConfig } from "umi";
import routes from './routes';
export default defineConfig({
  plugins: [
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',
    '@umijs/plugins/dist/access',
    '@umijs/plugins/dist/locale'
  ],
  initialState: {},
  model: {},
  access:{},
  icons:{
    include:[
      "local:scale",
      "local:wallet",
      "local:user-outlined",
      "local:lock-closed-outlined",
      "local:variable"
    ]
  },
  locale:{
    antd: true,
    default:"en-US",
    baseSeparator: '-',
    baseNavigator: false,
    title: true,
  },  
  routes: routes,
  npmClient: 'yarn',  
  mfsu:false,
  headScripts:[{ src: '/scripts/loading.js', async: true }],
  define:{
    "process.env.ENABLE_SETTING":process.env.ENABLE_SETTING,
    "process.env.ENABLE_CONFIG_STORAGE":process.env.ENABLE_CONFIG_STORAGE,
    'process.env.API_URI':process.env.API_URI
  }  
});