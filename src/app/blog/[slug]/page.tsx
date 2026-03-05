import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, ChevronLeft, Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import Button from "@/components/ui/Button";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Related posts: other posts, max 3
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const isHTML = post.content.includes("<p>");

  return (
    <>
      {/* Article Header */}
      <section className="bg-white pt-8 pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-sans text-sm text-charcoal-light hover:text-terracotta transition-colors duration-300 mb-8"
          >
            <ChevronLeft size={16} />
            Back to Blog
          </Link>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="bg-terracotta text-white px-3 py-1 text-xs font-sans font-medium uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-charcoal-light font-sans text-sm">
            <div className="flex items-center gap-2">
              <User size={16} className="text-terracotta" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-terracotta" />
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-terracotta" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {isHTML ? (
            <div
              className="font-sans text-charcoal-light leading-relaxed space-y-6 [&>p]:mb-6 [&>p:last-child]:mb-0 text-base md:text-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <div className="font-sans text-charcoal-light leading-relaxed whitespace-pre-line text-base md:text-lg">
              {post.content}
            </div>
          )}
        </div>
      </section>

      {/* Author Bio Card */}
      <section className="pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-sage/30 flex items-center justify-center flex-shrink-0">
              <span className="font-serif text-2xl text-sage-dark">MC</span>
            </div>
            <div>
              <h3 className="font-serif text-xl text-charcoal mb-1">
                Maddy Canaday
              </h3>
              <p className="font-sans text-sm text-terracotta mb-3">
                Twin Cities Realtor &bull; Keller Williams Realty Integrity
              </p>
              <p className="font-sans text-sm text-charcoal-light leading-relaxed">
                A Twin Cities local, Maddy is a passionate real estate
                agent dedicated to helping clients find their perfect home in
                the Twin Cities. With deep local knowledge and a commitment to
                exceptional service, she guides buyers and sellers through every
                step of the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-charcoal text-center mb-10">
              More From the Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 bg-terracotta text-white px-3 py-1 text-xs font-sans font-medium uppercase tracking-wider">
                      {related.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <time className="font-sans text-xs text-charcoal-light">
                      {new Date(related.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h3 className="font-serif text-lg text-charcoal group-hover:text-terracotta transition-colors duration-300 mt-2 mb-3 line-clamp-2">
                      {related.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 font-sans text-sm text-terracotta font-medium uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                      Read More
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-sm uppercase tracking-widest text-terracotta-light mb-4">
            Stay in the Loop
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Have Questions About Twin Cities Real Estate?
          </h2>
          <p className="font-sans text-white/70 mb-8 leading-relaxed">
            Whether you&apos;re looking to buy, sell, or simply want to learn
            more about the Twin Cities market, I&apos;m always happy to chat.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
