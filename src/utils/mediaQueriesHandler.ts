class mediaQueries {
    constructor() {
        this.queryArray = []
    }

    addQuery(query, funct) {

        const x: any = window.matchMedia(query);

        if(x.matches) {
            funct();
        }

        x.addListener(() => {
            if(x.matches) {
                funct();
            }
        });
    }
}