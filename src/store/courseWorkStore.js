import create from 'zustand';
import { persist } from 'zustand/middleware';

const courseWorkStore = create(
  persist(
    (set) => ({
      courseData: [],
      

      addCourse: (data) =>{
          const processedData = typeof data === 'string' ? JSON.parse(data) : data;
          
        set((state) => ({courseData: [...state.courseData, processedData] 
        }));
      },
      clearCourse: () => set(() => ({ data: [] })),
    }),
    {
      name: 'courseWork', 
      storage: typeof window !== 'undefined' ? localStorage : undefined, // Ensure localStorage is only used in the browser
      serialize: (state) => JSON.stringify(state), // custom serialization
      deserialize: (str) => JSON.parse(str) // custom deserialization
    }
  )
);

export default courseWorkStore;
