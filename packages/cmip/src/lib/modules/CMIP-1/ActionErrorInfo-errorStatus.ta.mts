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


export enum _enum_for_ActionErrorInfo_errorStatus {
  accessDenied = 2,
  noSuchAction = 9,
  noSuchArgument = 14,
  invalidArgumentValue = 15,
}


/**
 * @summary ActionErrorInfo_errorStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionErrorInfo-errorStatus ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type ActionErrorInfo_errorStatus =
  | _enum_for_ActionErrorInfo_errorStatus
  | ENUMERATED;


/**
 * @summary ActionErrorInfo_errorStatus_accessDenied
 * @constant
 * @type {number}
 */
export const ActionErrorInfo_errorStatus_accessDenied: ActionErrorInfo_errorStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary accessDenied
 * @constant
 * @type {number}
 */
export const accessDenied: ActionErrorInfo_errorStatus = ActionErrorInfo_errorStatus_accessDenied; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ActionErrorInfo_errorStatus_noSuchAction
 * @constant
 * @type {number}
 */
export const ActionErrorInfo_errorStatus_noSuchAction: ActionErrorInfo_errorStatus = 9; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noSuchAction
 * @constant
 * @type {number}
 */
export const noSuchAction: ActionErrorInfo_errorStatus = ActionErrorInfo_errorStatus_noSuchAction; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ActionErrorInfo_errorStatus_noSuchArgument
 * @constant
 * @type {number}
 */
export const ActionErrorInfo_errorStatus_noSuchArgument: ActionErrorInfo_errorStatus = 14; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noSuchArgument
 * @constant
 * @type {number}
 */
export const noSuchArgument: ActionErrorInfo_errorStatus = ActionErrorInfo_errorStatus_noSuchArgument; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ActionErrorInfo_errorStatus_invalidArgumentValue
 * @constant
 * @type {number}
 */
export const ActionErrorInfo_errorStatus_invalidArgumentValue: ActionErrorInfo_errorStatus = 15; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidArgumentValue
 * @constant
 * @type {number}
 */
export const invalidArgumentValue: ActionErrorInfo_errorStatus = ActionErrorInfo_errorStatus_invalidArgumentValue; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ActionErrorInfo_errorStatus = $._decodeEnumerated;




export const _encode_ActionErrorInfo_errorStatus = $._encodeEnumerated;


/* eslint-enable */
