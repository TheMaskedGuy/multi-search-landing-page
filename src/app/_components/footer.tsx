import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Download Links
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://chromewebstore.google.com/detail/multi-search-newtab/oiiajjjedfdfboacleknggbcbkjhngen"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 text-center"
            >
              Chrome Web Store
            </a>
            <a
              href="https://microsoftedge.microsoft.com/addons/detail/multi-search-newtab/ngdmedfpcnmlkgoeglkdicbidhnncmad"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 text-center"
            >
              Edge Add-ons Store
            </a>
            <a
              href="https://addons.mozilla.org/en-US/firefox/addon/multi-search-newtab-multi-tab/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-6 duration-200 transition-colors mb-6 lg:mb-0 text-center"
            >
              Firefox Add-ons Store
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
