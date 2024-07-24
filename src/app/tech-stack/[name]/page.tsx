export default function InfoPage({params}:{
    params:{name:string},
}){
    return<>
        <div className="h-screen w-full">
                <h1>{params.name}</h1>
        </div>
    </>
}