import type { Post } from "@/types/post";
import { formatDate } from "@/utils/formatDate";
import ReactMarkdown from "react-markdown";

export default function PostView(props: Post) {
  const { image, category, title, description, author, date, likes, content } =
    props;

  return (
    <div className="flex flex-col gap-[48px] px-[120px] py-[60px]">
      <img
        className="w-full h-[587px] object-cover rounded-2xl"
        src={image}
        alt={title}
      />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-4 w-[815px]">
          <div className="flex flex-row gap-4 items-center">
            <p className="category-tag-custom">{category}</p>
            <p className="text-body-1 text-brown-400">{formatDate(date)}</p>
          </div>
          <h2 className="text-headline-2 ">{title}</h2>
          <p className="text-headline-4 text-brown-500 py-[48px]">
            {description}
          </p>
          <div className="markdown">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>

        <div className="sticky top-[20px] flex flex-col gap-[20px]  w-[305px] h-fit bg-brown-200 p-[24px]">
          <div className="flex flex-row items-start gap-2">
            <img
              className="w-[44px] h-[44px] object-cover rounded-full"
              src={image}
              alt={author}
            />
            <div className="flex flex-col">
              <p className="text-body-3 text-brown-400">Auther</p>
              <p className="text-body-1 text-brown-500">{author}</p>
            </div>
          </div>
          <hr className="w-full h-[1px] bg-brown-300" />
          <p className="text-body-1 text-brown-400">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness. When i’m not writing,
            I spends time volunteering at my local animal shelter, helping cats
            find loving homes.
          </p>
        </div>
      </div>

      <p>{likes}</p>
    </div>
  );
}
