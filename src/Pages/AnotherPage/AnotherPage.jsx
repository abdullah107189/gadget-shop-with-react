import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function AnotherPage() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log("Complaint Submitted:", data);
        reset()
        Swal.fire({
            title: "Thank you!",
            text: "We will think about it!",
            icon: "success"
        });

    };

    return (
        <div className="flex flex-col justify-center items-center md:p-10 p-5 bg-gray-100 rounded-2xl">
            <div className="w-full bgPink md:py-12 py-5 md:mb-8 mb-5 shadow-lg rounded-xl">
                <div className="container mx-auto text-center">
                    <h1 className="md:text-5xl text-3xl font-bold text-white mb-2">Submit Your Complaint</h1>
                    <p className="text-lg text-blue-100">
                        We are here to help! Please provide the details below.
                    </p>
                </div>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    Submit a Complaint
                </h2>

                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' }
                        })}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        {...register('phone', { required: 'Phone number is required' })}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Complaint Title</label>
                    <input
                        type="text"
                        {...register('title', { required: 'Title is required' })}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Complaint Description</label>
                    <textarea
                        {...register('description', { required: 'Description is required' })}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    ></textarea>
                    {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Complaint Type</label>
                    <select
                        {...register('type', { required: 'Please select a type' })}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    >
                        <option value="">Select Type</option>
                        <option value="product">Product Issue</option>
                        <option value="billing">Billing Issue</option>
                        <option value="technical">Technical Issue</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.type && <p className="text-red-500 text-sm">{errors.type.message}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full pinkOutletBtn"
                >
                    Submit Complaint
                </button>
            </form>
        </div>
    );
}

export default AnotherPage;
