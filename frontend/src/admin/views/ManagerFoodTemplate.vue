<template>
  <div class="header">
    <nav class="navbar">
      <router-link @click="scrollToTop()" to="/admin/user">User</router-link>
      <router-link @click="scrollToTop()" to="/admin/Managerfood"
        >Food</router-link
      >
      <router-link @click="scrollToTop()" to="/admin/Managerorder"
        >Order</router-link
      >
      <router-link @click="scrollToTop()" to="/admin/bookingtable"
        >Booking</router-link
      >
    </nav>
    <div class="d-flex justify-content-between">
      <button class="btn" @click="handleLogout()" to="/admin">Đăng xuất</button>
    </div>
  </div>
  <div class="admin-container">
    <div class="d-flex justify-content-between">
      <h1>MANAGER FOOD!</h1>
      <RouterLink to="/admin/managerfood/add" class="btn btn-success">
        Add Food
      </RouterLink>
    </div>

    <div class="table-responsive">
      <table class="table colored-header datatable project-list">
        <thead>
          <tr>
            <th>food_id</th>
            <th>food_name</th>
            <th>food_price</th>
            <th>food_status</th>
            <th>food_type</th>
            <th>food_category</th>
            <th class="has-text-centered">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.food_id">
            <td>{{ item.food_id }}</td>
            <td>{{ item.food_name }}</td>
            <td>{{ item.food_price }}</td>
            <td>{{ item.food_status }}</td>
            <td>{{ item.food_type }}</td>
            <td>{{ item.food_category }}</td>
            <td>
              <RouterLink
                to="/admin/managerfood/update"
                class="btn btn-success mr-4"
              >
                Edit
              </RouterLink>
              <button
                type="button"
                class="btn btn-danger"
                @click="deleteFood(item.food_id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>

      <p class="mt-3">Current Page: {{ currentPage }}</p>

      <b-table
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
      ></b-table>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import axios from "axios";

export default {
  name: "DashboardTemplate",
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [],
    };
    
  },
  computed: {
      rows() {
        return this.items.length
      }
    },

  created() {
    this.getFoods();
  },
  methods: {
    ...mapMutations(["setAdmin"]),
    scrollToTop() {
      window.scrollTo(0, 0);
    },

    handleLogout: function () {
      this.setAdmin("");
    },

    async getFoods() {
      try {
        const response = await axios.get("http://localhost:8081/api/foods");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async deleteFood(id) {
      try {
        await axios.delete(`http://localhost:8081/api/foods/${id}`);
        this.getFoods();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 9%;
}

.header .navbar a {
  font-size: 1.7rem;
  margin: 0 1rem;
  color: #666;
}

.header .navbar a:hover {
  color: #27ae60;
}

.header .navbar a.router-link-exact-active {
  color: #f38609;
}

@media (max-width: 768px) {
  .header .navbar {
    position: absolute;
    top: 99%;
    left: 0;
    right: 0;
    background: #fff;
    border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }

  .header .navbar.active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  .header .navbar a {
    font-size: 2rem;
    margin: 2rem;
    display: block;
  }
}

@media (max-width: 576px) {
  .header .navbar a {
    font-size: 1.5rem;
    margin: 0;
  }
}

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
