import type ACDFTuple from "../types/ACDFTuple";
import type ACDFTupleExtended from "../types/ACDFTupleExtended";

export
function deniesAccess (tuple: ACDFTuple | ACDFTupleExtended): boolean {
    const permissions = tuple[3];
    // All the odd bits are denials.
    return Array.from(permissions).some((perm, index) => (index % 2) ? Boolean(perm) : false);
}

export default deniesAccess;
