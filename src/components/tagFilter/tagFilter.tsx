import React, { useRef } from "react"
import { Link } from "gatsby"
import type { GatsbyLinkProps } from "gatsby"
import styled from "styled-components"
import kebabCase from "lodash/kebabCase"

import type { MarkdownRemarkGroupConnection } from "Types/GraphQL"
import useScrollCenter from "./useScrollCenter"

const ACTIVE = "active"

interface TagFilterProps {
  tagList: MarkdownRemarkGroupConnection[],
  category: String
}

type LinkPropsGetter = GatsbyLinkProps<unknown>["getProps"]

const TagFilter: React.FC<TagFilterProps> = ({ tagList, category }) => {
  const tagRef = useRef<HTMLUListElement>(null)
  const ALL_TAG_NAME = "全部"
  const isActive: LinkPropsGetter = ({ isCurrent }) =>
    isCurrent ? { id: ACTIVE, tabIndex: -1 } : {}

  useScrollCenter({ ref: tagRef, targetId: ACTIVE })

  return (
    <Nav aria-label="Tag Filter">
      <TagTitle>分類標籤</TagTitle>
      <TagButton getProps={isActive} to={`/${category}/`}>
        {ALL_TAG_NAME}
      </TagButton>
      <Divider />
      <TagUl ref={tagRef} className="invisible-scrollbar">
        {tagList
          .sort((a, b) => b.totalCount - a.totalCount)
          .map(tag => {
            const { fieldValue } = tag
            return (
              <li key={fieldValue}>
                <TagButton
                  getProps={isActive}
                  to={`/${category}/tag/${kebabCase(fieldValue!)}/`}
                >
                  {fieldValue}
                </TagButton>
              </li>
            )
          })}
      </TagUl>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: var(--color-card);
  margin-bottom: 48px;
  padding: 12px var(--sizing-md);
  border-radius: var(--border-radius-base);

  a#active {
    color: var(--color-white);
    background-color: var(--color-blue);
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    padding: 12px;
  }
`

const TagTitle = styled.em`
  position: static;
  width: auto;
  height: auto;
  clip: auto;
  white-space: auto;

  flex-shrink: 0;
  font-size: var(--text-base);
  font-weight: var(--font-weight-semi-bold);
  font-style: initial;
  margin-right: var(--sizing-lg);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: no-wrap;
  }
`

const TagButton = styled(Link)`
  cursor: pointer;
  display: block;
  background-color: var(--color-tag-button);
  padding: var(--sizing-sm) var(--sizing-base);
  border-radius: var(--border-radius-base);
  font-size: 0.875rem;
  font-weight: var(--font-weight-semi-bold);

  :focus {
    outline: none;
  }

  &:hover {
    color: var(--color-white);
    background-color: var(--color-blue);
  }

  &:focus-visible {
    color: var(--color-white);
    background-color: var(--color-blue);
  }
`

const Divider = styled.div`
  width: 1px;
  height: 32px;
  margin: 0 var(--sizing-sm);
  transform: translateX(-50%);
  background-color: var(--color-divider);
`

const TagUl = styled.ul`
  display: flex;
  list-style: none;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  li + li {
    margin-left: 6px;
  }
`

export default TagFilter
