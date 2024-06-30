'use client';
import { useFormStatus } from 'react-dom';

/**
 * The SubmitButton component renders a button with conditional rendering based on a pending state.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content of the button.
 * @param {string} props.pendingLabel - The label to display when the button is
 * @returns The `SubmitButton` component is being returned. It is a functional component that renders a button element with specific styling and behavior based on the `pending` status obtained from the `useFormStatus` hook. If `pending` is true, the button will display the `pendingLabel`, otherwise it
 * will display the `children` passed to the component. The button may be disabled when `pending`
 */
export default function SubmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
