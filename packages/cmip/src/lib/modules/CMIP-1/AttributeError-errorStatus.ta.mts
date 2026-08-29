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


export enum _enum_for_AttributeError_errorStatus {
  accessDenied = 2,
  noSuchAttribute = 5,
  invalidAttributeValue = 6,
  invalidOperation = 24,
  invalidOperator = 25,
}


/**
 * @summary AttributeError_errorStatus
 * @description
 *
 * Per-attribute set failure. Values match ROSE error
 * codes where they exist (`accessDenied` 2,
 * `noSuchAttribute` 5, `invalidAttributeValue` 6).
 * `invalidOperation` is 24; `invalidOperator` is 25.
 * ITU-T Rec. X.711 (10/97)
 * [§7.4](https://www.itu.int/rec/T-REC-X.711-199710-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeError-errorStatus ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type AttributeError_errorStatus =
  | _enum_for_AttributeError_errorStatus
  | ENUMERATED;


/**
 * @summary AttributeError_errorStatus_accessDenied
 * @constant
 * @type {number}
 */
export const AttributeError_errorStatus_accessDenied: AttributeError_errorStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary accessDenied
 * @constant
 * @type {number}
 */
export const accessDenied: AttributeError_errorStatus = AttributeError_errorStatus_accessDenied; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AttributeError_errorStatus_noSuchAttribute
 * @constant
 * @type {number}
 */
export const AttributeError_errorStatus_noSuchAttribute: AttributeError_errorStatus = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noSuchAttribute
 * @constant
 * @type {number}
 */
export const noSuchAttribute: AttributeError_errorStatus = AttributeError_errorStatus_noSuchAttribute; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AttributeError_errorStatus_invalidAttributeValue
 * @constant
 * @type {number}
 */
export const AttributeError_errorStatus_invalidAttributeValue: AttributeError_errorStatus = 6; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidAttributeValue
 * @constant
 * @type {number}
 */
export const invalidAttributeValue: AttributeError_errorStatus = AttributeError_errorStatus_invalidAttributeValue; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AttributeError_errorStatus_invalidOperation
 * @description
 *
 * Invalid modify operation. `modifyOperator` is present.
 * X.711 §7.4.
 *
 * @constant
 * @type {number}
 */
export const AttributeError_errorStatus_invalidOperation: AttributeError_errorStatus = 24; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidOperation
 * @constant
 * @type {number}
 */
export const invalidOperation: AttributeError_errorStatus = AttributeError_errorStatus_invalidOperation; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AttributeError_errorStatus_invalidOperator
 * @description
 *
 * Invalid `ModifyOperator`. `modifyOperator` is present.
 * X.711 §7.4.
 *
 * @constant
 * @type {number}
 */
export const AttributeError_errorStatus_invalidOperator: AttributeError_errorStatus = 25; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidOperator
 * @constant
 * @type {number}
 */
export const invalidOperator: AttributeError_errorStatus = AttributeError_errorStatus_invalidOperator; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_AttributeError_errorStatus = $._decodeEnumerated;




export const _encode_AttributeError_errorStatus = $._encodeEnumerated;


/* eslint-enable */
