/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FinalBillingId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FinalBillingId  ::=  ENUMERATED {
 *     normalCharging(0),
 *     creditCardCharging(2),
 *     callForwardingUnconditional(3),
 *     callForwardingBusy(4),
 *     callForwardingNoReply(5),
 *     callDeflection(6),
 *     callTransfer(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FinalBillingId {
    normalCharging = 0,
    creditCardCharging = 2,
    callForwardingUnconditional = 3,
    callForwardingBusy = 4,
    callForwardingNoReply = 5,
    callDeflection = 6,
    callTransfer = 7,
}

/**
 * @summary FinalBillingId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FinalBillingId  ::=  ENUMERATED {
 *     normalCharging(0),
 *     creditCardCharging(2),
 *     callForwardingUnconditional(3),
 *     callForwardingBusy(4),
 *     callForwardingNoReply(5),
 *     callDeflection(6),
 *     callTransfer(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FinalBillingId = _enum_for_FinalBillingId;

/**
 * @summary FinalBillingId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FinalBillingId  ::=  ENUMERATED {
 *     normalCharging(0),
 *     creditCardCharging(2),
 *     callForwardingUnconditional(3),
 *     callForwardingBusy(4),
 *     callForwardingNoReply(5),
 *     callDeflection(6),
 *     callTransfer(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FinalBillingId = _enum_for_FinalBillingId;

/**
 * @summary FinalBillingId_normalCharging
 * @constant
 * @type {number}
 */
export
const FinalBillingId_normalCharging: FinalBillingId = FinalBillingId.normalCharging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalCharging
 * @constant
 * @type {number}
 */
export
const normalCharging: FinalBillingId = FinalBillingId.normalCharging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FinalBillingId_creditCardCharging
 * @constant
 * @type {number}
 */
export
const FinalBillingId_creditCardCharging: FinalBillingId = FinalBillingId.creditCardCharging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary creditCardCharging
 * @constant
 * @type {number}
 */
export
const creditCardCharging: FinalBillingId = FinalBillingId.creditCardCharging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FinalBillingId_callForwardingUnconditional
 * @constant
 * @type {number}
 */
export
const FinalBillingId_callForwardingUnconditional: FinalBillingId = FinalBillingId.callForwardingUnconditional; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingUnconditional
 * @constant
 * @type {number}
 */
export
const callForwardingUnconditional: FinalBillingId = FinalBillingId.callForwardingUnconditional; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FinalBillingId_callForwardingBusy
 * @constant
 * @type {number}
 */
export
const FinalBillingId_callForwardingBusy: FinalBillingId = FinalBillingId.callForwardingBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingBusy
 * @constant
 * @type {number}
 */
export
const callForwardingBusy: FinalBillingId = FinalBillingId.callForwardingBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FinalBillingId_callForwardingNoReply
 * @constant
 * @type {number}
 */
export
const FinalBillingId_callForwardingNoReply: FinalBillingId = FinalBillingId.callForwardingNoReply; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingNoReply
 * @constant
 * @type {number}
 */
export
const callForwardingNoReply: FinalBillingId = FinalBillingId.callForwardingNoReply; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FinalBillingId_callDeflection
 * @constant
 * @type {number}
 */
export
const FinalBillingId_callDeflection: FinalBillingId = FinalBillingId.callDeflection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callDeflection
 * @constant
 * @type {number}
 */
export
const callDeflection: FinalBillingId = FinalBillingId.callDeflection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FinalBillingId_callTransfer
 * @constant
 * @type {number}
 */
export
const FinalBillingId_callTransfer: FinalBillingId = FinalBillingId.callTransfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callTransfer
 * @constant
 * @type {number}
 */
export
const callTransfer: FinalBillingId = FinalBillingId.callTransfer; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_FinalBillingId: $.ASN1Decoder<FinalBillingId> = $._decodeEnumerated;

export
const _encode_FinalBillingId: $.ASN1Encoder<FinalBillingId> = $._encodeEnumerated;

/* eslint-enable */
