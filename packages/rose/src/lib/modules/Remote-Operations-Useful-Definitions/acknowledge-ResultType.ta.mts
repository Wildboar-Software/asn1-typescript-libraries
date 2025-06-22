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


export enum _enum_for_acknowledge_ResultType {
  acknowledged = 0,
  unknown = 1,
}


/**
 * @summary acknowledge_ResultType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acknowledge-ResultType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type acknowledge_ResultType =
  | _enum_for_acknowledge_ResultType
  | ENUMERATED;


/**
 * @summary acknowledge_ResultType_acknowledged
 * @constant
 * @type {number}
 */
export const acknowledge_ResultType_acknowledged: acknowledge_ResultType = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary acknowledged
 * @constant
 * @type {number}
 */
export const acknowledged: acknowledge_ResultType = acknowledge_ResultType_acknowledged; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary acknowledge_ResultType_unknown
 * @constant
 * @type {number}
 */
export const acknowledge_ResultType_unknown: acknowledge_ResultType = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: acknowledge_ResultType = acknowledge_ResultType_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_acknowledge_ResultType = $._decodeEnumerated;




export const _encode_acknowledge_ResultType = $._encodeEnumerated;


/* eslint-enable */
