/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReceivedStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReceivedStatus  ::=  ENUMERATED {
 *   messageComplete(0), messageInterrupted(1), messageTimeOut(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReceivedStatus {
    messageComplete = 0,
    messageInterrupted = 1,
    messageTimeOut = 2,
}

/**
 * @summary ReceivedStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReceivedStatus  ::=  ENUMERATED {
 *   messageComplete(0), messageInterrupted(1), messageTimeOut(2)}
 * ```
 * 
 * @enum {number}
 */
export
type ReceivedStatus = _enum_for_ReceivedStatus;

/**
 * @summary ReceivedStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReceivedStatus  ::=  ENUMERATED {
 *   messageComplete(0), messageInterrupted(1), messageTimeOut(2)}
 * ```
 * 
 * @enum {number}
 */
export
const ReceivedStatus = _enum_for_ReceivedStatus;

/**
 * @summary ReceivedStatus_messageComplete
 * @constant
 * @type {number}
 */
export
const ReceivedStatus_messageComplete: ReceivedStatus = ReceivedStatus.messageComplete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageComplete
 * @constant
 * @type {number}
 */
export
const messageComplete: ReceivedStatus = ReceivedStatus.messageComplete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReceivedStatus_messageInterrupted
 * @constant
 * @type {number}
 */
export
const ReceivedStatus_messageInterrupted: ReceivedStatus = ReceivedStatus.messageInterrupted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageInterrupted
 * @constant
 * @type {number}
 */
export
const messageInterrupted: ReceivedStatus = ReceivedStatus.messageInterrupted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReceivedStatus_messageTimeOut
 * @constant
 * @type {number}
 */
export
const ReceivedStatus_messageTimeOut: ReceivedStatus = ReceivedStatus.messageTimeOut; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageTimeOut
 * @constant
 * @type {number}
 */
export
const messageTimeOut: ReceivedStatus = ReceivedStatus.messageTimeOut; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ReceivedStatus: $.ASN1Decoder<ReceivedStatus> = $._decodeEnumerated;

export
const _encode_ReceivedStatus: $.ASN1Encoder<ReceivedStatus> = $._encodeEnumerated;

/* eslint-enable */
