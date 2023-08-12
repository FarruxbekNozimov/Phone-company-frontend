import { ref } from 'vue'
export const chat_menus = ref([
  {
    name: 'All',
    color: 'text-white',
    bg: 'bg-blue-500/80',
    active: 'bg-blue-500',
    this: 1,
    fields: [
      { icon: 'bx bx-coffee' },
      { icon: 'bx bxs-castle' },
      { icon: 'bx bx-info-circle' },
      { icon: '' },
      { icon: '' },
      { icon: '' },
      { icon: 'bx bx-task' }
    ]
  },
  {
    name: 'Active',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    active: 'bg-green-500',
    this: 0,
    fields: [
      { icon: 'bx bx-coffee' },
      { icon: 'bx bxs-castle' },
      { icon: 'bx bx-info-circle' },
      { icon: 'bx bx-task' }
    ]
  },
  {
    name: 'Listed',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    active: 'bg-blue-500',
    this: 0,
    fields: [{ icon: '' }, { icon: '' }, { icon: '' }]
  },
  {
    name: 'Closed',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    active: 'bg-purple-500',
    this: 0,
    fields: [
      { icon: 'bx bx-coffee' },
      { icon: 'bx bxs-castle' },
      { icon: 'bx bx-info-circle' },
      { icon: '' },
      { icon: '' },
      { icon: '' },
      { icon: 'bx bx-task' }
    ]
  },
  {
    name: 'Deleted',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    active: 'bg-red-500',
    this: 0,
    fields: [{ icon: '' }, { icon: '' }, { icon: '' }]
  },
  {
    name: 'Issue',
    color: 'text-white',
    bg: 'bg-red-500',
    active: 'bg-red-800',
    this: 0,
    fields: [{ icon: '' }, { icon: '' }]
  }
])
