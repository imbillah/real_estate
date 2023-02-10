import Banner from "@/components/Banner";
import Property from "@/components/Property";
import { fetchData, baseUrl } from "@/utils/fetchData";
export default function Home({ rentProperties, buyProperties }) {
  return (
    <>
      <Banner />
      {/* property rent section */}
      <section className="mt-10 p-4">
        <h1 className="text-2xl mb-3 font-semibold uppercase">
          Properties for Rent
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {rentProperties.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </div>
      </section>
      {/* property buy section */}
      <section className="mt-10 p-4">
        <h1 className="text-2xl mb-3 font-semibold uppercase">
          Properties for Sell
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {buyProperties.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const buyProperty = await fetchData(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale`
  );
  const rentProperty = await fetchData(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent`
  );

  return {
    props: {
      buyProperties: buyProperty?.hits,
      rentProperties: rentProperty?.hits,
    },
  };
}
