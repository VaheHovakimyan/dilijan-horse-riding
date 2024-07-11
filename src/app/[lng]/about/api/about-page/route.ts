
import {BASE_API_URL,AUTH_TOKEN} from '../../../../constants'


export async function GET(request: Request, { params }: any) {

  const { lng } = params;
  let locale = lng;
  if (lng === "an") locale = "hy";

  const url = `${BASE_API_URL}/about-page?locale=${locale}&populate=*`;

const options = {

    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `bearer ${AUTH_TOKEN}`,
    },
  };

  const res = await (await fetch(url, options)).json();

  return Response.json(res, { status: 200 });
}
