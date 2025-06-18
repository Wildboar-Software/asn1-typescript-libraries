import type {
    Attribute,
} from "../modules/InformationFramework/Attribute.ta.mjs";

const BYTES_FOR_TAG: number = 2;

/**
 * @summary Get the size of an attribute in bytes
 * @description
 * 
 * Get the size of an X.500 directory attribute in bytes, using the
 * DER encoding of the tag and length. This implementation is somewhat
 * inaccurate in the interest of simplicity and performance, since it is likely
 * to be called very frequently.
 * 
 * Despite a `.map().reduce()` implementation being more elegant, this is
 * written using for loops, which are far more performant.
 * 
 * @param {Attribute} attr The attribute whose size is to be evaluated
 * @returns {number} The size of the attribute in bytes
 * @function
 */
export
function getAttributeSize (attr: Attribute): number {
    let size: number = 0;
    for (const value of attr.values) {
        size += value.length + BYTES_FOR_TAG;
    }
    for (const vwc of attr.valuesWithContext ?? []) {
        let sizeOfVWC: number = (
            (vwc.value.length + BYTES_FOR_TAG)
            + BYTES_FOR_TAG
        );
        for (const context of vwc.contextList) {
            let sizeOfContext = (
                BYTES_FOR_TAG
                + context.contextType.nodes.length
                + ((context.fallback === undefined) ? 0 : 3)
                + BYTES_FOR_TAG
            );
            for (const cv of context.contextValues) {
                sizeOfContext += (
                    BYTES_FOR_TAG
                    + cv.length
                );
            }
            sizeOfVWC += sizeOfContext;
        }
        size += sizeOfVWC;
    }
    return size;
}
