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

/* START_OF_SYMBOL_DEFINITION _enum_for_Data_Field_Item_field_type */
export enum _enum_for_Data_Field_Item_field_type {
  hdlc_data = 0,
  hdlc_sig_end = 1,
  hdlc_fcs_OK = 2,
  hdlc_fcs_BAD = 3,
  hdlc_fcs_OK_sig_end = 4,
  hdlc_fcs_BAD_sig_end = 5,
  t4_non_ecm_data = 6,
  t4_non_ecm_sig_end = 7,
  cm_message = 8,
  jm_message = 8,
  ci_message = 8,
  v34rate = 8,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Data_Field_Item_field_type */

/* START_OF_SYMBOL_DEFINITION Data_Field_Item_field_type */
/**
 * @summary Data_Field_Item_field_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Data-Field-Item-field-type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type Data_Field_Item_field_type =
  | _enum_for_Data_Field_Item_field_type
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION Data_Field_Item_field_type */

/* START_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_hdlc_data */
/**
 * @summary Data_Field_Item_field_type_hdlc_data
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_hdlc_data: Data_Field_Item_field_type = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_hdlc_data */

/* START_OF_SYMBOL_DEFINITION hdlc_data */
/**
 * @summary hdlc_data
 * @constant
 * @type {number}
 */
export const hdlc_data: Data_Field_Item_field_type = Data_Field_Item_field_type_hdlc_data; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION hdlc_data */

/* START_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_hdlc_sig_end */
/**
 * @summary Data_Field_Item_field_type_hdlc_sig_end
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_hdlc_sig_end: Data_Field_Item_field_type = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_hdlc_sig_end */

/* START_OF_SYMBOL_DEFINITION hdlc_sig_end */
/**
 * @summary hdlc_sig_end
 * @constant
 * @type {number}
 */
export const hdlc_sig_end: Data_Field_Item_field_type = Data_Field_Item_field_type_hdlc_sig_end; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION hdlc_sig_end */

/* START_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_hdlc_fcs_OK */
/**
 * @summary Data_Field_Item_field_type_hdlc_fcs_OK
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_hdlc_fcs_OK: Data_Field_Item_field_type = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_hdlc_fcs_OK */

/* START_OF_SYMBOL_DEFINITION hdlc_fcs_OK */
/**
 * @summary hdlc_fcs_OK
 * @constant
 * @type {number}
 */
export const hdlc_fcs_OK: Data_Field_Item_field_type = Data_Field_Item_field_type_hdlc_fcs_OK; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION hdlc_fcs_OK */

/* START_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_hdlc_fcs_BAD */
/**
 * @summary Data_Field_Item_field_type_hdlc_fcs_BAD
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_hdlc_fcs_BAD: Data_Field_Item_field_type = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_hdlc_fcs_BAD */

/* START_OF_SYMBOL_DEFINITION hdlc_fcs_BAD */
/**
 * @summary hdlc_fcs_BAD
 * @constant
 * @type {number}
 */
export const hdlc_fcs_BAD: Data_Field_Item_field_type = Data_Field_Item_field_type_hdlc_fcs_BAD; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION hdlc_fcs_BAD */

/* START_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_hdlc_fcs_OK_sig_end */
/**
 * @summary Data_Field_Item_field_type_hdlc_fcs_OK_sig_end
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_hdlc_fcs_OK_sig_end: Data_Field_Item_field_type = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_hdlc_fcs_OK_sig_end */

/* START_OF_SYMBOL_DEFINITION hdlc_fcs_OK_sig_end */
/**
 * @summary hdlc_fcs_OK_sig_end
 * @constant
 * @type {number}
 */
export const hdlc_fcs_OK_sig_end: Data_Field_Item_field_type = Data_Field_Item_field_type_hdlc_fcs_OK_sig_end; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION hdlc_fcs_OK_sig_end */

/* START_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_hdlc_fcs_BAD_sig_end */
/**
 * @summary Data_Field_Item_field_type_hdlc_fcs_BAD_sig_end
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_hdlc_fcs_BAD_sig_end: Data_Field_Item_field_type = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_hdlc_fcs_BAD_sig_end */

/* START_OF_SYMBOL_DEFINITION hdlc_fcs_BAD_sig_end */
/**
 * @summary hdlc_fcs_BAD_sig_end
 * @constant
 * @type {number}
 */
export const hdlc_fcs_BAD_sig_end: Data_Field_Item_field_type = Data_Field_Item_field_type_hdlc_fcs_BAD_sig_end; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION hdlc_fcs_BAD_sig_end */

/* START_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_t4_non_ecm_data */
/**
 * @summary Data_Field_Item_field_type_t4_non_ecm_data
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_t4_non_ecm_data: Data_Field_Item_field_type = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_t4_non_ecm_data */

/* START_OF_SYMBOL_DEFINITION t4_non_ecm_data */
/**
 * @summary t4_non_ecm_data
 * @constant
 * @type {number}
 */
export const t4_non_ecm_data: Data_Field_Item_field_type = Data_Field_Item_field_type_t4_non_ecm_data; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION t4_non_ecm_data */

/* START_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_t4_non_ecm_sig_end */
/**
 * @summary Data_Field_Item_field_type_t4_non_ecm_sig_end
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_t4_non_ecm_sig_end: Data_Field_Item_field_type = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_t4_non_ecm_sig_end */

/* START_OF_SYMBOL_DEFINITION t4_non_ecm_sig_end */
/**
 * @summary t4_non_ecm_sig_end
 * @constant
 * @type {number}
 */
export const t4_non_ecm_sig_end: Data_Field_Item_field_type = Data_Field_Item_field_type_t4_non_ecm_sig_end; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION t4_non_ecm_sig_end */

/* START_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_cm_message */
/**
 * @summary Data_Field_Item_field_type_cm_message
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_cm_message: Data_Field_Item_field_type = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_cm_message */

/* START_OF_SYMBOL_DEFINITION cm_message */
/**
 * @summary cm_message
 * @constant
 * @type {number}
 */
export const cm_message: Data_Field_Item_field_type = Data_Field_Item_field_type_cm_message; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION cm_message */

/* START_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_jm_message */
/**
 * @summary Data_Field_Item_field_type_jm_message
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_jm_message: Data_Field_Item_field_type = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_jm_message */

/* START_OF_SYMBOL_DEFINITION jm_message */
/**
 * @summary jm_message
 * @constant
 * @type {number}
 */
export const jm_message: Data_Field_Item_field_type = Data_Field_Item_field_type_jm_message; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION jm_message */

/* START_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_ci_message */
/**
 * @summary Data_Field_Item_field_type_ci_message
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_ci_message: Data_Field_Item_field_type = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_ci_message */

/* START_OF_SYMBOL_DEFINITION ci_message */
/**
 * @summary ci_message
 * @constant
 * @type {number}
 */
export const ci_message: Data_Field_Item_field_type = Data_Field_Item_field_type_ci_message; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ci_message */

/* START_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_v34rate */
/**
 * @summary Data_Field_Item_field_type_v34rate
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_v34rate: Data_Field_Item_field_type = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Data_Field_Item_field_type_v34rate */

/* START_OF_SYMBOL_DEFINITION v34rate */
/**
 * @summary v34rate
 * @constant
 * @type {number}
 */
export const v34rate: Data_Field_Item_field_type = Data_Field_Item_field_type_v34rate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v34rate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Data_Field_Item_field_type */
let _cached_decoder_for_Data_Field_Item_field_type: $.ASN1Decoder<Data_Field_Item_field_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Data_Field_Item_field_type */

/* START_OF_SYMBOL_DEFINITION _decode_Data_Field_Item_field_type */
/**
 * @summary Decodes an ASN.1 element into a(n) Data_Field_Item_field_type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Data_Field_Item_field_type} The decoded data structure.
 */
export function _decode_Data_Field_Item_field_type(el: _Element) {
  if (!_cached_decoder_for_Data_Field_Item_field_type) {
    _cached_decoder_for_Data_Field_Item_field_type = $._decodeEnumerated;
  }
  return _cached_decoder_for_Data_Field_Item_field_type(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Data_Field_Item_field_type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Data_Field_Item_field_type */
let _cached_encoder_for_Data_Field_Item_field_type: $.ASN1Encoder<Data_Field_Item_field_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Data_Field_Item_field_type */

/* START_OF_SYMBOL_DEFINITION _encode_Data_Field_Item_field_type */
/**
 * @summary Encodes a(n) Data_Field_Item_field_type into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Data_Field_Item_field_type, encoded as an ASN.1 Element.
 */
export function _encode_Data_Field_Item_field_type(
  value: Data_Field_Item_field_type,
  elGetter: $.ASN1Encoder<Data_Field_Item_field_type>
) {
  if (!_cached_encoder_for_Data_Field_Item_field_type) {
    _cached_encoder_for_Data_Field_Item_field_type = $._encodeEnumerated;
  }
  return _cached_encoder_for_Data_Field_Item_field_type(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Data_Field_Item_field_type */

/* eslint-enable */
