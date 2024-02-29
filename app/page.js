import React from "react";

//fetch JSON data from an Endpoint,
async function getHomeData() {
  const res = await fetch("https://www.zesty.io/-/gql/platform_section.json");
  const dataFetch = res.json();

  if (res.ok) {
    console.log("sucess fetch of data");
    return dataFetch;
  } else {
    throw new Error("Failed to fetch Data");
  }
}

//Home Page Component and path is '/' , will consume the above function for fetching the json from endpoint
const Home = async () => {
  //declare the above function to this component and
  //this will run on the first render of this component or page
  const dataFetchHome = await getHomeData();

  return (
    <>
      {/* div container, this container makes the website responsive and I used Tailwind CSS*/}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 pb-5 m-auto relative pt-40 w-full flex flex-col gap-2 border-2 border-red-500">
        {/* div container of all data from json */}
        <div className="flex flex-col gap-10">

            {/* check first if the fetch data is an array and used ternary operator to avoid error since .map() only iterate arrays and if not, will have an error   */}
          {Array.isArray(dataFetchHome) ? (
            dataFetchHome.map((item, key) => {
              return (
                /* div container individually for each item in the array from the fetch JSON data from this endpoint https://www.zesty.io/-/gql/platform_section.json
                ▪ Each div display the `title` (<h1>) and `text_content` (<div>) of each item in the json array.
                I used .map() function to iterate per data and get the item with key name "title" for h1 and" text_content" for the content per div
                  I used the dangerouslySetInnerHTML, React attribute, since the data from the endpoint has HTML content and this react attribute with __html key 
                 will help the React to inject the HTML content into the component's DOM node
                 This will render HTML content dynamically

                 To style this part, I used mixed of Tailwind CSS and traditional CSS by modifying the HTML tag in the global.css file
                 Tailwind CSS for the web responsivenes of the page and Traditional CSS to style the HTML element from the JSON array
                */
                <div
                  key={key}
                  className=" flex flex-col gap-5 p-10 break-words text-justify rounded-2xl border border-solid border-red-300 shadow-inner shadow-orange-300"
                >
                  <h1 className="text-center">{item.title}</h1>
                  <div
                    className="flex flex-col gap-3"
                    dangerouslySetInnerHTML={{ __html: item.text_content }}
                  ></div>
                </div>
              );
            })
          ) : (
            <p>Empty Data</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
