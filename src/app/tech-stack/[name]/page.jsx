import Cards from "@/Components/Cards/card";
export default function InfoPage({ params }) {
    console.log(params.data);
  return (
    <>
      {/* <div className="h-[200vh] w-full px-20  mt-20 flex justify-center flex-col font-monsterrat">
        <>
          <div className="w-full">
            <h1 className=" w-full text-base lg:text-5xl font-bold">
              {params.name.toUpperCase()}
            </h1>
            <p className="mt-10 w-full h-max text-lg">{data.intro}</p>
          </div>
          <div className="flex flex-col px-20 mt-5 text-justify w-full">
            <div className="flex flex-col mt-4">
              <h2 className=" text-2xl font-bold mb-4">Roadmap</h2>
              <ul>
                {data.road.map((ind, val) => (
                  <li className="m-2">
                    {val + 1}.{ind}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-4xl text-center font-bold m-10">Resources</h1>
            <div className="flex flex-wrap justify-evenly gap-4 mt-10 h-max w-full">
              {data.resource.map((res) => (
                <Cards props={res} />
              ))}
            </div>
          </div>
        </>
      </div> */}
    </>
  );
}

export const getStaticPaths=async()=>{
    return {
        paths:[ { params: {name: 'Back-End Development'}}, { params: {name: 'Full-Stack Web Devlopment'}},{ params: {name: 'App Development'}}, { params: {name: 'Data Science'}}, { params: {name: 'Data Structures & Algo'}}],
        fallback:false,
    }
}

export const getStaticProps= async(context)=>{
    const name=context.params.name;
    const data=(await fetch(`/api/users/generate_page/${name}`)).json();
    return {
        props:{
            data,
        }
    }
}