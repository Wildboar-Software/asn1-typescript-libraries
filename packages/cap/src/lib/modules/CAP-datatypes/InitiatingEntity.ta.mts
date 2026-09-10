import {
    ASN1Element as _Element,
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
export const InitiatingEntity = _enum_for_InitiatingEntity;
export const InitiatingEntity_mobileStation: InitiatingEntity = InitiatingEntity.mobileStation;
export const mobileStation: InitiatingEntity = InitiatingEntity.mobileStation;
export const InitiatingEntity_sgsn: InitiatingEntity = InitiatingEntity.sgsn;
export const sgsn: InitiatingEntity = InitiatingEntity.sgsn;
export const InitiatingEntity_hlr: InitiatingEntity = InitiatingEntity.hlr;
export const hlr: InitiatingEntity = InitiatingEntity.hlr;
export const InitiatingEntity_ggsn: InitiatingEntity = InitiatingEntity.ggsn;
export const ggsn: InitiatingEntity = InitiatingEntity.ggsn;
export const _decode_InitiatingEntity = $._decodeEnumerated;
export const _encode_InitiatingEntity = $._encodeEnumerated;
