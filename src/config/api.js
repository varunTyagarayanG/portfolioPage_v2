const API_BASE_URL = 'https://portfolio-site-v2-backend.onrender.com/v2/api/blogs';

export const API_ENDPOINTS = {
    getAllBlogs: `${API_BASE_URL}/blogs`,
    getBlogById: (id) => `${API_BASE_URL}/blogs/${id}`, // This matches the backend route '/blogs/:id'
    createBlog: `${API_BASE_URL}/blogs`,
    updateBlog: (id) => `${API_BASE_URL}/blogs/${id}`,
    deleteBlog: (id) => `${API_BASE_URL}/blogs/${id}`
};

