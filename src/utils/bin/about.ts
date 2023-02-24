import { getCompanyInfo } from '../../api'

export const about = async (args: string[]): Promise<string> => {
  const companyInfo = await getCompanyInfo()

  return companyInfo
}
