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
export const _decode_RemoteUEIDType: $.ASN1Decoder<RemoteUEIDType> = $._decodeEnumerated;
export const _encode_RemoteUEIDType: $.ASN1Encoder<RemoteUEIDType> = $._encodeEnumerated;


/* eslint-enable */
