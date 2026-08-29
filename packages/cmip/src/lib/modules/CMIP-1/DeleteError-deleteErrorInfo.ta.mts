/* eslint-disable */
import {
  ENUMERATED,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


export enum _enum_for_DeleteError_deleteErrorInfo {
  accessDenied = 2,
}


/**
 * @summary DeleteError_deleteErrorInfo
 * @description
 *
 * Delete-level status. Currently only `accessDenied`
 * (2); the ENUMERATED is extensible. ITU-T Rec. X.711
 * (10/97)
 * [§7.4](https://www.itu.int/rec/T-REC-X.711-199710-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteError-deleteErrorInfo ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type DeleteError_deleteErrorInfo =
  | _enum_for_DeleteError_deleteErrorInfo
  | ENUMERATED;


/**
 * @summary DeleteError_deleteErrorInfo_accessDenied
 * @constant
 * @type {number}
 */
export const DeleteError_deleteErrorInfo_accessDenied: DeleteError_deleteErrorInfo = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary accessDenied
 * @constant
 * @type {number}
 */
export const accessDenied: DeleteError_deleteErrorInfo = DeleteError_deleteErrorInfo_accessDenied; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_DeleteError_deleteErrorInfo = $._decodeEnumerated;




export const _encode_DeleteError_deleteErrorInfo = $._encodeEnumerated;


/* eslint-enable */
