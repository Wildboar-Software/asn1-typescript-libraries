/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary FinalBillingId
 * @description
 *
 * Billing identification on a final charge. Only one value applies. If the
 * element is absent, the default is normal charging (ECMA-211 §C.1.3, §C.2).
 * After transfer, code `callTransfer` (ECMA-212 §6.6.2.3.1). After diversion,
 * code the value that matches `diversionType` (§6.6.2.4.1). Value 1 is
 * unassigned; neither standard explains the gap.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
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
 * Billing identification on a final charge. Only one value applies. If the
 * element is absent, the default is normal charging (ECMA-211 §C.1.3, §C.2).
 * After transfer, code `callTransfer` (ECMA-212 §6.6.2.3.1). After diversion,
 * code the value that matches `diversionType` (§6.6.2.4.1). Value 1 is
 * unassigned; neither standard explains the gap.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
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
 * Billing identification on a final charge. Only one value applies. If the
 * element is absent, the default is normal charging (ECMA-211 §C.1.3, §C.2).
 * After transfer, code `callTransfer` (ECMA-212 §6.6.2.3.1). After diversion,
 * code the value that matches `diversionType` (§6.6.2.4.1). Value 1 is
 * unassigned; neither standard explains the gap.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
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
 * @description
 *
 * The calling user is charged under normal charging (ECMA-211 §C.1.3). May be
 * omitted; absence means this value (§C.2).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const FinalBillingId_normalCharging = FinalBillingId.normalCharging satisfies FinalBillingId; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalCharging
 * @description Alias of {@link FinalBillingId_normalCharging}.
 * @constant
 * @type {number}
 */
export
const normalCharging = FinalBillingId.normalCharging satisfies FinalBillingId; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FinalBillingId_creditCardCharging
 * @description Charges are paid by credit card (ECMA-211 §C.1.3).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const FinalBillingId_creditCardCharging = FinalBillingId.creditCardCharging satisfies FinalBillingId; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary creditCardCharging
 * @description Alias of {@link FinalBillingId_creditCardCharging}.
 * @constant
 * @type {number}
 */
export
const creditCardCharging = FinalBillingId.creditCardCharging satisfies FinalBillingId; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FinalBillingId_callForwardingUnconditional
 * @description
 *
 * The diverting user is charged for a call produced by call forwarding
 * unconditional (ECMA-211 §C.1.3). Use this on aocFinal after that diversion
 * (ECMA-212 §6.6.2.4.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const FinalBillingId_callForwardingUnconditional = FinalBillingId.callForwardingUnconditional satisfies FinalBillingId; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingUnconditional
 * @description Alias of {@link FinalBillingId_callForwardingUnconditional}.
 * @constant
 * @type {number}
 */
export
const callForwardingUnconditional = FinalBillingId.callForwardingUnconditional satisfies FinalBillingId; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FinalBillingId_callForwardingBusy
 * @description
 *
 * The diverting user is charged for a call produced by call forwarding busy
 * (ECMA-211 §C.1.3, ECMA-212 §6.6.2.4.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const FinalBillingId_callForwardingBusy = FinalBillingId.callForwardingBusy satisfies FinalBillingId; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingBusy
 * @description Alias of {@link FinalBillingId_callForwardingBusy}.
 * @constant
 * @type {number}
 */
export
const callForwardingBusy = FinalBillingId.callForwardingBusy satisfies FinalBillingId; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FinalBillingId_callForwardingNoReply
 * @description
 *
 * The diverting user is charged for a call produced by call forwarding no reply
 * (ECMA-211 §C.1.3, ECMA-212 §6.6.2.4.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const FinalBillingId_callForwardingNoReply = FinalBillingId.callForwardingNoReply satisfies FinalBillingId; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingNoReply
 * @description Alias of {@link FinalBillingId_callForwardingNoReply}.
 * @constant
 * @type {number}
 */
export
const callForwardingNoReply = FinalBillingId.callForwardingNoReply satisfies FinalBillingId; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FinalBillingId_callDeflection
 * @description
 *
 * The diverting user is charged for a call produced by call deflection
 * (ECMA-211 §C.1.3, ECMA-212 §6.6.2.4.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const FinalBillingId_callDeflection = FinalBillingId.callDeflection satisfies FinalBillingId; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callDeflection
 * @description Alias of {@link FinalBillingId_callDeflection}.
 * @constant
 * @type {number}
 */
export
const callDeflection = FinalBillingId.callDeflection satisfies FinalBillingId; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FinalBillingId_callTransfer
 * @description
 *
 * User A is charged for a call that has been transferred (ECMA-211 §C.1.3).
 * aocFinal after transfer shall use this value (ECMA-212 §6.6.2.3.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const FinalBillingId_callTransfer = FinalBillingId.callTransfer satisfies FinalBillingId; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callTransfer
 * @description Alias of {@link FinalBillingId_callTransfer}.
 * @constant
 * @type {number}
 */
export
const callTransfer = FinalBillingId.callTransfer satisfies FinalBillingId; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_FinalBillingId: $.ASN1Decoder<FinalBillingId> = $._decodeEnumerated;

export
const _encode_FinalBillingId: $.ASN1Encoder<FinalBillingId> = $._encodeEnumerated;

/* eslint-enable */
