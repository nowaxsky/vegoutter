import type { MarkdownRemarkFields, MarkdownRemarkFrontmatter } from "./GraphQL"

export default interface Post
  extends Pick<
    MarkdownRemarkFrontmatter,
    "title" | "desc" | "date" | "category" | "tags" | "alt"
  > {
  id: string
  slug: MarkdownRemarkFields["slug"]
  thumbnail?: string
}
