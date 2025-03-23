import axiosClient from "./apiClient";


export const generateContent = {
    baseUrl: '/generate-content',

    async generateSamplePosts(topics: string, tone: string, postType: string) {
        const axiosInstance = axiosClient();
        const data = {
            topics,
            tone,
            postType
        }
        const response = await axiosInstance.post(this.baseUrl,JSON.stringify(data))
        return response.data
    }
}
