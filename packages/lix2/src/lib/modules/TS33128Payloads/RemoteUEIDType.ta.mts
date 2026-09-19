/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RemoteUEIDType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUEIDType  ::=  ENUMERATED
 * {
 *     uPPRUKID(1),
 *     cPPRUKID(2),
 *     iMEI(3),
 *     iMEISV(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RemoteUEIDType {
    uPPRUKID = 1,
    cPPRUKID = 2,
    iMEI = 3,
    iMEISV = 4,
}

/**
 * @summary RemoteUEIDType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUEIDType  ::=  ENUMERATED
 * {
 *     uPPRUKID(1),
 *     cPPRUKID(2),
 *     iMEI(3),
 *     iMEISV(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RemoteUEIDType = _enum_for_RemoteUEIDType;

/**
 * @summary RemoteUEIDType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUEIDType  ::=  ENUMERATED
 * {
 *     uPPRUKID(1),
 *     cPPRUKID(2),
 *     iMEI(3),
 *     iMEISV(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RemoteUEIDType = _enum_for_RemoteUEIDType;

/**
 * @summary RemoteUEIDType_uPPRUKID
 * @constant
 * @type {number}
 */
export
const RemoteUEIDType_uPPRUKID: RemoteUEIDType = RemoteUEIDType.uPPRUKID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uPPRUKID
 * @constant
 * @type {number}
 */
export
const uPPRUKID: RemoteUEIDType = RemoteUEIDType.uPPRUKID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RemoteUEIDType_cPPRUKID
 * @constant
 * @type {number}
 */
export
const RemoteUEIDType_cPPRUKID: RemoteUEIDType = RemoteUEIDType.cPPRUKID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cPPRUKID
 * @constant
 * @type {number}
 */
export
const cPPRUKID: RemoteUEIDType = RemoteUEIDType.cPPRUKID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RemoteUEIDType_iMEI
 * @constant
 * @type {number}
 */
export
const RemoteUEIDType_iMEI: RemoteUEIDType = RemoteUEIDType.iMEI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMEI
 * @constant
 * @type {number}
 */
export
const iMEI: RemoteUEIDType = RemoteUEIDType.iMEI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RemoteUEIDType_iMEISV
 * @constant
 * @type {number}
 */
export
const RemoteUEIDType_iMEISV: RemoteUEIDType = RemoteUEIDType.iMEISV; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMEISV
 * @constant
 * @type {number}
 */
export
const iMEISV: RemoteUEIDType = RemoteUEIDType.iMEISV; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RemoteUEIDType: $.ASN1Decoder<RemoteUEIDType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteUEIDType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoteUEIDType (el: _Element): RemoteUEIDType {
    if (!_cached_decoder_for_RemoteUEIDType) { _cached_decoder_for_RemoteUEIDType = $._decodeEnumerated; }
    return _cached_decoder_for_RemoteUEIDType(el);
}

let _cached_encoder_for_RemoteUEIDType: $.ASN1Encoder<RemoteUEIDType> | null = null;

/**
 * @summary Encodes a(n) RemoteUEIDType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteUEIDType, encoded as an ASN.1 Element.
 */
export
function _encode_RemoteUEIDType (value: RemoteUEIDType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoteUEIDType) { _cached_encoder_for_RemoteUEIDType = $._encodeEnumerated; }
    return _cached_encoder_for_RemoteUEIDType(value, elGetter);
}


/* eslint-enable */
