import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import images from "../../assets/image"

export const Gallery  = () => {
  {
    return  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-blue-50">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block text-2xl px-3 py-px mb-4 font-extrabold tracking-wider text-black rounded-full uppercase border-black border-solid border ">
          Gallery
        </p>
        <p className="text-base text-black font-bold md:text-lg">
          Our team members bring a wealth of expertise, enthusiasm, and
          creativity to the Hackaut Coding Club.
        </p>
      </div>


        
     <ImageGallery items={images} lazyLoad={true} autoPlay={true} thumbnailHeight={250}/>;
</div>
  }
}
