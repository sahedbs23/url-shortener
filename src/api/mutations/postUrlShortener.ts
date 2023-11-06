
const postUrlShortener = async (url:string) => {
  try {
      const response = await fetch('/api',{
          method : "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
              "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify({
              url
          })
      });
      const jsonResponse =  await response.json();
      return jsonResponse;
  }catch (e) {
   console.error(e);
  }
}
export default postUrlShortener;