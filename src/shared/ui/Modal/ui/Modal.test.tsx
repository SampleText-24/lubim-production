import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
    it('renders modal content when open', () => {
        render(
            <Modal isOpen={true} onClose={() => {}}>
                Modal Content
            </Modal>,
        );
        expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });

    it('does not render when closed', () => {
        render(
            <Modal isOpen={false} onClose={() => {}}>
                Modal Content
            </Modal>,
        );
        expect(screen.queryByText('Modal Content')).toBeNull();
    });

    it('closes on overlay click', () => {
        const onClose = jest.fn();
        render(
            <Modal isOpen={true} onClose={onClose}>
                Modal Content
            </Modal>,
        );
        fireEvent.click(screen.getByRole('dialog').parentElement!);
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('closes on Escape key press', () => {
        const onClose = jest.fn();
        render(
            <Modal isOpen={true} onClose={onClose}>
                Modal Content
            </Modal>,
        );
        fireEvent.keyDown(window, { key: 'Escape' });
        expect(onClose).toHaveBeenCalledTimes(1);
    });
});
