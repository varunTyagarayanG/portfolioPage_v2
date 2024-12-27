const API_BASE_URL = 'http://localhost:5001/v2/api/blogs';

export const API_ENDPOINTS = {
    getAllBlogs: `${API_BASE_URL}/blogs`,
    getBlogById: (id) => `${API_BASE_URL}/blogs/${id}`, // This matches the backend route '/blogs/:id'
    createBlog: `${API_BASE_URL}/blogs`,
    updateBlog: (id) => `${API_BASE_URL}/blogs/${id}`,
    deleteBlog: (id) => `${API_BASE_URL}/blogs/${id}`
};
