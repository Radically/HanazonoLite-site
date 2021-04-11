import React from "react";
import { Container, Blurb } from "./common";
import { useStaticQuery, graphql } from "gatsby";

export default (props) => {
  const moreinfo = useStaticQuery(graphql`
    query MoreInfoQuery {
      markdownRemark(fileAbsolutePath: { regex: "/more-info.md/" }) {
        html
      }
    }
  `);

  return (
    <Container>
      <Blurb
        style={{
          fontFamily: "var(--default-latin-sans), Hanazono Mincho Lite CJK",
        }}
        dangerouslySetInnerHTML={{ __html: moreinfo.markdownRemark.html }}
      ></Blurb>
    </Container>
  );
};
