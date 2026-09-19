/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Service6
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service6 ::=  ENUMERATED{
 *         ringControl(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Service6 {
    ringControl = 0,
}

/**
 * @summary Service6
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service6 ::=  ENUMERATED{
 *         ringControl(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type Service6 = _enum_for_Service6;

/**
 * @summary Service6
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service6 ::=  ENUMERATED{
 *         ringControl(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const Service6 = _enum_for_Service6;

/**
 * @summary Service6_ringControl
 * @constant
 * @type {number}
 */
export
const Service6_ringControl: Service6 = Service6.ringControl; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ringControl
 * @constant
 * @type {number}
 */
export
const ringControl: Service6 = Service6.ringControl; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Service6: $.ASN1Decoder<Service6> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Service6
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Service6 (el: _Element): Service6 {
    if (!_cached_decoder_for_Service6) { _cached_decoder_for_Service6 = $._decodeEnumerated; }
    return _cached_decoder_for_Service6(el);
}

let _cached_encoder_for_Service6: $.ASN1Encoder<Service6> | null = null;

/**
 * @summary Encodes a(n) Service6 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Service6, encoded as an ASN.1 Element.
 */
export
function _encode_Service6 (value: Service6, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Service6) { _cached_encoder_for_Service6 = $._encodeEnumerated; }
    return _cached_encoder_for_Service6(value, elGetter);
}


/* eslint-enable */
