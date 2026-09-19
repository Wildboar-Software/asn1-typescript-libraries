/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UDMServingSystemMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMServingSystemMethod  ::=  ENUMERATED
 * {
 *     amf3GPPAccessRegistration(0),
 *     amfNon3GPPAccessRegistration(1),
 *     unknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UDMServingSystemMethod {
    amf3GPPAccessRegistration = 0,
    amfNon3GPPAccessRegistration = 1,
    unknown = 2,
}

/**
 * @summary UDMServingSystemMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMServingSystemMethod  ::=  ENUMERATED
 * {
 *     amf3GPPAccessRegistration(0),
 *     amfNon3GPPAccessRegistration(1),
 *     unknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UDMServingSystemMethod = _enum_for_UDMServingSystemMethod;

/**
 * @summary UDMServingSystemMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMServingSystemMethod  ::=  ENUMERATED
 * {
 *     amf3GPPAccessRegistration(0),
 *     amfNon3GPPAccessRegistration(1),
 *     unknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UDMServingSystemMethod = _enum_for_UDMServingSystemMethod;

/**
 * @summary UDMServingSystemMethod_amf3GPPAccessRegistration
 * @constant
 * @type {number}
 */
export
const UDMServingSystemMethod_amf3GPPAccessRegistration: UDMServingSystemMethod = UDMServingSystemMethod.amf3GPPAccessRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary amf3GPPAccessRegistration
 * @constant
 * @type {number}
 */
export
const amf3GPPAccessRegistration: UDMServingSystemMethod = UDMServingSystemMethod.amf3GPPAccessRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMServingSystemMethod_amfNon3GPPAccessRegistration
 * @constant
 * @type {number}
 */
export
const UDMServingSystemMethod_amfNon3GPPAccessRegistration: UDMServingSystemMethod = UDMServingSystemMethod.amfNon3GPPAccessRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary amfNon3GPPAccessRegistration
 * @constant
 * @type {number}
 */
export
const amfNon3GPPAccessRegistration: UDMServingSystemMethod = UDMServingSystemMethod.amfNon3GPPAccessRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMServingSystemMethod_unknown
 * @constant
 * @type {number}
 */
export
const UDMServingSystemMethod_unknown: UDMServingSystemMethod = UDMServingSystemMethod.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: UDMServingSystemMethod = UDMServingSystemMethod.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_UDMServingSystemMethod: $.ASN1Decoder<UDMServingSystemMethod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMServingSystemMethod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMServingSystemMethod (el: _Element): UDMServingSystemMethod {
    if (!_cached_decoder_for_UDMServingSystemMethod) { _cached_decoder_for_UDMServingSystemMethod = $._decodeEnumerated; }
    return _cached_decoder_for_UDMServingSystemMethod(el);
}

let _cached_encoder_for_UDMServingSystemMethod: $.ASN1Encoder<UDMServingSystemMethod> | null = null;

/**
 * @summary Encodes a(n) UDMServingSystemMethod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMServingSystemMethod, encoded as an ASN.1 Element.
 */
export
function _encode_UDMServingSystemMethod (value: UDMServingSystemMethod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMServingSystemMethod) { _cached_encoder_for_UDMServingSystemMethod = $._encodeEnumerated; }
    return _cached_encoder_for_UDMServingSystemMethod(value, elGetter);
}


/* eslint-enable */
