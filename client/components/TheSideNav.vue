<template>
  <div id="app">
    <!-- <div id="view" :class="[{'collapsed' : collapsed}]">
      <router-view/>
    </div>-->
    <SidebarMenu
      class="sidebar"
      :menu="menu"
      :collapsed="collapsed"
      @item-click="onItemClick"
      @collapse="onCollapse"
    />
  </div>
</template>

<script>
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { SidebarMenu } from 'vue-sidebar-menu'
export default {
  name: 'App',
  components: {
    SidebarMenu
  },
  data () {
    return {
      menu: [
        {
          header: false,
          title: 'Training Master System'
        },
        {
          href: '/',
          title: 'Home',
          icon: 'fas fa-home'
        },
        {
          href: '/profile',
          title: 'Profile',
          icon: 'fas fa-user-circle'
        },
        {
          href: '/course',
          title: 'Course',
          icon: 'fas fa-book',
          child: [
            {
              href: '/discussion',
              title: 'Discussion Board',
              icon: 'fas fa-newspaper'
            }
          ]
        },
        {
          href: '/feeback',
          title: 'Feedback',
          icon: 'fas fa-info-circle'
        },
        {
          href: '/settting',
          title: 'Setting',
          icon: 'fas fa-cogs',
          child: [
            {
              href: '/setting/editProfile',
              title: 'Edit Profile',
              icon: 'fas fa-id-card'
            },
            {
              href: '/setting/editPassword',
              title: 'Change Password',
              icon: 'fas fa-lock'
            }
          ]
        },
        {
          href: '/help',
          title: 'Help',
          icon: 'fas fa-question'
        }
      ],
      collapsed: true
    }
  },
  methods: {
    onItemClick (e, i) {
      console.log('onItemClick')
    },
    onCollapse (c) {
      console.log('onCollapse')
      this.collapsed = c
    }
  }
}
</script>

<style>
#view {
  padding-left: 350px;
}
#view.collapsed {
  padding-left: 50px;
}

.sidebar.v-sidebar-menu .vsm-arrow:after {
  content: "\f105";
  font-family: "FontAwesome";
}
.sidebar.v-sidebar-menu .collapse-btn:after {
  content: "\f07e";
  font-family: "FontAwesome";
}
</style>
