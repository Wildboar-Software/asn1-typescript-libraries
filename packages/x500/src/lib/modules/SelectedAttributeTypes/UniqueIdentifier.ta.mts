/**
 * BIT STRING used to disambiguate reused names. Re-exported from
 * `@wildboar/pki-stub`. In public-key certificates
 * (`issuerUniqueIdentifier` / `subjectUniqueIdentifier`) and attribute
 * certificates (`issuerUniqueID`) this field is deprecated; RFC 5280
 * forbids the PKC unique-identifier fields.
 */
export type {
    UniqueIdentifier,
} from "@wildboar/pki-stub";
export {
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "@wildboar/pki-stub";
