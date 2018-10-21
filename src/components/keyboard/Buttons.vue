<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.button, .info{
  border: 1px solid white;
  text-align: center;
  color: white;
  height: 40px;
  width: 170px;
  line-height: 38px;
  text-transform: uppercase;
  transition: all .3s;
  margin: 10px;
}
.button:hover{
  border: 1px solid green;
  color: green;
  cursor: pointer;
}
span{
  display: block;
  width: 100%;
  height: 100%;
}
</style>
