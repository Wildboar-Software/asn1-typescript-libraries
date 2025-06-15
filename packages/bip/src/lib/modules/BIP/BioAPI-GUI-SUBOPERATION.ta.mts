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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_BioAPI_GUI_SUBOPERATION */
export enum _enum_for_BioAPI_GUI_SUBOPERATION {
  capture = 0,
  process = 1,
  createtemplate = 2,
  verifymatch = 3,
  identifymatch = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_BioAPI_GUI_SUBOPERATION */

/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_SUBOPERATION */
/**
 * @summary BioAPI_GUI_SUBOPERATION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-GUI-SUBOPERATION  ::=  ENUMERATED {
 *   capture, process, createtemplate, verifymatch, identifymatch, ...
 *   }
 * ```@enum {number}
 */
export type BioAPI_GUI_SUBOPERATION =
  | _enum_for_BioAPI_GUI_SUBOPERATION
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_SUBOPERATION */

/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_SUBOPERATION_capture */
/**
 * @summary BioAPI_GUI_SUBOPERATION_capture
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_SUBOPERATION_capture: BioAPI_GUI_SUBOPERATION = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_SUBOPERATION_capture */

/* START_OF_SYMBOL_DEFINITION capture */
/**
 * @summary capture
 * @constant
 * @type {number}
 */
export const capture: BioAPI_GUI_SUBOPERATION = BioAPI_GUI_SUBOPERATION_capture; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION capture */

/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_SUBOPERATION_process */
/**
 * @summary BioAPI_GUI_SUBOPERATION_process
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_SUBOPERATION_process: BioAPI_GUI_SUBOPERATION = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_SUBOPERATION_process */

/* START_OF_SYMBOL_DEFINITION process */
/**
 * @summary process
 * @constant
 * @type {number}
 */
export const process: BioAPI_GUI_SUBOPERATION = BioAPI_GUI_SUBOPERATION_process; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION process */

/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_SUBOPERATION_createtemplate */
/**
 * @summary BioAPI_GUI_SUBOPERATION_createtemplate
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_SUBOPERATION_createtemplate: BioAPI_GUI_SUBOPERATION = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_SUBOPERATION_createtemplate */

/* START_OF_SYMBOL_DEFINITION createtemplate */
/**
 * @summary createtemplate
 * @constant
 * @type {number}
 */
export const createtemplate: BioAPI_GUI_SUBOPERATION = BioAPI_GUI_SUBOPERATION_createtemplate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION createtemplate */

/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_SUBOPERATION_verifymatch */
/**
 * @summary BioAPI_GUI_SUBOPERATION_verifymatch
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_SUBOPERATION_verifymatch: BioAPI_GUI_SUBOPERATION = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_SUBOPERATION_verifymatch */

/* START_OF_SYMBOL_DEFINITION verifymatch */
/**
 * @summary verifymatch
 * @constant
 * @type {number}
 */
export const verifymatch: BioAPI_GUI_SUBOPERATION = BioAPI_GUI_SUBOPERATION_verifymatch; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION verifymatch */

/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_SUBOPERATION_identifymatch */
/**
 * @summary BioAPI_GUI_SUBOPERATION_identifymatch
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_SUBOPERATION_identifymatch: BioAPI_GUI_SUBOPERATION = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_SUBOPERATION_identifymatch */

/* START_OF_SYMBOL_DEFINITION identifymatch */
/**
 * @summary identifymatch
 * @constant
 * @type {number}
 */
export const identifymatch: BioAPI_GUI_SUBOPERATION = BioAPI_GUI_SUBOPERATION_identifymatch; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION identifymatch */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_GUI_SUBOPERATION */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_GUI_SUBOPERATION */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_GUI_SUBOPERATION */
export const _decode_BioAPI_GUI_SUBOPERATION = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_GUI_SUBOPERATION */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_GUI_SUBOPERATION */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_GUI_SUBOPERATION */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_GUI_SUBOPERATION */
export const _encode_BioAPI_GUI_SUBOPERATION = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_GUI_SUBOPERATION */

/* eslint-enable */
