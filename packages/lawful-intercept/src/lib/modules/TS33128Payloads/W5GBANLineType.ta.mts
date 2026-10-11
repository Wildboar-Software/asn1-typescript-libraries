/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary W5GBANLineType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * W5GBANLineType  ::=  ENUMERATED
 * {
 *     dSL(1),
 *     pON(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_W5GBANLineType {
    dSL = 1,
    pON = 2,
}

/**
 * @summary W5GBANLineType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * W5GBANLineType  ::=  ENUMERATED
 * {
 *     dSL(1),
 *     pON(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type W5GBANLineType = _enum_for_W5GBANLineType;

/**
 * @summary W5GBANLineType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * W5GBANLineType  ::=  ENUMERATED
 * {
 *     dSL(1),
 *     pON(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const W5GBANLineType = _enum_for_W5GBANLineType;

/**
 * @summary W5GBANLineType_dSL
 * @constant
 * @type {number}
 */
export
const W5GBANLineType_dSL: W5GBANLineType = W5GBANLineType.dSL; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dSL
 * @constant
 * @type {number}
 */
export
const dSL: W5GBANLineType = W5GBANLineType.dSL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary W5GBANLineType_pON
 * @constant
 * @type {number}
 */
export
const W5GBANLineType_pON: W5GBANLineType = W5GBANLineType.pON; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pON
 * @constant
 * @type {number}
 */
export
const pON: W5GBANLineType = W5GBANLineType.pON; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_W5GBANLineType: $.ASN1Decoder<W5GBANLineType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) W5GBANLineType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_W5GBANLineType (el: _Element): W5GBANLineType {
    if (!_cached_decoder_for_W5GBANLineType) { _cached_decoder_for_W5GBANLineType = $._decodeEnumerated; }
    return _cached_decoder_for_W5GBANLineType(el);
}

let _cached_encoder_for_W5GBANLineType: $.ASN1Encoder<W5GBANLineType> | null = null;

/**
 * @summary Encodes a(n) W5GBANLineType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The W5GBANLineType, encoded as an ASN.1 Element.
 */
export
function _encode_W5GBANLineType (value: W5GBANLineType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_W5GBANLineType) { _cached_encoder_for_W5GBANLineType = $._encodeEnumerated; }
    return _cached_encoder_for_W5GBANLineType(value, elGetter);
}


/* eslint-enable */
