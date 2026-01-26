import ProductCard from "./ProductCard"

const Trending = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-8 mt-20 mb-20">
      <div className="relative flex justify-between items-end mb-12">
        {/* TITLE */}
        <h2 className="text-6xl lg:text-9xl impact uppercase text-nowrap leading-tigh">
          FOR TRENDING <br /> NOW
        </h2>
        <button className="text-sm lg:text-lg absolute right-0 font-medium border border-zinc-900 text-zinc-900 px-5 lg:px-8 py-3 rounded-full cursor-pointer hover:bg-zinc-900 hover:text-zinc-50 transition-all duration-200 ease-in">
          Sell All
        </button>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        { /* Item 1 */}
        <div className="col-span-1">
          <ProductCard src="https://images.unsplash.com/photo-1608626597747-0d9b8884972c?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" price="500" position="bottom-4 left-4" />
        </div>
        { /* Item 2 & 3 */}
        <div className="col-span-1 md:col-span-2 flex flex-col space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <ProductCard src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" price="1000" position="bottom-4 right-4" />
            <ProductCard src="https://images.unsplash.com/photo-1591931681345-16b532514cde?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" price="250" position="top-4 right-4" />
          </div>
          <div className="pt-6">
            <h3 className="text-3xl font-extrabold uppercase mb-2">
              CUTTING-EDGE <br /> FURNITURE TRENDS
            </h3>
            <p className="text-base text-zinc-600 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio neque ut nesciunt et exercitationem placeat quam aperiam, maxime dolorum soluta eveniet optio atque nostrum magnam modi, ad sunt beatae unde!
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Trending
