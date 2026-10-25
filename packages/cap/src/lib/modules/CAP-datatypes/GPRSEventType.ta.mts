import {
    type ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary GPRSEventType
 * @description
 *
 * GPRS detection point: attach, attach change of position, detach, PDP
 * context establishment / acknowledgement / disconnect, and PDP
 * context change of position. Used in InitialDPGPRS,
 * RequestReportGPRSEvent and EventReportGPRS.
 * (3GPP TS 29.078 V19.0.0 clauses 5.1, 13.8, 13.10 and 13.12).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GPRSEventType ::= ENUMERATED {
 *  attach				(1),
 *  attachChangeOfPosition		(2),
 *  detached				(3),
 *  pdp-ContextEstablishment		(11),
 *  pdp-ContextEstablishmentAcknowledgement (12),
 *  disonnect				(13),
 *  pdp-ContextChangeOfPosition		(14)
 *  }
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
export const GPRSEventType: typeof _enum_for_GPRSEventType = _enum_for_GPRSEventType;
export const GPRSEventType_attach: _enum_for_GPRSEventType.attach = GPRSEventType.attach;
export const attach: _enum_for_GPRSEventType.attach = GPRSEventType.attach;
export const GPRSEventType_attachChangeOfPosition: _enum_for_GPRSEventType.attachChangeOfPosition = GPRSEventType.attachChangeOfPosition;
export const attachChangeOfPosition: _enum_for_GPRSEventType.attachChangeOfPosition = GPRSEventType.attachChangeOfPosition;
export const GPRSEventType_detached: _enum_for_GPRSEventType.detached = GPRSEventType.detached;
export const detached: _enum_for_GPRSEventType.detached = GPRSEventType.detached;
export const GPRSEventType_pdp_ContextEstablishment: _enum_for_GPRSEventType.pdp_ContextEstablishment = GPRSEventType.pdp_ContextEstablishment;
export const pdp_ContextEstablishment: _enum_for_GPRSEventType.pdp_ContextEstablishment = GPRSEventType.pdp_ContextEstablishment;
export const GPRSEventType_pdp_ContextEstablishmentAcknowledgement: _enum_for_GPRSEventType.pdp_ContextEstablishmentAcknowledgement = GPRSEventType.pdp_ContextEstablishmentAcknowledgement;
export const pdp_ContextEstablishmentAcknowledgement: _enum_for_GPRSEventType.pdp_ContextEstablishmentAcknowledgement = GPRSEventType.pdp_ContextEstablishmentAcknowledgement;
export const GPRSEventType_disonnect: _enum_for_GPRSEventType.disonnect = GPRSEventType.disonnect;
export const disonnect: _enum_for_GPRSEventType.disonnect = GPRSEventType.disonnect;
export const GPRSEventType_pdp_ContextChangeOfPosition: _enum_for_GPRSEventType.pdp_ContextChangeOfPosition = GPRSEventType.pdp_ContextChangeOfPosition;
export const pdp_ContextChangeOfPosition: _enum_for_GPRSEventType.pdp_ContextChangeOfPosition = GPRSEventType.pdp_ContextChangeOfPosition;
export const _decode_GPRSEventType: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_GPRSEventType: $.ASN1Encoder<number> = $._encodeEnumerated;
