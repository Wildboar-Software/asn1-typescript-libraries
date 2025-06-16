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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


export enum _enum_for_DeleteError_deleteErrorInfo {
  accessDenied = 2,
}


/**
 * @summary DeleteError_deleteErrorInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteError-deleteErrorInfo ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 *  {number}
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

