/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
function _decode_ReceivedStatus(el: _Element): ReceivedStatus {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ReceivedStatus.messageComplete: return ReceivedStatus.messageComplete;
        case ReceivedStatus.messageInterrupted: return ReceivedStatus.messageInterrupted;
        case ReceivedStatus.messageTimeOut: return ReceivedStatus.messageTimeOut;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for ReceivedStatus.",
                el,
            );
    }
}

export
const _encode_ReceivedStatus: $.ASN1Encoder<ReceivedStatus> = $._encodeEnumerated as $.ASN1Encoder<ReceivedStatus>;

/* eslint-enable */
