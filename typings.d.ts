export interface Post {
  _id: string
  slug: {
    current: string
  }
  _createdAt: string
  description: string
  body: [object]
  comments: Comment[]
  mainImage: {
    asset: {
      url: string
    }
  }
  title: string
  author: {
    name: string
    image: string
  }
}

export interface Comment {
  approved: boolean
  comment: string
  email: string
  name: string
  post: {
    _ref: string
    _type: string
  }
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  updatedAt: string
}
