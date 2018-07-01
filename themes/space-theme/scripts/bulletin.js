hexo.extend.generator.register('bulletin', function(locals){
    var bulletins = (l => {
        var bulletins = [];

        for (let doc of l.pages.data) {
            if (doc.tag === "bulletin") {
                bulletins.push(doc);
            }
        }
        return bulletins;
    })(locals);

    return bulletins.map(blt => {
        return {
            path: blt.path,
            data: blt,
            layout: "page"
        };
    });
});;