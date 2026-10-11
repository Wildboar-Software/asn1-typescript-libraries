/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Classification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Classification  ::=  ENUMERATED {
 *     unmarked(0),
 *     unclassified(1),
 *     restricted(2),
 *     confidential(3),
 *     secret(4),
 *     top-secret(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Classification {
    unmarked = 0,
    unclassified = 1,
    restricted = 2,
    confidential = 3,
    secret = 4,
    top_secret = 5,
}

/**
 * @summary Classification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Classification  ::=  ENUMERATED {
 *     unmarked(0),
 *     unclassified(1),
 *     restricted(2),
 *     confidential(3),
 *     secret(4),
 *     top-secret(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Classification = _enum_for_Classification;

/**
 * @summary Classification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Classification  ::=  ENUMERATED {
 *     unmarked(0),
 *     unclassified(1),
 *     restricted(2),
 *     confidential(3),
 *     secret(4),
 *     top-secret(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Classification = _enum_for_Classification;

/**
 * @summary Classification_unmarked
 * @constant
 * @type {number}
 */
export
const Classification_unmarked: Classification = Classification.unmarked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unmarked
 * @constant
 * @type {number}
 */
export
const unmarked: Classification = Classification.unmarked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Classification_unclassified
 * @constant
 * @type {number}
 */
export
const Classification_unclassified: Classification = Classification.unclassified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unclassified
 * @constant
 * @type {number}
 */
export
const unclassified: Classification = Classification.unclassified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Classification_restricted
 * @constant
 * @type {number}
 */
export
const Classification_restricted: Classification = Classification.restricted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restricted
 * @constant
 * @type {number}
 */
export
const restricted: Classification = Classification.restricted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Classification_confidential
 * @constant
 * @type {number}
 */
export
const Classification_confidential: Classification = Classification.confidential; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confidential
 * @constant
 * @type {number}
 */
export
const confidential: Classification = Classification.confidential; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Classification_secret
 * @constant
 * @type {number}
 */
export
const Classification_secret: Classification = Classification.secret; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary secret
 * @constant
 * @type {number}
 */
export
const secret: Classification = Classification.secret; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Classification_top_secret
 * @constant
 * @type {number}
 */
export
const Classification_top_secret: Classification = Classification.top_secret; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary top_secret
 * @constant
 * @type {number}
 */
export
const top_secret: Classification = Classification.top_secret; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Classification = $._decodeEnumerated;
export const _encode_Classification = $._encodeEnumerated;


/* eslint-enable */
