import { StyledLink } from '@/components/StyledLink';

export const SectionHeader = ({
  heading,
  href,
  linkLabel,
}: {
  heading: string;
  href: string;
  linkLabel: string;
}) => (
  <div className='mb-10 flex flex-col items-end justify-between gap-5 md:mb-16 md:flex-row'>
    <h2 className='mr-auto text-2xl font-semibold md:mr-0 md:text-4xl'>
      {heading}
    </h2>
    <StyledLink href={href} className='text-sm md:text-lg' variant='underline'>
      {linkLabel}
    </StyledLink>
  </div>
);
