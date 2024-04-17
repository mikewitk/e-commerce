const SalesTopBar = () => {
  return (
    <div className="h-12 bg-black w-full flex flex-row items-center justify-center">
      <p className="text-white capitalize">
        summer sale for all swim suits and free express delivery - OFF 50%!
      </p>
      <a className="text-white ml-2 underline font-semibold" href="#">
        ShopNow
      </a>
      <label className="hidden" htmlFor="language-select">
        select a language
      </label>
      <select className="ml-56 bg-black text-white" id="language-select">
        <option>English</option>
        <option>Spanish</option>
        <option>Portuguese</option>
      </select>
    </div>
  );
};

export default SalesTopBar;
