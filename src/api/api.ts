const API_URL = "http://localhost:3001";

export const createWrite = async (writeData) => {
  const res = await fetch(`${API_URL}/storeList`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(writeData),
  });

  if (!res.ok) throw new Error("글 추가 실패");
  return await res.json();
};
