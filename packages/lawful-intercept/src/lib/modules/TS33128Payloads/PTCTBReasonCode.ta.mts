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
const PTCTBReasonCode: typeof _enum_for_PTCTBReasonCode = _enum_for_PTCTBReasonCode;

/**
 * @summary PTCTBReasonCode_noQueuingAllowed
 * @constant
 * @type {number}
 */
export
const PTCTBReasonCode_noQueuingAllowed: _enum_for_PTCTBReasonCode.noQueuingAllowed = PTCTBReasonCode.noQueuingAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noQueuingAllowed
 * @constant
 * @type {number}
 */
export
const noQueuingAllowed: _enum_for_PTCTBReasonCode.noQueuingAllowed = PTCTBReasonCode.noQueuingAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCTBReasonCode_oneParticipantSession
 * @constant
 * @type {number}
 */
export
const PTCTBReasonCode_oneParticipantSession: _enum_for_PTCTBReasonCode.oneParticipantSession = PTCTBReasonCode.oneParticipantSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneParticipantSession
 * @constant
 * @type {number}
 */
export
const oneParticipantSession: _enum_for_PTCTBReasonCode.oneParticipantSession = PTCTBReasonCode.oneParticipantSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCTBReasonCode_listenOnly
 * @constant
 * @type {number}
 */
export
const PTCTBReasonCode_listenOnly: _enum_for_PTCTBReasonCode.listenOnly = PTCTBReasonCode.listenOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary listenOnly
 * @constant
 * @type {number}
 */
export
const listenOnly: _enum_for_PTCTBReasonCode.listenOnly = PTCTBReasonCode.listenOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCTBReasonCode_exceededMaxDuration
 * @constant
 * @type {number}
 */
export
const PTCTBReasonCode_exceededMaxDuration: _enum_for_PTCTBReasonCode.exceededMaxDuration = PTCTBReasonCode.exceededMaxDuration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary exceededMaxDuration
 * @constant
 * @type {number}
 */
export
const exceededMaxDuration: _enum_for_PTCTBReasonCode.exceededMaxDuration = PTCTBReasonCode.exceededMaxDuration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCTBReasonCode_tBPrevented
 * @constant
 * @type {number}
 */
export
const PTCTBReasonCode_tBPrevented: _enum_for_PTCTBReasonCode.tBPrevented = PTCTBReasonCode.tBPrevented; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBPrevented
 * @constant
 * @type {number}
 */
export
const tBPrevented: _enum_for_PTCTBReasonCode.tBPrevented = PTCTBReasonCode.tBPrevented; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCTBReasonCode: $.ASN1Decoder<PTCTBReasonCode> = $._decodeEnumerated;
export const _encode_PTCTBReasonCode: $.ASN1Encoder<PTCTBReasonCode> = $._encodeEnumerated;


/* eslint-enable */
