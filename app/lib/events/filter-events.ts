export async function filterEvents(
  searchCategory: string,
  fromDate: string,
  toDate: string
): Promise<any> {
  try {
    const paramsObj: any = {};
    // const isValidDate = (dateString: string): boolean => {
    //   const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
    //   return regex.test(dateString);
    // };

    const response = await fetch(
      `https://api.predicthq.com/v1/events/?category=${searchCategory}`,
      {
        headers: {
          Authorization: 'Bearer D9NbURe9VNZdfqCFe2yOo-VNCp9eH0UjxRhxupAu',
          Accept: 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const events = await response.json();
    return events;
  } catch (error) {
    console.error('Error occured while filtering events:', error);
    throw new Error('Failed to filtering events');
  }
}
