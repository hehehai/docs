import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	server: {
		port: 3000,
		host: true,
	  },
  integrations: [	
	tailwind({
	// Disable the default base styles:
	applyBaseStyles: false,
  }),
  starlight({
	// customCss: [
    //     // Path to your Tailwind base styles:
    //     './src/tailwind.css',
    //   ],
    disable404Route: true,
    title: 'Dokploy',
    defaultLocale: 'root',
    favicon: '/favicon.svg',
    head: [
      // {
      // 	// add google analyticis v4
      // 	tag:"script",
      // 	content:`
      // 		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      // 		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      // 		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      // 		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      // 			ga('create', 'G-V6R8RKTK9T', 'auto');
      // 			ga('send', 'pageview');	
      // 	    `,
      // 		attrs: {
      // 			async: true,
      // 			defer: true,
      // 		},
      // }
    ],
    locales: {
      root: {
        label: 'English',
        lang: 'en'
      },
      'zh-cn': {
        label: '简体中文',
        lang: 'zh-CN'
      }
    },
    social: {
      github: 'https://github.com/dokploy/dokploy'
    },
    sidebar: [{
      label: 'Get Started',
      items: [{
        label: 'Introduction',
        link: '/get-started/introduction'
      }, {
        label: 'Installation',
        link: '/get-started/installation'
      }, {
        label: 'Reset Password',
        link: '/get-started/reset-password'
      }, {
        label: 'Uninstall',
        link: '/get-started/uninstall'
      }]
    }, {
      label: 'Domain',
      items: [{
        label: 'Web Domain Setup',
        link: '/domains/web-domain-setup'
      }, {
        label: 'Application Setup',
        link: '/domains/application-setup'
      }]
    }, {
      label: 'Server',
      items: [{
        label: 'Overview',
        link: '/server/overview'
      }]
    }, {
      label: 'Application',
      items: [{
        label: 'Overview',
        link: '/application/overview'
      }, {
        label: 'Build Type',
        link: '/application/build-type'
      }]
    }, {
      label: 'Databases',
      items: [{
        label: 'Overview',
        link: '/databases/overview'
      }, {
        label: 'Backups',
        link: '/databases/backups'
      }]
    }, {
      label: 'Traefik',
      items: [{
        label: 'Overview',
        link: '/traefik/overview'
      }]
    }, {
      label: 'Docker',
      items: [{
        label: 'Overview',
        link: '/docker/overview'
      }]
    }, {
      label: 'Monitoring',
      items: [{
        label: 'Overview',
        link: '/monitoring/overview'
      }]
    }, {
      label: 'Deployment',
      items: [{
        label: 'Oracle Cloud',
        link: '/deployment/oracle-cloud'
      }]
    }, {
      label: 'Extra',
      items: [{
        label: 'Comparison',
        link: '/extra/comparison'
      }]
    }]
  }), tailwind()]
});