/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Clear
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Clear  ::=  ENUMERATED{
 *         remove(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Clear {
    remove = 0,
}

/**
 * @summary Clear
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Clear  ::=  ENUMERATED{
 *         remove(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type Clear = _enum_for_Clear;

/**
 * @summary Clear
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Clear  ::=  ENUMERATED{
 *         remove(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const Clear = _enum_for_Clear;

/**
 * @summary Clear_remove
 * @constant
 * @type {number}
 */
export
const Clear_remove: Clear = Clear.remove; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remove
 * @constant
 * @type {number}
 */
export
const remove: Clear = Clear.remove; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Clear: $.ASN1Decoder<Clear> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Clear
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Clear (el: _Element): Clear {
    if (!_cached_decoder_for_Clear) { _cached_decoder_for_Clear = $._decodeEnumerated; }
    return _cached_decoder_for_Clear(el);
}

let _cached_encoder_for_Clear: $.ASN1Encoder<Clear> | null = null;

/**
 * @summary Encodes a(n) Clear into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Clear, encoded as an ASN.1 Element.
 */
export
function _encode_Clear (value: Clear, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Clear) { _cached_encoder_for_Clear = $._encodeEnumerated; }
    return _cached_encoder_for_Clear(value, elGetter);
}


/* eslint-enable */
