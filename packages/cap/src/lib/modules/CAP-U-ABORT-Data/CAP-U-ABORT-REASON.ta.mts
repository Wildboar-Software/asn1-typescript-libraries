/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CAP_U_ABORT_REASON
 * @description
 *
 * TC-U-ABORT user reason in TC User Information (`id-CAP-U-ABORT-Reason`).
 * Used on application-timer expiry (e.g. Tssf) and other CAP abort
 * conditions, including GPRS-ReferenceNumber mismatches.
 * (3GPP TS 29.078 V19.0.0 clauses 5.7, 10.2.1, 14.1.1.3.7 and 14.1.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAP-U-ABORT-REASON  ::=  ENUMERATED {
 *     no-reason-given        (1),
 *     application-timer-expired    (2),
 *     not-allowed-procedures    (3),
 *     abnormal-processing        (4),
 *     congestion            (5),
 *     invalid-reference        (6),
 *     missing-reference        (7),
 *     overlapping-dialogue    (8)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CAP_U_ABORT_REASON {
    no_reason_given = 1,
    application_timer_expired = 2,
    not_allowed_procedures = 3,
    abnormal_processing = 4,
    congestion = 5,
    invalid_reference = 6,
    missing_reference = 7,
    overlapping_dialogue = 8,
}

/**
 * @summary CAP_U_ABORT_REASON
 * @description
 *
 * TC-U-ABORT user reason in TC User Information (`id-CAP-U-ABORT-Reason`).
 * Used on application-timer expiry (e.g. Tssf) and other CAP abort
 * conditions, including GPRS-ReferenceNumber mismatches.
 * (3GPP TS 29.078 V19.0.0 clauses 5.7, 10.2.1, 14.1.1.3.7 and 14.1.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAP-U-ABORT-REASON  ::=  ENUMERATED {
 *     no-reason-given        (1),
 *     application-timer-expired    (2),
 *     not-allowed-procedures    (3),
 *     abnormal-processing        (4),
 *     congestion            (5),
 *     invalid-reference        (6),
 *     missing-reference        (7),
 *     overlapping-dialogue    (8)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type CAP_U_ABORT_REASON = _enum_for_CAP_U_ABORT_REASON;

/**
 * @summary CAP_U_ABORT_REASON
 * @description
 *
 * TC-U-ABORT user reason in TC User Information (`id-CAP-U-ABORT-Reason`).
 * Used on application-timer expiry (e.g. Tssf) and other CAP abort
 * conditions, including GPRS-ReferenceNumber mismatches.
 * (3GPP TS 29.078 V19.0.0 clauses 5.7, 10.2.1, 14.1.1.3.7 and 14.1.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAP-U-ABORT-REASON  ::=  ENUMERATED {
 *     no-reason-given        (1),
 *     application-timer-expired    (2),
 *     not-allowed-procedures    (3),
 *     abnormal-processing        (4),
 *     congestion            (5),
 *     invalid-reference        (6),
 *     missing-reference        (7),
 *     overlapping-dialogue    (8)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const CAP_U_ABORT_REASON = _enum_for_CAP_U_ABORT_REASON;

/**
 * @summary CAP_U_ABORT_REASON_no_reason_given
 * @description
 *
 * `no-reason-given` (1): none of the other abort reasons apply.
 * (3GPP TS 29.078 V19.0.0 clause 5.7).
 *
 * @constant
 * @type {number}
 */
export
const CAP_U_ABORT_REASON_no_reason_given: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.no_reason_given; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_reason_given
 * @description
 *
 * `no-reason-given` (1): none of the other abort reasons apply.
 * (3GPP TS 29.078 V19.0.0 clause 5.7).
 *
 * @constant
 * @type {number}
 */
export
const no_reason_given: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.no_reason_given; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CAP_U_ABORT_REASON_application_timer_expired
 * @description
 *
 * `application-timer-expired` (2): an application timer (e.g. Tssf) expired.
 * gsmSSF/gprsSSF/smsSSF abort the TC dialogue and go Idle; default
 * call/SMS/GPRS handling applies. Assisting gsmSSF also releases the
 * temporary connection.
 * (3GPP TS 29.078 V19.0.0 clauses 5.7 and 10.2.1).
 *
 * @constant
 * @type {number}
 */
export
const CAP_U_ABORT_REASON_application_timer_expired: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.application_timer_expired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary application_timer_expired
 * @description
 *
 * `application-timer-expired` (2): an application timer (e.g. Tssf) expired.
 * gsmSSF/gprsSSF/smsSSF abort the TC dialogue and go Idle; default
 * call/SMS/GPRS handling applies. Assisting gsmSSF also releases the
 * temporary connection.
 * (3GPP TS 29.078 V19.0.0 clauses 5.7 and 10.2.1).
 *
 * @constant
 * @type {number}
 */
export
const application_timer_expired: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.application_timer_expired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CAP_U_ABORT_REASON_not_allowed_procedures
 * @description
 *
 * `not-allowed-procedures` (3): received signal is not allowed in CAP
 * procedures, so the FSM cannot continue (e.g. a class 4 operation from
 * gsmSCF not allowed in the gsmSSF FSM, such as ReleaseCall in Waiting
 * for End of Temporary Connection).
 * (3GPP TS 29.078 V19.0.0 clause 5.7).
 *
 * @constant
 * @type {number}
 */
export
const CAP_U_ABORT_REASON_not_allowed_procedures: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.not_allowed_procedures; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_allowed_procedures
 * @description
 *
 * `not-allowed-procedures` (3): received signal is not allowed in CAP
 * procedures, so the FSM cannot continue (e.g. a class 4 operation from
 * gsmSCF not allowed in the gsmSSF FSM, such as ReleaseCall in Waiting
 * for End of Temporary Connection).
 * (3GPP TS 29.078 V19.0.0 clause 5.7).
 *
 * @constant
 * @type {number}
 */
export
const not_allowed_procedures: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.not_allowed_procedures; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CAP_U_ABORT_REASON_abnormal_processing
 * @description
 *
 * `abnormal-processing` (4): abnormal procedures occurred at entity action.
 * (3GPP TS 29.078 V19.0.0 clause 5.7).
 *
 * @constant
 * @type {number}
 */
export
const CAP_U_ABORT_REASON_abnormal_processing: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.abnormal_processing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abnormal_processing
 * @description
 *
 * `abnormal-processing` (4): abnormal procedures occurred at entity action.
 * (3GPP TS 29.078 V19.0.0 clause 5.7).
 *
 * @constant
 * @type {number}
 */
export
const abnormal_processing: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.abnormal_processing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CAP_U_ABORT_REASON_congestion
 * @description
 *
 * `congestion` (5): requested resource is unavailable due to congestion at
 * TC-user (CAP) level.
 * (3GPP TS 29.078 V19.0.0 clause 5.7).
 *
 * @constant
 * @type {number}
 */
export
const CAP_U_ABORT_REASON_congestion: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.congestion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary congestion
 * @description
 *
 * `congestion` (5): requested resource is unavailable due to congestion at
 * TC-user (CAP) level.
 * (3GPP TS 29.078 V19.0.0 clause 5.7).
 *
 * @constant
 * @type {number}
 */
export
const congestion: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.congestion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CAP_U_ABORT_REASON_invalid_reference
 * @description
 *
 * `invalid-reference` (6): received `destinationReference` is unknown, or
 * for a known destination the `originationReference` does not match
 * the stored value. Used for CAP `GPRS-ReferenceNumber`.
 * (3GPP TS 29.078 V19.0.0 clauses 5.7 and 14.1.4).
 *
 * @constant
 * @type {number}
 */
export
const CAP_U_ABORT_REASON_invalid_reference: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.invalid_reference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_reference
 * @description
 *
 * `invalid-reference` (6): received `destinationReference` is unknown, or
 * for a known destination the `originationReference` does not match
 * the stored value. Used for CAP `GPRS-ReferenceNumber`.
 * (3GPP TS 29.078 V19.0.0 clauses 5.7 and 14.1.4).
 *
 * @constant
 * @type {number}
 */
export
const invalid_reference: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.invalid_reference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CAP_U_ABORT_REASON_missing_reference
 * @description
 *
 * `missing-reference` (7): `destinationReference` or
 * `originationReference` is absent but required by clause 14.1.7.
 * Used for CAP `GPRS-ReferenceNumber`.
 * (3GPP TS 29.078 V19.0.0 clauses 5.7 and 14.1.7).
 *
 * @constant
 * @type {number}
 */
export
const CAP_U_ABORT_REASON_missing_reference: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.missing_reference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missing_reference
 * @description
 *
 * `missing-reference` (7): `destinationReference` or
 * `originationReference` is absent but required by clause 14.1.7.
 * Used for CAP `GPRS-ReferenceNumber`.
 * (3GPP TS 29.078 V19.0.0 clauses 5.7 and 14.1.7).
 *
 * @constant
 * @type {number}
 */
export
const missing_reference: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.missing_reference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CAP_U_ABORT_REASON_overlapping_dialogue
 * @description
 *
 * `overlapping-dialogue` (8): gprsSSF tells gsmSCF that a specific instance
 * already has a TC dialogue open. Typical when gsmSCF and gprsSSF open
 * a new dialogue at the same time: the gprsSSF-opened dialogue is kept
 * and the gsmSCF-opened dialogue is aborted with this reason.
 * (3GPP TS 29.078 V19.0.0 clauses 5.7 and 14.1.4.1.3).
 *
 * @constant
 * @type {number}
 */
export
const CAP_U_ABORT_REASON_overlapping_dialogue: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.overlapping_dialogue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overlapping_dialogue
 * @description
 *
 * `overlapping-dialogue` (8): gprsSSF tells gsmSCF that a specific instance
 * already has a TC dialogue open. Typical when gsmSCF and gprsSSF open
 * a new dialogue at the same time: the gprsSSF-opened dialogue is kept
 * and the gsmSCF-opened dialogue is aborted with this reason.
 * (3GPP TS 29.078 V19.0.0 clauses 5.7 and 14.1.4.1.3).
 *
 * @constant
 * @type {number}
 */
export
const overlapping_dialogue: CAP_U_ABORT_REASON = CAP_U_ABORT_REASON.overlapping_dialogue; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CAP_U_ABORT_REASON = $._decodeEnumerated;
export const _encode_CAP_U_ABORT_REASON = $._encodeEnumerated;


/* eslint-enable */
