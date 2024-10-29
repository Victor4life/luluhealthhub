import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaShare } from "react-icons/fa";

const ShareSection = ({ url, title }) => {
  const shareData = {
    title: title,
    url: url,
  };

  const handleShare = async (platform) => {
    if (
      navigator.share &&
      platform === "native" &&
      navigator.canShare(shareData)
    ) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error: " + err);
        fallbackShare(platform);
      }
    } else {
      fallbackShare(platform);
    }
  };

  const fallbackShare = (platform) => {
    let shareUrl;
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          url
        )}&title=${encodeURIComponent(title)}`;
        break;
      case "native":
        // For browsers that don't support navigator.share
        shareUrl = `mailto:?subject=${encodeURIComponent(
          title
        )}&body=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, "_blank");
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={() => handleShare("facebook")}
        aria-label="Share on Facebook"
      >
        <FaFacebookF className="text-xl text-gray-700 hover:text-green-400" />
      </button>
      <button
        onClick={() => handleShare("twitter")}
        aria-label="Share on Twitter"
      >
        <FaTwitter className="text-xl text-gray-700 hover:text-green-400" />
      </button>
      <button
        onClick={() => handleShare("linkedin")}
        aria-label="Share on LinkedIn"
      >
        <FaLinkedinIn className="text-xl text-gray-700 hover:text-green-400" />
      </button>
      <button onClick={() => handleShare("native")} aria-label="Share">
        <FaShare className="text-xl text-gray-500 hover:text-green-400" />
      </button>
    </div>
  );
};

export default ShareSection;
