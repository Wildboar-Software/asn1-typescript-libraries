/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCPresenceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCPresenceType   ::=  ENUMERATED
 * {
 *     pTCClient(1),
 *     pTCGroup(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCPresenceType {
    pTCClient = 1,
    pTCGroup = 2,
}

/**
 * @summary PTCPresenceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCPresenceType   ::=  ENUMERATED
 * {
 *     pTCClient(1),
 *     pTCGroup(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCPresenceType = _enum_for_PTCPresenceType;

/**
 * @summary PTCPresenceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCPresenceType   ::=  ENUMERATED
 * {
 *     pTCClient(1),
 *     pTCGroup(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCPresenceType = _enum_for_PTCPresenceType;

/**
 * @summary PTCPresenceType_pTCClient
 * @constant
 * @type {number}
 */
export
const PTCPresenceType_pTCClient = PTCPresenceType.pTCClient satisfies PTCPresenceType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCClient
 * @constant
 * @type {number}
 */
export
const pTCClient = PTCPresenceType.pTCClient satisfies PTCPresenceType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCPresenceType_pTCGroup
 * @constant
 * @type {number}
 */
export
const PTCPresenceType_pTCGroup = PTCPresenceType.pTCGroup satisfies PTCPresenceType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroup
 * @constant
 * @type {number}
 */
export
const pTCGroup = PTCPresenceType.pTCGroup satisfies PTCPresenceType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCPresenceType: $.ASN1Decoder<PTCPresenceType> = $._decodeEnumerated;
export const _encode_PTCPresenceType: $.ASN1Encoder<PTCPresenceType> = $._encodeEnumerated;


/* eslint-enable */
