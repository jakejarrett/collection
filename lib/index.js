
export class Collection {
    constructor(m) {
        this.models = m || [];
    }

    add(m) {
        this.models.push(m);
    }

    remove(m, k) {
        k = Object.keys(m);
        this.models = this.models.filter((f, s) => {
            s = !!1;
            k.forEach(key => {
                if (m[key] !== f[key]) s = !1;
            });
            return s;
        });
    }

    freeze() {
        return this.models.splice(0);
    }
}