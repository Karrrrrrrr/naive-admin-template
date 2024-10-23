<template>
  <n-icon v-bind="props">
    <icon/>
  </n-icon>
</template>

<script lang="ts" setup>
import { NIcon } from 'naive-ui'
import drag from "./DragIcon.vue";
import {
  AddOutline as add,
  AlertCircleOutline as fallback,
  BuildOutline as tools,
  ChatbubbleEllipsesOutline as comments,
  ColorPaletteOutline as themes,
  CreateOutline as posts,
  FlaskOutline as flask,
  HardwareChipOutline as plugins,
  HelpCircleOutline as help,
  ImagesOutline as media,
  LogoGithub as github,
  NavigateOutline as navigate,
  NewspaperOutline as pages,
  NotificationsOutline as notifications,
  PeopleOutline as users,
  RefreshOutline as refresh,
  SettingsOutline as settings,
  SpeedometerOutline as dashboard,
} from '@vicons/ionicons5'

const icons = {
  navigate,
  refresh,
  dashboard,
  posts,
  pages,
  media,
  users,
  comments,
  themes,
  plugins,
  tools,
  settings,
  flask,
  add,
  help,
  notifications,
  github,
  fallback,
  drag
}

type IconTypes = keyof typeof icons

const props = defineProps({
  ...NIcon.props,
  type: {
    type: String,
    default: 'fallback'
  }
})

const icon = icons[props.type as IconTypes]
</script>
