/* eslint-disable */
import {
  BIT_STRING,
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
 * @summary FunctionalUnits
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FunctionalUnits  ::=  BIT STRING {
 *   multipleObjectSelection(0), filter(1), multipleReply(2), extendedService(3),
 *   cancelGet(4)}
 * ```
 */
export type FunctionalUnits = BIT_STRING;


/**
 * @summary FunctionalUnits_multipleObjectSelection
 * @constant
 */
export const FunctionalUnits_multipleObjectSelection: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary multipleObjectSelection
 * @constant
 */
export const multipleObjectSelection: number = FunctionalUnits_multipleObjectSelection; /* SHORT_NAMED_BIT */


/**
 * @summary FunctionalUnits_filter
 * @constant
 */
export const FunctionalUnits_filter: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary filter
 * @constant
 */
export const filter: number = FunctionalUnits_filter; /* SHORT_NAMED_BIT */


/**
 * @summary FunctionalUnits_multipleReply
 * @constant
 */
export const FunctionalUnits_multipleReply: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary multipleReply
 * @constant
 */
export const multipleReply: number = FunctionalUnits_multipleReply; /* SHORT_NAMED_BIT */


/**
 * @summary FunctionalUnits_extendedService
 * @constant
 */
export const FunctionalUnits_extendedService: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary extendedService
 * @constant
 */
export const extendedService: number = FunctionalUnits_extendedService; /* SHORT_NAMED_BIT */


/**
 * @summary FunctionalUnits_cancelGet
 * @constant
 */
export const FunctionalUnits_cancelGet: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary cancelGet
 * @constant
 */
export const cancelGet: number = FunctionalUnits_cancelGet; /* SHORT_NAMED_BIT */




export const _decode_FunctionalUnits = $._decodeBitString;




export const _encode_FunctionalUnits = $._encodeBitString;


/* eslint-enable */
