import type { Post } from "@/types/post";
import { formatDate } from "@/utils/formatDate";
import ReactMarkdown from "react-markdown";
import { SmilePlus, Copy, Facebook, Linkedin, Twitter, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function PostView(props: Post & { isLogin: boolean }) {
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);
  const {
    isLogin,
    image,
    category,
    title,
    description,
    author,
    date,
    likes,
    content,
  } = props;

  const handleClickFactookButton = () => {
    window.open("https://www.facebook.com", "_blank");
  };

  const handleClickLinkedinButton = () => {
    window.open("https://www.linkedin.com", "_blank");
  };

  const handleClickTwitterButton = () => {
    window.open("https://www.twitter.com", "_blank");
  };

  const handleClickCopyButton = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.custom((t) => (
      <div className="flex flex-row justify-between items-start w-[356px] bg-[#22C55E] p-4 rounded-lg shadow-lg">
        <div className="flex flex-col gap-1">
          <h3 className="text-body-1 font-bold text-white">Copied!</h3>
          <p className="text-body-2 text-white">
            This article has been copied to your clipboard.
          </p>
        </div>
        <button
          onClick={() => toast.dismiss(t)}
          className="text-white hover:text-gray-100 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    ));
  };

  const handleOpenOverlay = () => {
    if (!isLogin) setOverlayIsOpen(true);
  };

  const handleClickSendButton=()=>{
    handleOpenOverlay();

  }


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

          <div className="flex flex-row justify-between items-center h-[100px] mt-[48px] px-[24px] py-[16px] rounded-xl bg-brown-200">
            <button className="flex flex-row gap-2 items-center bg-white px-6 py-2 rounded-full border border-brown-300 hover:bg-brown-100 transition-colors">
              <SmilePlus size={20} className="text-black" />
              <span className="text-body-2 font-bold">{likes}</span>
            </button>

            <div className="flex flex-row gap-3">
              <button
                className="flex flex-row gap-2 items-center bg-white px-4 py-2 rounded-full border border-brown-300 hover:bg-brown-100 transition-colors"
                onClick={handleClickCopyButton}
              >
                <Copy size={20} className="text-black" />
                <span className="text-body-2 font-bold">Copy</span>
              </button>
              <button
                className="p-3 bg-white rounded-full border border-brown-300 hover:bg-brown-100 transition-colors"
                onClick={handleClickFactookButton}
              >
                <Facebook size={20} className="text-black" />
              </button>
              <button
                className="p-3 bg-white rounded-full border border-brown-300 hover:bg-brown-100 transition-colors"
                onClick={handleClickLinkedinButton}
              >
                <Linkedin size={20} className="text-black" />
              </button>
              <button
                className="p-3 bg-white rounded-full border border-brown-300 hover:bg-brown-100 transition-colors"
                onClick={handleClickTwitterButton}
              >
                <Twitter size={20} className="text-black" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <h3 className="text-headline-4 font-bold">Comment</h3>
            <textarea
              className="w-full h-[120px] p-4 rounded-xl border border-brown-300 resize-none text-body-2 focus:outline-none focus:border-brown-500"
              placeholder="What are your thoughts?"
            ></textarea>
            <div className="flex justify-end">
              <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
              onClick={handleClickSendButton}>
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="sticky top-[20px] flex flex-col gap-[20px] w-[305px] h-fit bg-brown-200 rounded-xl p-[24px]">
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

      {overlayIsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative flex flex-col items-center gap-8 bg-white p-12 rounded-[24px] shadow-xl w-[500px]">
            <button
              className="absolute right-6 top-6 text-gray-400 hover:text-black transition-colors"
              onClick={() => setOverlayIsOpen(false)}
            >
              <X size={24} />
            </button>

            <h2 className="text-center text-[28px] leading-tight font-bold pt-2">
              Create an account to <br /> continue
            </h2>

            <div className="flex flex-col items-center gap-6 w-full">
              <button className="w-[200px] h-[48px] bg-black text-white text-[16px] font-medium rounded-full hover:bg-gray-800 transition-colors">
                Create account
              </button>

              <p className="text-center text-body-1 text-gray-500">
                Already have an account?{" "}
                <button className="text-black font-bold underline decoration-1 underline-offset-4">
                  Log in
                </button>
              </p>
            </div>
          </div>
        </div>
      )};

    </div>
  );
}
