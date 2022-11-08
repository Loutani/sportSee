import axios from "axios";

/**
 * class representing a user activity fetch data
 */
export default class UserActivityService {
    /**
     * fetch the user informations 
     * 
     * @param {number} userId 
     * @returns {void}
     */
    constructor(userId) {
        //user informations end point
        this.endpoint = `http://localhost:3000/user/${userId}/activity`;

        //user informations data
        this.data = [];
    }

    /**
     * fetch the user data
     * 
     * @returns {void}
     */
    async request() {
        const { data } = await axios({
			method: 'get',
			url: this.endpoint,
			data: {
				id: this.userId
			}
		});

        this.data = data.data;
    }

    /**
     * return the user sessions data
     * 
     * @returns {Promise}
     */
    async getActivity() {

        await this.request();

        return await this.data.sessions;
    }
}