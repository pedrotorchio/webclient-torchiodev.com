<script>
export default {
  name: "SectionParent",
  props: {
    loaded: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    dataFetcher() { // overload
      return /* Promise */ null;
    },
    dataHandler(data) { //overload

    },
    async fetchData() {
      const info = await this.dataFetcher();
      return info;
    }
  },
  created() {
    this.fetchData()
        .then( info => {
          this.$emit('update:loaded', true);
          this.dataHandler(info);
        });
  }
}
</script>
