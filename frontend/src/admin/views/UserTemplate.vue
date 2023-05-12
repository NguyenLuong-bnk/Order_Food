<template>
  <div class="admin-container">
    <div class="d-flex justify-content-between">
      <h1>USERS</h1>
    </div>

    <div class="table-responsive">
      <table class="table colored-header datatable project-list">
        <thead>
          <tr>
            <th>user_id</th>
            <th>user_name</th>
            <th>user_email</th>
            <th>user_phone</th>
            <th>user_password</th>
            <th>user_birth</th>
            <th>user_gender</th>
            <th class="has-text-centered">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.user_id">
            <td>{{ item.user_id }}</td>
            <td>{{ item.user_name }}</td>
            <td>{{ item.user_email }}</td>
            <td>{{ item.user_phone }}</td>
            <td>{{ item.user_password }}</td>
            <td>{{ item.user_birth }}</td>
            <td>{{ item.user_gender }}</td>
            <td>
              <button
                type="button"
                class="btn btn-danger"
                @click="deleteUser(item.user_id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserTemplate",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getAllUser();
  },

  methods: {
    async getAllUser() {
      try {
        const response = await axios.get("http://localhost:8081/api/users");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async deleteUser(id) {
      try {
        await axios.delete(`http://localhost:8081/api/users/${id}`);
        this.getAllUser();
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
