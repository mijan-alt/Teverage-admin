import React, { useState } from "react";

const AdminFormView = ({ formData }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold mb-2">Quotation Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 mb-1">Name:</p>
              <p className="text-lg font-medium">{formData.name}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Email:</p>
              <p className="text-lg font-medium">{formData.email}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Phone Number:</p>
              <p className="text-lg font-medium">{formData.number}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Freight Type:</p>
              <p className="text-lg font-medium">{formData.freightType}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Departure City:</p>
              <p className="text-lg font-medium">{formData.departureCity}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Delivery City:</p>
              <p className="text-lg font-medium">{formData.deliveryCity}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Weight:</p>
              <p className="text-lg font-medium">{formData.weight}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Height:</p>
              <p className="text-lg font-medium">{formData.height}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Radio:</p>
              <p className="text-lg font-medium">{formData.radio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFormView
