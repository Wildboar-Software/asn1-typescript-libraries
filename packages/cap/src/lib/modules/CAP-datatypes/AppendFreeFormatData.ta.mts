import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AppendFreeFormatData
 * @description
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
