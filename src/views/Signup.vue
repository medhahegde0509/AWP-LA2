<template>
<div>
    <form @submit.prevent="handleSubmit">
        <label>Email :</label>
        <input type="email" v-model="email" required>

        <label>Password :</label>  
        <input type="password" v-model="password" required>            
        <div v-if="passwordError" class="error">{{ passwordError }} </div>

        <label>Nationality:</label>
        <select v-model="nationality">
            <option value="Indian">Indian</option> 
            <option value="NRI">NRI</option> 
        </select>

        <div>
            <label>Age Group:</label>
            <input type="checkbox" value="18-35" v-model="age" >
            <label>18-35</label>
            <input type="checkbox" value="36-55" v-model="age" >
            <label>36-55</label>
             <input type="checkbox"  value="56 and older" v-model="age" >
            <label>56 and older</label>
        </div>      

        <div>
            <input type="checkbox" v-model="terms" required>
            <label>Please accept terms and conditions</label>
        </div>
        <div class="button">
            <button class="submit" type="submit">Sign up here</button>
        </div>
    </form>

    <p> Email: {{ email }} </p>
    <p> Nationality: {{ nationality }} </p>
    <p> Age group: <span v-for="edu in age" :key="edu"> {{ edu }}</span></p>  
    <p> Terms : {{ terms }} </p>
    
</div>

</template>


<script>
export default{

    data() {
        return {
            email: '',
            password: '',
            nationality: 'indian',
            age: [],
            terms: false,
            passwordError: ''
        }
    },
    methods: {
       
        handleSubmit() {
            //Validate password field length
            this.passwordError = this.password.length > 6 ? 
            '' : 'Password should be more than 6 characters long!';
            if(!this.passwordError) {
                console.log(this.email);
                console.log(this.password);
                console.log(this.role);
                console.log(this.education);
                console.log(this.terms);

            }
        }
    }
    
}
</script>


<style scoped> 

form {
    max-width: 600px;
    margin: 30px auto;
    background: #fff;
    text-align: left;
    padding: 20px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display:inline-block;
    margin: 25px 0 15px;
    text-transform: uppercase;
}

input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: bordre-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width:16px;
    margin: 0 10px 0;
    position: relative;
    top: 2px;
}

.pill {
    display: inline-block;
    margin: 20px 10px 0 0 ;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    cursor: pointer;
    background: #eee;
}

button {
    background: rgb(7, 24, 7);
    border: 0;
    padding: 10px 20px;
    color: white;
    border-radius: 20px;
}

.submit {
    text-align: center;
}

.error {
    color: #ff0000;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>