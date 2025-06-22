/* eslint-disable */
import {
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


/**
 * @summary GeneralProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralProblem  ::=  ENUMERATED {invalidAPDU(0)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_GeneralProblem {
  invalidAPDU = 0,
}


/**
 * @summary GeneralProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralProblem  ::=  ENUMERATED {invalidAPDU(0)}
 * ```
 *
 * @enum {number}
 */
export type GeneralProblem = _enum_for_GeneralProblem;


/**
 * @summary GeneralProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralProblem  ::=  ENUMERATED {invalidAPDU(0)}
 * ```
 *
 * @enum {number}
 */
export const GeneralProblem = _enum_for_GeneralProblem;


/**
 * @summary GeneralProblem_invalidAPDU
 * @constant
 * @type {number}
 */
export const GeneralProblem_invalidAPDU: GeneralProblem =
  GeneralProblem.invalidAPDU; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidAPDU
 * @constant
 * @type {number}
 */
export const invalidAPDU: GeneralProblem =
  GeneralProblem.invalidAPDU; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_GeneralProblem = $._decodeEnumerated;




export const _encode_GeneralProblem = $._encodeEnumerated;


/* eslint-enable */
