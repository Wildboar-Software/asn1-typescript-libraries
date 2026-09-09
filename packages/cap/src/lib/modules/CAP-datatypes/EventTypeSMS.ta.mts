import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EventTypeSMS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EventTypeSMS ::= ENUMERATED {
 sms-CollectedInfo			(1),
 o-smsFailure			(2),
 o-smsSubmission			(3),
 sms-DeliveryRequested		(11),
 t-smsFailure			(12),
 t-smsDelivery			(13)
 }
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
export const EventTypeSMS = _enum_for_EventTypeSMS;
export const EventTypeSMS_sms_CollectedInfo: EventTypeSMS = EventTypeSMS.sms_CollectedInfo;
export const sms_CollectedInfo: EventTypeSMS = EventTypeSMS.sms_CollectedInfo;
export const EventTypeSMS_o_smsFailure: EventTypeSMS = EventTypeSMS.o_smsFailure;
export const o_smsFailure: EventTypeSMS = EventTypeSMS.o_smsFailure;
export const EventTypeSMS_o_smsSubmission: EventTypeSMS = EventTypeSMS.o_smsSubmission;
export const o_smsSubmission: EventTypeSMS = EventTypeSMS.o_smsSubmission;
export const EventTypeSMS_sms_DeliveryRequested: EventTypeSMS = EventTypeSMS.sms_DeliveryRequested;
export const sms_DeliveryRequested: EventTypeSMS = EventTypeSMS.sms_DeliveryRequested;
export const EventTypeSMS_t_smsFailure: EventTypeSMS = EventTypeSMS.t_smsFailure;
export const t_smsFailure: EventTypeSMS = EventTypeSMS.t_smsFailure;
export const EventTypeSMS_t_smsDelivery: EventTypeSMS = EventTypeSMS.t_smsDelivery;
export const t_smsDelivery: EventTypeSMS = EventTypeSMS.t_smsDelivery;
export const _decode_EventTypeSMS = $._decodeEnumerated;
export const _encode_EventTypeSMS = $._encodeEnumerated;
