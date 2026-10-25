/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCTBReasonCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCTBReasonCode   ::=  ENUMERATED
 * {
 *     noQueuingAllowed(1),
 *     oneParticipantSession(2),
 *     listenOnly(3),
 *     exceededMaxDuration(4),
 *     tBPrevented(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCTBReasonCode {
    noQueuingAllowed = 1,
    oneParticipantSession = 2,
    listenOnly = 3,
    exceededMaxDuration = 4,
    tBPrevented = 5,
}

/**
 * @summary PTCTBReasonCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCTBReasonCode   ::=  ENUMERATED
 * {
 *     noQueuingAllowed(1),
 *     oneParticipantSession(2),
 *     listenOnly(3),
 *     exceededMaxDuration(4),
 *     tBPrevented(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCTBReasonCode = _enum_for_PTCTBReasonCode;

/**
 * @summary PTCTBReasonCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCTBReasonCode   ::=  ENUMERATED
 * {
 *     noQueuingAllowed(1),
 *     oneParticipantSession(2),
 *     listenOnly(3),
 *     exceededMaxDuration(4),
 *     tBPrevented(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCTBReasonCode = _enum_for_PTCTBReasonCode;

/**
 * @summary PTCTBReasonCode_noQueuingAllowed
 * @constant
 * @type {number}
 */
export
const PTCTBReasonCode_noQueuingAllowed = PTCTBReasonCode.noQueuingAllowed satisfies PTCTBReasonCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noQueuingAllowed
 * @constant
 * @type {number}
 */
export
const noQueuingAllowed = PTCTBReasonCode.noQueuingAllowed satisfies PTCTBReasonCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCTBReasonCode_oneParticipantSession
 * @constant
 * @type {number}
 */
export
const PTCTBReasonCode_oneParticipantSession = PTCTBReasonCode.oneParticipantSession satisfies PTCTBReasonCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneParticipantSession
 * @constant
 * @type {number}
 */
export
const oneParticipantSession = PTCTBReasonCode.oneParticipantSession satisfies PTCTBReasonCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCTBReasonCode_listenOnly
 * @constant
 * @type {number}
 */
export
const PTCTBReasonCode_listenOnly = PTCTBReasonCode.listenOnly satisfies PTCTBReasonCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary listenOnly
 * @constant
 * @type {number}
 */
export
const listenOnly = PTCTBReasonCode.listenOnly satisfies PTCTBReasonCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCTBReasonCode_exceededMaxDuration
 * @constant
 * @type {number}
 */
export
const PTCTBReasonCode_exceededMaxDuration = PTCTBReasonCode.exceededMaxDuration satisfies PTCTBReasonCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary exceededMaxDuration
 * @constant
 * @type {number}
 */
export
const exceededMaxDuration = PTCTBReasonCode.exceededMaxDuration satisfies PTCTBReasonCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCTBReasonCode_tBPrevented
 * @constant
 * @type {number}
 */
export
const PTCTBReasonCode_tBPrevented = PTCTBReasonCode.tBPrevented satisfies PTCTBReasonCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBPrevented
 * @constant
 * @type {number}
 */
export
const tBPrevented = PTCTBReasonCode.tBPrevented satisfies PTCTBReasonCode; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCTBReasonCode: $.ASN1Decoder<PTCTBReasonCode> = $._decodeEnumerated;
export const _encode_PTCTBReasonCode: $.ASN1Encoder<PTCTBReasonCode> = $._encodeEnumerated;


/* eslint-enable */
