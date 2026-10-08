/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Error_reason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Error-reason  ::=  INTEGER {
 *     unknown-subscriber (1),
 *     illegal-subscriber (9),
 *     teleservice-not-provisioned (11),
 *     call-barred (13),
 *     cug-reject (15),
 *     sMS-ll-capabilities-not-prov (19),
 *     error-in-MS (20),
 *     facility-not-supported (21),
 *     memory-capacity-exceeded (22),
 *     absent-subscriber (29),
 *     ms-busy-for-MT-sms (30),
 *     system-failure (36),
 *     illegal-equipment (44),
 *     no-resp-to-paging (60),
 *     gMSC-congestion (61),
 *     dublicate-sm (70),
 *     sC-congestion (101),
 *     mS-not-SC-Subscriber (103),
 *     invalid-sme-address (104)
 * }
 * ```
 *
 * Cause in `RPError`. Values 1, 9, 11, 13, 19, 20, 21, 22, 29, 30, 36,
 * 44, 101, 103, and 104 are the ROSE local values of clause 2.2.
 * `cug-reject` (15), `no-resp-to-paging` (60), `gMSC-congestion` (61),
 * and `dublicate-sm` (70) are not in clauses 2.2 or 3.2. The spelling
 * `dublicate-sm` is the one in this module.
 *
 * SMS-MAP clause 4.2.6 describes several of the same conditions under
 * different code numbers. Put these integers in `RPError`. In
 * particular, SMS-MAP `UnexpectedDataValue` is also 36, which here is
 * `system-failure`.
 *
 * Mobile-terminated versus mobile-originated applicability is the
 * ERRORS lists of clause 2.2 and the mapping notes of clause 2.5.
 */
export
type Error_reason = INTEGER;

/**
 * @summary Error_reason_unknown_subscriber
 * @description
 *
 * The HLR has no IMSI or MSISDN for the subscriber. The GMSC forwards
 * that HLR error to the SC (clause 4.2.6). Mobile-terminated
 * (clause 2.2). Clause 2.5 also maps MAP `UnidentifiedSubscriber` to
 * this cause. ROSE local value 1.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_unknown_subscriber: Error_reason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `unknown_subscriber`.
 * @description
 *
 * No IMSI or MSISDN is allocated in the HLR. Same value as
 * {@link Error_reason_unknown_subscriber}.
 *
 * @constant
 * @type {number}
 */
export
const unknown_subscriber: Error_reason = Error_reason_unknown_subscriber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_illegal_subscriber
 * @description
 *
 * Authentication of the MS failed. Clause 4.2.6 names the SMS-MAP
 * error `IllegalMS` and also assigns it code 9. Clause 2.5 maps MAP
 * `IllegalSubscriber` here. Mobile-terminated (clause 2.2).
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_illegal_subscriber: Error_reason = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `illegal_subscriber`.
 * @description
 *
 * Authentication of the MS failed. Same value as
 * {@link Error_reason_illegal_subscriber}.
 *
 * @constant
 * @type {number}
 */
export
const illegal_subscriber: Error_reason = Error_reason_illegal_subscriber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_teleservice_not_provisioned
 * @description
 *
 * The MSISDN does not include the short message service
 * (clause 4.2.6). Mobile-terminated (clause 2.2). ROSE local value 11.
 * Clause 2.5 maps MAP `TeleServiceNotProvisioned` here.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_teleservice_not_provisioned: Error_reason = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `teleservice_not_provisioned`.
 * @description
 *
 * The MSISDN does not include short message service. Same value as
 * {@link Error_reason_teleservice_not_provisioned}.
 *
 * @constant
 * @type {number}
 */
export
const teleservice_not_provisioned: Error_reason = Error_reason_teleservice_not_provisioned; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_call_barred
 * @description
 *
 * Delivery failed because of barring on the subscriber, either an
 * active call-barring supplementary service or barring initiated by
 * the operator (clause 4.2.6). SMS-MAP may add a parameter
 * distinguishing those two; this integer does not. Mobile-terminated
 * (clause 2.2). ROSE local value 13.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_call_barred: Error_reason = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `call_barred`.
 * @description
 *
 * Subscriber barring prevented delivery. Same value as
 * {@link Error_reason_call_barred}.
 *
 * @constant
 * @type {number}
 */
export
const call_barred: Error_reason = Error_reason_call_barred; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_cug_reject
 * @description
 *
 * TR 101 635 does not define value 15. It is not a ROSE local value in
 * clause 2.2 and not an `Error-reason` name in clause 3.2.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_cug_reject: Error_reason = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `cug_reject`.
 * @description
 *
 * Not defined in TR 101 635. Same value as
 * {@link Error_reason_cug_reject}.
 *
 * @constant
 * @type {number}
 */
export
const cug_reject: Error_reason = Error_reason_cug_reject; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_sMS_ll_capabilities_not_prov
 * @description
 *
 * A mobile-terminated transfer failed in the lower layers, for example
 * because of the MS classmark, or because the MSC could not establish
 * a SAPI 3 connection to the MS (clause 4.2.6). ROSE local value 19,
 * and on the SMR-MT-DATA error list (clause 2.2). Clause 2.5 names the
 * image of MAP `SM-DeliveryFailure` cause 2 `sms-not-provisioned`,
 * which is not an identifier in this module.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_sMS_ll_capabilities_not_prov: Error_reason = 19; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `sMS_ll_capabilities_not_prov`.
 * @description
 *
 * Lower layers could not deliver the mobile-terminated short message.
 * Same value as {@link Error_reason_sMS_ll_capabilities_not_prov}.
 *
 * @constant
 * @type {number}
 */
export
const sMS_ll_capabilities_not_prov: Error_reason = Error_reason_sMS_ll_capabilities_not_prov; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_error_in_MS
 * @description
 *
 * A mobile-terminated transfer failed because of an error in the MS,
 * for example a protocol error (clause 4.2.6). Clause 2.5 maps MAP
 * `SM-DeliveryFailure` cause 1 (equipment protocol error) here. ROSE
 * local value 20. Mobile-terminated only.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_error_in_MS: Error_reason = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `error_in_MS`.
 * @description
 *
 * The MS reported an error, such as a protocol error. Same value as
 * {@link Error_reason_error_in_MS}.
 *
 * @constant
 * @type {number}
 */
export
const error_in_MS: Error_reason = Error_reason_error_in_MS; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_facility_not_supported
 * @description
 *
 * The visited PLMN does not provide the short message service
 * (clause 4.2.6). Clause 2.5 maps MAP `FacilityNotSupported` here.
 * ROSE local value 21, on the SMR-MT-DATA error list (clause 2.2).
 * On the separate SMS-MAP stack, an Unrecognized Operation reject of
 * Forward Short Message is mapped to the same named error
 * (clause 4.2.4); clause 2.5 does not state that for SMRSE.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_facility_not_supported: Error_reason = 21; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `facility_not_supported`.
 * @description
 *
 * The VPLMN does not provide SMS. Same value as
 * {@link Error_reason_facility_not_supported}.
 *
 * @constant
 * @type {number}
 */
export
const facility_not_supported: Error_reason = Error_reason_facility_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_memory_capacity_exceeded
 * @description
 *
 * The MS has no memory left for a mobile-terminated short message
 * (clause 4.2.6). Clause 2.5 maps MAP `SM-DeliveryFailure` cause 0
 * here, and marks that cause mobile-terminated only. ROSE local
 * value 22.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_memory_capacity_exceeded: Error_reason = 22; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `memory_capacity_exceeded`.
 * @description
 *
 * The MS has no memory left for the short message. Same value as
 * {@link Error_reason_memory_capacity_exceeded}.
 *
 * @constant
 * @type {number}
 */
export
const memory_capacity_exceeded: Error_reason = Error_reason_memory_capacity_exceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_absent_subscriber
 * @description
 *
 * The subscriber is detached or otherwise not reachable
 * (clause 4.2.6). Whether the service centre was written into the HLR
 * message-waiting list is `RPError.msg_waiting_set`, not part of this
 * integer. Mobile-terminated (clause 2.2). ROSE local value 29.
 * Clause 2.5 maps MAP `AbsentSubscriber` here.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_absent_subscriber: Error_reason = 29; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `absent_subscriber`.
 * @description
 *
 * The subscriber is detached or not reachable. Same value as
 * {@link Error_reason_absent_subscriber}.
 *
 * @constant
 * @type {number}
 */
export
const absent_subscriber: Error_reason = Error_reason_absent_subscriber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_ms_busy_for_MT_sms
 * @description
 *
 * Clause 2.5 maps MAP `SubscriberBusyForMT-SMS` to this cause.
 * Mobile-terminated only (clause 2.2). ROSE local value 30. The report
 * does not describe the condition beyond that mapping.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_ms_busy_for_MT_sms: Error_reason = 30; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `ms_busy_for_MT_sms`.
 * @description
 *
 * MAP `SubscriberBusyForMT-SMS`, mobile-terminated only. Same value as
 * {@link Error_reason_ms_busy_for_MT_sms}.
 *
 * @constant
 * @type {number}
 */
export
const ms_busy_for_MT_sms: Error_reason = Error_reason_ms_busy_for_MT_sms; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_system_failure
 * @description
 *
 * The sender cannot perform the operation because some other entity
 * failed (clause 4.2.6). Clause 2.5 folds MAP `DataMissing`,
 * `UnexpectedDataValue`, and `SystemFailure` into this cause. ROSE
 * local value 36, listed for both SMR-MT-DATA and SMR-MO-DATA
 * (clause 2.2). SMS-MAP `UnexpectedDataValue` is a different error
 * that also uses code 36 (clause 4.2.6). On that stack, reject, abort,
 * and operation timeout are likewise reported onward as system failure
 * (clause 4.2.4).
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_system_failure: Error_reason = 36; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `system_failure`.
 * @description
 *
 * Another entity failed, so the operation could not be performed.
 * Same value as {@link Error_reason_system_failure}. Not SMS-MAP
 * `UnexpectedDataValue`, despite both using 36.
 *
 * @constant
 * @type {number}
 */
export
const system_failure: Error_reason = Error_reason_system_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_illegal_equipment
 * @description
 *
 * Clause 2.5 maps MAP `IllegalEquipment` here. Mobile-terminated
 * (clause 2.2). ROSE local value 44. The report does not describe the
 * condition beyond that mapping.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_illegal_equipment: Error_reason = 44; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `illegal_equipment`.
 * @description
 *
 * MAP `IllegalEquipment`, mobile-terminated. Same value as
 * {@link Error_reason_illegal_equipment}.
 *
 * @constant
 * @type {number}
 */
export
const illegal_equipment: Error_reason = Error_reason_illegal_equipment; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_no_resp_to_paging
 * @description
 *
 * TR 101 635 does not define value 60.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_no_resp_to_paging: Error_reason = 60; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `no_resp_to_paging`.
 * @description
 *
 * Not defined in TR 101 635. Same value as
 * {@link Error_reason_no_resp_to_paging}.
 *
 * @constant
 * @type {number}
 */
export
const no_resp_to_paging: Error_reason = Error_reason_no_resp_to_paging; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_gMSC_congestion
 * @description
 *
 * TR 101 635 does not define value 61.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_gMSC_congestion: Error_reason = 61; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `gMSC_congestion`.
 * @description
 *
 * Not defined in TR 101 635. Same value as
 * {@link Error_reason_gMSC_congestion}.
 *
 * @constant
 * @type {number}
 */
export
const gMSC_congestion: Error_reason = Error_reason_gMSC_congestion; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_dublicate_sm
 * @description
 *
 * TR 101 635 does not define value 70. The identifier is spelled
 * `dublicate-sm` in this module.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_dublicate_sm: Error_reason = 70; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `dublicate_sm`.
 * @description
 *
 * Not defined in TR 101 635. Same value as
 * {@link Error_reason_dublicate_sm}. Spelled `dublicate-sm` in the
 * module.
 *
 * @constant
 * @type {number}
 */
export
const dublicate_sm: Error_reason = Error_reason_dublicate_sm; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_sC_congestion
 * @description
 *
 * The SC is congested when it receives a mobile-originated short
 * message (clause 4.2.6). Mobile-originated only (clauses 2.2 and
 * 2.5). Clause 2.5 maps it to MAP `SM-DeliveryFailure` cause 4. ROSE
 * local value 101.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_sC_congestion: Error_reason = 101; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `sC_congestion`.
 * @description
 *
 * The SC is congested on a mobile-originated short message. Same value
 * as {@link Error_reason_sC_congestion}.
 *
 * @constant
 * @type {number}
 */
export
const sC_congestion: Error_reason = Error_reason_sC_congestion; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_mS_not_SC_Subscriber
 * @description
 *
 * The MS that originated the short message is not a subscriber of this
 * SC (clause 4.2.6). Mobile-originated only (clauses 2.2 and 2.5).
 * Clause 2.5 maps it to MAP `SM-DeliveryFailure` cause 6. ROSE local
 * value 103.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_mS_not_SC_Subscriber: Error_reason = 103; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `mS_not_SC_Subscriber`.
 * @description
 *
 * The originating MS is not a subscriber of this SC. Same value as
 * {@link Error_reason_mS_not_SC_Subscriber}.
 *
 * @constant
 * @type {number}
 */
export
const mS_not_SC_Subscriber: Error_reason = Error_reason_mS_not_SC_Subscriber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_invalid_sme_address
 * @description
 *
 * The SC found the SME address in a mobile-originated short message
 * syntactically invalid (clause 4.2.6). Mobile-originated only
 * (clauses 2.2 and 2.5). Clause 2.5 maps it to MAP
 * `SM-DeliveryFailure` cause 5. ROSE local value 104.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_invalid_sme_address: Error_reason = 104; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `invalid_sme_address`.
 * @description
 *
 * The SME address in a mobile-originated short message is
 * syntactically invalid. Same value as
 * {@link Error_reason_invalid_sme_address}.
 *
 * @constant
 * @type {number}
 */
export
const invalid_sme_address: Error_reason = Error_reason_invalid_sme_address; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Error_reason = $._decodeInteger;
export const _encode_Error_reason = $._encodeInteger;


/* eslint-enable */
