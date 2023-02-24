import axios from 'axios'

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USER || 'miajupiter'}/repos`,
  )

  return data
}

export const getCompanyInfo = async () => {
  if ((process.env.NEXT_PUBLIC_COMPANY_INFO || '').includes('://')) {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_COMPANY_INFO || 'https://raw.githubusercontent.com/miajupiter/.github/main/profile/README.md')
    return data
  } else {
    return process.env.NEXT_PUBLIC_COMPANY_INFO || ''
  }
}

export const getWeather = async (city: string) => {
  const { data } = await axios.get(`https://wttr.in/${city}?ATm`)

  return data
}

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random')

  return {
    quote: `"${data.content}" — ${data.author}`,
  }
}
