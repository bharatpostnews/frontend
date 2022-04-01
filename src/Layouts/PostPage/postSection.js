import React from "react";
import Image from "next/image";
import { BsPersonCircle, BsClockFill } from "react-icons/bs";
import PostSocialShare from "../../components/extra/postSocialShare";
function PostSection({ final }) {
  const {
    title,
    excerpt,
    content,
    date,
    slug,
    featuredImage,
    categories,
    author,
  } = final?.post;
  /// excerpt filtering
  const modifiedexcerpt = excerpt.split(/[<p>]/);
  /// date filtering
  const date2 = date.split(/[-,T]/);
  const modifieddate = `${date2[2]}-${date2[1]}-${date2[0]}`;
  let content2 = content.replace(/\n/g, "<br />");

  //////// pasing social sharing links
  const postsharinglinks = {
    facebook: `https://www.facebook.com/sharer.php?u=[https://bharatpostnews.com/news/${slug}]`,
    twitter: `https://twitter.com/share?url=[https://bharatpostnews.com/news/${slug}]&text=[${title}]
`,
    telegram: `https://t.me/share/url?url={https://bharatpostnews.com/news/${slug}}&text={${title}}`,
    instagram: "http://bharatpostnews.com/",
    whatsapp: `whatsapp://send?text=${title} + https://bharatpostnews.com/news/${slug}`,
  };

  return (
    <div className="border-b-4 border-third mb-4 pb-10">
      {/* title of news */}
      <div className="lg:text-4xl text-3xl font-semibold font-hd text-third2 mb-3">
        <h1>{title}</h1>
      </div>
      {/* excerpt */}
      <div className=" font-bd2 font-medium lg:text-2xl text-xl text-extra mb-1">
        <p>{excerpt && modifiedexcerpt[3]}</p>
      </div>
      {/* featured Image */}
      <div className="lg:mb-3 py-5">
        {featuredImage ? (
          <Image
            src={featuredImage?.node?.sourceUrl}
            width={450}
            height={265}
            layout="responsive"
          />
        ) : (
          <Image
            src="https://wpdata.bharatpostnews.com/wp-content/uploads/2022/03/noimage-def.webp"
            width={450}
            height={265}
            layout="responsive"
            priority
          />
        )}
      </div>
      {/* author name, post time , social icons */}
      <div className="flex lg:flex-row flex-col mb-7 justify-between lg:items-center lg:gap-0 gap-3">
        <div className="flex lg:flex-col flex-row gap-2">
          <div className="flex justify-start items-center gap-2">
            <BsPersonCircle className="text-2xl text-extra" />
            {author?.node?.name}
          </div>
          <div className="flex justify-start items-center gap-2">
            <BsClockFill className="text-2xl text-extra" />
            {modifieddate}
          </div>
        </div>
        <div>
          <PostSocialShare postsharinglinks={postsharinglinks} />
        </div>
      </div>
      {/* post content */}
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="font-bd2 font-medium text-xl text-third2"
      ></div>
    </div>
  );
}

export default PostSection;
