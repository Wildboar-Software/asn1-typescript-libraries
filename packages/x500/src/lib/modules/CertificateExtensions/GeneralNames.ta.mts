/**
 * Re-export of {@link GeneralNames} from `@wildboar/pki-stub`.
 *
 * SEQUENCE SIZE (1..MAX) OF GeneralName — empty not allowed; order is
 * encoding order. `directoryName` is EXPLICIT [4]; DN RDN order is X.501
 * (root first, opposite LDAP). `iPAddress` is 4 or 16 raw octets (8/32 with
 * mask only in name constraints, RFC 5280). `dNSName` is LDH/A-label.
 */
export type {
    GeneralNames,
} from "@wildboar/pki-stub";
export {
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "@wildboar/pki-stub";
