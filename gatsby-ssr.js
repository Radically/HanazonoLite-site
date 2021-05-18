import { Helmet } from "react-helmet";

// https://github.com/gatsbyjs/gatsby/issues/22206
export function onRenderBody(
  { setHeadComponents, setHtmlAttributes, setBodyAttributes },
  pluginOptions
) {
  const helmet = Helmet.renderStatic();
  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setBodyAttributes(helmet.bodyAttributes.toComponent());
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ]);
}

export function onPreRenderHTML({ getHeadComponents, replaceHeadComponents }) {
  const headComponents = getHeadComponents();

  headComponents.sort((x, y) => {
    if (x.props && x.props["data-react-helmet"]) {
      return -1;
    } else if (y.props && y.props["data-react-helmet"]) {
      return 1;
    }
    return 0;
  });

  replaceHeadComponents(headComponents);
}
