import React, { ReactNode, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface ModalProps {
  isOpen: boolean;
  title?: ReactNode;
  children: ReactNode;
  onClose: () => void;
}

const transitions = {
  backdrop: {
    enter: 'ease-out',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'ease-in ',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0',
  },
  modal: {
    enter: 'ease-out',
    enterFrom: 'opacity-0 scale-95',
    enterTo: 'opacity-100 scale-100',
    leave: 'ease-in ',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-95',
  },
};

export const Modal = ({ isOpen, title, children, onClose }: ModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        open={isOpen}
        onClose={onClose}
      >
        <Transition.Child as={Fragment} {...transitions.backdrop}>
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-1 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child as={Fragment} {...transitions.modal}>
              <Dialog.Panel className="max-w-xl transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
