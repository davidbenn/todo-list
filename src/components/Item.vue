<template>
  
  <li v-for="(item, index) in items" :key="index" :class="{'bg-green-200': item.done}" class="flex items-center h-12 shadow-sm max-w-full rounded-md bg-gray-200 mb-1">
        <div class="flex flex-row justify-between w-full items-center px-4">
            <div class="flex flex-row items-center">
                <Check v-show="!item.done" v-on:click="checkItem(index)" />
                <Deselect v-show="item.done" v-on:click="deSelectItem(index)" />
                <div class="flex flex-col ml-3">
                    <h3 :class="{'line-through': item.done, 'text-white': item.done}" class="text-gray-700 font-semibold text-sm">{{ item.title }}</h3>
                    <div>
                        <p :class="{'text-white': item.done}" class="text-gray-500 font-semibold text-xs">{{ isMoment(item.date) }}</p>
                    </div>
                </div>
            </div>
            <Close v-on:click="removeItem(index)" />
        </div>
 </li>

</template>

<script>

import Close from './Close.vue';
import Check from './Check.vue';
import Deselect from './Deselect.vue';

import moment from 'moment';

export default {
    name: "Item",
    props: {
        items: {
            type: Array,
            required: true
        },

        saveItems: {
            type: Function,
            required: true
        }
    },

    setup(props) {

        const checkItem = (index) => {

            let confirm = false;

            if(props.items[index]) {
                confirm = window.confirm('Tem certeza que deseja marcar como concluído?');
            }

            if(confirm){
                props.items[index].done = true
                props.saveItems();
            }
        };

        const deSelectItem = (index) => {

            let confirm = false;

            if(props.items[index]) {
                confirm = window.confirm('Tem certeza que deseja marcar como não concluído?');
            }

            if(confirm){
                props.items[index].done = false
                props.saveItems();
            }

        }

        const removeItem = (index) => {

            let confirm = false;

            if(props.items[index]) {
                confirm = window.confirm('Tem certeza que deseja remover este item?');
            }

            if(confirm) {
                props.items.splice(index, 1);
                props.saveItems();
            }
        }

        const isMoment = (date) => {
           return moment(date).format('DD/MM/YYYY HH:mm:ss');
        }

        return {
            isMoment,
            checkItem,
            removeItem,
            deSelectItem
        };
    },

    components: { Close, Check, Deselect }
}
</script>

<style>

</style>