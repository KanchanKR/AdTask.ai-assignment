/* eslint-disable react/prop-types */


const SVGRenderer = ({ svgString }) => {
  const cleanedSvg = svgString.replace(
    '<path fill="#ffffff" d="M0 0h192.744v192.744H0V0z"></path>',
    ""
  );
  return <div dangerouslySetInnerHTML={{ __html: cleanedSvg }} />;
};

export default SVGRenderer;
