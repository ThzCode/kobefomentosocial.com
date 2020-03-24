import React, { Fragment } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Icon } from "react-icons-kit"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { chevronRight } from "react-icons-kit/feather/chevronRight"
import Image from "gatsby-image"
import Text from "../../../../common/src/components/Text"
import Heading from "../../../../common/src/components/Heading"
import GlideCarousel from "../../../../common/src/components/GlideCarousel"
import GlideSlide from "../../../../common/src/components/GlideCarousel/glideSlide"
import LeftBar from "./leftBar"
import BannerWrapper, {
  ContentWrapper,
  TextArea,
  ImageArea,
  HighlightedText,
} from "./bannerSection.style"

const BannerSection = () => {
  const glideOptions = {
    type: "carousel",
    perView: 1,
    gap: 0,
  }

  const data = useStaticQuery(graphql`
    query {
      charityJson {
        bannerSlides {
          id
          thumb_url {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <BannerWrapper>
      <LeftBar text="VER MAIS" offset={81} sectionId="#feature" />
      <ContentWrapper>
        <TextArea>
          <AnchorLink href="#milestone" offset={81}>
            <HighlightedText className="highlighted_text">
              <strong>Novo</strong> Campanha do Agasalho.
              <Icon icon={chevronRight} />
            </HighlightedText>
          </AnchorLink>

          <Heading content="Ressocialização: Mão de obra prisional" />
          <Heading as="h4" content="Parceiro de Projetos Sociais." />
          <Text
            content="Projeto de Ressocialização na Penitenciária Central do Estado Paraná- Unidade de Progressão - desde 2017.
    "
          />
          <AnchorLink className="learn__more-btn" href="#branch" offset={81}>
            <span className="hyphen" />
            <span className="btn_text">Saiba mais</span>
          </AnchorLink>
        </TextArea>
        <ImageArea>
          <GlideCarousel
            carouselSelector="charitySlide"
            options={glideOptions}
            nextButton={<span className="next_arrow" />}
            prevButton={<span className="prev_arrow" />}
          >
            <Fragment>
              {data.charityJson.bannerSlides.map(slide => (
                <GlideSlide key={slide.id}>
                  <Image
                    fluid={
                      (slide.thumb_url !== null) | undefined
                        ? slide.thumb_url.childImageSharp.fluid
                        : {}
                    }
                    alt={`Charity slide image ${slide.id}`}
                    className="slide_image"
                  />
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>
        </ImageArea>
      </ContentWrapper>
    </BannerWrapper>
  )
}

export default BannerSection
