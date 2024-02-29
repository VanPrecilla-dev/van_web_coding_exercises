import React from "react";

//fetch JSON data from an Endpoint,
async function getAboutData() {
  const res = await fetch(
    "https://www.zesty.io/-/instant/7-e93178-vqvclg.json"
  );
  const dataFetch = res.json();

  if (res.ok) {
    console.log("sucess fetch of data");
    return dataFetch;
  } else {
    throw new Error("Failed to fetch Data");
  }
}


//About Page Component and path is '/about', will consume the above function for fetching the json from endpoint
const About = async () => {

    //declare the above function to this component and 
    //this will run on the first render of this component or page
  const dataFetchAbout = await getAboutData();

  return (
    <div>
        {/* div container, this container makes the website responsive and I used Tailwind CSS*/}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 pb-5 m-auto relative pt-40 w-full flex flex-col gap-2">

        {/* Place the value `data[0].content.page_content` from https://www.zesty.io/-/instant/7-e93178-vqvclg.json into a single <div> 
        From this json, data is an array object and data is the key of an object array so since it is asking for a specific content from specific index position from data 
        I just use the index position [0] to get the first element in the data  and put next the key name which is content according to nesting of object array to get the page_content. 
        I used the dangerouslySetInnerHTML, React attribute, since the data from the endpoint has HTML content and this react attribute with __html key 
        will help the React to inject the HTML content into the component's DOM node
        This will render HTML content dynamically
        */}
        <div
          className="flex flex-col mt-20 gap-3 p-10 break-words text-justify rounded-2xl border border-solid border-red-300 shadow-inner shadow-orange-300"
          dangerouslySetInnerHTML={{
            __html: dataFetchAbout.data[0].content.page_content,
          }}
        ></div>
      </div>
    </div>
  );
};

export default About;
