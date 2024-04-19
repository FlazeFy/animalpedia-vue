<script setup>
  defineProps({
      active: {
          type: String,
          required: true
      },
      subactive: {
          type: String,
          required: false
      }
  })
  function getActive(val, curr){
      if(val == curr){
          return "active";
      } else {
          return "";
      }
  }
</script>

<template>
  <nav id="navbar" class="navbar">
      <ul>
          <li><a :class="'nav-link ' + getActive(active, 'home')" href="/">Home</a></li>
          <li><a :class="'nav-link ' + getActive(active, 'book')" href="/book">Book</a></li>
          <li><a :class="'nav-link ' + getActive(active, 'news')" href="/news">News</a></li>
          <li>
              <a :class="'nav-link mb-2 ' + getActive(active, 'stats')" data-bs-toggle="collapse" href="#collapseStats">Stats</a>
              <div class="collapse" id="collapseStats">
                  <a :class="'nav-link sub mb-2 ' + getActive(subactive, 'stats_animals')" href="/stats_animals">Stats Animals</a>
                  <a :class="'nav-link sub mb-2 ' + getActive(subactive, 'stats_news')" href="/stats_news">Stats News</a>
                  <a :class="'nav-link sub mb-2 ' + getActive(subactive, 'stats_others')" href="/stats_others">Stats Others</a>
              </div>
          </li>
      <li>
          <a :class="'nav-link mb-2 ' + getActive(active, 'manage')" data-bs-toggle="collapse" href="#collapseManage">Manage</a>
          <div class="collapse" id="collapseManage">
          <a :class="'nav-link sub mb-2 ' + getActive(subactive, 'manage_book')" href="/manage_book">Manage Book</a>
          <a :class="'nav-link sub mb-2 ' + getActive(subactive, 'manage_news')" href="/manage_news">Manage News</a>
          <a :class="'nav-link sub mb-2 ' + getActive(subactive, 'manage_dct')" href="/manage_dct">Manage Dictionary</a>
          <a :class="'nav-link sub mb-2 ' + getActive(subactive, 'manage_tag')" href="/manage_tag">Manage Tag</a>
          </div>
      </li>
      <li><a :class="'nav-link ' + getActive(active, 'about')" href="/about">About</a></li>
      <li>
          <GetSignOut/>
      </li>
      </ul>
      <i class="fa-solid fa-bars mobile-nav-toggle" title="Open NavBar"></i>
  </nav>
</template>