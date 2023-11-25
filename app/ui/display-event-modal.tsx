import { Event } from '@/app/redux/features/event-slice';
import { MdLocationPin } from 'react-icons/md';
import { useEffect } from 'react';

const DisplayEventModal = ({
  event,
  show,
  setShow,
}: {
  event: Event;
  show: boolean;
  setShow: Function;
}) => {
  useEffect(() => {
    console.log(event);
  }, [event]);
  return (
    show && (
      <div className="relative z-10">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3  sm:ml-4 sm:mt-0 sm:text-left">
                    <div className="flex flex-col md:flex-row justify-between">
                      <h3 className="w-8/12 text-2xl text-black font-semibold">
                        {event.title}
                      </h3>
                      <time className="w-4/12 text-slate-500 text-sm font-semibold self-center">
                        {event.date}, {event.time}
                      </time>
                    </div>

                    <div className="mt-2 text-slate-400 text-sm font-semibold capitalize">
                      <span className="font-light">Category:</span>{' '}
                      {event.category}
                    </div>

                    <div>
                      <p className=" my-2 text-black text-sm font-normal">
                        Description:
                      </p>
                      <p className="text-black text-xs text-justify font-light">
                        {event.description}
                      </p>
                    </div>
                    <hr className="mt-4" />
                    <div className="mt-1 flex justify-center items-center">
                      <span className="text-primary">
                        <MdLocationPin size={18} />
                      </span>{' '}
                      <span className="self-end">{event.country}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  onClick={() => setShow(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

    // <Modal
    //   size="lg"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    //   show={show}
    //   onHide={() => setShow(false)}
    // >
    //   <Modal.Body>
    // <div className="flex flex-col md:flex-row justify-between">
    //   <h3 className="text-2xl text-black font-semibold">{event.title}</h3>
    //   <time className="text-slate-500 text-sm font-semibold self-center">
    //     {event.date}, {event.time}
    //   </time>
    // </div>

    // <div className="mt-2 text-slate-400 text-sm font-semibold ">
    //   <span className="font-light">Category:</span> {event.category}
    // </div>

    // <div>
    //   <p className=" my-2 text-black text-sm font-normal">Description:</p>
    //   <p className="text-black text-xs text-justify font-light">
    //     {event.description}
    //   </p>
    // </div>

    // <div className="flex">
    //   <span className="text-primary">
    //     <MdLocationPin size={18} />
    //   </span>{' '}
    //   <span className="self-end">{event.country}</span>
    // </div>
    //   </Modal.Body>
    //   <Modal.Footer></Modal.Footer>
    // </Modal>
  );
};

export default DisplayEventModal;
