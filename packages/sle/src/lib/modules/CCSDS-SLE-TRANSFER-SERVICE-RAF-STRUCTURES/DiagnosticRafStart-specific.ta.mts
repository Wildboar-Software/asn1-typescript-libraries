/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticRafStart_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRafStart-specific ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagnosticRafStart_specific = INTEGER;

/**
 * @summary DiagnosticRafStart_specific_outOfService
 * @constant
 * @type {number}
 */
export
const DiagnosticRafStart_specific_outOfService: DiagnosticRafStart_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_outOfService
 * @constant
 * @type {number}
 */
export
const outOfService: DiagnosticRafStart_specific = DiagnosticRafStart_specific_outOfService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_unableToComply
 * @constant
 * @type {number}
 */
export
const DiagnosticRafStart_specific_unableToComply: DiagnosticRafStart_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_unableToComply
 * @constant
 * @type {number}
 */
export
const unableToComply: DiagnosticRafStart_specific = DiagnosticRafStart_specific_unableToComply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_invalidStartTime
 * @constant
 * @type {number}
 */
export
const DiagnosticRafStart_specific_invalidStartTime: DiagnosticRafStart_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_invalidStartTime
 * @constant
 * @type {number}
 */
export
const invalidStartTime: DiagnosticRafStart_specific = DiagnosticRafStart_specific_invalidStartTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_invalidStopTime
 * @constant
 * @type {number}
 */
export
const DiagnosticRafStart_specific_invalidStopTime: DiagnosticRafStart_specific = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_invalidStopTime
 * @constant
 * @type {number}
 */
export
const invalidStopTime: DiagnosticRafStart_specific = DiagnosticRafStart_specific_invalidStopTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_missingTimeValue
 * @constant
 * @type {number}
 */
export
const DiagnosticRafStart_specific_missingTimeValue: DiagnosticRafStart_specific = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_missingTimeValue
 * @constant
 * @type {number}
 */
export
const missingTimeValue: DiagnosticRafStart_specific = DiagnosticRafStart_specific_missingTimeValue; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagnosticRafStart_specific: $.ASN1Decoder<DiagnosticRafStart_specific> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticRafStart_specific
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticRafStart_specific (el: _Element): DiagnosticRafStart_specific {
    if (!_cached_decoder_for_DiagnosticRafStart_specific) { _cached_decoder_for_DiagnosticRafStart_specific = $._decodeInteger; }
    return _cached_decoder_for_DiagnosticRafStart_specific(el);
}

let _cached_encoder_for_DiagnosticRafStart_specific: $.ASN1Encoder<DiagnosticRafStart_specific> | null = null;

/**
 * @summary Encodes a(n) DiagnosticRafStart_specific into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticRafStart_specific, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticRafStart_specific (value: DiagnosticRafStart_specific, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticRafStart_specific) { _cached_encoder_for_DiagnosticRafStart_specific = $._encodeInteger; }
    return _cached_encoder_for_DiagnosticRafStart_specific(value, elGetter);
}


/* eslint-enable */
