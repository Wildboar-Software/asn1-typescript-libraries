/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PrivateDn
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateDn  ::=  ENUMERATED{
 *         private (0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PrivateDn {
    private_ = 0,
}

/**
 * @summary PrivateDn
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateDn  ::=  ENUMERATED{
 *         private (0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type PrivateDn = _enum_for_PrivateDn;

/**
 * @summary PrivateDn
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateDn  ::=  ENUMERATED{
 *         private (0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const PrivateDn = _enum_for_PrivateDn;

/**
 * @summary PrivateDn_private_
 * @constant
 * @type {number}
 */
export
const PrivateDn_private_: PrivateDn = PrivateDn.private_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary private_
 * @constant
 * @type {number}
 */
export
const private_: PrivateDn = PrivateDn.private_; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PrivateDn: $.ASN1Decoder<PrivateDn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateDn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateDn (el: _Element): PrivateDn {
    if (!_cached_decoder_for_PrivateDn) { _cached_decoder_for_PrivateDn = $._decodeEnumerated; }
    return _cached_decoder_for_PrivateDn(el);
}

let _cached_encoder_for_PrivateDn: $.ASN1Encoder<PrivateDn> | null = null;

/**
 * @summary Encodes a(n) PrivateDn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateDn, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateDn (value: PrivateDn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateDn) { _cached_encoder_for_PrivateDn = $._encodeEnumerated; }
    return _cached_encoder_for_PrivateDn(value, elGetter);
}


/* eslint-enable */
