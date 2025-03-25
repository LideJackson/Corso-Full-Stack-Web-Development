<template>

    <div class="body">
  
        <h1>LISTA DESIDERI</h1>
      

        <div class="pannello">
          <form >
             <h2>Cosa vuoi desideri?</h2>
             <input type="text" class="scritta"name="task" placeholder="Playstation 5" v-model="task">
        
          <input type="button" @click="insert" value="Aggiungi">
        </form>
        </div>
        <div class="list">
        
        <div  v-for="todo in list" :key="todo.id">
          <div class="t1">{{ todo.lavoro }}</div>


          <div v-for="todo in list" :key="todo.id">
          <input type="checkbox" v-model="todo.completato" @click="stampa">

        </div>
        </div>

        
        
      </div>
          
    </div>
    
  </template>

  <script setup>
  let task = ref('')
  let list = ref([])
  const insert = () => {
    if(task.value.trim()===''){
      alert('Task Vuota')
      return;

    }
    const newtask={
      id: list.value.length +1 ,
      lavoro: task.value,
      completato: false
    };
    list.value.push(newtask);
    console.log(list.value);

  }

</script>

<style scoped>
.body{
    background-color: #fdb329;
    width: 100%;
    margin: 0px 0px;
    height: 100vh;

}
header{
  text-align: center;
}
.lih{
  text-decoration: none;
  margin: 20px 20px;


}
h1{
  text-align: center;
  font-family: Verdana, sans-serif;
  font-size: 30px;

}
.pannello{
    display: flex;
    background-color: rgb(255, 158, 47);
    margin: 20px;
    border-radius: 20px;
    justify-content: center;
}
.pannello h2{
  font-family: Arial , sans-serif;
  color: rgb(225, 255, 32);
  text-shadow: 1px 2px 1px rgb(255, 122, 122);
  font-size: 3em;
}
.scritta{
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 30px;
  text-align: center;
  background-color: #ffc559;
}


input[type="button"]{
  text-align: center;
  margin: 20px 10px;
}
.list{
  display: block;
}

</style>