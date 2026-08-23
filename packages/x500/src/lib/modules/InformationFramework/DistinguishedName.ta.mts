/**
 * Distinguished name: RDN sequence from the DIT root toward the leaf
 * (opposite of LDAP string order). Re-exported from `@wildboar/pki-stub`.
 * Empty sequence is the root. Compare with `distinguishedNameMatch`, not
 * string equality. An alias has a DN, but that DN does not name the object.
 */
export type {
    DistinguishedName,
} from "@wildboar/pki-stub";
export {
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "@wildboar/pki-stub";
