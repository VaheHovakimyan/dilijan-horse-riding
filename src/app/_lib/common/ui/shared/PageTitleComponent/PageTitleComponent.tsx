import React from "react";

export default function PageTitleComponent({ title }: { title: string }) {

  console.log(title);


  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
