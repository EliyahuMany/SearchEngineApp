export const search = async (text) => {
  const params = new URLSearchParams({format: 'json', q: text});

  return await fetch(`https://api.duckduckgo.com/?${params}`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      console.log(`Status Error: ${res.status}`);
    }
  });
};
