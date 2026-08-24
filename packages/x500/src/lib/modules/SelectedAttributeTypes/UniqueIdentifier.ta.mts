/**
 * @summary UniqueIdentifier
 * @description
 *
 * BIT STRING used to disambiguate reused names. Re-exported from
 * `@wildboar/pki-stub`. No NamedBitList, so trailing zeros are significant
 * in bitStringMatch.
 */
export type {
    UniqueIdentifier,
} from "@wildboar/pki-stub";
export {
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "@wildboar/pki-stub";
