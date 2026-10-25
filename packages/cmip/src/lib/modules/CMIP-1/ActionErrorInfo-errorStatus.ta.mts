/* eslint-disable */
import {
  type ENUMERATED,
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


export const _enum_for_ActionErrorInfo_errorStatus = {
  accessDenied: 2,
  noSuchAction: 9,
  noSuchArgument: 14,
  invalidArgumentValue: 15,
} as const;

export type _enum_for_ActionErrorInfo_errorStatus = (typeof _enum_for_ActionErrorInfo_errorStatus)[keyof typeof _enum_for_ActionErrorInfo_errorStatus];


/**
 * @summary ActionErrorInfo_errorStatus
 * @description
 *
 * Action-level error. Values match ROSE error codes:
 * `accessDenied` 2, `noSuchAction` 9, `noSuchArgument`
 * 14, `invalidArgumentValue` 15. ITU-T Rec. X.711
 * (10/97)
 * [§7.4](https://www.itu.int/rec/T-REC-X.711-199710-I).
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
export const ActionErrorInfo_errorStatus_accessDenied: 2 = _enum_for_ActionErrorInfo_errorStatus.accessDenied; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary accessDenied
 * @constant
 * @type {number}
 */
export const accessDenied: 2 = ActionErrorInfo_errorStatus_accessDenied; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ActionErrorInfo_errorStatus_noSuchAction
 * @constant
 * @type {number}
 */
export const ActionErrorInfo_errorStatus_noSuchAction: 9 = _enum_for_ActionErrorInfo_errorStatus.noSuchAction; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noSuchAction
 * @constant
 * @type {number}
 */
export const noSuchAction: 9 = ActionErrorInfo_errorStatus_noSuchAction; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ActionErrorInfo_errorStatus_noSuchArgument
 * @constant
 * @type {number}
 */
export const ActionErrorInfo_errorStatus_noSuchArgument: 14 = _enum_for_ActionErrorInfo_errorStatus.noSuchArgument; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noSuchArgument
 * @constant
 * @type {number}
 */
export const noSuchArgument: 14 = ActionErrorInfo_errorStatus_noSuchArgument; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ActionErrorInfo_errorStatus_invalidArgumentValue
 * @constant
 * @type {number}
 */
export const ActionErrorInfo_errorStatus_invalidArgumentValue: 15 = _enum_for_ActionErrorInfo_errorStatus.invalidArgumentValue; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidArgumentValue
 * @constant
 * @type {number}
 */
export const invalidArgumentValue: 15 = ActionErrorInfo_errorStatus_invalidArgumentValue; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ActionErrorInfo_errorStatus: $.ASN1Decoder<ActionErrorInfo_errorStatus> = $._decodeEnumerated as $.ASN1Decoder<ActionErrorInfo_errorStatus>;




export const _encode_ActionErrorInfo_errorStatus: $.ASN1Encoder<ActionErrorInfo_errorStatus> = $._encodeEnumerated as $.ASN1Encoder<ActionErrorInfo_errorStatus>;


/* eslint-enable */
