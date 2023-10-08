import React from "react";

interface Props {
  params: { id: number; productId: string[] };
}
const UserProductPage = ({ params: { id, productId } }: Props) => {
  return (
    <div>
      user number {id} product {productId}
      {productId?.map((pr) => (
        <div key={id}> </div>
      ))}
    </div>
  );
};

export default UserProductPage;
