// @flow
export class Collection {

    /**
     * The object we mutate for storing the data
     */
    models: Array;

    /**
     * Construct a new collection
     * 
     * @param {Array} models The initialization options
     */
    constructor (models: Array) : void {
        if (null == models) models = [];
        this.models = models;
    }

    /**
     * Set a value in the attributes object
     * 
     * @param {Object} model The model you're adding into the collection
     * @returns {void} Nothing
     */
    add (model: Object) : void {
        this.models.push(model);
    }

    /**
     * Set a value in the attributes object
     * 
     * @param {Object} model The model you're adding into the collection
     * @returns {void} Nothing
     */
    remove (model: Object) : void {
        const keys = Object.keys(model);
        this.models = this.models.filter(fModel => {
            let same = true;
            keys.forEach(key => { if(model[key] !== fModel[key]) same = false });
            return same;
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
