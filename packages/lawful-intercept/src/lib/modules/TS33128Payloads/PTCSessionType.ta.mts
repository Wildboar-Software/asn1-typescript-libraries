/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCSessionType   ::=  ENUMERATED
 * {
 *     ondemand(1),
 *     preEstablished(2),
 *     adhoc(3),
 *     prearranged(4),
 *     groupSession(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCSessionType {
    ondemand = 1,
    preEstablished = 2,
    adhoc = 3,
    prearranged = 4,
    groupSession = 5,
}

/**
 * @summary PTCSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCSessionType   ::=  ENUMERATED
 * {
 *     ondemand(1),
 *     preEstablished(2),
 *     adhoc(3),
 *     prearranged(4),
 *     groupSession(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCSessionType = _enum_for_PTCSessionType;

/**
 * @summary PTCSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCSessionType   ::=  ENUMERATED
 * {
 *     ondemand(1),
 *     preEstablished(2),
 *     adhoc(3),
 *     prearranged(4),
 *     groupSession(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCSessionType = _enum_for_PTCSessionType;

/**
 * @summary PTCSessionType_ondemand
 * @constant
 * @type {number}
 */
export
const PTCSessionType_ondemand: PTCSessionType = PTCSessionType.ondemand; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ondemand
 * @constant
 * @type {number}
 */
export
const ondemand: PTCSessionType = PTCSessionType.ondemand; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionType_preEstablished
 * @constant
 * @type {number}
 */
export
const PTCSessionType_preEstablished: PTCSessionType = PTCSessionType.preEstablished; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary preEstablished
 * @constant
 * @type {number}
 */
export
const preEstablished: PTCSessionType = PTCSessionType.preEstablished; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionType_adhoc
 * @constant
 * @type {number}
 */
export
const PTCSessionType_adhoc: PTCSessionType = PTCSessionType.adhoc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary adhoc
 * @constant
 * @type {number}
 */
export
const adhoc: PTCSessionType = PTCSessionType.adhoc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionType_prearranged
 * @constant
 * @type {number}
 */
export
const PTCSessionType_prearranged: PTCSessionType = PTCSessionType.prearranged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary prearranged
 * @constant
 * @type {number}
 */
export
const prearranged: PTCSessionType = PTCSessionType.prearranged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionType_groupSession
 * @constant
 * @type {number}
 */
export
const PTCSessionType_groupSession: PTCSessionType = PTCSessionType.groupSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupSession
 * @constant
 * @type {number}
 */
export
const groupSession: PTCSessionType = PTCSessionType.groupSession; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCSessionType: $.ASN1Decoder<PTCSessionType> = $._decodeEnumerated;
export const _encode_PTCSessionType: $.ASN1Encoder<PTCSessionType> = $._encodeEnumerated;


/* eslint-enable */
