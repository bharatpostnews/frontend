export default async function hellofinal(query, variables) {
  const res = await fetch(process.env.WP_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  return json.data;
}
