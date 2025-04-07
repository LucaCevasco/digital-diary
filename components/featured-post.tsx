import { Post } from "@/content/posts"
import { PostCard } from "./post-card"

interface FeaturedPostProps {
  post: Post;
  isGlitchy?: boolean;
}

export default function FeaturedPost({ post, isGlitchy = true }: FeaturedPostProps) {
  return <PostCard post={post} isGlitchy={isGlitchy} />;
}

