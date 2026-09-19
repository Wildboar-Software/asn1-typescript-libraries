/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SecurityClassification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityClassification  ::=  INTEGER {
 *   unmarked      (0),
 *   unclassified  (1),
 *   restricted    (2),
 *   confidential  (3),
 *   secret        (4),
 *   top-secret    (5)}
 * ```
 */
export
type SecurityClassification = INTEGER;

/**
 * @summary SecurityClassification_unmarked
 * @constant
 * @type {number}
 */
export
const SecurityClassification_unmarked: SecurityClassification = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityClassification_unmarked
 * @constant
 * @type {number}
 */
export
const unmarked: SecurityClassification = SecurityClassification_unmarked; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityClassification_unclassified
 * @constant
 * @type {number}
 */
export
const SecurityClassification_unclassified: SecurityClassification = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityClassification_unclassified
 * @constant
 * @type {number}
 */
export
const unclassified: SecurityClassification = SecurityClassification_unclassified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityClassification_restricted
 * @constant
 * @type {number}
 */
export
const SecurityClassification_restricted: SecurityClassification = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityClassification_restricted
 * @constant
 * @type {number}
 */
export
const restricted: SecurityClassification = SecurityClassification_restricted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityClassification_confidential
 * @constant
 * @type {number}
 */
export
const SecurityClassification_confidential: SecurityClassification = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityClassification_confidential
 * @constant
 * @type {number}
 */
export
const confidential: SecurityClassification = SecurityClassification_confidential; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityClassification_secret
 * @constant
 * @type {number}
 */
export
const SecurityClassification_secret: SecurityClassification = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityClassification_secret
 * @constant
 * @type {number}
 */
export
const secret: SecurityClassification = SecurityClassification_secret; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityClassification_top_secret
 * @constant
 * @type {number}
 */
export
const SecurityClassification_top_secret: SecurityClassification = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityClassification_top_secret
 * @constant
 * @type {number}
 */
export
const top_secret: SecurityClassification = SecurityClassification_top_secret; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_SecurityClassification: $.ASN1Decoder<SecurityClassification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityClassification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityClassification (el: _Element): SecurityClassification {
    if (!_cached_decoder_for_SecurityClassification) { _cached_decoder_for_SecurityClassification = $._decodeInteger; }
    return _cached_decoder_for_SecurityClassification(el);
}

let _cached_encoder_for_SecurityClassification: $.ASN1Encoder<SecurityClassification> | null = null;

/**
 * @summary Encodes a(n) SecurityClassification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityClassification, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityClassification (value: SecurityClassification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityClassification) { _cached_encoder_for_SecurityClassification = $._encodeInteger; }
    return _cached_encoder_for_SecurityClassification(value, elGetter);
}


/* eslint-enable */
