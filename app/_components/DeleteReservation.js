'use client';

import { useTransition } from 'react';
import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import SpinnerMini from './SpinnerMini';

function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();
  const [showConfirmation, setShowConfirmation] = useState(false);

  function handleDelete() {
    startTransition(true);
    onDelete(bookingId).finally(() => {
      startTransition(false);
    });
  }
  return (
    <>
      <button
        onClick={() => setShowConfirmation(true)}
        className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
      >
        {!isPending ? (
          <>
            <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
            <span className="mt-1">Delete</span>
          </>
        ) : (
          <span className="mx-auto">
            <SpinnerMini />
          </span>
        )}
      </button>
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-primary-950 rounded-lg border border-primary-800 shadow-lg max-w-md text-center p-6">
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to delete this reservation?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setShowConfirmation(false);
                  handleDelete();
                }}
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"
              >
                Yes, delete
              </button>
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteReservation;
