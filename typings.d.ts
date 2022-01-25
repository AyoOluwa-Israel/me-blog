export interface Post {
  _id: string
  slug: {
    current: string
  }
  _createdAt: string
  description: string
  body: [object]
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
