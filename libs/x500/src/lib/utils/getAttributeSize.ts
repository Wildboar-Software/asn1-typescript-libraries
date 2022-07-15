import type {
    Attribute,
} from "../modules/InformationFramework/Attribute.ta";

const BYTES_FOR_TAG: number = 2;

// Note that this measures in terms of BER/DER encoding, and it is somewhat inaccurate.
// This is intentionally written using for loops, since they are much more
// performant than .reduce().
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
