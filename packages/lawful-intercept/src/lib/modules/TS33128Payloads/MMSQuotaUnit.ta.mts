/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSQuotaUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSQuotaUnit  ::=  ENUMERATED
 * {
 *     numMessages(1),
 *     bytes(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSQuotaUnit {
    numMessages = 1,
    bytes = 2,
}

/**
 * @summary MMSQuotaUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSQuotaUnit  ::=  ENUMERATED
 * {
 *     numMessages(1),
 *     bytes(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSQuotaUnit = _enum_for_MMSQuotaUnit;

/**
 * @summary MMSQuotaUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSQuotaUnit  ::=  ENUMERATED
 * {
 *     numMessages(1),
 *     bytes(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSQuotaUnit = _enum_for_MMSQuotaUnit;

/**
 * @summary MMSQuotaUnit_numMessages
 * @constant
 * @type {number}
 */
export
const MMSQuotaUnit_numMessages: MMSQuotaUnit = MMSQuotaUnit.numMessages; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numMessages
 * @constant
 * @type {number}
 */
export
const numMessages: MMSQuotaUnit = MMSQuotaUnit.numMessages; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSQuotaUnit_bytes
 * @constant
 * @type {number}
 */
export
const MMSQuotaUnit_bytes: MMSQuotaUnit = MMSQuotaUnit.bytes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bytes
 * @constant
 * @type {number}
 */
export
const bytes: MMSQuotaUnit = MMSQuotaUnit.bytes; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMSQuotaUnit: $.ASN1Decoder<MMSQuotaUnit> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSQuotaUnit
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSQuotaUnit (el: _Element): MMSQuotaUnit {
    if (!_cached_decoder_for_MMSQuotaUnit) { _cached_decoder_for_MMSQuotaUnit = $._decodeEnumerated; }
    return _cached_decoder_for_MMSQuotaUnit(el);
}

let _cached_encoder_for_MMSQuotaUnit: $.ASN1Encoder<MMSQuotaUnit> | null = null;

/**
 * @summary Encodes a(n) MMSQuotaUnit into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSQuotaUnit, encoded as an ASN.1 Element.
 */
export
function _encode_MMSQuotaUnit (value: MMSQuotaUnit, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSQuotaUnit) { _cached_encoder_for_MMSQuotaUnit = $._encodeEnumerated; }
    return _cached_encoder_for_MMSQuotaUnit(value, elGetter);
}


/* eslint-enable */
