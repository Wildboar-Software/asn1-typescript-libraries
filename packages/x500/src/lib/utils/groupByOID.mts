import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";

type IndexableOID = string;

/**
 * @summary Group items into a map by their OID
 * @description
 * 
 * I considered using `Map.groupBy()`, but benchmarks showed this to be slightly
 * slower.
 * 
 * @param {Array} items The items to be grouped
 * @param {Function} oidGetter A function that takes an item and obtains its object identifier
 * @returns {Map} A map of dot-delimited OID strings to values having those OIDs
 * @function
 */
export
function groupByOID <T>(
    items: T[],
    oidGetter: (item: T) => OBJECT_IDENTIFIER | string,
): Map<IndexableOID, T[]> {
    const result: Map<IndexableOID, T[]> = new Map();
    for (const item of items) {
        const oid = oidGetter(item);
        const oidstr = (typeof oid === "object")
            ? oid.toString()
            : oid;
        if (!result.has(oidstr))
            result.set(oidstr, []);
        result.get(oidstr).push(item);
    }
    return result;
};

export default groupByOID;
