import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  return (
    <Layout>
      <section className="gradient-hero section-padding">
        <div className="container-main">
          <Link to="/blog">
            <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground mb-4 -ml-2">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog
            </Button>
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium">
              {post.tag}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground mt-4 mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            className="prose prose-lg max-w-none"
          >
            {post.content.map((block, i) => {
              if (block.startsWith("### ")) {
                return <h3 key={i} className="text-xl font-heading font-bold text-foreground mt-8 mb-3">{block.replace("### ", "")}</h3>;
              }
              if (block.startsWith("## ")) {
                return <h2 key={i} className="text-2xl font-heading font-bold text-foreground mt-10 mb-4">{block.replace("## ", "")}</h2>;
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").filter(Boolean);
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2 text-muted-foreground my-4">
                    {items.map((item, j) => {
                      const text = item.replace(/^- /, "");
                      const parts = text.split(/(\*\*.*?\*\*)/g);
                      return (
                        <li key={j}>
                          {parts.map((part, k) =>
                            part.startsWith("**") && part.endsWith("**")
                              ? <strong key={k} className="text-foreground">{part.slice(2, -2)}</strong>
                              : part
                          )}
                        </li>
                      );
                    })}
                  </ul>
                );
              }
              // Regular paragraph — handle inline bold
              const parts = block.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                  {parts.map((part, k) =>
                    part.startsWith("**") && part.endsWith("**")
                      ? <strong key={k} className="text-foreground">{part.slice(2, -2)}</strong>
                      : part
                  )}
                </p>
              );
            })}
          </motion.article>

          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/blog">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
