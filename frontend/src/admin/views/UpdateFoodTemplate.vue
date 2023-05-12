<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Update Food</h4>
      </div>
      <div class="card-body">
        <div class="mt-3">
          <label for=""> Name</label>
          <input type="text" v-model="foodName" class="form-control" />
        </div>
      </div>

      <div class="card-body">
        <div class="mt-3">
          <label for=""> Star</label>
          <input type="text" v-model="foodStar" class="form-control" />
        </div>
      </div>
      <div class="card-body">
        <div class="mt-3">
          <label for=""> Vote</label>
          <input type="text" v-model="foodVote" class="form-control" />
        </div>
      </div>
      <div class="card-body">
        <div class="mt-3">
          <label for=""> Price</label>
          <input type="text" v-model="foodPrice" class="form-control" />
        </div>
      </div>
      <div class="card-body">
        <div class="mt-3">
          <label for=""> Discount</label>
          <input type="text" v-model="foodDiscount" class="form-control" />
        </div>
      </div>
      <div class="card-body">
        <div class="mt-3">
          <label for=""> Description</label>
          <input type="text" v-model="foodDesc" class="form-control" />
        </div>
      </div>
      <div class="card-body">
        <div class="mt-3">
          <label for=""> Status</label>
          <input type="text" v-model="foodStatus" class="form-control" />
        </div>
      </div>
      <div class="card-body">
        <div class="mt-3">
          <label for=""> Type</label>
          <input type="text" v-model="foodType" class="form-control" />
        </div>
      </div>
      <div class="card-body">
        <div class="mt-3">
          <label for=""> Category</label>
          <input type="text" v-model="foodCategory" class="form-control" />
        </div>
      </div>
      <div class="card-body ">
        <div class="mt-3">
          <label for=""> Image</label>
          <input type="text" v-model="foodSrc" class="form-control" />
        </div>
      </div>
    </div>

    <div class="mt-4">
      <button type="button" class="btn btn-danger" @click="updateFood">
        Update
      </button>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "UpdateFoodTemplate",
  data() {
    return {
      foodName: "",
      foodStar: "",
      foodVote: "",
      foodPrice: "",
      foodDiscount: "",
      foodDesc: "",
      foodStatus: "",
      foodType: "",
      foodCategory: "",
      foodSrc: "",
    };
  },

  created: function () {
    this.getFoodById();
  },

  methods: {
    async getFoodById() {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/foods/${this.$route.params.id}`
        );
        this.foodName = response.data.food_name;
        this.foodStar = response.data.food_star;
        this.foodVote = response.data.food_vote;
        this.foodPrice = response.data.food_price;
        this.foodDiscount = response.data.food_discount;
        this.foodDesc = response.data.food_desc;
        this.foodStatus = response.data.food_status;
        this.foodType = response.data.food_type;
        this.foodCategory = response.data.food_category;
        this.foodSrc = response.data.food_src;
      } catch (err) {
        console.log(err);
      }
    },

    async updateFood() {
      try {
        await axios.put(
          `http://localhost:8081/api/foods/${this.$route.params.id}`,
          {
            food_name: this.foodName,
            food_star: this.foodStar,
            food_vote: this.foodVote,
            food_price: this.foodPrice,
            food_discount: this.foodDiscount,
            food_desc: this.foodDesc,
            food_status: this.foodStatus,
            food_type: this.foodType,
            food_category: this.foodCategory,
            food_src: this.foodSrc,
          }
        );
        this.foodName = "";
        this.foodStar = "";
        this.foodVote = "";
        this.foodPrice = "";
        this.foodDiscount = "";
        this.foodDesc = "";
        this.foodStatus = "";
        this.foodType = "";
        this.foodCategory = "";
        this.foodSrc = "";
        this.$router.push("/admin/managerfood");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
