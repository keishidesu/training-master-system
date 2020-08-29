<template>
  <b-container>
    <div>
      <h2 style="color:#FFFFFFFF"> Material List </h2>
      <MaterialList />
    </div>
    <div class="mt-4">
      <b-button v-b-modal.postFormModal>
        Add Material
      </b-button>
      <b-modal id="postFormModal" hide-footer title="Add Material">
        <postForm />
      </b-modal>
    </div>
  </b-container>
</template>

<script>
import postForm from '../components/post/post-form'
import MaterialList from '../components/post/post-display'

export default {
  components: {
    postForm,
    MaterialList
  }
}
</script>
