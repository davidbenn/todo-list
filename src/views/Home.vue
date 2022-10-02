<script>

import Item from '../components/Item.vue';
import Button from '../components/Button.vue';

import { ref } from 'vue';

export default {
    name: "Home",
    components: { Item, Button },

    setup() {

        const title = ref('');

        const done = ref(false);

        const items = ref([]);

        const addItem = () => {

            if(title.value && title.value.trim() !== '') {

                items.value.push({
                    title: title.value,
                    date: new Date(),
                    done: done.value
                });

                title.value = '';

                saveItems();

            }

        };

        const saveItems = () => {
            sessionStorage.setItem('items', JSON.stringify(items.value));
        };

        return {
            title,
            items,
            addItem,
            saveItems
        };
    },

    mounted() {
        if(sessionStorage.getItem('items')) {
            try {
                this.items = JSON.parse(sessionStorage.getItem('items'));
            } catch(e) {
                sessionStorage.removeItem('items');
            }
        }
    }
}

</script>

<template>
    <div class="flex flex-col bg-gray-100 px-5 shadow-md max-w-2xl mx-auto mt-10 mb-10 rounded-md pb-5">
        <div class="flex flex-row items-center w-full h-7 mb-11 py-3 px-0">
            <input type="text" v-on:keyup.enter="addItem()" v-model="title" placeholder="Todo" class="block py-3 rounded-md mr-3 border outline-none w-full px-5" id="">
            <Button v-on:click="addItem()" />
        </div>

        <ul class="w-full">
           <li v-show="items.length === 0" class="text-red-500">
               Não há itens
           </li>
           <Item :items="items" :saveItems="saveItems" />
        </ul>
    </div>
</template>

<style scoped>

</style>
