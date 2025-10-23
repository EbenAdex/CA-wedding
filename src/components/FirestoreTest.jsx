import React, { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const FirestoreTest = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'rsvps'));
        console.log('Firestore connected. Documents:', querySnapshot.size);
      } catch (error) {
        console.error('Error accessing Firestore:', error);
      }
    };

    fetchData();
  }, []);

  return <div>Firestore test running - check console</div>;
};

export default FirestoreTest;
