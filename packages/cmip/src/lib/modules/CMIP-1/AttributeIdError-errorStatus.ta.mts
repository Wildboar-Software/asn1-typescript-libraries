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


export enum _enum_for_AttributeIdError_errorStatus {
  accessDenied = 2,
  noSuchAttribute = 5,
}


/**
 * @summary AttributeIdError_errorStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeIdError-errorStatus ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type AttributeIdError_errorStatus =
  | _enum_for_AttributeIdError_errorStatus
  | ENUMERATED;


/**
 * @summary AttributeIdError_errorStatus_accessDenied
 * @constant
 * @type {number}
 */
export const AttributeIdError_errorStatus_accessDenied: AttributeIdError_errorStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary accessDenied
 * @constant
 * @type {number}
 */
export const accessDenied: AttributeIdError_errorStatus = AttributeIdError_errorStatus_accessDenied; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AttributeIdError_errorStatus_noSuchAttribute
 * @constant
 * @type {number}
 */
export const AttributeIdError_errorStatus_noSuchAttribute: AttributeIdError_errorStatus = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noSuchAttribute
 * @constant
 * @type {number}
 */
export const noSuchAttribute: AttributeIdError_errorStatus = AttributeIdError_errorStatus_noSuchAttribute; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_AttributeIdError_errorStatus = $._decodeEnumerated;




export const _encode_AttributeIdError_errorStatus = $._encodeEnumerated;


/* eslint-enable */
