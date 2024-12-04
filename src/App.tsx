import { useState } from "react";

//type
type GreetingType = {
  name: string;
};

const Greeting = (props: GreetingType) => {
  return <h3 className="text-xl text-white my-6">Hello {props.name}</h3>;
};

export default function App() {
  const [prix, setPrix] = useState(1);
  return (
    <div className="max-w-sm m-auto px-4 py-4 bg-slate-600 ">
      <h1 className="text-3xl text-center text-white font-bold underline">
        Comprendre le typeScript avec React !!
      </h1>
      <Greeting name="John" />
      <Greeting name="Sabrina" />

      <input
        type="text"
        value={prix}
        placeholder="prix..."
        onChange={(event) => setPrix(event.target.value)}
      />
      <p className="text-lg text-white my-3">{prix * 2} £</p>
    </div>
  );
}
