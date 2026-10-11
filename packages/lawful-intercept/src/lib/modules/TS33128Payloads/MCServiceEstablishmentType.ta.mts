/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCServiceEstablishmentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceEstablishmentType  ::=  ENUMERATED
 * {
 *     onDemand(1),
 *     preEstablished(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MCServiceEstablishmentType {
    onDemand = 1,
    preEstablished = 2,
}

/**
 * @summary MCServiceEstablishmentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceEstablishmentType  ::=  ENUMERATED
 * {
 *     onDemand(1),
 *     preEstablished(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MCServiceEstablishmentType = _enum_for_MCServiceEstablishmentType;

/**
 * @summary MCServiceEstablishmentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceEstablishmentType  ::=  ENUMERATED
 * {
 *     onDemand(1),
 *     preEstablished(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MCServiceEstablishmentType = _enum_for_MCServiceEstablishmentType;

/**
 * @summary MCServiceEstablishmentType_onDemand
 * @constant
 * @type {number}
 */
export
const MCServiceEstablishmentType_onDemand: MCServiceEstablishmentType = MCServiceEstablishmentType.onDemand; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onDemand
 * @constant
 * @type {number}
 */
export
const onDemand: MCServiceEstablishmentType = MCServiceEstablishmentType.onDemand; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MCServiceEstablishmentType_preEstablished
 * @constant
 * @type {number}
 */
export
const MCServiceEstablishmentType_preEstablished: MCServiceEstablishmentType = MCServiceEstablishmentType.preEstablished; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary preEstablished
 * @constant
 * @type {number}
 */
export
const preEstablished: MCServiceEstablishmentType = MCServiceEstablishmentType.preEstablished; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MCServiceEstablishmentType: $.ASN1Decoder<MCServiceEstablishmentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCServiceEstablishmentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCServiceEstablishmentType (el: _Element): MCServiceEstablishmentType {
    if (!_cached_decoder_for_MCServiceEstablishmentType) { _cached_decoder_for_MCServiceEstablishmentType = $._decodeEnumerated; }
    return _cached_decoder_for_MCServiceEstablishmentType(el);
}

let _cached_encoder_for_MCServiceEstablishmentType: $.ASN1Encoder<MCServiceEstablishmentType> | null = null;

/**
 * @summary Encodes a(n) MCServiceEstablishmentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCServiceEstablishmentType, encoded as an ASN.1 Element.
 */
export
function _encode_MCServiceEstablishmentType (value: MCServiceEstablishmentType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCServiceEstablishmentType) { _cached_encoder_for_MCServiceEstablishmentType = $._encodeEnumerated; }
    return _cached_encoder_for_MCServiceEstablishmentType(value, elGetter);
}


/* eslint-enable */
