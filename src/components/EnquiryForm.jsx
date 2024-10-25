import React, { useState } from 'react';
import enquiry from '../assets/enqueryimage.jpeg'

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    areaOfInterest: '',
    position: '',
    subject: '',
    phone: '',
    message: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  // Validate form fields
  const validateForm = () => {
    let formErrors = {};
    if (!formData.fullName.trim()) formErrors.fullName = 'Full Name is required';
    if (!formData.areaOfInterest) formErrors.areaOfInterest = 'Area of Interest is required';
    if (!formData.position.trim()) formErrors.position = 'Position is required';
    if (!formData.subject.trim()) formErrors.subject = 'Subject is required';
    if (!formData.phone.trim()) formErrors.phone = 'Phone is required';
    if (!formData.message.trim()) formErrors.message = 'Message is required';
    if (!formData.email.trim()) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email is invalid';
    return formErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error message on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Log form data to console for debugging purposes
      console.log('Form Data:', formData);

      // Submit form data to the API
      try {
        const response = await fetch('https://api.example.com/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          alert('Form submitted successfully!');
        } else {
          alert('Failed to submit the form.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting form.');
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section className="py-12  bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <img 
          src='' 
            alt="Contact Us" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Form Section */}
        <div>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 font-bold mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your full name"
                  required
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
              </div>

              {/* Area of Interest (Dropdown) */}
              <div className="mb-4">
                <label htmlFor="areaOfInterest" className="block text-gray-700 font-bold mb-2">Area of Interest</label>
                <select
                  name="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select an area of interest</option>
                  <option value="Web Development">Mutual Fund </option>
                  <option value="Data Science">Stock Broking</option>
                  <option value="Mobile App Development">Insurance</option>
                  <option value="UI/UX Design">Other</option>
                </select>
                {errors.areaOfInterest && <p className="text-red-500 text-sm">{errors.areaOfInterest}</p>}
              </div>

              {/* Company Position */}
              <div className="mb-4">
                <label htmlFor="position" className="block text-gray-700 font-bold mb-2">Company Position</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your position"
                  required
                />
                {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
              </div>

              {/* Subject */}
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter the subject"
                  required
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your phone number"
                  required
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>

            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {/* Send Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#231892] w-full text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
