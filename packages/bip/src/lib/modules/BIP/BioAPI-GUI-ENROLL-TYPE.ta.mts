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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_ENROLL_TYPE */
/**
 * @summary BioAPI_GUI_ENROLL_TYPE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-GUI-ENROLL-TYPE  ::=  BIT STRING {testVerify(0), multipleCapture(1)
 * }(SIZE (32))
 * ```
 */
export type BioAPI_GUI_ENROLL_TYPE = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_ENROLL_TYPE */

/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_ENROLL_TYPE_testVerify */
/**
 * @summary BioAPI_GUI_ENROLL_TYPE_testVerify
 * @constant
 */
export const BioAPI_GUI_ENROLL_TYPE_testVerify: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_ENROLL_TYPE_testVerify */

/* START_OF_SYMBOL_DEFINITION testVerify */
/**
 * @summary testVerify
 * @constant
 */
export const testVerify: number = BioAPI_GUI_ENROLL_TYPE_testVerify; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION testVerify */

/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_ENROLL_TYPE_multipleCapture */
/**
 * @summary BioAPI_GUI_ENROLL_TYPE_multipleCapture
 * @constant
 */
export const BioAPI_GUI_ENROLL_TYPE_multipleCapture: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_ENROLL_TYPE_multipleCapture */

/* START_OF_SYMBOL_DEFINITION multipleCapture */
/**
 * @summary multipleCapture
 * @constant
 */
export const multipleCapture: number = BioAPI_GUI_ENROLL_TYPE_multipleCapture; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION multipleCapture */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_GUI_ENROLL_TYPE */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_GUI_ENROLL_TYPE */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_GUI_ENROLL_TYPE */
export const _decode_BioAPI_GUI_ENROLL_TYPE = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_GUI_ENROLL_TYPE */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_GUI_ENROLL_TYPE */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_GUI_ENROLL_TYPE */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_GUI_ENROLL_TYPE */
export const _encode_BioAPI_GUI_ENROLL_TYPE = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_GUI_ENROLL_TYPE */

/* eslint-enable */
