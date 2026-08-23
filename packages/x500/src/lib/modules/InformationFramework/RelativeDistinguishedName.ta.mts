/**
 * One RDN: SET SIZE (1..MAX) of attribute type-and-value. Re-exported from
 * `@wildboar/pki-stub`. Order of AVAs does not matter; a given type appears
 * at most once. Contexts are not part of the distinguished value. Matching
 * uses each type's equality matching rule (commutative and transitive for
 * naming attributes).
 */
export type {
    RelativeDistinguishedName,
} from "@wildboar/pki-stub";
export {
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "@wildboar/pki-stub";
