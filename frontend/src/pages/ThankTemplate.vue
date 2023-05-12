<template>
    <div class="thank-container">
        <h1>
            <p>
                <span>t</span>
                <span>h</span>
                <span>a</span>
                <span>n</span>
                <span>k</span>
            </p>

            <p>
                <span>y</span>
                <span>o</span>
                <span>u</span>
            </p>
        </h1>

        <div class="thank-letter">
            <p v-none>Cảm Ơn Bạn Đã Trao Niềm Tin Cho Chúng Tôi!</p>
            <p v-none>
               Chúng Tôi Vừa Xác Nhận Bạn Đã Nhận Được Đơn Đặt Hàng Và Hy Vọng Bạn Sẽ Thích Nó. Mỗi Mặt Hàng Đều Được Đội Ngũ Của Chúng Tôi Làm Thủ Công, Cẩn Thận Đến Từng Chi Tiết, Vì Vậy Chúng Tôi Luôn Có Thể Cung Cấp Cho Bạn Trải Nghiệm Tốt Nhất.
            </p>
            <router-link class="btn" to="/menu">Tiếp tục đặt hàng</router-link>
        </div>
    </div>
</template>


<script>
export default {
    name: 'ThankTemplate',
}
</script>
<script setup>
// enables v-focus in templates
const vNone = {
    mounted(el) {
        el.style.textTransform = "none";
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Luckiest+Guy");

.thank-container {
    padding: 2rem 9%;
    background: #fff;
    height: 90vh;
}


.thank-container h1 {
    width: 100%;
    height: 100px;
    margin: auto;
    display: block;
    text-align: center;
    margin-top: 50px;
}

.thank-container h1 p span {
    position: relative;
    color: #27ae60 !important;
    top: 20px;
    display: inline-block;
    -webkit-animation: bounce 0.3s ease infinite alternate;
    font-size: 80px;
    color: #fff;
    text-shadow: 0 1px 0 #20884b, 0 2px 0 #20884b, 0 3px 0 #20884b, 0 4px 0 #20884b,
        0 5px 0 #20884b, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent,
        0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
}

.thank-container h1 p span:nth-child(2) {
    -webkit-animation-delay: 0.1s;
}

.thank-container h1 p span:nth-child(3) {
    -webkit-animation-delay: 0.2s;
}

.thank-container h1 p span:nth-child(4) {
    -webkit-animation-delay: 0.3s;
}

.thank-container h1 p span:nth-child(5) {
    -webkit-animation-delay: 0.4s;
}

.thank-letter {
    position: relative;
    top: 180px;
    font-size: 20px;
    width: 40vw;
    margin: 0 auto;
    text-align: center;
}

.thank-letter a {
    margin-top: 20px;
}

@-webkit-keyframes bounce {
    100% {
        top: -20px;
        text-shadow: 0 1px 0 #20884b, 0 2px 0 #20884b, 0 3px 0 #20884b, 0 4px 0 #20884b,
            0 5px 0 #20884b, 0 6px 0 #20884b, 0 7px 0 #20884b, 0 8px 0 #20884b, 0 9px 0 #20884b,
            0 50px 25px rgba(0, 0, 0, 0.2);
    }
}

@media (max-width: 1024px) {
    .thank-container {
        padding: 0px;
    }

    .thank-container h1 {
        margin-top: 20px;
    }

    .thank-container h1 p span {
        font-size: 70px;
    }

    .thank-letter {
        font-size: 16px;
        width: 50vw;
        top: 160px;
    }
}

@media (max-width: 576px) {

    .thank-container h1 {
        margin-top: 50px;
    }

    .thank-container h1 p span {
        font-size: 50px;
    }

    .thank-letter {
        font-size: 14px;
        width: 90vw;
        top: 90px;
    }
}
</style>