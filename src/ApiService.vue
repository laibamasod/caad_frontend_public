

<script>
import axios from 'axios';

export default {
  methods: {
    async fetchItems() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/');
        return response.data;
      } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
      }
    }
  }
};
</script>
