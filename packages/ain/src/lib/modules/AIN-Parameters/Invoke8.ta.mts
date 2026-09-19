/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Invoke8
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Invoke8  ::=  ENUMERATED{
 *         on(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Invoke8 {
    on = 0,
}

/**
 * @summary Invoke8
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Invoke8  ::=  ENUMERATED{
 *         on(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type Invoke8 = _enum_for_Invoke8;

/**
 * @summary Invoke8
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Invoke8  ::=  ENUMERATED{
 *         on(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const Invoke8 = _enum_for_Invoke8;

/**
 * @summary Invoke8_on
 * @constant
 * @type {number}
 */
export
const Invoke8_on: Invoke8 = Invoke8.on; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary on
 * @constant
 * @type {number}
 */
export
const on: Invoke8 = Invoke8.on; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Invoke8: $.ASN1Decoder<Invoke8> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Invoke8
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Invoke8 (el: _Element): Invoke8 {
    if (!_cached_decoder_for_Invoke8) { _cached_decoder_for_Invoke8 = $._decodeEnumerated; }
    return _cached_decoder_for_Invoke8(el);
}

let _cached_encoder_for_Invoke8: $.ASN1Encoder<Invoke8> | null = null;

/**
 * @summary Encodes a(n) Invoke8 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Invoke8, encoded as an ASN.1 Element.
 */
export
function _encode_Invoke8 (value: Invoke8, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Invoke8) { _cached_encoder_for_Invoke8 = $._encodeEnumerated; }
    return _cached_encoder_for_Invoke8(value, elGetter);
}


/* eslint-enable */
