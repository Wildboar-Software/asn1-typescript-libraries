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


export const _enum_for_BioAPI_GUI_SUBOPERATION = {
  capture: 0,
  process: 1,
  createtemplate: 2,
  verifymatch: 3,
  identifymatch: 4,
} as const;

export type _enum_for_BioAPI_GUI_SUBOPERATION = (typeof _enum_for_BioAPI_GUI_SUBOPERATION)[keyof typeof _enum_for_BioAPI_GUI_SUBOPERATION];


/**
 * @summary BioAPI_GUI_SUBOPERATION
 * @description
 *
 * GUI sub-operation. ASN.1 enumerators are 0-based; C values
 * are 1–5 (`capture` = C 1). Other C values are unconvertible.
 *
 * ITU-T Rec. X.1083 (11/2007)
 * [§15.41](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-GUI-SUBOPERATION  ::=  ENUMERATED {
 *   capture, process, createtemplate, verifymatch, identifymatch, ...
 *   }
 * ```
 *
 * @enum {number}
 */
export type BioAPI_GUI_SUBOPERATION =
  | _enum_for_BioAPI_GUI_SUBOPERATION
  | ENUMERATED;


/**
 * @summary BioAPI_GUI_SUBOPERATION_capture
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_SUBOPERATION_capture: 0 = _enum_for_BioAPI_GUI_SUBOPERATION.capture; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary capture
 * @constant
 * @type {number}
 */
export const capture: 0 = BioAPI_GUI_SUBOPERATION_capture; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_SUBOPERATION_process
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_SUBOPERATION_process: 1 = _enum_for_BioAPI_GUI_SUBOPERATION.process; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary process
 * @constant
 * @type {number}
 */
export const process: 1 = BioAPI_GUI_SUBOPERATION_process; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_SUBOPERATION_createtemplate
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_SUBOPERATION_createtemplate: 2 = _enum_for_BioAPI_GUI_SUBOPERATION.createtemplate; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary createtemplate
 * @constant
 * @type {number}
 */
export const createtemplate: 2 = BioAPI_GUI_SUBOPERATION_createtemplate; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_SUBOPERATION_verifymatch
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_SUBOPERATION_verifymatch: 3 = _enum_for_BioAPI_GUI_SUBOPERATION.verifymatch; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary verifymatch
 * @constant
 * @type {number}
 */
export const verifymatch: 3 = BioAPI_GUI_SUBOPERATION_verifymatch; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_SUBOPERATION_identifymatch
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_SUBOPERATION_identifymatch: 4 = _enum_for_BioAPI_GUI_SUBOPERATION.identifymatch; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary identifymatch
 * @constant
 * @type {number}
 */
export const identifymatch: 4 = BioAPI_GUI_SUBOPERATION_identifymatch; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_BioAPI_GUI_SUBOPERATION: $.ASN1Decoder<BioAPI_GUI_SUBOPERATION> = $._decodeEnumerated as $.ASN1Decoder<BioAPI_GUI_SUBOPERATION>;




export const _encode_BioAPI_GUI_SUBOPERATION: $.ASN1Encoder<BioAPI_GUI_SUBOPERATION> = $._encodeEnumerated as $.ASN1Encoder<BioAPI_GUI_SUBOPERATION>;


/* eslint-enable */
