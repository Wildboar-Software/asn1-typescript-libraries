/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticRcfStart_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRcfStart-specific ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagnosticRcfStart_specific = INTEGER;

/**
 * @summary DiagnosticRcfStart_specific_outOfService
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfStart_specific_outOfService: DiagnosticRcfStart_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_outOfService
 * @constant
 * @type {number}
 */
export
const outOfService: DiagnosticRcfStart_specific = DiagnosticRcfStart_specific_outOfService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_unableToComply
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfStart_specific_unableToComply: DiagnosticRcfStart_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_unableToComply
 * @constant
 * @type {number}
 */
export
const unableToComply: DiagnosticRcfStart_specific = DiagnosticRcfStart_specific_unableToComply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_invalidStartTime
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfStart_specific_invalidStartTime: DiagnosticRcfStart_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_invalidStartTime
 * @constant
 * @type {number}
 */
export
const invalidStartTime: DiagnosticRcfStart_specific = DiagnosticRcfStart_specific_invalidStartTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_invalidStopTime
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfStart_specific_invalidStopTime: DiagnosticRcfStart_specific = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_invalidStopTime
 * @constant
 * @type {number}
 */
export
const invalidStopTime: DiagnosticRcfStart_specific = DiagnosticRcfStart_specific_invalidStopTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_missingTimeValue
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfStart_specific_missingTimeValue: DiagnosticRcfStart_specific = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_missingTimeValue
 * @constant
 * @type {number}
 */
export
const missingTimeValue: DiagnosticRcfStart_specific = DiagnosticRcfStart_specific_missingTimeValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_invalidGvcid
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfStart_specific_invalidGvcid: DiagnosticRcfStart_specific = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_invalidGvcid
 * @constant
 * @type {number}
 */
export
const invalidGvcid: DiagnosticRcfStart_specific = DiagnosticRcfStart_specific_invalidGvcid; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagnosticRcfStart_specific: $.ASN1Decoder<DiagnosticRcfStart_specific> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticRcfStart_specific
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticRcfStart_specific (el: _Element): DiagnosticRcfStart_specific {
    if (!_cached_decoder_for_DiagnosticRcfStart_specific) { _cached_decoder_for_DiagnosticRcfStart_specific = $._decodeInteger; }
    return _cached_decoder_for_DiagnosticRcfStart_specific(el);
}

let _cached_encoder_for_DiagnosticRcfStart_specific: $.ASN1Encoder<DiagnosticRcfStart_specific> | null = null;

/**
 * @summary Encodes a(n) DiagnosticRcfStart_specific into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticRcfStart_specific, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticRcfStart_specific (value: DiagnosticRcfStart_specific, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticRcfStart_specific) { _cached_encoder_for_DiagnosticRcfStart_specific = $._encodeInteger; }
    return _cached_encoder_for_DiagnosticRcfStart_specific(value, elGetter);
}


/* eslint-enable */
