
export class Collection {
    constructor(models) {
        if (null == models) models = [];
        this.models = models;
    }

    add(model) {
        this.models.push(model);
    }

    remove(model) {
        const keys = Object.keys(model);
        this.models = this.models.filter(fModel => {
            let same = true;
            keys.forEach(key => { if (model[key] !== fModel[key]) { same = false; } });
            return same;
        });
    }

    freeze() {
        return this.models.splice(0);
    }
}