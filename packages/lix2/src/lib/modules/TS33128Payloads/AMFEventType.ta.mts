/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFEventType  ::=  ENUMERATED
 * {
 *     locationReport(1),
 *     presenceInAOIReport(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AMFEventType {
    locationReport = 1,
    presenceInAOIReport = 2,
}

/**
 * @summary AMFEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFEventType  ::=  ENUMERATED
 * {
 *     locationReport(1),
 *     presenceInAOIReport(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AMFEventType = _enum_for_AMFEventType;

/**
 * @summary AMFEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFEventType  ::=  ENUMERATED
 * {
 *     locationReport(1),
 *     presenceInAOIReport(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AMFEventType = _enum_for_AMFEventType;

/**
 * @summary AMFEventType_locationReport
 * @constant
 * @type {number}
 */
export
const AMFEventType_locationReport: AMFEventType = AMFEventType.locationReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationReport
 * @constant
 * @type {number}
 */
export
const locationReport: AMFEventType = AMFEventType.locationReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFEventType_presenceInAOIReport
 * @constant
 * @type {number}
 */
export
const AMFEventType_presenceInAOIReport: AMFEventType = AMFEventType.presenceInAOIReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary presenceInAOIReport
 * @constant
 * @type {number}
 */
export
const presenceInAOIReport: AMFEventType = AMFEventType.presenceInAOIReport; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AMFEventType: $.ASN1Decoder<AMFEventType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFEventType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFEventType (el: _Element): AMFEventType {
    if (!_cached_decoder_for_AMFEventType) { _cached_decoder_for_AMFEventType = $._decodeEnumerated; }
    return _cached_decoder_for_AMFEventType(el);
}

let _cached_encoder_for_AMFEventType: $.ASN1Encoder<AMFEventType> | null = null;

/**
 * @summary Encodes a(n) AMFEventType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFEventType, encoded as an ASN.1 Element.
 */
export
function _encode_AMFEventType (value: AMFEventType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFEventType) { _cached_encoder_for_AMFEventType = $._encodeEnumerated; }
    return _cached_encoder_for_AMFEventType(value, elGetter);
}


/* eslint-enable */
