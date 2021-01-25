import instance from "./axios";

export const getNotes = async () => {
  try {
    const answ = await instance.get("notes");
    return answ;
  } catch (err) {
    throw err;
  }
};

export const postNote = async (data: any) => {
  try {
    const answ = await instance.post("notes", data);
    return answ;
  } catch (err) {
    throw err;
  }
};

export const updateNote = async (data: any) => {
  try {
    const answ = await instance.put("notes", data);
    return answ;
  } catch (err) {
    throw err;
  }
};

export const deleteNote = async (data: any) => {
  try {
    console.log(data);
    const answ = await instance.delete("notes", {
      data,
    });
    return answ;
  } catch (err) {
    throw err;
  }
};
