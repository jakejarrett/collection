// @flow
export class Collection {

    /**
     * The object we mutate for storing the data
     */
    models: Array;

    /**
     * Construct a new collection
     * 
     * @param {Array} m The initialization options
     */
    constructor (m: Array) : void {
        this.models = m || [];
    }

    /**
     * Set a value in the attributes object
     * 
     * @param {Object} m The model you're adding into the collection
     * @returns {void} Nothing
     */
    add (m: Object) : void {
        this.models.push(m);
    }

    /**
     * Set a value in the attributes object
     * 
     * @param {Object} m The model you're adding into the collection
     * @param {Void} k Param that will get overridden to save space
     * @returns {void} Nothing
     */
    remove (m: Object, k: Array) : void {
        k = Object.keys(m);
        this.models = this.models.filter((f, s) => {
            s = !!1;
            k.forEach(key => { if(m[key] !== f[key]) s = !1 });
            return s;
        });
    }

    /**
     * Return an object with the attributes set (And won't be mutated by any changes after the fact)
     * 
     * @returns {Object} The current attributes
     */
    freeze () : Object {
        return this.models.splice(0);
    }
}
