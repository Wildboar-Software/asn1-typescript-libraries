import {
    type ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary InitiatingEntity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitiatingEntity ::= ENUMERATED {
 *  mobileStation			(0),
 *  sgsn				(1),
 *  hlr					(2),
 *  ggsn				(3)
 *  }
 * ```
 *
 */
export enum _enum_for_InitiatingEntity {
    mobileStation = 0,
    sgsn = 1,
    hlr = 2,
    ggsn = 3,
}
export type InitiatingEntity = _enum_for_InitiatingEntity;
export const InitiatingEntity: typeof _enum_for_InitiatingEntity = _enum_for_InitiatingEntity;
export const InitiatingEntity_mobileStation: _enum_for_InitiatingEntity.mobileStation = InitiatingEntity.mobileStation;
export const mobileStation: _enum_for_InitiatingEntity.mobileStation = InitiatingEntity.mobileStation;
export const InitiatingEntity_sgsn: _enum_for_InitiatingEntity.sgsn = InitiatingEntity.sgsn;
export const sgsn: _enum_for_InitiatingEntity.sgsn = InitiatingEntity.sgsn;
export const InitiatingEntity_hlr: _enum_for_InitiatingEntity.hlr = InitiatingEntity.hlr;
export const hlr: _enum_for_InitiatingEntity.hlr = InitiatingEntity.hlr;
export const InitiatingEntity_ggsn: _enum_for_InitiatingEntity.ggsn = InitiatingEntity.ggsn;
export const ggsn: _enum_for_InitiatingEntity.ggsn = InitiatingEntity.ggsn;
export const _decode_InitiatingEntity: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_InitiatingEntity: $.ASN1Encoder<number> = $._encodeEnumerated;
