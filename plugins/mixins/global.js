import { mapState } from 'vuex'
import Vue from 'vue'

Vue.mixin({
    computed: {
        ...mapState({
            deviceType: state => state.deviceType,
        }),
        injectClass () {
            if (!this.$store) {
                return ''
            }
            return this.deviceType
        }
    },
})
