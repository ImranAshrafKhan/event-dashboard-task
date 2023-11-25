import { getEvents } from './get-events';

export async function searchHandler(item: string): Promise<any> {
  try {
    let parameters: { q?: string } | any = {};

    if (item) {
      parameters.q = item;
      parameters = new URLSearchParams(parameters).toString();
    } else {
      getEvents();
    }

    const response = await fetch(
      `https://api.predicthq.com/v1/events/?${parameters}`,
      {
        headers: {
          Authorization: 'Bearer D9NbURe9VNZdfqCFe2yOo-VNCp9eH0UjxRhxupAu',
          Accept: 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      const filteredEvents = await response.json();
      return filteredEvents;
    }
  } catch (error) {
    console.error('Error occured while searching for events:', error);
    throw new Error('Failed to search events');
  }
}
