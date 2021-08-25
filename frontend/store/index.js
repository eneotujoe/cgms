export const state = () => ({
    siteName: 'CHURCH GMS',
    navItems: [
      { title: 'Sermon', to: '/sermon', },
      { title: 'Giving', to: '/giving', },
      { title: 'Events', to: '/events', },
      { title: 'About', to: '/about', },
      ],
    socialLinks: [
        {
          title: 'facebook',
          icon: 'mdi-facebook',
          url: 'https://facebook.com/',
        },
        {
          title: 'twitter',
          icon: 'mdi-twitter',
          url: 'https://twitter.com/',
        },
        {
          title: 'instagram',
          icon: 'mdi-instagram',
          url: 'https://www.instagram.com/',
        },
        {
          title: 'linkedIn',
          icon: 'mdi-linkedin',
          url: 'https://www.linkedin.com/company//',
        },
    ],
})
export const getters = {
    siteName: (state) => state.siteName,
    navItems: (state) => state.navItems,
    socialLinks: (state) => state.socialLinks,
}
