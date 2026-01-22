import { useState,useEffect } from "react";
import TabButton from "../common/TabButton.tsx";
import { Input } from "./input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BlogCard from "../common/BlogCard.tsx";
import { useGetPosts } from "@/hooks/useGetPosts.ts";

const INITIAL_CATEGORY = "Highlight";
function ArticleSection() {
  const [activeCategory, setActiveCategory] = useState(INITIAL_CATEGORY);
  const [searchTerm, setSearchTerm] = useState("");

  const { posts, isLoading, isError } = useGetPosts({
    category: activeCategory === INITIAL_CATEGORY ? "" : activeCategory,
    search: searchTerm,
  });

  // Get unique categories from posts only when not filtering,
  // or use a fixed list if categories are standard.
  // For now, let's keep track of all categories we've seen.
  const [allCategories, setAllCategories] = useState<string[]>([]);

  useEffect(() => {
    if (posts.length > 0) {
      const newCategories = [...new Set(posts.map((post) => post.category))];
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAllCategories((prev) => [...new Set([...prev, ...newCategories])]);
    }
  }, [posts]);

  const uniqueCategories = [INITIAL_CATEGORY, ...allCategories];

  return (
    <>
      <section
        aria-label="Article Section"
        className="flex flex-col items-start justify-center gap-8 lg:px-28.5 pb-12"
      >
        <h1 className="text-headline-3 text-brown-600">Latest articles</h1>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-brown-200 w-full  lg:h-20 w-max-[1200px] lg:h-max-[80px] lg:rounded-2xl px-6 py-2">
          <div className="hidden xl:flex lg:flex-row">
            {uniqueCategories.map((category) => (
              <TabButton
                key={category}
                label={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
          <div className="flex xl:hidden">
            <Select
              value={activeCategory}
              onValueChange={(value) => setActiveCategory(value)}
            >
              <SelectTrigger className=" w-max-72 w-72 sm:w-72 lg:w-[360px] !h-12 py-0 pl-10">
                <SelectValue placeholder="Select a topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Topic</SelectLabel>
                  {uniqueCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="relative">
            <Search
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brown-400"
              size={20}
            />
            <Input
              className="w-max-[360px] w-72 lg:w-[360px] h-12 pl-10 placeholder:text-brown-400 placeholder:text-body-3"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-4 py-6 lg:px-28.5 lg:pb-20 min-h-[400px]">
          {isLoading ? (
            <div className="col-span-full flex justify-center items-center py-20">
              <p className="text-headline-3 text-brown-400 animate-pulse">
                Loading articles...
              </p>
            </div>
          ) : isError ? (
            <div className="col-span-full flex justify-center items-center py-20 text-center">
              <div>
                <p className="text-headline-4 text-red-500 mb-2">
                  Oops! Something went wrong.
                </p>
                <p className="text-body-1 text-brown-400">
                  Failed to load articles. Please check your connection and try
                  again.
                </p>
              </div>
            </div>
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <BlogCard
                key={post.id}
                image={post.image}
                category={post.category}
                title={post.title}
                description={post.description}
                author={post.author}
                date={post.date}
              />
            ))
          ) : (
            <div className="col-span-full flex justify-center items-center py-20">
              <p className="text-body-1 text-brown-400">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* view more */}
      <div className="flex flex-col justify-center items-center pb-20">
        <button type="button" className="text-body-1 hover:text-gray-400">
          <u>View more </u>
        </button>
      </div>
    </>
  );
}

export default ArticleSection;
