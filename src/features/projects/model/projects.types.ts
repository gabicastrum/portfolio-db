export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  image?: string
  githubUrl?: string
  liveUrl?: string
}

export type ProjectCardProps = Project
