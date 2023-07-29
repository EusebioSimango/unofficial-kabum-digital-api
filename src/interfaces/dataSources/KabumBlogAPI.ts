import { BlogPostRepository } from '../../domain/repositories/BlogPostRepository';
import { 
  getAllPosts, 
  getBlogPostsLinks, 
  getPagePosts, 
  getPostDataById 
} from '../../adapters/kabumScrapingAdapter';

export class KabumBlogAPI implements BlogPostRepository {
  async getBlogPostsLinks(category: "mostread" | "all" | "latest", page?: number): Promise<string[]> {
    return getBlogPostsLinks(category, page);
  };

  async getPostDataById(id: string) {
    return getPostDataById(id);
  };

  async getPagePosts(page: number) {
    return getPagePosts(page);
  }

  async getAllPosts() {
    return getAllPosts();
  }
};
