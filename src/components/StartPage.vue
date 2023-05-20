<template>
  <div>
    <div class="button-container">
      <div
        class="button"
        @click="
          showModal = true;
          characterType = 'man';
        "
      >
        <img src="man.png" />
      </div>
      <div
        class="button"
        @click="
          showModal = true;
          characterType = 'woman';
        "
      >
        <img src="woman.png" />
      </div>
      <div
        class="button"
        @click="
          showModal = true;
          characterType = 'pet';
        "
      >
        <img src="pet.png" />
      </div>
    </div>
    <div class="bottom-box">
      <div class="border-box">
        <!-- border box content here -->
      </div>
    </div>
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <p>캐릭터 설정을 완료하겠습니까?</p>
        <div class="button-container">
          <button @click="confirmSettings">네</button>
          <button @click="showModal = false">아니요</button>
        </div>
      </div>
    </div>
    <div class="modal" v-if="showCongratulationsModal">
      <div class="modal-content">
        <p>가입을 축하합니다!</p>
        <div class="button-container">
          <button
            @click="
              showCongratulationsModal = false;
              router.push('/');
            "
          >
            확인
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "startpage",
  setup() {
    const showModal = ref(false);
    const showCongratulationsModal = ref(false);
    const router = useRouter();
    const characterType = ref("");

    const confirmSettings = () => {
      showModal.value = false;
      showCongratulationsModal.value = true;
    };

    return {
      showModal,
      showCongratulationsModal,
      characterType,
      confirmSettings,
      router,
    };
  },
};
</script>

<style>
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.button {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.button:hover {
  transform: scale(1.1);
}

.button img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bottom-box {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.border-box {
  border: 2px solid black;
  width: 100%;
  padding: 60px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 5px;
}

.button-container button {
  width: 100px;
  height: 40px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
}
</style>
