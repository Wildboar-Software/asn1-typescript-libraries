/**
 * @summary AlgorithmIdentifier
 * @description
 *
 * Generic parameterized structure encoding an algorithm OID and optional
 * parameters
 * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2);
 * also [RFC 5912 §3](https://datatracker.ietf.org/doc/html/rfc5912#section-3)).
 *
 * ASN.1 (conceptual):
 *
 * ```asn1
 * AlgorithmIdentifier{ALGORITHM-TYPE, ALGORITHM-TYPE:AlgorithmSet} ::=
 *     SEQUENCE {
 *         algorithm   ALGORITHM-TYPE.&id({AlgorithmSet}),
 *         parameters  ALGORITHM-TYPE.
 *                &Params({AlgorithmSet}{@algorithm}) OPTIONAL
 *     }
 * ```
 *
 * The first parameter is the algorithm information-object class; the
 * second is the object set of allowed algorithms. Re-exported from
 * `@wildboar/pki-stub` for use by this package's modules.
 *
 * @module
 */
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/pki-stub";
