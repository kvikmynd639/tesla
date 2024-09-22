import Navbar from "@/components/Navbar";
import Image from "next/image";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full">
     <Navbar />
       {/* Model Y Section */}
       <Section
        backgroundImageClass="bg-model-y"
        header="Model Y"
        miniHeader="Order Online for Touchless Delivery"
        button1Text="Custom Order"
        button2Text="Existing Inventory"
      />

      {/* Model 3 Section */}
      <Section
        backgroundImageClass="bg-model-3"
        header="Model 3"
        miniHeader="Order Online for Touchless Delivery"
        button1Text="Custom Order"
        button2Text="Existing Inventory"
      />

      {/* Model S Section */}
      <Section
        backgroundImageClass="bg-model-s"
        header="Model S"
        miniHeader="Order Online for Touchless Delivery"
        button1Text="Custom Order"
        button2Text="Existing Inventory"
      />

      {/* Powerwall Section */}
      <Section
        backgroundImageClass="bg-powerwall"
        header="Powerwall"
        miniHeader="Power Everything"
        button1Text="Learn More"
        button2Text="Order Now"
      />

      {/* Solar Panels Section */}
      <Section
        backgroundImageClass="bg-solarpanels"
        header="Solar Panels"
        miniHeader="Lowest Cost Solar Panels in America"
        button1Text="Order Now"
        button2Text="Learn More"
      />

      {/* Solar Roof Section */}
      <Section
        backgroundImageClass="bg-solarroof"
        header="Solar Roof"
        miniHeader="Produce Clean Energy From Your Roof"
        button1Text="Order Now"
        button2Text="Learn More"
      />

      {/* Cybertruck Section */}
      <Section
        backgroundImageClass="bg-cybertruck"
        header="Cybertruck"
        miniHeader="Better Utility Than a Truck with More Performance Than a Sports Car"
        button1Text="Order Now"
        button2Text="Learn More"
      />

      {/* Accessories Section */}
      <Section
        backgroundImageClass="bg-accessories"
        header="Accessories"
        miniHeader="Shop Tesla Accessories"
        button1Text="Shop Now"
        button2Text="Learn More"
      />
      <Footer />
    </div>
  );
}
