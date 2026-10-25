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


export enum _enum_for_BioAPI_GUI_OPERATION {
  capture = 0,
  process = 1,
  createtemplate = 2,
  verifymatch = 3,
  identifymatch = 4,
  verify = 5,
  identify = 6,
  enroll = 7,
}


/**
 * @summary BioAPI_GUI_OPERATION
 * @description
 *
 * GUI operation being performed. ASN.1 enumerators are 0-based;
 * C values are 1–8 (`capture` = C 1, `enroll` = C 8). Other C
 * values are unconvertible.
 *
 * ITU-T Rec. X.1083 (11/2007)
 * [§15.39](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-GUI-OPERATION  ::=  ENUMERATED {
 *   capture, process, createtemplate, verifymatch, identifymatch, verify,
 *   identify, enroll, ...
 *   }
 * ```
 *
 * @enum {number}
 */
export type BioAPI_GUI_OPERATION = _enum_for_BioAPI_GUI_OPERATION | ENUMERATED;


/**
 * @summary BioAPI_GUI_OPERATION_capture
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_OPERATION_capture: _enum_for_BioAPI_GUI_OPERATION.capture = _enum_for_BioAPI_GUI_OPERATION.capture; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary capture
 * @constant
 * @type {number}
 */
export const capture: _enum_for_BioAPI_GUI_OPERATION.capture = BioAPI_GUI_OPERATION_capture; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_OPERATION_process
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_OPERATION_process: _enum_for_BioAPI_GUI_OPERATION.process = _enum_for_BioAPI_GUI_OPERATION.process; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary process
 * @constant
 * @type {number}
 */
export const process: _enum_for_BioAPI_GUI_OPERATION.process = BioAPI_GUI_OPERATION_process; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_OPERATION_createtemplate
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_OPERATION_createtemplate: _enum_for_BioAPI_GUI_OPERATION.createtemplate = _enum_for_BioAPI_GUI_OPERATION.createtemplate; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary createtemplate
 * @constant
 * @type {number}
 */
export const createtemplate: _enum_for_BioAPI_GUI_OPERATION.createtemplate = BioAPI_GUI_OPERATION_createtemplate; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_OPERATION_verifymatch
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_OPERATION_verifymatch: _enum_for_BioAPI_GUI_OPERATION.verifymatch = _enum_for_BioAPI_GUI_OPERATION.verifymatch; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary verifymatch
 * @constant
 * @type {number}
 */
export const verifymatch: _enum_for_BioAPI_GUI_OPERATION.verifymatch = BioAPI_GUI_OPERATION_verifymatch; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_OPERATION_identifymatch
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_OPERATION_identifymatch: _enum_for_BioAPI_GUI_OPERATION.identifymatch = _enum_for_BioAPI_GUI_OPERATION.identifymatch; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary identifymatch
 * @constant
 * @type {number}
 */
export const identifymatch: _enum_for_BioAPI_GUI_OPERATION.identifymatch = BioAPI_GUI_OPERATION_identifymatch; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_OPERATION_verify
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_OPERATION_verify: _enum_for_BioAPI_GUI_OPERATION.verify = _enum_for_BioAPI_GUI_OPERATION.verify; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary verify
 * @constant
 * @type {number}
 */
export const verify: _enum_for_BioAPI_GUI_OPERATION.verify = BioAPI_GUI_OPERATION_verify; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_OPERATION_identify
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_OPERATION_identify: _enum_for_BioAPI_GUI_OPERATION.identify = _enum_for_BioAPI_GUI_OPERATION.identify; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary identify
 * @constant
 * @type {number}
 */
export const identify: _enum_for_BioAPI_GUI_OPERATION.identify = BioAPI_GUI_OPERATION_identify; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_OPERATION_enroll
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_OPERATION_enroll: _enum_for_BioAPI_GUI_OPERATION.enroll = _enum_for_BioAPI_GUI_OPERATION.enroll; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary enroll
 * @constant
 * @type {number}
 */
export const enroll: _enum_for_BioAPI_GUI_OPERATION.enroll = BioAPI_GUI_OPERATION_enroll; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_BioAPI_GUI_OPERATION: $.ASN1Decoder<number> = $._decodeEnumerated;




export const _encode_BioAPI_GUI_OPERATION: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
