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


export const _enum_for_BioAPI_GUI_OPERATION = {
  capture: 0,
  process: 1,
  createtemplate: 2,
  verifymatch: 3,
  identifymatch: 4,
  verify: 5,
  identify: 6,
  enroll: 7,
} as const;

export type _enum_for_BioAPI_GUI_OPERATION = (typeof _enum_for_BioAPI_GUI_OPERATION)[keyof typeof _enum_for_BioAPI_GUI_OPERATION];


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
export const BioAPI_GUI_OPERATION_capture: 0 = _enum_for_BioAPI_GUI_OPERATION.capture; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary capture
 * @constant
 * @type {number}
 */
export const capture: 0 = BioAPI_GUI_OPERATION_capture; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_OPERATION_process
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_OPERATION_process: 1 = _enum_for_BioAPI_GUI_OPERATION.process; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary process
 * @constant
 * @type {number}
 */
export const process: 1 = BioAPI_GUI_OPERATION_process; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_OPERATION_createtemplate
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_OPERATION_createtemplate: 2 = _enum_for_BioAPI_GUI_OPERATION.createtemplate; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary createtemplate
 * @constant
 * @type {number}
 */
export const createtemplate: 2 = BioAPI_GUI_OPERATION_createtemplate; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_OPERATION_verifymatch
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_OPERATION_verifymatch: 3 = _enum_for_BioAPI_GUI_OPERATION.verifymatch; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary verifymatch
 * @constant
 * @type {number}
 */
export const verifymatch: 3 = BioAPI_GUI_OPERATION_verifymatch; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_OPERATION_identifymatch
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_OPERATION_identifymatch: 4 = _enum_for_BioAPI_GUI_OPERATION.identifymatch; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary identifymatch
 * @constant
 * @type {number}
 */
export const identifymatch: 4 = BioAPI_GUI_OPERATION_identifymatch; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_OPERATION_verify
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_OPERATION_verify: 5 = _enum_for_BioAPI_GUI_OPERATION.verify; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary verify
 * @constant
 * @type {number}
 */
export const verify: 5 = BioAPI_GUI_OPERATION_verify; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_OPERATION_identify
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_OPERATION_identify: 6 = _enum_for_BioAPI_GUI_OPERATION.identify; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary identify
 * @constant
 * @type {number}
 */
export const identify: 6 = BioAPI_GUI_OPERATION_identify; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_OPERATION_enroll
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_OPERATION_enroll: 7 = _enum_for_BioAPI_GUI_OPERATION.enroll; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary enroll
 * @constant
 * @type {number}
 */
export const enroll: 7 = BioAPI_GUI_OPERATION_enroll; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_BioAPI_GUI_OPERATION: $.ASN1Decoder<BioAPI_GUI_OPERATION> = $._decodeEnumerated as $.ASN1Decoder<BioAPI_GUI_OPERATION>;




export const _encode_BioAPI_GUI_OPERATION: $.ASN1Encoder<BioAPI_GUI_OPERATION> = $._encodeEnumerated as $.ASN1Encoder<BioAPI_GUI_OPERATION>;


/* eslint-enable */
