/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary SecurityClassification
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityClassification  ::=  INTEGER {
 *   unmarked(0), unclassified(1), restricted(2), confidential(3), secret(4),
 *   top-secret(5)}(0..ub-integer-options)
 * ```
 */
export type SecurityClassification = INTEGER;


/**
 * @summary SecurityClassification_unmarked
 * @constant
 * @type {number}
 */
export const SecurityClassification_unmarked = 0 satisfies SecurityClassification; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_unmarked
 * @constant
 * @type {number}
 */
export const unmarked = SecurityClassification_unmarked; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_unclassified
 * @constant
 * @type {number}
 */
export const SecurityClassification_unclassified = 1 satisfies SecurityClassification; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_unclassified
 * @constant
 * @type {number}
 */
export const unclassified = SecurityClassification_unclassified; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_restricted
 * @constant
 * @type {number}
 */
export const SecurityClassification_restricted = 2 satisfies SecurityClassification; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_restricted
 * @constant
 * @type {number}
 */
export const restricted = SecurityClassification_restricted; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_confidential
 * @constant
 * @type {number}
 */
export const SecurityClassification_confidential = 3 satisfies SecurityClassification; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_confidential
 * @constant
 * @type {number}
 */
export const confidential = SecurityClassification_confidential; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_secret
 * @constant
 * @type {number}
 */
export const SecurityClassification_secret = 4 satisfies SecurityClassification; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_secret
 * @constant
 * @type {number}
 */
export const secret = SecurityClassification_secret; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_top_secret
 * @constant
 * @type {number}
 */
export const SecurityClassification_top_secret = 5 satisfies SecurityClassification; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SecurityClassification_top_secret
 * @constant
 * @type {number}
 */
export const top_secret = SecurityClassification_top_secret; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_SecurityClassification = $._decodeInteger;




export const _encode_SecurityClassification = $._encodeInteger;


/* eslint-enable */
