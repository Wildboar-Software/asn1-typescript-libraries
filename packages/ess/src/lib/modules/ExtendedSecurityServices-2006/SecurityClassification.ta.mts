/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SecurityClassification
 * @description
 *
 * INTEGER security classification for `ESSSecurityLabel`, constrained to
 * (0..`ub-integer-options`). Named values in the ESS module:
 * `unmarked` (0), `unclassified` (1), `restricted` (2), `confidential` (3),
 * `secret` (4), `top-secret` (5). Policy-defined meanings and hierarchy
 * ([RFC 2634 §3.2](https://datatracker.ietf.org/doc/html/rfc2634#section-3.2); [RFC 2634 §3.3.2](https://datatracker.ietf.org/doc/html/rfc2634#section-3.3.2)).
 *
 * Distinct from the `SecurityClassification` SEQUENCE in `@wildboar/sio`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityClassification ::= INTEGER {
 *     unmarked (0),
 *     unclassified (1),
 *     restricted (2),
 *     confidential (3),
 *     secret (4),
 *     top-secret (5)
 * }(0..ub-integer-options)
 * ```
 */
export type SecurityClassification = INTEGER;


/**
 * @summary SecurityClassification_unmarked
 * @constant
 * @type {number}
 */
export const SecurityClassification_unmarked: 0 = 0 satisfies SecurityClassification; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_unmarked
 * @constant
 * @type {number}
 */
export const unmarked: 0 = SecurityClassification_unmarked; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_unclassified
 * @constant
 * @type {number}
 */
export const SecurityClassification_unclassified: 1 = 1 satisfies SecurityClassification; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_unclassified
 * @constant
 * @type {number}
 */
export const unclassified: 1 = SecurityClassification_unclassified; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_restricted
 * @constant
 * @type {number}
 */
export const SecurityClassification_restricted: 2 = 2 satisfies SecurityClassification; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_restricted
 * @constant
 * @type {number}
 */
export const restricted: 2 = SecurityClassification_restricted; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_confidential
 * @constant
 * @type {number}
 */
export const SecurityClassification_confidential: 3 = 3 satisfies SecurityClassification; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_confidential
 * @constant
 * @type {number}
 */
export const confidential: 3 = SecurityClassification_confidential; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_secret
 * @constant
 * @type {number}
 */
export const SecurityClassification_secret: 4 = 4 satisfies SecurityClassification; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_secret
 * @constant
 * @type {number}
 */
export const secret: 4 = SecurityClassification_secret; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_top_secret
 * @constant
 * @type {number}
 */
export const SecurityClassification_top_secret: 5 = 5 satisfies SecurityClassification; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_top_secret
 * @constant
 * @type {number}
 */
export const top_secret: 5 = SecurityClassification_top_secret; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_SecurityClassification: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_SecurityClassification: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
