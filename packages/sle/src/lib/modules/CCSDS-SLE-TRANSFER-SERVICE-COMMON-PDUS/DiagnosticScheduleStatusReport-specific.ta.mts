/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticScheduleStatusReport_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticScheduleStatusReport-specific ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagnosticScheduleStatusReport_specific = INTEGER;

/**
 * @summary DiagnosticScheduleStatusReport_specific_notSupportedInThisDeliveryMode
 * @constant
 * @type {number}
 */
export
const DiagnosticScheduleStatusReport_specific_notSupportedInThisDeliveryMode: DiagnosticScheduleStatusReport_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticScheduleStatusReport_specific_notSupportedInThisDeliveryMode
 * @constant
 * @type {number}
 */
export
const notSupportedInThisDeliveryMode: DiagnosticScheduleStatusReport_specific = DiagnosticScheduleStatusReport_specific_notSupportedInThisDeliveryMode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticScheduleStatusReport_specific_alreadyStopped
 * @constant
 * @type {number}
 */
export
const DiagnosticScheduleStatusReport_specific_alreadyStopped: DiagnosticScheduleStatusReport_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticScheduleStatusReport_specific_alreadyStopped
 * @constant
 * @type {number}
 */
export
const alreadyStopped: DiagnosticScheduleStatusReport_specific = DiagnosticScheduleStatusReport_specific_alreadyStopped; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticScheduleStatusReport_specific_invalidReportingCycle
 * @constant
 * @type {number}
 */
export
const DiagnosticScheduleStatusReport_specific_invalidReportingCycle: DiagnosticScheduleStatusReport_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticScheduleStatusReport_specific_invalidReportingCycle
 * @constant
 * @type {number}
 */
export
const invalidReportingCycle: DiagnosticScheduleStatusReport_specific = DiagnosticScheduleStatusReport_specific_invalidReportingCycle; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagnosticScheduleStatusReport_specific: $.ASN1Decoder<DiagnosticScheduleStatusReport_specific> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticScheduleStatusReport_specific
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticScheduleStatusReport_specific (el: _Element): DiagnosticScheduleStatusReport_specific {
    if (!_cached_decoder_for_DiagnosticScheduleStatusReport_specific) { _cached_decoder_for_DiagnosticScheduleStatusReport_specific = $._decodeInteger; }
    return _cached_decoder_for_DiagnosticScheduleStatusReport_specific(el);
}

let _cached_encoder_for_DiagnosticScheduleStatusReport_specific: $.ASN1Encoder<DiagnosticScheduleStatusReport_specific> | null = null;

/**
 * @summary Encodes a(n) DiagnosticScheduleStatusReport_specific into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticScheduleStatusReport_specific, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticScheduleStatusReport_specific (value: DiagnosticScheduleStatusReport_specific, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticScheduleStatusReport_specific) { _cached_encoder_for_DiagnosticScheduleStatusReport_specific = $._encodeInteger; }
    return _cached_encoder_for_DiagnosticScheduleStatusReport_specific(value, elGetter);
}


/* eslint-enable */
