/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Error_reason
 * @description
 *
 * Cause on `RPError`. The GMSC uses a mobile-terminated cause when
 * the mobile station did not receive the short message. The service
 * centre uses a mobile-originated cause when it did not accept the
 * short message
 * ([ETSI TR 101 635 V7.0.0](https://www.etsi.org/deliver/etsi_tr/101600_101699/101635/07.00.00_60/tr_101635v070000p.pdf)
 * clause 3.1).
 *
 * Clause 2.2 lists the mobile-terminated causes on
 * `Forward-MS-Terminated-Short-Message` and the mobile-originated
 * causes on `Forward-MS-Originated-Short-Message`. Clause 2.5,
 * which clause 3.5 adopts, maps those causes to MAP
 * `SM-DeliveryFailure` and the other MAP errors named on each
 * value. `system-failure` is in both directions.
 *
 * Values 15 (`cug-reject`), 60 (`no-resp-to-paging`), 61
 * (`gMSC-congestion`), and 70 (`dublicate-sm`) are Nokia additions.
 * The report does not define them. Value 30 is a clause 2 cause
 * that clause 3.2's `Error-reason` omits; this profile includes it.
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
 */
export
type Error_reason = INTEGER;

/**
 * @summary Error_reason_unknown_subscriber
 * @description
 *
 * Mobile-terminated. MAP `UnidentifiedSubscriber` and
 * `UnknownSubscriber` both map here. The report spells the second
 * name `UnkwownSubscriber` (clause 2.5). Clause 2 local value 1.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_unknown_subscriber: Error_reason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_unknown_subscriber
 * @description
 *
 * Mobile-terminated. MAP `UnidentifiedSubscriber` and
 * `UnknownSubscriber` both map here. The report spells the second
 * name `UnkwownSubscriber` (clause 2.5). Clause 2 local value 1.
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
 * Mobile-terminated. MAP `IllegalSubscriber` maps here
 * (clause 2.5). Clause 2 local value 9.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_illegal_subscriber: Error_reason = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_illegal_subscriber
 * @description
 *
 * Mobile-terminated. MAP `IllegalSubscriber` maps here
 * (clause 2.5). Clause 2 local value 9.
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
 * Mobile-terminated. MAP `TeleServiceNotProvisioned` maps here
 * (clause 2.5). Clause 2 local value 11.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_teleservice_not_provisioned: Error_reason = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_teleservice_not_provisioned
 * @description
 *
 * Mobile-terminated. MAP `TeleServiceNotProvisioned` maps here
 * (clause 2.5). Clause 2 local value 11.
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
 * Mobile-terminated. MAP `CallBarred` maps here (clause 2.5).
 * Clause 2 local value 13.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_call_barred: Error_reason = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_call_barred
 * @description
 *
 * Mobile-terminated. MAP `CallBarred` maps here (clause 2.5).
 * Clause 2 local value 13.
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
 * Nokia profile addition. The report does not define this cause.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_cug_reject: Error_reason = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_cug_reject
 * @description
 *
 * Nokia profile addition. The report does not define this cause.
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
 * Mobile-terminated. Clause 2 assigns local value 19 to
 * `SMS-lower-layer-capabilities-not-prov`. Clause 2.5 maps MAP
 * `SM-DeliveryFailure` cause 2 ("equipment not SM equipped", MT
 * only) to the label `sms-not-provisioned`, which is not a named
 * number in the report or in this profile.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_sMS_ll_capabilities_not_prov: Error_reason = 19; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_sMS_ll_capabilities_not_prov
 * @description
 *
 * Mobile-terminated. Clause 2 assigns local value 19 to
 * `SMS-lower-layer-capabilities-not-prov`. Clause 2.5 maps MAP
 * `SM-DeliveryFailure` cause 2 ("equipment not SM equipped", MT
 * only) to the label `sms-not-provisioned`, which is not a named
 * number in the report or in this profile.
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
 * Mobile-terminated. MAP `SM-DeliveryFailure` cause 1, equipment
 * protocol error, MT only (clause 2.5). Clause 2 local value 20.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_error_in_MS: Error_reason = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_error_in_MS
 * @description
 *
 * Mobile-terminated. MAP `SM-DeliveryFailure` cause 1, equipment
 * protocol error, MT only (clause 2.5). Clause 2 local value 20.
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
 * Mobile-terminated. MAP `FacilityNotSupported` maps here
 * (clause 2.5). Clause 2 local value 21.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_facility_not_supported: Error_reason = 21; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_facility_not_supported
 * @description
 *
 * Mobile-terminated. MAP `FacilityNotSupported` maps here
 * (clause 2.5). Clause 2 local value 21.
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
 * Mobile-terminated. MAP `SM-DeliveryFailure` cause 0, memory
 * capacity exceeded, MT only (clause 2.5). Clause 2 local value 22.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_memory_capacity_exceeded: Error_reason = 22; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_memory_capacity_exceeded
 * @description
 *
 * Mobile-terminated. MAP `SM-DeliveryFailure` cause 0, memory
 * capacity exceeded, MT only (clause 2.5). Clause 2 local value 22.
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
 * Mobile-terminated. MAP `AbsentSubscriber` maps here
 * (clause 2.5). Clause 2 local value 29.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_absent_subscriber: Error_reason = 29; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_absent_subscriber
 * @description
 *
 * Mobile-terminated. MAP `AbsentSubscriber` maps here
 * (clause 2.5). Clause 2 local value 29.
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
 * Mobile-terminated. MAP `SubscriberBusyForMT-SMS` maps here
 * (clause 2.5). Clause 2 local value 30, on SMR-MT-DATA. Clause
 * 3.2's `Error-reason` omits it; this profile includes it.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_ms_busy_for_MT_sms: Error_reason = 30; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_ms_busy_for_MT_sms
 * @description
 *
 * Mobile-terminated. MAP `SubscriberBusyForMT-SMS` maps here
 * (clause 2.5). Clause 2 local value 30, on SMR-MT-DATA. Clause
 * 3.2's `Error-reason` omits it; this profile includes it.
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
 * Used in both directions (clause 2.2). MAP `DataMissing`,
 * `SystemFailure`, and `UnexpectedDataValue` map here. In the
 * service-centre-to-GMSC direction the report maps this cause to
 * MAP `SystemFailure` (clause 2.5). Clause 2 local value 36.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_system_failure: Error_reason = 36; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_system_failure
 * @description
 *
 * Used in both directions (clause 2.2). MAP `DataMissing`,
 * `SystemFailure`, and `UnexpectedDataValue` map here. In the
 * service-centre-to-GMSC direction the report maps this cause to
 * MAP `SystemFailure` (clause 2.5). Clause 2 local value 36.
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
 * Mobile-terminated. MAP `IllegalEquipment` maps here
 * (clause 2.5). Clause 2 local value 44.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_illegal_equipment: Error_reason = 44; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_illegal_equipment
 * @description
 *
 * Mobile-terminated. MAP `IllegalEquipment` maps here
 * (clause 2.5). Clause 2 local value 44.
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
 * Nokia profile addition. The report does not define this cause.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_no_resp_to_paging: Error_reason = 60; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_no_resp_to_paging
 * @description
 *
 * Nokia profile addition. The report does not define this cause.
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
 * Nokia profile addition. The report does not define this cause.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_gMSC_congestion: Error_reason = 61; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_gMSC_congestion
 * @description
 *
 * Nokia profile addition. The report does not define this cause.
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
 * Nokia profile addition. The report does not define this cause.
 * The profile spells the identifier `dublicate-sm`.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_dublicate_sm: Error_reason = 70; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_dublicate_sm
 * @description
 *
 * Nokia profile addition. The report does not define this cause.
 * The profile spells the identifier `dublicate-sm`.
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
 * Mobile-originated. The service centre reports congestion. Maps
 * to MAP `SM-DeliveryFailure` cause 4, MO only (clause 2.5).
 * Clause 2 local value 101.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_sC_congestion: Error_reason = 101; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_sC_congestion
 * @description
 *
 * Mobile-originated. The service centre reports congestion. Maps
 * to MAP `SM-DeliveryFailure` cause 4, MO only (clause 2.5).
 * Clause 2 local value 101.
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
 * Mobile-originated. The mobile station is not a subscriber of the
 * service centre. Maps to MAP `SM-DeliveryFailure` cause 6, MO
 * only (clause 2.5). Clause 2 local value 103.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_mS_not_SC_Subscriber: Error_reason = 103; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_mS_not_SC_Subscriber
 * @description
 *
 * Mobile-originated. The mobile station is not a subscriber of the
 * service centre. Maps to MAP `SM-DeliveryFailure` cause 6, MO
 * only (clause 2.5). Clause 2 local value 103.
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
 * Mobile-originated. The short-message entity address is invalid.
 * Maps to MAP `SM-DeliveryFailure` cause 5, MO only (clause 2.5).
 * Clause 2 local value 104.
 *
 * @constant
 * @type {number}
 */
export
const Error_reason_invalid_sme_address: Error_reason = 104; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Error_reason_invalid_sme_address
 * @description
 *
 * Mobile-originated. The short-message entity address is invalid.
 * Maps to MAP `SM-DeliveryFailure` cause 5, MO only (clause 2.5).
 * Clause 2 local value 104.
 *
 * @constant
 * @type {number}
 */
export
const invalid_sme_address: Error_reason = Error_reason_invalid_sme_address; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Error_reason = $._decodeInteger;
export const _encode_Error_reason = $._encodeInteger;


/* eslint-enable */
