<template>
    <div class="flex flex-col w-auto m-2">
        <Label :name="labelName"></Label>
        <slot></slot>
    </div>
</template>

<script>
  import Label from './Label';
  export default {
    components: {
      Label
    },
    name: "FormGroup",
    props: {
      labelName: String
    }
  }
</script>