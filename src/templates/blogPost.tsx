import React, { useRef } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import kebabCase from "lodash/kebabCase"

import type { Query, MarkdownRemarkGroupConnection } from "Types/GraphQL"
import Layout from "Layouts/layout"
import SEO from "Components/seo"
import Comment from "Components/comment"
import { rhythm } from "Styles/typography"
import Category from "Styles/category"
import DateTime from "Styles/dateTime"
import Markdown from "Styles/markdown"
import { DOMAINS } from "Constants/domain"

interface BlogPostProps {
  data: Query
  tagList: MarkdownRemarkGroupConnection[],
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark!
  const { title, desc, thumbnail, date, category, tags } = frontmatter!

  const ogImagePath = thumbnail && thumbnail?.childImageSharp?.gatsbyImageData?.src
  const tagRef = useRef<HTMLUListElement>(null)
  const domainDescription = DOMAINS.find(domain => domain.name === category)?.description

  return (
    <Layout>
      <SEO title={title} desc={desc} image={ogImagePath!} />
      <main>
        <article>
          <OuterWrapper>
            <InnerWrapper>
              <div>
                <header>
                  <Info>
                    <PostCategory>{domainDescription}</PostCategory>
                    <PostTag ref={tagRef} className="invisible-scrollbar">
                      {tags
                        .map(tag => {
                          return (
                            <li key={tag}>
                              <TagButton
                                to={`/${category}/tag/${kebabCase(tag!)}/`}
                              >
                                #{tag}
                              </TagButton>
                            </li>
                          )
                        })}
                    </PostTag>
                    <br />
                    <Time dateTime={date}>{date}</Time>
                  </Info>
                  <Title>{title}</Title>
                  <Desc>{desc}</Desc>
                </header>
                <Divider />
                <Markdown
                  dangerouslySetInnerHTML={{ __html: html ?? "" }}
                  rhythm={rhythm}
                />
              </div>
            </InnerWrapper>
          </OuterWrapper>
        </article>
        <CommentWrap>
          <Comment />
        </CommentWrap>
      </main>
    </Layout>
  )
}

const OuterWrapper = styled.div`
  margin-top: var(--sizing-xl);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    margin-top: var(--sizing-lg);
  }
`

const InnerWrapper = styled.div`
  width: var(--post-width);
  margin: 0 auto;
  padding-bottom: var(--sizing-lg);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: 87.5%;
  }
`

const CommentWrap = styled.section`
  width: 100%;
  padding: 0 var(--padding-sm);
  margin: 0 auto;
  margin-bottom: var(--sizing-xl);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: auto;
  }
`

const PostCategory = styled(Category)`
  font-size: 0.875rem;
  font-weight: var(--font-weight-semi-bold);
`

const Info = styled.div`
  margin-bottom: var(--sizing-md);
`

const Time = styled(DateTime)`
  display: block;
  margin-top: var(--sizing-xs);
`

const Desc = styled.p`
  margin-top: var(--sizing-lg);
  line-height: 1.5;
  font-size: var(--text-lg);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    line-height: 1.31579;
    font-size: 1.1875rem;
  }
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-gray-3);
  margin-top: var(--sizing-lg);
  margin-bottom: var(--sizing-lg);
`

const Title = styled.h1`
  font-weight: var(--font-weight-bold);
  line-height: 1.1875;
  font-size: var(--text-xl);

  @media (max-width: ${({ theme }) => theme.device.md}) {
    line-height: 1.21875;
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    line-height: 1.21875;
    font-size: 2rem;
  }
`

const PostTag = styled.ul`
  font-size: 0.875rem;
  font-weight: var(--font-weight-semi-bold);
  display: flex;
  list-style: none;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  li + li {
    margin-left: 6px;
  }
`

const TagButton = styled(Link)`
  cursor: pointer;
  display: block;
  background-color: var(--color-tag-button);
  border-radius: var(--border-radius-base);
  font-size: 0.875rem;
  font-weight: var(--font-weight-semi-bold);

  :focus {
    outline: none;
  }

  &:hover {
  }

  &:focus-visible {
    color: var(--color-white);
    background-color: var(--color-blue);
  }
`

export const query = graphql`query ($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
      desc
      thumbnail {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FIXED)
        }
      }
      date(formatString: "YYYY-MM-DD")
      category
      tags
    }
  }
}
`

export default BlogPost
