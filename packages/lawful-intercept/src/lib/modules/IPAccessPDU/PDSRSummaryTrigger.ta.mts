/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


export
enum _enum_for_PDSRSummaryTrigger {
    startOfFlow = 0,
    timerExpiry = 1,
    packetCount = 2,
    byteCount = 3,
    endOfFlow = 4,
}

/**
 * @summary PDSRSummaryTrigger
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDSRSummaryTrigger ::= ENUMERATED
 * {
 *     startOfFlow(0),
 *     timerExpiry(1),
 *     packetCount(2),
 *     byteCount(3),
 *     endOfFlow(4),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PDSRSummaryTrigger = _enum_for_PDSRSummaryTrigger | ENUMERATED;

/**
 * @summary PDSRSummaryTrigger_startOfFlow
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_startOfFlow: PDSRSummaryTrigger = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfFlow
 * @constant
 * @type {number}
 */
export
const startOfFlow: PDSRSummaryTrigger = PDSRSummaryTrigger_startOfFlow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTrigger_timerExpiry
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_timerExpiry: PDSRSummaryTrigger = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timerExpiry
 * @constant
 * @type {number}
 */
export
const timerExpiry: PDSRSummaryTrigger = PDSRSummaryTrigger_timerExpiry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTrigger_packetCount
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_packetCount: PDSRSummaryTrigger = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary packetCount
 * @constant
 * @type {number}
 */
export
const packetCount: PDSRSummaryTrigger = PDSRSummaryTrigger_packetCount; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTrigger_byteCount
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_byteCount: PDSRSummaryTrigger = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary byteCount
 * @constant
 * @type {number}
 */
export
const byteCount: PDSRSummaryTrigger = PDSRSummaryTrigger_byteCount; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTrigger_endOfFlow
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_endOfFlow: PDSRSummaryTrigger = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endOfFlow
 * @constant
 * @type {number}
 */
export
const endOfFlow: PDSRSummaryTrigger = PDSRSummaryTrigger_endOfFlow; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PDSRSummaryTrigger: $.ASN1Decoder<PDSRSummaryTrigger> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDSRSummaryTrigger
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDSRSummaryTrigger (el: _Element): PDSRSummaryTrigger {
    if (!_cached_decoder_for_PDSRSummaryTrigger) { _cached_decoder_for_PDSRSummaryTrigger = $._decodeEnumerated; }
    return _cached_decoder_for_PDSRSummaryTrigger(el);
}

let _cached_encoder_for_PDSRSummaryTrigger: $.ASN1Encoder<PDSRSummaryTrigger> | null = null;

/**
 * @summary Encodes a(n) PDSRSummaryTrigger into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDSRSummaryTrigger, encoded as an ASN.1 Element.
 */
export
function _encode_PDSRSummaryTrigger (value: PDSRSummaryTrigger, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDSRSummaryTrigger) { _cached_encoder_for_PDSRSummaryTrigger = $._encodeEnumerated; }
    return _cached_encoder_for_PDSRSummaryTrigger(value, elGetter);
}


/* eslint-enable */
