import Image from "next/image";
import React, { useRef } from "react";
import generatePDF from "react-to-pdf";


interface InvoiceProps {
    name: string | null;
    email: string | null;
    phone: string | null;
    occupation: string | null;
    amount: string | null;
}


const Invoice: React.FC<InvoiceProps> = ({ name, email, phone, occupation, amount }) => {

    const targetRef = useRef<HTMLDivElement>(null);


    const getTargetElement = () => document.getElementById('content-id');

    // Function to get today's date in a readable format
    const getTodayDate = () => {
        const today = new Date();
        const options: Intl.DateTimeFormatOptions = {
            day: "numeric",
            month: "long",
            year: "numeric",
        };
        return today.toLocaleDateString("en-US", options);
    };

    const generateInvoiceNumber = () => {
        const date = new Date();
        const year = date.getFullYear();
        const randomNum = Math.floor(1000 + Math.random() * 9000); // Random 4-digit number
        return `${randomNum}-${year}`;
    };



    return (
        <div className="container mb-10">
            <div className="mx-auto w-4/5 max-w-[768px]">
                <div>
                    <div className="text-center">
                        <button className="bg-green-600 px-3 py-2 rounded-md text-white" onClick={() => generatePDF(getTargetElement, { filename: 'invoice.pdf' }, )}>Download Invoice</button>
                    </div>
                    <div ref={targetRef} id="content-id" className="p-10 mb-24 rounded-md">
                        {/* Invoice Header */}
                        <div className="flex items-center justify-between mb-8 px-3 pt-20">
                            <div>
                                <span className="text-2xl">Donation Invoice #</span>: {generateInvoiceNumber()}
                                <br />
                                <span>Date</span>: {getTodayDate()}
                                <br />
                            </div>
                            <div className="text-right">
                                <Image
                                    src="/frontend/images/invoice.png"
                                    alt="Logo of Invoice"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>

                        {/* Invoice Details */}
                        <div className="flex justify-between mb-8 px-3">
                            <div>
                                <h1 className="font-bold">Donor Info</h1>
                                <p><strong>Name:</strong> {name}</p>
                                <p><strong>Email:</strong> {email}</p>
                                <p><strong>Phone:</strong> {phone}</p>
                                <p><strong>Occupation:</strong> {occupation}</p>
                            </div>
                            <div className="text-right">
                                <h1 className="font-bold">Recipient Info</h1>
                                IREAD
                                <br />
                                Street 12
                                <br />
                                10000 City, USA
                                <br />
                                hello@iread.com
                            </div>
                        </div>

                        {/* Invoice Items */}
                        <div className="flex justify-between mb-4 bg-gray-200 px-3 py-2">
                            <div>Donation</div>
                            <div className="text-right font-medium">${amount}</div>
                        </div>

                        {/* Total */}
                        <div className="flex justify-between items-center mb-2 px-3">
                            <div className="text-2xl leading-none">
                                <span>Total</span>:
                            </div>
                            <div className="text-2xl text-right font-medium">${amount}</div>
                        </div>
                        <div className="py-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;