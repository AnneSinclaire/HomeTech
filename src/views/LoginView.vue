<template>
    <!-- <div>
        <div class="container mx-auto-mt-8"> </div>
        <h1 class="text-3x1 font-semibold mb-4"> Login </h1>
            <form @submit.prevent="login">
            <div class="mb-4">
                <label for="username" class="block font-medium">Username:</label>
                <input type="text" id="username" v-model="username" class="mt-1 p-2 round border w-60" required>
            </div>
            <div class="mb-4">
                <label for="password" class="block font-medium">Password:</label>
                <input type="password" id="username" v-model="password" class="mt-1 p-2 round border w-60" required>
            </div>
            <div>
                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Login</button>
            </div>
        </form>
    </div> -->
    <center>

    <div class="bg-white-50 dark:bg-white-800 border-white-200 dark:border-white-700 rounded-lg p-8 md:p-12 mb-8">
    <div class="grid md:grid-cols-4 gap-8 ">
<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5> 
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="text" name="email" id="username" v-model="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" id="username" v-model="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
        </div>
        <div class="flex items-start">
            <div class="flex items-start">
                <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
                </div>
                <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div>
        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
    </form>
</div>
</div>
</div>
</center>

</template>

<script>
    import { users } from '../assets/user'

    export default {
        data() {
            return {
                username: '',
                password: '',
                isLoggedIn: 'true'
            };
        },

        methods: {
            login() {
                const foundUser = users.find(user => user.username === this.username && user.password == this.password && user.isLoggedin == true);
                if (foundUser) {    
                    alert('Login berhasil!');
                    this.$router.push('/produk')
                    // dapat melakukan navigasi ke halaman lain jika login behasil
                } else {
                    alert('Username atau Password salah');
                }
            },
        },
    };
</script>