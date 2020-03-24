import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../../../../common/src/components/UI/Container"
import Heading from "../../../../common/src/components/Heading"
import BlogPost from "../../../../common/src/components/BlogPost"
import SectionWrapper, {
  SectionHeader,
  TitleArea,
  LinkArea,
  Text,
  PostArea,
} from "./blogSection.style"

const BlogSection = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        posts {
          id
          thumbUrl {
            publicURL
          }
          title
          excerpt
          btnUrl
          btnText
        }
      }
    }
  `)

  return (
    <SectionWrapper id="blog">
      <Container width="1260px">
        <SectionHeader>
          <TitleArea>
            <Heading content="Blog e notícias atualizadas" />
            <Text>
              Acompanhe nossas atualizações.
              {/* <a href="/" className="link">
                Join us on Community
              </a> */}
            </Text>
          </TitleArea>
          <LinkArea>
            <a href="/" className="text__btn">
              <span className="text">Ver todos</span>
              <span className="arrow" />
            </a>
          </LinkArea>
        </SectionHeader>
        <PostArea>
          {data.charityJson.posts.map(item => (
            <BlogPost
              key={`blog__post-key${item.id}`}
              thumbUrl={item.thumbUrl.publicURL}
              title={item.title}
              excerpt={item.excerpt}
              link={
                <a className="learn__more-btn" href={item.btnUrl}>
                  <span className="hyphen"></span>
                  <span className="btn_text">{item.btnText}</span>
                </a>
              }
            />
          ))}
        </PostArea>
      </Container>
    </SectionWrapper>
  )
}

export default BlogSection
