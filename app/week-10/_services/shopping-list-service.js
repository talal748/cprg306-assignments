import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const getItems = async (userId) => {
    try {
      const db = getFirestore(); 
      const itemsRef = collection(doc(collection(db, "users"), userId), "items"); 
      const querySnapshot = await getDocs(itemsRef); 
  
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id, 
        ...doc.data(), 
      }));
  
      return items; 
    } catch (error) {
      console.error("Error fetching items:", error);
      return []; 
    }

    const loadItems = async () => {
        try {
          if (!user?.uid) throw new Error("User is not logged in.");
          const fetchedItems = await getItems(user.uid); // Call getItems with userId
          setItems(fetchedItems); // Update state with fetched items
        } catch (error) {
          console.error("Error loading items:", error);
        }
      };

      const handleAddItem = async () => {
        try {
          if (!newItemName.trim()) return; // Prevent adding empty items
          if (!user?.uid) throw new Error("User is not logged in.");
    
          const newItem = { name: newItemName, createdAt: new Date() }; // Define the new item
          const newItemId = await addItems(user.uid, newItem); // Add item to Firestore and get its ID
    
          setItems((prevItems) => [
            ...prevItems,
            { id: newItemId, ...newItem }, // Add the new item with its ID to the state
          ]);
          setNewItemName(""); // Reset the input field
        } catch (error) {
          console.error("Error adding item:", error);
        }
      };

      useEffect(() => {
        if (user?.uid) {
          loadItems();
        }
      }, [user]);
  };

  const addItems = async (userId, item) => {
    try {
      const db = getFirestore(); 
      const itemsRef = collection(doc(collection(db, "users"), userId), "items"); 
      
      const docRef = await addDoc(itemsRef, item); 
      return docRef.id; 
    } catch (error) {
      console.error("Error adding item:", error);
      throw new Error("Failed to add item."); 
    }
  };
  
  export default getItems;

  