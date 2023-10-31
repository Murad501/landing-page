import { Typography } from "@material-tailwind/react";
import React from "react";
import Marquee from "react-fast-marquee";

const OurClients = () => {
  const clients = [
    {
      name: "Adidas",
      logo: "https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg",
    },
    {
      name: "Apple",
      logo: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201609051049",
    },
    {
      name: "Nike",
      logo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNoD9oT_VnEYNKKeOor8U4qK5T1LF4bC2iRDD75fQdveQMHTUA",
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    },
    {
      name: "FedEx",
      logo: "https://images.squarespace-cdn.com/content/v1/61f92d97a17c5428e2a2caa7/78a90a87-3330-4efa-acb8-3cee83a3b7d6/hidden+arrow+fedex+logo.jpeg",
    },
    {
      name: "Pepsi",
      logo: "https://cdn.worldvectorlogo.com/logos/pepsi-5.svg",
    },
    {
      name: "Airbnb",
      logo: "https://miro.medium.com/v2/resize:fit:1358/0*NChTo-XqLOxLabIW",
    },
    {
      name: "Netflix",
      logo: "https://store-images.s-microsoft.com/image/apps.56161.9007199266246365.1d5a6a53-3c49-4f80-95d7-78d76b0e05d0.a3e87fea-e03e-4c0a-8f26-9ecef205fa7b",
    },
  ];
  return (
    <section className="py-20 container mx-auto">
      <Typography className="font-semibold uppercase text-center text-3xl text-blue-gray-700 mb-10">
        Our Clients
      </Typography>
      <Marquee autoFill={true} direction="right" pauseOnHover={true}>
        {clients.map((client, idx) => (
          <div key={idx} className="mx-10">
            {" "}
            <img src={client.logo} alt={client.name} className="max-h-14" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default OurClients;
