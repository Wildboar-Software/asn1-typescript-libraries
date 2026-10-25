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
const PTCPresenceType: typeof _enum_for_PTCPresenceType = _enum_for_PTCPresenceType;

/**
 * @summary PTCPresenceType_pTCClient
 * @constant
 * @type {number}
 */
export
const PTCPresenceType_pTCClient: _enum_for_PTCPresenceType.pTCClient = PTCPresenceType.pTCClient; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCClient
 * @constant
 * @type {number}
 */
export
const pTCClient: _enum_for_PTCPresenceType.pTCClient = PTCPresenceType.pTCClient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCPresenceType_pTCGroup
 * @constant
 * @type {number}
 */
export
const PTCPresenceType_pTCGroup: _enum_for_PTCPresenceType.pTCGroup = PTCPresenceType.pTCGroup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroup
 * @constant
 * @type {number}
 */
export
const pTCGroup: _enum_for_PTCPresenceType.pTCGroup = PTCPresenceType.pTCGroup; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCPresenceType: $.ASN1Decoder<PTCPresenceType> = $._decodeEnumerated;
export const _encode_PTCPresenceType: $.ASN1Encoder<PTCPresenceType> = $._encodeEnumerated;


/* eslint-enable */
