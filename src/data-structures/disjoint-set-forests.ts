
export class DisjointSet {


    forest = new Set<Tree>();
    map = new Map<string, Tree>();


    /**
     * Initializes x as a lone node. 
     * @complexity Θ(1) in the worst case
     * @param x 
     */
    makeSet(x: string) {
        const tree = new Tree(x);
        this.forest.add(tree);
        this.map.set(x, tree);
    }


    /**
     * Climbs the tree containing x to the root. 
     * @complexity Θ(height)
     * @param x 
     * @returns 
     */

    #findSet(x: Tree): Tree {
        if (x.parent === null) {
            return x;
        }
        else {
            return x.parent = this.#findSet(x.parent);

        }
    }


    findSet(x: string | Tree) {

        if (x instanceof Tree)
            return this.#findSet(x);

        const tree = this.map.get(x);
        return tree ? this.#findSet(tree) : undefined

    }

    /**
     * * Climbs to the roots of the trees containing x and y 
     * * and [merge](api/data-structures/DisjointSet#merge)s parents sets `rep[y]` , `rep[x]`. 
     * @complexity  Θ(height)
     * @param x 
     * @param y 
     */
    union(x: Tree | string, y: Tree | string) {
        const repX = this.findSet(x);
        const repY = this.findSet(y);
        if (repX && repY && repX !== repY)
            return this.merge(repX, repY);
        return undefined;
    }



    /**
     * 
     * Merging the tree with the smaller height into the tree with the bigger height
     * * the height of a tree remains O(lg n). 
     * @param x 
     * @param y 
     */
    merge(x: Tree, y: Tree) {

        if (x.height > y.height) {
            y.parent = x;
            this.forest.delete(y);
            return x;
        }
        else {
            x.parent = y;
            this.forest.delete(x);
            if (x.height === y.height)
                y.height++;
            return y;

        }
    }




}


class Tree {

    // parent: Tree = this;
    parent: Tree | null = null;

    /**
     * 
     * @param key 
     * @param height 
     * Define **`depth(<X>)`**   of node <X> in a tree rooted at <R> to be length of path from <X> to <R>
     * Define **`height(<X>)`**  of node <X> to be max depth of any node in the subtree rooted at <X>
     */
    constructor(public key: string, public height = 0) { }


    [Symbol.toPrimitive](value: any) {
        return typeof value === "string" ? this.key :
            typeof value === "number" ? this.height :
                this.parent;
    }


}