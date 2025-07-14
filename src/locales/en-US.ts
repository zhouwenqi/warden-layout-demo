import components from './en-US/components';
import menus from './en-US/menus';
import titles from './en-US/titles';
import pages from './en-US/pages';
export default {
  'app.name': 'Warden',
  'app.main.brandTitle': 'Warden System',
  'app.company.brandTitle': 'The second layout',
  'app.copyright.info': 'Powered by 2025 © warden.vip', 
  'error.page.404.message': 'Sorry, the page you visited does not exist.',
  'error.page.403.message':
    'Sorry, you are not authorized to access this page.',
  'error.page.back.button': 'Back Home',
  'global.button.view':'view',
  'global.button.edit':'edit',
  'global.button.exit':'exit',
  'global.button.more':'more',
  
  ...components,
  ...menus,
  ...titles,
  ...pages,
};
