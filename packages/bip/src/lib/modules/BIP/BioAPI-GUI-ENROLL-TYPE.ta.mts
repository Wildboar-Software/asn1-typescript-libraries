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
let _cached_decoder_for_BioAPI_GUI_ENROLL_TYPE: $.ASN1Decoder<BioAPI_GUI_ENROLL_TYPE> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_GUI_ENROLL_TYPE */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_GUI_ENROLL_TYPE */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_GUI_ENROLL_TYPE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_GUI_ENROLL_TYPE} The decoded data structure.
 */
export function _decode_BioAPI_GUI_ENROLL_TYPE(el: _Element) {
  if (!_cached_decoder_for_BioAPI_GUI_ENROLL_TYPE) {
    _cached_decoder_for_BioAPI_GUI_ENROLL_TYPE = $._decodeBitString;
  }
  return _cached_decoder_for_BioAPI_GUI_ENROLL_TYPE(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_GUI_ENROLL_TYPE */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_GUI_ENROLL_TYPE */
let _cached_encoder_for_BioAPI_GUI_ENROLL_TYPE: $.ASN1Encoder<BioAPI_GUI_ENROLL_TYPE> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_GUI_ENROLL_TYPE */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_GUI_ENROLL_TYPE */
/**
 * @summary Encodes a(n) BioAPI_GUI_ENROLL_TYPE into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_GUI_ENROLL_TYPE, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_GUI_ENROLL_TYPE(
  value: BioAPI_GUI_ENROLL_TYPE,
  elGetter: $.ASN1Encoder<BioAPI_GUI_ENROLL_TYPE>
) {
  if (!_cached_encoder_for_BioAPI_GUI_ENROLL_TYPE) {
    _cached_encoder_for_BioAPI_GUI_ENROLL_TYPE = $._encodeBitString;
  }
  return _cached_encoder_for_BioAPI_GUI_ENROLL_TYPE(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_GUI_ENROLL_TYPE */

/* eslint-enable */
