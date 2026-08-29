/**
 * @summary AlgorithmIdentifier
 * @description
 *
 * Parameterized AlgorithmIdentifier as used in this module.
 * ANSI X9.62-1998 §6.4 binds `algorithm` to `parameters` via an
 * `ALGORITHM` information-object set. This package re-exports
 * the common type from `@wildboar/pki-stub`.
 *
 */
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/pki-stub";
