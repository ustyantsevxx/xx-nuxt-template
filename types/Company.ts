/* eslint-disable camelcase */

export type Company = {
  company_logo: {
    filename: string
    files: {
      url: string
    }
    filesize: number | null
    id: number
    original_filename: string
  }
  foundation_year: number
  industry: {
    id: number
    name: string
  }
  id: number
  name: string
  quantity_employees: number
  type: number
}
