import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="From the Blog" subtitle="INSIGHTS & TIPS" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category badge */}
                <span className="inline-block px-3 py-1 bg-terracotta/10 text-terracotta text-xs font-sans font-medium uppercase tracking-wider mb-4">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl text-charcoal leading-snug group-hover:text-terracotta transition-colors duration-300 mb-3">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="font-sans text-sm text-charcoal-light leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                {/* Date & Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="font-sans text-xs text-charcoal-light">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="font-sans text-sm text-terracotta font-medium uppercase tracking-wide group-hover:underline">
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Posts */}
        <div className="text-center mt-12">
          <Button href="/blog" variant="outline" size="lg">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}
