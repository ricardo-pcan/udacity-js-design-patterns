$(function()
  {
    var model = {
      current_cat: null,
      cats : [
        {
          name: "pancho",
          clicks: 0,
          img: "http://onedigital.mx/ww3/wp-content/uploads/2014/08/linguagem-corporal-gatos.jpg"
        },
        {
          name: "gus",
          clicks: 0,
          img: "http://onedigital.mx/ww3/wp-content/uploads/2014/08/linguagem-corporal-gatos.jpg"
        },
        {
          name: "elmer",
          clicks: 0,
          img: "http://onedigital.mx/ww3/wp-content/uploads/2014/08/linguagem-corporal-gatos.jpg"
        },
        {
          name: "lola",
          clicks: 0,
          img: "http://onedigital.mx/ww3/wp-content/uploads/2014/08/linguagem-corporal-gatos.jpg"
        },
      ],
    };
    var octopus = {
      init: function()
      {
        model.current_cat = model.cats[0];
        catView.init();
      },
      getCats: function()
      {
        return model.cats;
      },
      getCurrentCat: function()
      {
        return model.current_cat;
      },
      setCurrentCat: function(cat)
      {
        model.current_cat = cat;
      },
      addClick: function()
      {
        model.current_cat.clicks += 1;
        catView.renderCat();
      }

    };
    var catView = {
      init: function()
      {
        this.cat_container = $('.cat-Container');
        this.cat_name = $('.cat-Name');
        this.cat_clicks = $('.cat-Clicks');
        this.cat_image = $('.cat-Image');
        this.cat_list = $('#cat-List');        
        this.createList();
        this.renderCat();
        this.clickImage();
      },
      renderCat: function()
      {
        var cat = model.current_cat;
        this.cat_clicks.text(cat.clicks);
        this.cat_name.text(cat.name);
        this.cat_image.attr('src', cat.img);

      },
      clickImage: function()
      {
        var _self = this;
        _self.cat_image.on("click", function()
        {
          octopus.addClick();
        });
      },
      createList: function()
      {
        var cats = model.cats;
        var _self = this;
        for(var i = 0; i < cats.length; i++ )
        {
          var cat = cats[i];
          var el = $('<li></li>');
          el.text(cat.name);
          _self.cat_list.append(el);
          el.on('click', (function(cat_copy){
            return function(){
              octopus.setCurrentCat(cat_copy);
              catView.renderCat();
            }
          })(cat));

        }
      }

    };
    octopus.init();
  })();