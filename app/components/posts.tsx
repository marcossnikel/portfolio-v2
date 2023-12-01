"use client";
import { format } from 'date-fns';
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

type Article = {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id?: number;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string;
  crossposted_at?: string;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: {
    name: string;
    username: string;
    twitter_username?: string;
    github_username: string;
    user_id: number;
    website_url?: string;
    profile_image: string;
    profile_image_90: string;
  };
};

export default function Articles() {
  const [articles, setArticles] = useState();

  const username = "marcossnikel";
  const key = process.env.DEVTO_API_KEY;

  useEffect(() => {
    axios
      .get(`https://dev.to/api/articles?username=${username}`, {
        headers: {
          "api-key": key,
        },
      })
      .then((res) => {
        setArticles(res.data);
      });
  }, [articles, key, username]);
  return (
    
    // ...

    <div>
      {articles ? (
        articles.map((article: Article) => (
          <div key={article.id} className="article-container">
            <Link
              href={article.canonical_url}
              className="text-zinc-200 flex justify-between article-link  leading-6"
            >
             <p className='hover:underline hover:underline-offset-4'> {article.title}</p>
              <p className="article-date">
                {format(new Date(article.published_at), 'dd/MM/yyyy')}
              </p>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading articles...</p>
      )}
    </div>
  );
}
  