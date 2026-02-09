import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
import { usePaginatedPosts } from "@/hooks/usePaginatedPosts.ts";
import {
  fetchSuggestions,
  type Suggestion,
} from "@/services/posts/fetchSuggestions.ts";

const INITIAL_CATEGORY = "Highlight";

function ArticleSection() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(INITIAL_CATEGORY);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isFetchingSuggestions, setIsFetchingSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const { posts, isLoading, hasMore, loadMore, error } = usePaginatedPosts({
    category: activeCategory === INITIAL_CATEGORY ? "" : activeCategory,
  });

  const [allCategories, setAllCategories] = useState<string[]>([]);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      const newCategories = [...new Set(posts.map((post) => post.category))];
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAllCategories((prev) => [...new Set([...prev, ...newCategories])]);
    }
  }, [posts]);

  // Fetch suggestions from API with debouncing
  useEffect(() => {
    if (!searchTerm || searchTerm.length < 2) {
      setSuggestions([]);
      setIsFetchingSuggestions(false);
      return;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(async () => {
      setIsFetchingSuggestions(true);
      try {
        const results = await fetchSuggestions(searchTerm, controller.signal);
        setSuggestions(results);
        console.log(results);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      } finally {
        setIsFetchingSuggestions(false);
      }
    }, 300); // 300ms debounce

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [searchTerm]);

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
          <div className="relative" ref={searchRef}>
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
              onFocus={() => setShowSuggestions(true)}
            />

            {/* Auto-suggestion dropdown */}
            {showSuggestions && searchTerm && searchTerm.length >= 2 && (
              <div className="absolute top-full mt-2 w-72 lg:w-[360px] bg-white rounded-xl shadow-lg border border-brown-200 overflow-hidden z-50">
                {isFetchingSuggestions ? (
                  <div className="px-4 py-3 text-body-3 text-brown-400 text-center">
                    Loading suggestions...
                  </div>
                ) : suggestions.length > 0 ? (
                  <ul className="max-h-[280px] overflow-y-auto">
                    {suggestions.map((suggestion: Suggestion) => (
                      <li
                        key={suggestion.id}
                        className="px-4 py-3 hover:bg-brown-100 cursor-pointer transition-colors duration-150 text-body-3 text-brown-600 border-b border-brown-100 last:border-b-0"
                        onClick={() => {
                          navigate(`/post/${suggestion.id}`);
                          setShowSuggestions(false);
                        }}
                      >
                        {suggestion.title}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-3 text-body-3 text-brown-400 text-center">
                    No suggestions found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-4 py-6 lg:px-28.5 lg:pb-20 min-h-[400px]">
          {isLoading && posts.length <= 0 ? (
            <div className="col-span-full flex justify-center items-center py-20">
              <p className="text-headline-3 text-brown-400 animate-pulse">
                Loading articles...
              </p>
            </div>
          ) : error ? (
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
                id={post.id}
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
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              disabled={isLoading}
              className="border px-10 py-3 rounded-full hover:bg-black hover:text-white transition disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "View more"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ArticleSection;
