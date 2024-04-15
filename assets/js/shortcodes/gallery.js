htmx.onLoad(function(content) {
    console.groupCollapsed('[DEBUG] Gallery feature enable');
    let magicGrids = [];
    let nodeGalleries = content.querySelectorAll('.gallery');

    nodeGalleries.forEach(nodeGallery => {
        let magicGrid = new MagicGrid({
            container: nodeGallery,  
            static: true,
            gutter: 5,
            animate: false,
        });
        magicGrid.listen();
        magicGrids.push(magicGrid);
    });
    console.log("Galleries founded and initialized with MagicGrid", magicGrids);
    console.groupEnd();
});
