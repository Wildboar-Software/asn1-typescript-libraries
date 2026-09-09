import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary GPRSEventType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GPRSEventType ::= ENUMERATED {
 attach				(1),
 attachChangeOfPosition		(2),
 detached				(3),
 pdp-ContextEstablishment		(11),
 pdp-ContextEstablishmentAcknowledgement (12),
 disonnect				(13),
 pdp-ContextChangeOfPosition		(14)
 }
 * ```
 *
 */
export enum _enum_for_GPRSEventType {
    attach = 1,
    attachChangeOfPosition = 2,
    detached = 3,
    pdp_ContextEstablishment = 11,
    pdp_ContextEstablishmentAcknowledgement = 12,
    disonnect = 13,
    pdp_ContextChangeOfPosition = 14,
}
export type GPRSEventType = _enum_for_GPRSEventType;
export const GPRSEventType = _enum_for_GPRSEventType;
export const GPRSEventType_attach: GPRSEventType = GPRSEventType.attach;
export const attach: GPRSEventType = GPRSEventType.attach;
export const GPRSEventType_attachChangeOfPosition: GPRSEventType = GPRSEventType.attachChangeOfPosition;
export const attachChangeOfPosition: GPRSEventType = GPRSEventType.attachChangeOfPosition;
export const GPRSEventType_detached: GPRSEventType = GPRSEventType.detached;
export const detached: GPRSEventType = GPRSEventType.detached;
export const GPRSEventType_pdp_ContextEstablishment: GPRSEventType = GPRSEventType.pdp_ContextEstablishment;
export const pdp_ContextEstablishment: GPRSEventType = GPRSEventType.pdp_ContextEstablishment;
export const GPRSEventType_pdp_ContextEstablishmentAcknowledgement: GPRSEventType = GPRSEventType.pdp_ContextEstablishmentAcknowledgement;
export const pdp_ContextEstablishmentAcknowledgement: GPRSEventType = GPRSEventType.pdp_ContextEstablishmentAcknowledgement;
export const GPRSEventType_disonnect: GPRSEventType = GPRSEventType.disonnect;
export const disonnect: GPRSEventType = GPRSEventType.disonnect;
export const GPRSEventType_pdp_ContextChangeOfPosition: GPRSEventType = GPRSEventType.pdp_ContextChangeOfPosition;
export const pdp_ContextChangeOfPosition: GPRSEventType = GPRSEventType.pdp_ContextChangeOfPosition;
export const _decode_GPRSEventType = $._decodeEnumerated;
export const _encode_GPRSEventType = $._encodeEnumerated;
