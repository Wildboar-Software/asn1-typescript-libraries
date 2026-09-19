/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ActivationStateCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivationStateCode  ::=  ENUMERATED{
 *         off(0),
 *         on(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ActivationStateCode {
    off = 0,
    on = 1,
}

/**
 * @summary ActivationStateCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivationStateCode  ::=  ENUMERATED{
 *         off(0),
 *         on(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type ActivationStateCode = _enum_for_ActivationStateCode;

/**
 * @summary ActivationStateCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivationStateCode  ::=  ENUMERATED{
 *         off(0),
 *         on(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const ActivationStateCode = _enum_for_ActivationStateCode;

/**
 * @summary ActivationStateCode_off
 * @constant
 * @type {number}
 */
export
const ActivationStateCode_off: ActivationStateCode = ActivationStateCode.off; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary off
 * @constant
 * @type {number}
 */
export
const off: ActivationStateCode = ActivationStateCode.off; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivationStateCode_on
 * @constant
 * @type {number}
 */
export
const ActivationStateCode_on: ActivationStateCode = ActivationStateCode.on; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary on
 * @constant
 * @type {number}
 */
export
const on: ActivationStateCode = ActivationStateCode.on; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ActivationStateCode: $.ASN1Decoder<ActivationStateCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActivationStateCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActivationStateCode (el: _Element): ActivationStateCode {
    if (!_cached_decoder_for_ActivationStateCode) { _cached_decoder_for_ActivationStateCode = $._decodeEnumerated; }
    return _cached_decoder_for_ActivationStateCode(el);
}

let _cached_encoder_for_ActivationStateCode: $.ASN1Encoder<ActivationStateCode> | null = null;

/**
 * @summary Encodes a(n) ActivationStateCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivationStateCode, encoded as an ASN.1 Element.
 */
export
function _encode_ActivationStateCode (value: ActivationStateCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActivationStateCode) { _cached_encoder_for_ActivationStateCode = $._encodeEnumerated; }
    return _cached_encoder_for_ActivationStateCode(value, elGetter);
}


/* eslint-enable */
