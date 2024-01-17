import { Helmet } from 'react-helmet';

type HeadingProps = {
  heading: string;
  title?: string;
};

export function Heading({ heading, title }: HeadingProps) {
  return (
    <>
      <Helmet>
        <title>{title || heading} | Task Planner</title>
      </Helmet>

      <h1 className=" text-green-900 w-full text-center text-2xl font-semibold">
        {heading}
      </h1>
    </>
  );
}
