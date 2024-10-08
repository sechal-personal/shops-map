import ShopsMap from "@/components/ShopsMap";

const fetchStores = async () => {
    try {
        const response =  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`);

        if (!response.ok) {
            console.error('Failed to fetch stores data');
            return;
        }

        return await response.json();
    } catch (error){
        console.error(error);
    }
}

const Home = async () => {
    const shopsList = await fetchStores();

    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Find & Discover
                <br className="max-md:hidden"/>
                <span className="orange_gradient text-center capitalize">all our Available stores</span>
            </h1>
            <p className='desc text-center'>
                Get more detailed information about the store you’re interested in by simply clicking on the icon on the
                map.
            </p>
            <ShopsMap shopsList={shopsList || []} />
        </section>
    );
}

export default Home;
