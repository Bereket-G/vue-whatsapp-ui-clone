<template>
    <div class=" w-full" style="position: relative;">

        <div class="w-full" style="position: absolute; z-index: -100;background-color: gray;">
            <div class="w-full" style="background-color: #009688; height: 127px;position: fixed; ">
            </div>
        </div>

        <div class="container m-auto" style="position: relative;z-index: 100;height: calc(100% - 38px);top:19px;">
            <InstantChat></InstantChat>
        </div>
    </div>
</template>

<script>
    import InstantChat from './InstantChat'

    export default {
        name: 'App',
        components: {
            InstantChat
        }
    }
</script>
