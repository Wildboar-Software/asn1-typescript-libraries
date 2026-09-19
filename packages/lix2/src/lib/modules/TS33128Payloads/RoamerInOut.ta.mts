/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoamerInOut
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamerInOut  ::=  ENUMERATED
 * {
 *     in-bound(1),
 *     out-bound(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RoamerInOut {
    in_bound = 1,
    out_bound = 2,
}

/**
 * @summary RoamerInOut
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamerInOut  ::=  ENUMERATED
 * {
 *     in-bound(1),
 *     out-bound(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RoamerInOut = _enum_for_RoamerInOut;

/**
 * @summary RoamerInOut
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamerInOut  ::=  ENUMERATED
 * {
 *     in-bound(1),
 *     out-bound(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RoamerInOut = _enum_for_RoamerInOut;

/**
 * @summary RoamerInOut_in_bound
 * @constant
 * @type {number}
 */
export
const RoamerInOut_in_bound: RoamerInOut = RoamerInOut.in_bound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary in_bound
 * @constant
 * @type {number}
 */
export
const in_bound: RoamerInOut = RoamerInOut.in_bound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RoamerInOut_out_bound
 * @constant
 * @type {number}
 */
export
const RoamerInOut_out_bound: RoamerInOut = RoamerInOut.out_bound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary out_bound
 * @constant
 * @type {number}
 */
export
const out_bound: RoamerInOut = RoamerInOut.out_bound; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RoamerInOut: $.ASN1Decoder<RoamerInOut> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoamerInOut
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoamerInOut (el: _Element): RoamerInOut {
    if (!_cached_decoder_for_RoamerInOut) { _cached_decoder_for_RoamerInOut = $._decodeEnumerated; }
    return _cached_decoder_for_RoamerInOut(el);
}

let _cached_encoder_for_RoamerInOut: $.ASN1Encoder<RoamerInOut> | null = null;

/**
 * @summary Encodes a(n) RoamerInOut into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoamerInOut, encoded as an ASN.1 Element.
 */
export
function _encode_RoamerInOut (value: RoamerInOut, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoamerInOut) { _cached_encoder_for_RoamerInOut = $._encodeEnumerated; }
    return _cached_encoder_for_RoamerInOut(value, elGetter);
}


/* eslint-enable */
