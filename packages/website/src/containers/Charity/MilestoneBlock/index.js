import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Text from "../../../../common/src/components/Text"
import Heading from "../../../../common/src/components/Heading"
import Container from "../../../../common/src/components/UI/Container"
import Countdown from "../Countdown"
import SectionMilestone from "./milestoneBlock.style"
import BlockWrapper, {
  MilestoneCard,
  CounterWrapper,
  CounterItem,
} from "./milestoneBlock.style"

const MilestoneBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        milestoneData {
          title
          amount
          text
          counterItems {
            id
            amount
            title
          }
        }
      }
    }
  `)

  const { title, amount, text, counterItems } = data.charityJson.milestoneData

  return (
    <Container width="1460px">
      <BlockWrapper id="milestone">
        <MilestoneCard>
          <Text content={title} />

          <Countdown
            timeTillDate="03 22 2020, 10:00 am"
            timeFormat="MM DD YYYY, h:mm a"
          />
          {/* <Heading content={amount} /> */}
          {/* <Text content={text} /> */}
          <a href="/" className="learn__more-btn">
            <span className="hyphen" />
            <span className="btn_text">Quero Ser Voluntário</span>
          </a>
        </MilestoneCard>
      </BlockWrapper>
      <CounterWrapper>
        {counterItems.map(item => (
          <CounterItem key={`counter_key${item.id}`}>
            <Heading as="h3" content={item.amount} />
            <Text content={item.title} />
          </CounterItem>
        ))}
      </CounterWrapper>
    </Container>
  )
}

export default MilestoneBlock
