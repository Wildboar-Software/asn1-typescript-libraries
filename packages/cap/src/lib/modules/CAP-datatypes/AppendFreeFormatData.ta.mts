import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AppendFreeFormatData
 * @description
 *
 * `overwrite` (0) replaces previous FurnishChargingInformation free format
 * data; `append` (1) appends to it. Usage details in 3GPP TS 23.078.
 * (3GPP TS 29.078 V19.0.0 clause 11.19).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AppendFreeFormatData ::= ENUMERATED {
 *  overwrite	(0),
 *  append	(1)
 *  }
 * ```
 *
 */
export enum _enum_for_AppendFreeFormatData {
    overwrite = 0,
    append = 1,
}
export type AppendFreeFormatData = _enum_for_AppendFreeFormatData;
export const AppendFreeFormatData = _enum_for_AppendFreeFormatData;
export const AppendFreeFormatData_overwrite: AppendFreeFormatData = AppendFreeFormatData.overwrite;
export const overwrite: AppendFreeFormatData = AppendFreeFormatData.overwrite;
export const AppendFreeFormatData_append: AppendFreeFormatData = AppendFreeFormatData.append;
export const append: AppendFreeFormatData = AppendFreeFormatData.append;
export const _decode_AppendFreeFormatData = $._decodeEnumerated;
export const _encode_AppendFreeFormatData = $._encodeEnumerated;
