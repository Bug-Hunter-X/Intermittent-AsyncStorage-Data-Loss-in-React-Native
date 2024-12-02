This solution utilizes the `MMKVStorage` library to replace AsyncStorage. MMKV provides a more robust and reliable storage solution.  Make sure to install it using `expo install mmkv-storage` or `yarn add mmkv-storage`. 

```javascript
import { MMKVStorage } from 'mmkv-storage';

const storage = new MMKVStorage.Loader().initialize();

// Storing Data
const storeData = async (key, value) => {
  try {
    await storage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

// Retrieving Data
const getData = async (key) => {
  try {
    const value = await storage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null; // Return null if error occurs
  }
};
```