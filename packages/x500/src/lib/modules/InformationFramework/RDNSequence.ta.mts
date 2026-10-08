/**
 * Ordered RDNs from the DIT root toward the leaf (opposite LDAP).
 * Re-exported from `@wildboar/dn`. Empty sequence is the root.
 */
export type {
    RDNSequence,
} from "@wildboar/dn";
export {
    _decode_RDNSequence,
    _encode_RDNSequence,
} from "@wildboar/dn";
