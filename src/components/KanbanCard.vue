<template>
    <div class="bg-white p-4 rounded-lg mb-4 group relative">
        <h3 class="text-lg font-semibold px-1 relative z-10 group-hover:text-white">
            {{ task.title }}
        </h3>
        <span
            class="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-indigo-600 rounded-lg z-0 group-hover:h-full"
        ></span>
        <p class="relative z-10 group-hover:text-white">{{ task.description }}</p>
    </div>
</template>

<script>
export default {
    name: 'KanbanCard',
    props: {
        task: {
            type: Object,
            required: true
        }
    }
}
</script>
