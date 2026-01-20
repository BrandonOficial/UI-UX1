const NewArrival = () => {
    return (
        <section className="max-w-7xl mx-auto p-4 sm:p-8 mt-20 mb-20">
            <h2 className="text-6xl lg:text-9xl impact uppercase leading-tight mb-12">NEW ARRIVAL</h2>
            <div className="grid lg:grid-cols-4 gap-8">
                {/* Featured Large Image */}
                <div className="lg:col-span-2">
                    <div className="flex flex-col-reverse card-hover">
                        {/* Image 🖼 */}


                        {/* text content */}
                        <div className="mt-6 md:mt-0 pt-4 flex justify-between">
                            <div className="">
                                <p className="text-lg uppercase font-bold text-zinc-600">
                                    The Finest Collection
                                </p>
                                <h3 className="text-lg font-bold mb-4">

                                </h3>
                            </div>

                            <div>
                                <p className="text-xl font-extrabold mb-1 text-right">
                                    $1000
                                </p>
                                <p className="text-sm">
                                    
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Small Images */}
                <div className=""></div>
            </div>
        </section>
    )
}

export default NewArrival
