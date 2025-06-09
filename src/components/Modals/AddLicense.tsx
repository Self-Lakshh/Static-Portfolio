import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AddLicenseProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: (data: any) => void;
}

const AddLicense: React.FC<AddLicenseProps> = ({ isOpen, onClose, onSubmit }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) AOS.refresh();
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };
        if (isOpen) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center px-4">
            <div
                ref={modalRef}
                className="bg-white rounded-2xl shadow-md border border-gray-300 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
                data-aos="zoom-in"
                data-aos-duration="500"
                style={{ fontFamily: 'Inter, sans-serif' }}
            >
                {/* Header */}
                <div className="p-5 border-b border-gray-300 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-900">Add License or Certification</h2>
                    <button
                        onClick={onClose}
                        className="text-2xl text-gray-400 hover:text-gray-600 font-bold leading-none"
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>
                {/* Scrollable Content */}
                <form
                    className="overflow-y-auto flex-grow px-6 py-6 space-y-6"
                    onSubmit={e => {
                        e.preventDefault();
                        const data = Object.fromEntries(new FormData(e.target as HTMLFormElement));
                        onSubmit?.(data);
                        onClose();
                    }}
                >
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                        <input name="name" required placeholder="Ex: JavaScript (Intermediate)" className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Issuing Organization</label>
                        <input name="organization" required placeholder="Ex: HackerRank" className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition" />
                    </div>
                    <div className="flex gap-4 flex-col md:flex-row">
                        <div className="flex-1">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Issue Month</label>
                            <select name="issueMonth" required className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition">
                                <option value="">Month</option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Issue Year</label>
                            <input name="issueYear" type="number" min="1950" max="2100" required placeholder="YYYY" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Credential ID</label>
                        <input name="credentialId" placeholder="Ex: e9a9bc8ae963" className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Credential URL</label>
                        <input name="credentialUrl" type="url" placeholder="https://..." className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Logo/Image URL</label>
                        <input name="logo" type="url" placeholder="https://..." className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition" />
                    </div>
                    <div className="flex justify-end gap-3 pt-6">
                        <button type="button" onClick={onClose} className="px-5 py-2 border rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition">Cancel</button>
                        <button type="submit" className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 font-semibold transition">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddLicense;
