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


export enum _enum_for_BioAPI_GUI_SUBOPERATION {
  capture = 0,
  process = 1,
  createtemplate = 2,
  verifymatch = 3,
  identifymatch = 4,
}


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
export const BioAPI_GUI_SUBOPERATION_capture: _enum_for_BioAPI_GUI_SUBOPERATION.capture = _enum_for_BioAPI_GUI_SUBOPERATION.capture; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary capture
 * @constant
 * @type {number}
 */
export const capture: _enum_for_BioAPI_GUI_SUBOPERATION.capture = BioAPI_GUI_SUBOPERATION_capture; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_SUBOPERATION_process
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_SUBOPERATION_process: _enum_for_BioAPI_GUI_SUBOPERATION.process = _enum_for_BioAPI_GUI_SUBOPERATION.process; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary process
 * @constant
 * @type {number}
 */
export const process: _enum_for_BioAPI_GUI_SUBOPERATION.process = BioAPI_GUI_SUBOPERATION_process; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_SUBOPERATION_createtemplate
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_SUBOPERATION_createtemplate: _enum_for_BioAPI_GUI_SUBOPERATION.createtemplate = _enum_for_BioAPI_GUI_SUBOPERATION.createtemplate; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary createtemplate
 * @constant
 * @type {number}
 */
export const createtemplate: _enum_for_BioAPI_GUI_SUBOPERATION.createtemplate = BioAPI_GUI_SUBOPERATION_createtemplate; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_SUBOPERATION_verifymatch
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_SUBOPERATION_verifymatch: _enum_for_BioAPI_GUI_SUBOPERATION.verifymatch = _enum_for_BioAPI_GUI_SUBOPERATION.verifymatch; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary verifymatch
 * @constant
 * @type {number}
 */
export const verifymatch: _enum_for_BioAPI_GUI_SUBOPERATION.verifymatch = BioAPI_GUI_SUBOPERATION_verifymatch; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_SUBOPERATION_identifymatch
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_SUBOPERATION_identifymatch: _enum_for_BioAPI_GUI_SUBOPERATION.identifymatch = _enum_for_BioAPI_GUI_SUBOPERATION.identifymatch; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary identifymatch
 * @constant
 * @type {number}
 */
export const identifymatch: _enum_for_BioAPI_GUI_SUBOPERATION.identifymatch = BioAPI_GUI_SUBOPERATION_identifymatch; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_BioAPI_GUI_SUBOPERATION: $.ASN1Decoder<number> = $._decodeEnumerated;




export const _encode_BioAPI_GUI_SUBOPERATION: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
