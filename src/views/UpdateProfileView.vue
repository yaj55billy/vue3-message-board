<script setup>
import { ref, computed, onMounted } from "vue";
import SectionTitle from "@/components/SectionTitle.vue";
import UserInfo from "@/components/UserInfo.vue";
import PasswordReset from "@/components/PasswordReset.vue";

const activeComponent = ref("userInfo");
const handleActiveComponent = (value) => {
	activeComponent.value = value;
};

const userInfoTabActive = computed(() => {
	if (activeComponent.value === "userInfo") {
		return "text-white bg-slate-900";
	} else {
		return "text-slate-900 bg-white";
	}
});
const passwordResetTabActive = computed(() => {
	if (activeComponent.value === "passwordReset") {
		return "text-white bg-slate-900";
	} else {
		return "text-slate-900 bg-white";
	}
});
</script>

<template>
	<SectionTitle text="修改個人資料" />
	<section class="mt-7">
		<div class="ml-5">
			<button
				type="button"
				class="py-2 px-6 border-slate-900 border-2 border-b-0 border-r-0 rounded-t-lg hover:bg-slate-900 hover:text-white"
				:class="userInfoTabActive"
				@click="handleActiveComponent('userInfo')"
			>
				暱稱修改
			</button>
			<button
				type="button"
				class="py-2 px-6 border-slate-900 border-2 border-b-0 rounded-t-lg hover:bg-slate-900 hover:text-white"
				:class="passwordResetTabActive"
				@click="handleActiveComponent('passwordReset')"
			>
				重設密碼
			</button>
		</div>
		<div
			class="bg-white border-slate-900 border-2 shadow-slate-900 shadow-[0_3px_0px] rounded-lg py-8 px-4"
		>
			<div class="w-[320px] mx-auto">
				<Transition name="fade" mode="out-in">
					<div :key="activeComponent">
						<template v-if="activeComponent === 'userInfo'">
							<UserInfo key="userInfo" />
						</template>
						<template v-if="activeComponent === 'passwordReset'">
							<PasswordReset key="passwordReset" />
						</template>
					</div>
				</Transition>
			</div>
		</div>
	</section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
