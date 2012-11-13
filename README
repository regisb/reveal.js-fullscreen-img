Reveal.js fullscreen image plugin
---------------------------------

This is a simple plugin to insert full screen images in your presentations.

To use this plugin, you will need to use both the included js script and stylesheet:

  - copy fullscreen-img.js to your lib/js/ folder
  - copy fullscreen-img.css to your css/ folder
  - include both files in your presentation:

    <link rel="stylesheet" href="css/fullscreen-img.css">
    <script>
      Reveal.initialize({
        ...
        dependencies: [
          // Syntax highlight for <code> elements
          { src: 'lib/js/fullscreen-img.js' },
          ...
        ]
        ...
      });
    </script>

Then, you can flag any section as including a fullscreen image.

A title page:
  
  <section fullscreen-img="img/cover_image.jpg">
    <h1>A Fantastic Title</h1>
    <h2>Interesting subtitle</h2>
  </section>

If you want to scale the image so that the entire image is contained in the
slide, add a fullscreen-size attribute with value "contain" to your section:

  <section fullscreen-img="img/cover_image.jpg" fullscreen-size="contain">
    ...
  </section>
  
