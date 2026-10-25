import {
    type ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EventTypeSMS
 * @description
 *
 * SMS detection point event. Values `sms-CollectedInfo` and
 * `sms-DeliveryRequested` may be used for TDPs only. (3GPP TS 29.078 V19.0.0
 * clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EventTypeSMS ::= ENUMERATED {
 *  sms-CollectedInfo			(1),
 *  o-smsFailure			(2),
 *  o-smsSubmission			(3),
 *  sms-DeliveryRequested		(11),
 *  t-smsFailure			(12),
 *  t-smsDelivery			(13)
 *  }
 * ```
 *
 */
export enum _enum_for_EventTypeSMS {
    sms_CollectedInfo = 1,
    o_smsFailure = 2,
    o_smsSubmission = 3,
    sms_DeliveryRequested = 11,
    t_smsFailure = 12,
    t_smsDelivery = 13,
}
export type EventTypeSMS = _enum_for_EventTypeSMS;
export const EventTypeSMS: typeof _enum_for_EventTypeSMS = _enum_for_EventTypeSMS;
/**
 * @summary EventTypeSMS_sms_CollectedInfo
 * @description
 *
 * sms-CollectedInfo DP. May be used for TDPs only. (3GPP TS 29.078 V19.0.0
 * clause 5.1)
 *
 * @constant
 */
export const EventTypeSMS_sms_CollectedInfo: _enum_for_EventTypeSMS.sms_CollectedInfo = EventTypeSMS.sms_CollectedInfo;
/**
 * @summary sms_CollectedInfo
 * @description
 *
 * sms-CollectedInfo DP. May be used for TDPs only. (3GPP TS 29.078 V19.0.0
 * clause 5.1)
 *
 * @constant
 */
export const sms_CollectedInfo: _enum_for_EventTypeSMS.sms_CollectedInfo = EventTypeSMS.sms_CollectedInfo;
/**
 * @summary EventTypeSMS_o_smsFailure
 * @description
 *
 * o-smsFailure DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeSMS_o_smsFailure: _enum_for_EventTypeSMS.o_smsFailure = EventTypeSMS.o_smsFailure;
/**
 * @summary o_smsFailure
 * @description
 *
 * o-smsFailure DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const o_smsFailure: _enum_for_EventTypeSMS.o_smsFailure = EventTypeSMS.o_smsFailure;
/**
 * @summary EventTypeSMS_o_smsSubmission
 * @description
 *
 * o-smsSubmission DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeSMS_o_smsSubmission: _enum_for_EventTypeSMS.o_smsSubmission = EventTypeSMS.o_smsSubmission;
/**
 * @summary o_smsSubmission
 * @description
 *
 * o-smsSubmission DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const o_smsSubmission: _enum_for_EventTypeSMS.o_smsSubmission = EventTypeSMS.o_smsSubmission;
/**
 * @summary EventTypeSMS_sms_DeliveryRequested
 * @description
 *
 * sms-DeliveryRequested DP. May be used for TDPs only. (3GPP TS 29.078 V19.0.0
 * clause 5.1)
 *
 * @constant
 */
export const EventTypeSMS_sms_DeliveryRequested: _enum_for_EventTypeSMS.sms_DeliveryRequested = EventTypeSMS.sms_DeliveryRequested;
/**
 * @summary sms_DeliveryRequested
 * @description
 *
 * sms-DeliveryRequested DP. May be used for TDPs only. (3GPP TS 29.078 V19.0.0
 * clause 5.1)
 *
 * @constant
 */
export const sms_DeliveryRequested: _enum_for_EventTypeSMS.sms_DeliveryRequested = EventTypeSMS.sms_DeliveryRequested;
/**
 * @summary EventTypeSMS_t_smsFailure
 * @description
 *
 * t-smsFailure DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeSMS_t_smsFailure: _enum_for_EventTypeSMS.t_smsFailure = EventTypeSMS.t_smsFailure;
/**
 * @summary t_smsFailure
 * @description
 *
 * t-smsFailure DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const t_smsFailure: _enum_for_EventTypeSMS.t_smsFailure = EventTypeSMS.t_smsFailure;
/**
 * @summary EventTypeSMS_t_smsDelivery
 * @description
 *
 * t-smsDelivery DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeSMS_t_smsDelivery: _enum_for_EventTypeSMS.t_smsDelivery = EventTypeSMS.t_smsDelivery;
/**
 * @summary t_smsDelivery
 * @description
 *
 * t-smsDelivery DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const t_smsDelivery: _enum_for_EventTypeSMS.t_smsDelivery = EventTypeSMS.t_smsDelivery;
export const _decode_EventTypeSMS: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_EventTypeSMS: $.ASN1Encoder<number> = $._encodeEnumerated;
