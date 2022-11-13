<template>
  <div id="app">
    <h1>Counter {{ counter }}</h1>
    <button @click="increment">Button</button>

    <div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, cupiditate, enim. Accusantium beatae cum
        dignissimos distinctio dolorum enim incidunt, minima natus necessitatibus nemo quam quasi qui quia quisquam
        reiciendis tempore!
      </div>
      <div>A alias aliquid aperiam beatae cumque excepturi id impedit, inventore ipsa labore magni nemo nulla officia
        perspiciatis quia quis repellendus reprehenderit saepe sequi suscipit temporibus ullam veritatis vero vitae
        voluptas.
      </div>
      <div>Amet assumenda blanditiis corporis delectus dicta dignissimos dolores doloribus eaque facere facilis hic id
        illum, labore minus neque nihil nisi pariatur quod recusandae rem repellat rerum sunt suscipit ut veniam.
      </div>
      <div>Cumque illo quisquam suscipit veritatis vero! Aliquam aliquid delectus dignissimos dolorum fugiat, molestiae
        odio repellat? Consequuntur maxime perferendis recusandae. Asperiores consequatur deleniti excepturi
        exercitationem facilis maxime officia optio qui. Adipisci?
      </div>
      <div>Accusantium adipisci cupiditate dignissimos eum fuga incidunt ipsa, nam voluptatibus! Aliquid atque
        blanditiis
        corporis, deserunt eligendi ipsum magni maiores mollitia nostrum possimus provident quo ut, vitae? Enim labore
        molestias sequi!
      </div>
      <div>Aut blanditiis delectus dignissimos distinctio eveniet exercitationem, facilis, inventore placeat recusandae
        reiciendis repellat saepe veniam. Alias aut doloribus iure, magnam perspiciatis recusandae reprehenderit
        repudiandae ut voluptas. Ab beatae magnam nulla?
      </div>
      <div>Dicta et, magnam? Adipisci aliquid animi cum dolorum ducimus fugit labore nobis non nostrum odit placeat quas
        quis, quod ratione reiciendis repudiandae rerum similique sint temporibus ullam vitae voluptas, voluptate!
      </div>
      <div>Consequuntur cumque eum expedita fugiat illum minus, molestiae nesciunt officiis perferendis repellat
        sapiente,
        sint voluptate? Architecto doloremque labore magnam neque obcaecati omnis perspiciatis quas quis reiciendis
        unde,
        veniam veritatis, voluptates?
      </div>
      <div>Corporis est nemo nihil! Ab architecto assumenda consequatur deleniti ex expedita facere fugit illum iure,
        iusto laborum maxime natus nihil nostrum placeat possimus quisquam reiciendis rem similique temporibus vel vero.
      </div>
      <div>Alias animi, assumenda beatae culpa, cupiditate dolor ducimus earum error facere, ipsam itaque nostrum
        praesentium quos tenetur velit! Accusamus atque cumque dolorem eligendi eos inventore odio sunt totam voluptates
        voluptatum.
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "canvasDrawing",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increment() {
      return this.counter++
    }
  },
};
</script>


<style scoped>

</style>