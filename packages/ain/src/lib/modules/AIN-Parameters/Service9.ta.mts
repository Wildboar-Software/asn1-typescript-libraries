/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Service9
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service9 ::=  ENUMERATED{
 *         speedCalling(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Service9 {
    speedCalling = 0,
}

/**
 * @summary Service9
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service9 ::=  ENUMERATED{
 *         speedCalling(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type Service9 = _enum_for_Service9;

/**
 * @summary Service9
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service9 ::=  ENUMERATED{
 *         speedCalling(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const Service9 = _enum_for_Service9;

/**
 * @summary Service9_speedCalling
 * @constant
 * @type {number}
 */
export
const Service9_speedCalling: Service9 = Service9.speedCalling; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speedCalling
 * @constant
 * @type {number}
 */
export
const speedCalling: Service9 = Service9.speedCalling; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Service9: $.ASN1Decoder<Service9> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Service9
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Service9 (el: _Element): Service9 {
    if (!_cached_decoder_for_Service9) { _cached_decoder_for_Service9 = $._decodeEnumerated; }
    return _cached_decoder_for_Service9(el);
}

let _cached_encoder_for_Service9: $.ASN1Encoder<Service9> | null = null;

/**
 * @summary Encodes a(n) Service9 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Service9, encoded as an ASN.1 Element.
 */
export
function _encode_Service9 (value: Service9, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Service9) { _cached_encoder_for_Service9 = $._encodeEnumerated; }
    return _cached_encoder_for_Service9(value, elGetter);
}


/* eslint-enable */
