/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDSRSummaryTrigger
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDSRSummaryTrigger  ::=  ENUMERATED
 * {
 *     timerExpiry(1),
 *     packetCount(2),
 *     byteCount(3),
 *     startOfFlow(4),
 *     endOfFlow(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PDSRSummaryTrigger {
    timerExpiry = 1,
    packetCount = 2,
    byteCount = 3,
    startOfFlow = 4,
    endOfFlow = 5,
}

/**
 * @summary PDSRSummaryTrigger
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDSRSummaryTrigger  ::=  ENUMERATED
 * {
 *     timerExpiry(1),
 *     packetCount(2),
 *     byteCount(3),
 *     startOfFlow(4),
 *     endOfFlow(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PDSRSummaryTrigger = _enum_for_PDSRSummaryTrigger;

/**
 * @summary PDSRSummaryTrigger
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDSRSummaryTrigger  ::=  ENUMERATED
 * {
 *     timerExpiry(1),
 *     packetCount(2),
 *     byteCount(3),
 *     startOfFlow(4),
 *     endOfFlow(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PDSRSummaryTrigger = _enum_for_PDSRSummaryTrigger;

/**
 * @summary PDSRSummaryTrigger_timerExpiry
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_timerExpiry: PDSRSummaryTrigger = PDSRSummaryTrigger.timerExpiry; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timerExpiry
 * @constant
 * @type {number}
 */
export
const timerExpiry: PDSRSummaryTrigger = PDSRSummaryTrigger.timerExpiry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTrigger_packetCount
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_packetCount: PDSRSummaryTrigger = PDSRSummaryTrigger.packetCount; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary packetCount
 * @constant
 * @type {number}
 */
export
const packetCount: PDSRSummaryTrigger = PDSRSummaryTrigger.packetCount; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTrigger_byteCount
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_byteCount: PDSRSummaryTrigger = PDSRSummaryTrigger.byteCount; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary byteCount
 * @constant
 * @type {number}
 */
export
const byteCount: PDSRSummaryTrigger = PDSRSummaryTrigger.byteCount; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTrigger_startOfFlow
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_startOfFlow: PDSRSummaryTrigger = PDSRSummaryTrigger.startOfFlow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfFlow
 * @constant
 * @type {number}
 */
export
const startOfFlow: PDSRSummaryTrigger = PDSRSummaryTrigger.startOfFlow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTrigger_endOfFlow
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_endOfFlow: PDSRSummaryTrigger = PDSRSummaryTrigger.endOfFlow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endOfFlow
 * @constant
 * @type {number}
 */
export
const endOfFlow: PDSRSummaryTrigger = PDSRSummaryTrigger.endOfFlow; /* SHORT_NAMED_ENUMERATED_VALUE */

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
