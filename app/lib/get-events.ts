export async function getEvents() {
  try {
    const response = await fetch('https://api.predicthq.com/v1/events/', {
      headers: {
        Authorization: 'Bearer D9NbURe9VNZdfqCFe2yOo-VNCp9eH0UjxRhxupAu',
        Accept: 'application/json',
      },
    });

    const events = await response.json();

    return events;
  } catch (error) {
    console.error('Error occured while getting events:', error);
    throw new Error('Failed to get events');
  }
}
