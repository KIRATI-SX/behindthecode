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

const highLightTab = ["Highlight", "Cat", "Inspiration", "Ganeral"];

function ArticleSection() {
  return (
    <>
      <section
        aria-label="Article Section"
        className="flex flex-col items-start justify-center gap-8 lg:px-28.5 pb-12"
      >
        <h1 className="text-headline-3 text-brown-600">Latest articles</h1>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-brown-200 w-full  lg:h-20 w-max-[1200px] lg:h-max-[80px] lg:rounded-2xl px-6 py-2">
          <div className="hidden xl:flex lg:flex-row">
            {highLightTab.map((tap) => (
              <TabButton label={tap} />
            ))}
          </div>
          <div className="flex xl:hidden">
            <Select>
              <SelectTrigger className=" w-max-72 w-72 sm:w-72 lg:w-[360px] !h-12 py-0 pl-10">
                <SelectValue placeholder="Select a topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Topic</SelectLabel>
                  {
                    highLightTab.map((tap)=><SelectItem value={tap.toLowerCase()}>{tap}</SelectItem>)
                  }
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
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ArticleSection;
