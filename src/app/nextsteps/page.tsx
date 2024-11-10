"use client"

import { useSearchParams } from 'next/navigation';

interface formData {
    insideCanada: string,
    hasAppliedForAsylum: string
}

const Page2 = () => {
  const searchParams = useSearchParams();
  const data = searchParams.get('data');

  let jsonData: formData | null = null;

  if (data) {
    try {
      // Parse the JSON string
      jsonData = JSON.parse(decodeURIComponent(data as string));
    } catch (error) {
      console.error('Error parsing JSON', error);
    }
  }

  return (
    <div>
      {jsonData ? (
        <div>
          <h1>{jsonData.insideCanada}</h1>
          <p>Age: {jsonData.hasAppliedForAsylum}</p>
        </div>
      ) : (
        <p>No data received</p>
      )}
    </div>
  );
};

export default Page2;
