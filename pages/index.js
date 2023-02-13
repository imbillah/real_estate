import Banner from "@/components/Banner";
import Property from "@/components/Property";
import { fetchData, baseUrl } from "@/utils/fetchData";
export default function Home({ rentProperties, buyProperties }) {
  return (
    <>
      <Banner />
      {/* property rent section */}
      <section className="mt-10 container mx-auto">
        <h1 className="text-2xl mb-3 font-semibold uppercase text-blue-600">
          Properties for Rent
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {rentProperties.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </div>
      </section>
      {/* property buy section */}
      <section className="mt-10  container mx-auto">
        <h1 className="text-2xl mb-3 font-semibold uppercase text-blue-600">
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
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale`,
    "7"
  );
  const rentProperty = await fetchData(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent`,
    "8"
  );

  return {
    props: {
      buyProperties: buyProperty?.hits,
      rentProperties: rentProperty?.hits,
    },
  };
}
