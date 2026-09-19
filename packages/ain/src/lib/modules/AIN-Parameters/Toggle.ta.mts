/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Toggle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Toggle  ::=  ENUMERATED{
 *         presentationStatusValue(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Toggle {
    presentationStatusValue = 0,
}

/**
 * @summary Toggle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Toggle  ::=  ENUMERATED{
 *         presentationStatusValue(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type Toggle = _enum_for_Toggle;

/**
 * @summary Toggle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Toggle  ::=  ENUMERATED{
 *         presentationStatusValue(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const Toggle = _enum_for_Toggle;

/**
 * @summary Toggle_presentationStatusValue
 * @constant
 * @type {number}
 */
export
const Toggle_presentationStatusValue: Toggle = Toggle.presentationStatusValue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary presentationStatusValue
 * @constant
 * @type {number}
 */
export
const presentationStatusValue: Toggle = Toggle.presentationStatusValue; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Toggle: $.ASN1Decoder<Toggle> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Toggle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Toggle (el: _Element): Toggle {
    if (!_cached_decoder_for_Toggle) { _cached_decoder_for_Toggle = $._decodeEnumerated; }
    return _cached_decoder_for_Toggle(el);
}

let _cached_encoder_for_Toggle: $.ASN1Encoder<Toggle> | null = null;

/**
 * @summary Encodes a(n) Toggle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Toggle, encoded as an ASN.1 Element.
 */
export
function _encode_Toggle (value: Toggle, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Toggle) { _cached_encoder_for_Toggle = $._encodeEnumerated; }
    return _cached_encoder_for_Toggle(value, elGetter);
}


/* eslint-enable */
