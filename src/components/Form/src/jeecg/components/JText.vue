<template>
  <div :class="prefixCls">
    {{ text }}
  </div>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { propTypes } from '/@/utils/propTypes';
  import { useDesign } from '/@/hooks/web/useDesign';
  const { prefixCls } = useDesign('j-switch');
  const props = defineProps({
    // v-model:value
    text: propTypes.string.def('')
  });
  const textValue = ref<string>('');
  watch(
    () => props.text,
    (val) => {
      textValue.value = val as string;
    },
    { immediate: true }
  );
</script>

<style lang="less">
  //noinspection LessUnresolvedVariable
  @prefix-cls: ~'@{namespace}-j-switch';

  .@{prefix-cls} {
  }
</style>
