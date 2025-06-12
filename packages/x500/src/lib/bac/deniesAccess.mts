import type { BIT_STRING } from "asn1-ts";

export
function deniesAccess (permissions: BIT_STRING): boolean {
    // All the odd bits are denials.
    return Array.from(permissions).some((perm, index) => (index % 2) ? Boolean(perm) : false);
}

export default deniesAccess;
