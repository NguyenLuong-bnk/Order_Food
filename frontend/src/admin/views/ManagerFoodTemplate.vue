<template>
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
            <RouterLink to="/admin/managerfood/update" class="btn btn-success mr-4">
              Edit
            </RouterLink>
            <button type="button" class="btn btn-danger" @click="deleteFood(item.food_id)"> Delete</button>
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
  name: "ManagerFoodTemplate",
  data() {
    return {
      items: [],
    };
  },
  
  created() {
    this.getFoods();
  },
  
  methods: {
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
