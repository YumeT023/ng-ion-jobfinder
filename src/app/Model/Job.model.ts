export default interface JobI {
  title: string;
  href: string;
  company: string;
  contract: string;
  description: string;
  limit_date: string;
  flag?: boolean,
  logo_company?: string
}