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
import * as $ from '@wildboar/asn1/functional';


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


/**
 * @summary Data_Field_Item_field_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Data-Field-Item-field-type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type Data_Field_Item_field_type =
  | _enum_for_Data_Field_Item_field_type
  | ENUMERATED;


/**
 * @summary Data_Field_Item_field_type_hdlc_data
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_hdlc_data: Data_Field_Item_field_type = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary hdlc_data
 * @constant
 * @type {number}
 */
export const hdlc_data: Data_Field_Item_field_type = Data_Field_Item_field_type_hdlc_data; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_hdlc_sig_end
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_hdlc_sig_end: Data_Field_Item_field_type = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary hdlc_sig_end
 * @constant
 * @type {number}
 */
export const hdlc_sig_end: Data_Field_Item_field_type = Data_Field_Item_field_type_hdlc_sig_end; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_hdlc_fcs_OK
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_hdlc_fcs_OK: Data_Field_Item_field_type = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary hdlc_fcs_OK
 * @constant
 * @type {number}
 */
export const hdlc_fcs_OK: Data_Field_Item_field_type = Data_Field_Item_field_type_hdlc_fcs_OK; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_hdlc_fcs_BAD
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_hdlc_fcs_BAD: Data_Field_Item_field_type = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary hdlc_fcs_BAD
 * @constant
 * @type {number}
 */
export const hdlc_fcs_BAD: Data_Field_Item_field_type = Data_Field_Item_field_type_hdlc_fcs_BAD; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_hdlc_fcs_OK_sig_end
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_hdlc_fcs_OK_sig_end: Data_Field_Item_field_type = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary hdlc_fcs_OK_sig_end
 * @constant
 * @type {number}
 */
export const hdlc_fcs_OK_sig_end: Data_Field_Item_field_type = Data_Field_Item_field_type_hdlc_fcs_OK_sig_end; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_hdlc_fcs_BAD_sig_end
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_hdlc_fcs_BAD_sig_end: Data_Field_Item_field_type = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary hdlc_fcs_BAD_sig_end
 * @constant
 * @type {number}
 */
export const hdlc_fcs_BAD_sig_end: Data_Field_Item_field_type = Data_Field_Item_field_type_hdlc_fcs_BAD_sig_end; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_t4_non_ecm_data
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_t4_non_ecm_data: Data_Field_Item_field_type = 6; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary t4_non_ecm_data
 * @constant
 * @type {number}
 */
export const t4_non_ecm_data: Data_Field_Item_field_type = Data_Field_Item_field_type_t4_non_ecm_data; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_t4_non_ecm_sig_end
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_t4_non_ecm_sig_end: Data_Field_Item_field_type = 7; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary t4_non_ecm_sig_end
 * @constant
 * @type {number}
 */
export const t4_non_ecm_sig_end: Data_Field_Item_field_type = Data_Field_Item_field_type_t4_non_ecm_sig_end; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_cm_message
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_cm_message: Data_Field_Item_field_type = 8; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary cm_message
 * @constant
 * @type {number}
 */
export const cm_message: Data_Field_Item_field_type = Data_Field_Item_field_type_cm_message; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_jm_message
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_jm_message: Data_Field_Item_field_type = 8; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary jm_message
 * @constant
 * @type {number}
 */
export const jm_message: Data_Field_Item_field_type = Data_Field_Item_field_type_jm_message; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_ci_message
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_ci_message: Data_Field_Item_field_type = 8; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary ci_message
 * @constant
 * @type {number}
 */
export const ci_message: Data_Field_Item_field_type = Data_Field_Item_field_type_ci_message; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Data_Field_Item_field_type_v34rate
 * @constant
 * @type {number}
 */
export const Data_Field_Item_field_type_v34rate: Data_Field_Item_field_type = 8; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v34rate
 * @constant
 * @type {number}
 */
export const v34rate: Data_Field_Item_field_type = Data_Field_Item_field_type_v34rate; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_Data_Field_Item_field_type = $._decodeEnumerated;




export const _encode_Data_Field_Item_field_type = $._encodeEnumerated;


/* eslint-enable */
