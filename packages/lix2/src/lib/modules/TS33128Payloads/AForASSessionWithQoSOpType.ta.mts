/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AForASSessionWithQoSOpType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AForASSessionWithQoSOpType  ::=  ENUMERATED
 * {
 *     pOST(1),
 *     pUT(2),
 *     pATCH(3),
 *     dELETE(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AForASSessionWithQoSOpType {
    pOST = 1,
    pUT = 2,
    pATCH = 3,
    dELETE = 4,
}

/**
 * @summary AForASSessionWithQoSOpType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AForASSessionWithQoSOpType  ::=  ENUMERATED
 * {
 *     pOST(1),
 *     pUT(2),
 *     pATCH(3),
 *     dELETE(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AForASSessionWithQoSOpType = _enum_for_AForASSessionWithQoSOpType;

/**
 * @summary AForASSessionWithQoSOpType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AForASSessionWithQoSOpType  ::=  ENUMERATED
 * {
 *     pOST(1),
 *     pUT(2),
 *     pATCH(3),
 *     dELETE(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AForASSessionWithQoSOpType = _enum_for_AForASSessionWithQoSOpType;

/**
 * @summary AForASSessionWithQoSOpType_pOST
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSOpType_pOST: AForASSessionWithQoSOpType = AForASSessionWithQoSOpType.pOST; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pOST
 * @constant
 * @type {number}
 */
export
const pOST: AForASSessionWithQoSOpType = AForASSessionWithQoSOpType.pOST; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSOpType_pUT
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSOpType_pUT: AForASSessionWithQoSOpType = AForASSessionWithQoSOpType.pUT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pUT
 * @constant
 * @type {number}
 */
export
const pUT: AForASSessionWithQoSOpType = AForASSessionWithQoSOpType.pUT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSOpType_pATCH
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSOpType_pATCH: AForASSessionWithQoSOpType = AForASSessionWithQoSOpType.pATCH; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pATCH
 * @constant
 * @type {number}
 */
export
const pATCH: AForASSessionWithQoSOpType = AForASSessionWithQoSOpType.pATCH; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSOpType_dELETE
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSOpType_dELETE: AForASSessionWithQoSOpType = AForASSessionWithQoSOpType.dELETE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dELETE
 * @constant
 * @type {number}
 */
export
const dELETE: AForASSessionWithQoSOpType = AForASSessionWithQoSOpType.dELETE; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AForASSessionWithQoSOpType: $.ASN1Decoder<AForASSessionWithQoSOpType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AForASSessionWithQoSOpType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AForASSessionWithQoSOpType (el: _Element): AForASSessionWithQoSOpType {
    if (!_cached_decoder_for_AForASSessionWithQoSOpType) { _cached_decoder_for_AForASSessionWithQoSOpType = $._decodeEnumerated; }
    return _cached_decoder_for_AForASSessionWithQoSOpType(el);
}

let _cached_encoder_for_AForASSessionWithQoSOpType: $.ASN1Encoder<AForASSessionWithQoSOpType> | null = null;

/**
 * @summary Encodes a(n) AForASSessionWithQoSOpType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AForASSessionWithQoSOpType, encoded as an ASN.1 Element.
 */
export
function _encode_AForASSessionWithQoSOpType (value: AForASSessionWithQoSOpType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AForASSessionWithQoSOpType) { _cached_encoder_for_AForASSessionWithQoSOpType = $._encodeEnumerated; }
    return _cached_encoder_for_AForASSessionWithQoSOpType(value, elGetter);
}


/* eslint-enable */
