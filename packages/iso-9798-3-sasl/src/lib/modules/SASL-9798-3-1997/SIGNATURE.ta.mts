/**
 * @summary SIGNATURE
 * @description
 *
 * Parameterized signature type from RFC 3163 §3.7 / ASN.1 module
 * `SASL-9798-3-1997`. Similar to PKIX `SIGNED` (RFC 2459) but does
 * **not** include the data to be signed—only `algorithm` and
 * `signature`.
 *
 * Constraint:
 *
 * > Must be the result of applying the signing operation indicated in
 * > `algorithm` to the DER-encoded octets of a value of type
 * > `ToBeSigned`.
 *
 * In this package, `ToBeSigned` is `TBSDataAB` (for `TokenAB`) or
 * `TBSDataBA` (for `TokenBA2`). Re-exported from
 * `@wildboar/x500/AuthenticationFramework`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SIGNATURE { ToBeSigned } ::= SEQUENCE {
 *      algorithm AlgorithmIdentifier,
 *      signature BIT STRING
 * }(CONSTRAINED BY {-- Must be the result of applying the signing
 *   -- operation indicated in "algorithm" to the DER-encoded octets of
 *   -- a value of type -- ToBeSigned })
 * ```
 */
export {
    SIGNATURE,
    _decode_SIGNATURE,
    _encode_SIGNATURE,
} from "@wildboar/x500/AuthenticationFramework";
