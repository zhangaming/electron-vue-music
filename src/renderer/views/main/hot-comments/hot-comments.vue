<template>
  <v-container fluid class="pl-8 pr-7">
    <base-title text="精彩评论" class="mb-4"/>
    <v-row>
      <base-comment-item v-for="comment in commentList" :key="comment.id" :comment="comment" :resourceType="resourceType"/>
    </v-row>
  </v-container>
</template>

<script>
import {getHotComments} from '@/API/comment.js'
import BaseTitle from '@/base/title/base-title.vue'
import BaseCommentItem from '@/base/comment-item/base-comment-item.vue'
import bus from '@/common/bus.js'
export default {
  components:{
    BaseTitle,
    BaseCommentItem
  },
  data(){
    return {
      commentList: [],
      more: true,
      resourceType: this.$route.params.type,
      resourceID: this.$route.params.id,
      page: 1
    }
  },
  methods: {
    getHotComments(){
      this.more && getHotComments({type: this.resourceType, id: this.resourceID, page: this.page}).then(({hotComments, hasMore}) => {
        this.commentList.push(...hotComments)
        this.more = hasMore
        this.page++
      })
    }
  },
  created(){
    console.log(this.resourceType)
    bus.on('scroll:reachBottom', this.getHotComments)
    this.getHotComments()
  },
  destroyed(){
    bus.off('scroll:reachBottom',  this.getHotComments)
  }
}
</script>
