module.exports = {
  reactStrictMode: true,

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      {
        source: '/coaching/become-a-professional-coach',
        destination: '/coaching/become-a-professional-coach-marketing',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/gtd-assessment',
        destination: '/cruciallifechangingskills/assessment/gtd-assessment-marketing',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/influencer-assessment',
        destination: '/cruciallifechangingskills/assessment/influencer-assessment-marketing',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/the-power-of-habit-assessment',
        destination: '/cruciallifechangingskills/assessment/the-power-of-habit-assessment-marketing',
        permanent: true,
      },

      {
        source: '/cruciallifechangingskills/assessment/what-would-you-do-assessment',
        destination: '/cruciallifechangingskills/assessment/what-would-you-do-assessment-marketing',
        permanent: true,
      },

      {
        source: '/jenson-8/jenson-8-survey',
        destination: '/jenson-8/jenson-8-survey-marketing',
        permanent: true,
      },

      {
        source: '/leader-behaviour-assessment',
        destination: '/leader-behaviour-assessment-marketing',
        permanent: true,
      },

      {
        source: '/leader-behaviour-assessment2',
        destination: '/leader-behaviour-assessment-sales',
        permanent: true,
      },

      {
        source: '/coaching/coaching-snapshot',
        destination: '/coaching/coaching-snapshot-marketing',
        permanent: true,
      },

      {
        source: '/coaching/coaching-snapshot-internal-assessment',
        destination: '/coaching/coaching-snapshot-sales',
        permanent: true,
      },

      {
        source: '/coaching/become-a-professional-coach-sales',
        destination: '/coaching/become-a-professional-coach-pre-program-assessment',
        permanent: true,
      },

      {
        source: '/coaching/coaching-snapshot-sales',
        destination: '/coaching/coaching-snapshot-pre-program-assessment',
        permanent: true,
      },

      

      

    ]
  },
}


