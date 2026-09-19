/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AnyNextLayerProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyNextLayerProtocol  ::=  ENUMERATED
 * {
 *     ip(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AnyNextLayerProtocol {
    ip = 1,
}

/**
 * @summary AnyNextLayerProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyNextLayerProtocol  ::=  ENUMERATED
 * {
 *     ip(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AnyNextLayerProtocol = _enum_for_AnyNextLayerProtocol;

/**
 * @summary AnyNextLayerProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyNextLayerProtocol  ::=  ENUMERATED
 * {
 *     ip(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AnyNextLayerProtocol = _enum_for_AnyNextLayerProtocol;

/**
 * @summary AnyNextLayerProtocol_ip
 * @constant
 * @type {number}
 */
export
const AnyNextLayerProtocol_ip: AnyNextLayerProtocol = AnyNextLayerProtocol.ip; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ip
 * @constant
 * @type {number}
 */
export
const ip: AnyNextLayerProtocol = AnyNextLayerProtocol.ip; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AnyNextLayerProtocol: $.ASN1Decoder<AnyNextLayerProtocol> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AnyNextLayerProtocol
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AnyNextLayerProtocol (el: _Element): AnyNextLayerProtocol {
    if (!_cached_decoder_for_AnyNextLayerProtocol) { _cached_decoder_for_AnyNextLayerProtocol = $._decodeEnumerated; }
    return _cached_decoder_for_AnyNextLayerProtocol(el);
}

let _cached_encoder_for_AnyNextLayerProtocol: $.ASN1Encoder<AnyNextLayerProtocol> | null = null;

/**
 * @summary Encodes a(n) AnyNextLayerProtocol into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnyNextLayerProtocol, encoded as an ASN.1 Element.
 */
export
function _encode_AnyNextLayerProtocol (value: AnyNextLayerProtocol, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AnyNextLayerProtocol) { _cached_encoder_for_AnyNextLayerProtocol = $._encodeEnumerated; }
    return _cached_encoder_for_AnyNextLayerProtocol(value, elGetter);
}


/* eslint-enable */
