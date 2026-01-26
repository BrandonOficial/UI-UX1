import BigImg from "./BigImg"
import SmallImg from "./SmallImg"

const NewArrival = () => {
    return (
        <section className="max-w-7xl mx-auto p-4 sm:p-8 mt-20 mb-20">
            {/* TITLE */}
            <h2 className="text-6xl lg:text-9xl impact uppercase leading-tight mb-12">NEW ARRIVAL</h2>
            {/* GRID */}
            <div className="grid lg:grid-cols-4 gap-8">
                {/* Featured Large Image */}
                <div className="lg:col-span-2">
                    <div className="flex flex-col-reverse card-hover">
                        {/* Image 🖼 */}

                        <BigImg src="https://images.unsplash.com/photo-1637649228998-6c78a67dfa6c?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        {/* text content */}
                        <div className="mt-6 md:mt-0 pt-4 flex justify-between">
                            <div className="">
                                <p className="text-lg uppercase font-bold text-zinc-600">
                                    The Finest Collection
                                </p>
                                <h3 className="text-lg font-bold mb-4">
                                    Options, Starting
                                </h3>
                            </div>

                            <div>
                                <p className="text-xl font-extrabold mb-1 text-right">
                                    $1000
                                </p>
                                <p className="text-sm text-zinc-500">
                                    10+ Variants
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Small Images */}
                <div className="lg:col-span-2 flex flex-col lg:flex-row space-y-6 lg:gap-10">

                    {/* Small card 1 */}
                    <div className="flex flex-col lg:w-1/2  card-hover">
                        {/* image */}

                        <SmallImg src="https://plus.unsplash.com/premium_photo-1674815327132-6a17c43761ae?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        {/* text detail 1 */}
                        <div className="w-full flex justify-between pt-2">
                            {/* 1 */}
                            <div>
                                <h4 className="text-xl uppercase font-bold">
                                    Coffee Table
                                </h4>
                                <p className="text-base text-zinc-600 mb-1">
                                    Starting
                                </p>
                            </div>
                            {/* 2 */}
                            <div>
                                <p className="text-xl font-semibold text-right">
                                    R$350
                                </p>
                                <p className="text-base text-zinc-500">+20 Variants</p>
                            </div>
                        </div>
                    </div>

                    {/* Small card 2 */}
                    <div className="flex flex-col lg:w-1/2 lg:mt-50 card-hover">
                        {/* image */}

                        <SmallImg src="https://images.unsplash.com/photo-1691036562015-56ebf6648f8c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        {/* text detail 2 */}
                        <div className="w-full flex justify-between pt-2">
                            {/* 1 */}
                            <div>
                                <h4 className="text-xl uppercase font-bold">
                                    Valvet Chain
                                </h4>
                                <p className="text-base text-zinc-600 mb-1">
                                    Starting
                                </p>
                            </div>
                            {/* 2 */}
                            <div>
                                <p className="text-xl font-semibold text-right">
                                    R$420
                                </p>
                                <p className="text-base text-zinc-500">+30 Variants</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* EXPLORE BTO */}
            <div className="flex justify-center mt-12 lg:mt-15">
                <button className="text-base lg:text-lg font-medium border border-zinc-900 text-zinc-900 px-6 lg:px-8 py-3 rounded-full hover:bg-zinc-900 hover:text-zinc-100 transition-all cursor-pointer ease-in duration-200 hover:animate-wiggle">Explore</button>
            </div>
        </section>
    )
}

export default NewArrival
