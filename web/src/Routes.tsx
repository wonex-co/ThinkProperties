import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import PrivacyPolicy from "pages/PrivacyPolicy";
import FAQ from "pages/FAQ";
import ContactPage from "pages/ContactPage";
import AgentProfile from "pages/AgentProfile";
import Listing from "pages/Listing";
import License from "pages/License";
import AgentList from "pages/AgentList";
import BlogDetails from "pages/BlogDetails";
import LandingPage from "pages/LandingPage";
import ListingMapView from "pages/ListingMapView";
import BlogPage from "pages/BlogPage";
import AboutUs from "pages/AboutUs";
import PropertyDetails from "pages/PropertyDetails";
import Error from "pages/Error";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "privacypolicy",
      element: <PrivacyPolicy />,
    },
    {
      path: "faq",
      element: <FAQ />,
    },
    {
      path: "contactpage",
      element: <ContactPage />,
    },
    {
      path: "agentprofile",
      element: <AgentProfile />,
    },
    {
      path: "listing",
      element: <Listing />,
    },
    {
      path: "license",
      element: <License />,
    },
    {
      path: "agentlist",
      element: <AgentList />,
    },
    {
      path: "blogdetails",
      element: <BlogDetails />,
    },
    {
      path: "landingpage",
      element: <LandingPage />,
    },
    {
      path: "listingmapview",
      element: <ListingMapView />,
    },
    {
      path: "blogpage",
      element: <BlogPage />,
    },
    {
      path: "aboutus",
      element: <AboutUs />,
    },
    {
      path: "propertydetails",
      element: <PropertyDetails />,
    },
    {
      path: "error",
      element: <Error />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
