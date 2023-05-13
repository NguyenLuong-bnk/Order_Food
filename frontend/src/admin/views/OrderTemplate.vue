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
      <button class="btn" @click="handleLogout()" >Đăng xuất</button>
    </div>
  </div>

  <div class="admin-container">
    <div class="d-flex justify-content-between">
      <h1>Manager Order</h1>
    </div>

    <div class="table-responsive">
      <table class="table colored-header datatable project-list">
        <thead>
          <tr>
            <th>Bill Id</th>
            <th>User Id</th>
            <th>Phone</th>
            <th>Address</th>
            <th>When</th>
            <th>Paid</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="b in filterBills.slice().reverse()" :key="b.bill_id">
            <td>{{ b.bill_id }}</td>
            <td>{{ b.user_id }}</td>
            <td>{{ b.bill_phone }}</td>
            <td>{{ b.bill_address }}</td>
            <td>{{ b.bill_when }}</td>
            <td>{{ b.bill_paid }}</td>
            <td>${{ b.bill_total }}</td>
            <td>{{ avaiableStatus[b.bill_status] }}</td>
            <td>
              <button
                v-if="b.bill_status < 5"
                class="action-btn"
                @click="nextStatusBtn(b.bill_id)"
              >
                {{ avaiableStatus[b.bill_status + 1] }}
              </button>

              <button
                v-if="b.bill_status == 1"
                class="cancel-btn"
                @click="cancelBtn(b.bill_id)"
              >
                Hủy bỏ
              </button>

              <button
                v-else-if="b.bill_status == 5 && b.bill_paid == 'false'"
                class="paid-btn"
                @click="paidBtn(b.bill_id)"
              >
                Thanh toán
              </button>

              <button
                v-else-if="b.bill_status == 5 && b.bill_paid == 'true'"
                class="action-btn"
                @click="nextStatusBtn(b.bill_id)"
              >
                {{ avaiableStatus[b.bill_status + 1] }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";

export default {
  name: "DashboardTemplate",
  data() {
    return {
      avaiableStatus: [
        "Hủy bỏ",
        "Đã xác nhận",
        "Chuẩn bị",
        "Kiểm tra",
        "Vận chuyển",
        "Đã giao hàng",
        "Hoàn thành",
      ],
      allBills: [],
      showOrderDetails: false,
      sendId: undefined,
      interval: "",
    };
  },

  created() {
    this.getAllBills();
    if (!this.admin) {
      this.$router.push("/admin");
    }
  },

  mounted: function () {
    this.autoUpdate();
  },

  beforeUnmount() {
    clearInterval(this.interval);
  },

  computed: {
    ...mapState(["allFoods", "admin"]),

    filterBills: function () {
      return this.allBills.filter(
        (b) => b.bill_status < 6 && b.bill_status > 0
      );
    },
  },
  methods: {
    ...mapMutations(["setAdmin"]),
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    async getAllBills() {
      this.allBills = (await axios.get("/billstatus")).data;
    },

    sendBillId: function (id) {
      this.sendId = id;
      this.showOrderDetails = !this.showOrderDetails;
    },

    closeView: function () {
      this.showOrderDetails = !this.showOrderDetails;
    },

    handleLogout: function () {
      this.setAdmin("");
    },

    async nextStatusBtn(id) {
      await axios.put("/billstatus/" + id);
      this.getAllBills();
    },

    async paidBtn(id) {
      await axios.put("/billstatus/paid/" + id);
      this.getAllBills();
    },

    async cancelBtn(id) {
      await axios.put("/billstatus/cancel/" + id);
      this.getAllBills();
    },
    autoUpdate: function () {
      this.interval = setInterval(
        function () {
          this.getAllBills();
        }.bind(this),
        1000
      );
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
