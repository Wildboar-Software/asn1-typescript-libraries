/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HandoverType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandoverType  ::=  ENUMERATED
 * {
 *     intra5GS(1),
 *     fiveGStoEPS(2),
 *     ePSto5GS(3),
 *     fiveGStoUTRA(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_HandoverType {
    intra5GS = 1,
    fiveGStoEPS = 2,
    ePSto5GS = 3,
    fiveGStoUTRA = 4,
}

/**
 * @summary HandoverType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandoverType  ::=  ENUMERATED
 * {
 *     intra5GS(1),
 *     fiveGStoEPS(2),
 *     ePSto5GS(3),
 *     fiveGStoUTRA(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type HandoverType = _enum_for_HandoverType;

/**
 * @summary HandoverType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandoverType  ::=  ENUMERATED
 * {
 *     intra5GS(1),
 *     fiveGStoEPS(2),
 *     ePSto5GS(3),
 *     fiveGStoUTRA(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const HandoverType = _enum_for_HandoverType;

/**
 * @summary HandoverType_intra5GS
 * @constant
 * @type {number}
 */
export
const HandoverType_intra5GS: HandoverType = HandoverType.intra5GS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intra5GS
 * @constant
 * @type {number}
 */
export
const intra5GS: HandoverType = HandoverType.intra5GS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverType_fiveGStoEPS
 * @constant
 * @type {number}
 */
export
const HandoverType_fiveGStoEPS: HandoverType = HandoverType.fiveGStoEPS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fiveGStoEPS
 * @constant
 * @type {number}
 */
export
const fiveGStoEPS: HandoverType = HandoverType.fiveGStoEPS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverType_ePSto5GS
 * @constant
 * @type {number}
 */
export
const HandoverType_ePSto5GS: HandoverType = HandoverType.ePSto5GS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSto5GS
 * @constant
 * @type {number}
 */
export
const ePSto5GS: HandoverType = HandoverType.ePSto5GS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverType_fiveGStoUTRA
 * @constant
 * @type {number}
 */
export
const HandoverType_fiveGStoUTRA: HandoverType = HandoverType.fiveGStoUTRA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fiveGStoUTRA
 * @constant
 * @type {number}
 */
export
const fiveGStoUTRA: HandoverType = HandoverType.fiveGStoUTRA; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_HandoverType: $.ASN1Decoder<HandoverType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandoverType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HandoverType (el: _Element): HandoverType {
    if (!_cached_decoder_for_HandoverType) { _cached_decoder_for_HandoverType = $._decodeEnumerated; }
    return _cached_decoder_for_HandoverType(el);
}

let _cached_encoder_for_HandoverType: $.ASN1Encoder<HandoverType> | null = null;

/**
 * @summary Encodes a(n) HandoverType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandoverType, encoded as an ASN.1 Element.
 */
export
function _encode_HandoverType (value: HandoverType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HandoverType) { _cached_encoder_for_HandoverType = $._encodeEnumerated; }
    return _cached_encoder_for_HandoverType(value, elGetter);
}


/* eslint-enable */
