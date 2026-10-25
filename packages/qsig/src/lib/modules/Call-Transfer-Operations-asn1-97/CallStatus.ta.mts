/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CallStatus
 * @description
 *
 * Whether the other party in the transferred call has answered.
 * `callTransferComplete` toward the Primary PINX uses `alerting` when
 * the secondary call was not Active. Otherwise the value is
 * `answered`, which is also the default when `callStatus` is omitted.
 * ECMA-178 §6.3.1, §6.5.1.1; ECMA-177 §4.2.2, §4.2.3, §7.2.1.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallStatus  ::=  ENUMERATED {
 *     answered(0),
 *     alerting(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CallStatus {
    answered = 0,
    alerting = 1,
}

/**
 * @summary CallStatus
 * @description
 *
 * Whether the other party in the transferred call has answered.
 * `callTransferComplete` toward the Primary PINX uses `alerting` when
 * the secondary call was not Active. Otherwise the value is
 * `answered`, which is also the default when `callStatus` is omitted.
 * ECMA-178 §6.3.1, §6.5.1.1; ECMA-177 §4.2.2, §4.2.3, §7.2.1.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallStatus  ::=  ENUMERATED {
 *     answered(0),
 *     alerting(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CallStatus = _enum_for_CallStatus;

/**
 * @summary CallStatus
 * @description
 *
 * Whether the other party in the transferred call has answered.
 * `callTransferComplete` toward the Primary PINX uses `alerting` when
 * the secondary call was not Active. Otherwise the value is
 * `answered`, which is also the default when `callStatus` is omitted.
 * ECMA-178 §6.3.1, §6.5.1.1; ECMA-177 §4.2.2, §4.2.3, §7.2.1.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallStatus  ::=  ENUMERATED {
 *     answered(0),
 *     alerting(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CallStatus = _enum_for_CallStatus;

/**
 * @summary CallStatus_answered
 * @description
 *
 * The called user has answered (ECMA-177 §4.2.3). Default of
 * `callStatus` on `callTransferComplete` when the element is omitted.
 * ECMA-178 §6.3.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 * @constant
 * @type {number}
 */
export
const CallStatus_answered = CallStatus.answered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary answered
 * @description Alias of {@link CallStatus_answered}.
 * @constant
 * @type {number}
 */
export
const answered = CallStatus.answered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallStatus_alerting
 * @description
 *
 * The secondary user is being alerted and has not answered
 * (ECMA-177 §4.2.2). Sent to the Primary PINX when the secondary call
 * was not Active at the time of transfer. ECMA-178 §6.4.1.2, §6.5.1.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 * @constant
 * @type {number}
 */
export
const CallStatus_alerting = CallStatus.alerting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alerting
 * @description Alias of {@link CallStatus_alerting}.
 * @constant
 * @type {number}
 */
export
const alerting = CallStatus.alerting; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CallStatus: $.ASN1Decoder<CallStatus> = $._decodeEnumerated;

export
const _encode_CallStatus: $.ASN1Encoder<CallStatus> = $._encodeEnumerated;

/* eslint-enable */
