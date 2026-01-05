function HeroSection() {
  return (
    <>
      <div className="heroSection flex flex-row items-center justify-center gap-14.75 px-28.5 py-14.75 ">
        <div className="flex flex-col w-86.75 h-33.5 justify-center gap-6">
          <h1 className="text-right text-headline-1 text-brown-600">
            Stay <br /> Informed,<br /> Stay Inspired</h1>
          <p className="text-right text-body-1 text-brown-400">Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.</p>
        </div>
        <img
          src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
          alt="A man wearing a brown plaid shirt and knit beanie standing in a forest with yellow foliage, with a black and white cat perched on his shoulder."
          className="rounded-2xl aspect-retro w-96.5 h-132.25" />
        <div className="flex flex-col w-86.75 h-33.5 justify-center w-max-[347px]">
          <div className="flex flex-col gap-1">
            <p className="text-body-3 text-brown-400">- Author</p>
            <h1 className="text-headline-3 text-brown-500">Thompson P.</h1>
          </div>
          <p className="text-body-1 text-brown-400">
            I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.
            <br /><br />
            When i’m not writing, I spends time volunteering at my local animal shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;