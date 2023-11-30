import { AppDataSource } from "../data-source"
import { Note } from "../entities/Note"

// Repository to handle operations on Note entity
const noteRepository = AppDataSource.getRepository(Note); 

export const getAllNotes = async (req: any, res: any) => {
  try {
    const allNotes = await noteRepository.find();
    if (!allNotes) {
      return res.status(200).json({ success: false, message: "Api Failed" });
    }
    return res.status(200).json({ success: true, data: allNotes });
  } catch (err) {
    return res.status(200).json({ success: false, message: err });
  }
};