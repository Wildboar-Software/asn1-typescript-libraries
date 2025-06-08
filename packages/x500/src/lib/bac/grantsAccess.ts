import type ACDFTupleExtended from "../types/ACDFTupleExtended";

export
function grantsAccess (tuple: ACDFTupleExtended): boolean {
    const permissions = tuple[3];
    // All the even bits are grants.
    return Array.from(permissions).some((perm, index) => (index % 2) ? false : Boolean(perm));
}

export default grantsAccess;
