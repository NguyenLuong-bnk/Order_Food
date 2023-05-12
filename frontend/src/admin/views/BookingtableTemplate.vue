<template>
  <div class="admin-container">
    <div class="d-flex justify-content-between">
      <h1>BOOKINGTABLES!</h1>
    </div>

    <div class="table-responsive">
      <table class="table colored-header datatable project-list">
        <thead>
          <tr>
            <th>Book_ID</th>
            <th>Book_Name</th>
            <th>Book_Phone</th>
            <th>Book_People</th>
            <th>Book_Table</th>
            <th>Card</th>
            <th>Book_When</th>
            <th>Book_Note</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.book_id">
            <td>{{ item.book_id }}</td>
            <td>{{ item.book_name }}</td>
            <td>{{ item.book_phone }}</td>
            <td>{{ item.book_people }}</td>
            <td>{{ item.book_tables }}</td>
            <td>{{ item.user_id }}</td>
            <td>{{ item.book_when }}</td>
            <td>{{ item.book_note }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BookingtableTemplate",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getBookTable();
  },

  methods: {
    async getBookTable() {
      try {
        const response = await axios.get("http://localhost:8081/api/booking");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.admin-container {
  background-color: #fff;
  height: 100vh;
  padding: 2rem 9%;
  font-size: 16px;
}

.project-list > tbody > tr > td {
  padding: 12px 8px;
}

.project-list > tbody > tr > td .avatar {
  width: 22px;
  border: 1px solid #ccc;
}

.table-responsive {
  margin-top: 8vh;
}

.action-btn,
.cancel-btn,
.paid-btn {
  width: 100px;
  height: 25px;
  color: white;
  text-transform: capitalize;
}

.action-btn {
  background-color: #0da9ef;
  margin-right: 10px;
}

.cancel-btn,
.paid-btn {
  background-color: red;
}

.action-btn:hover {
  background-color: #27ae60;
}
</style>
