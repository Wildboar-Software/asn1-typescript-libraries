/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
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
import {
  Data_Field_Item_field_type,
  _enum_for_Data_Field_Item_field_type,
  Data_Field_Item_field_type_hdlc_data /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hdlc_data /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_hdlc_sig_end /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hdlc_sig_end /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_hdlc_fcs_OK /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hdlc_fcs_OK /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_hdlc_fcs_BAD /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hdlc_fcs_BAD /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_hdlc_fcs_OK_sig_end /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hdlc_fcs_OK_sig_end /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_hdlc_fcs_BAD_sig_end /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hdlc_fcs_BAD_sig_end /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_t4_non_ecm_data /* IMPORTED_LONG_ENUMERATION_ITEM */,
  t4_non_ecm_data /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_t4_non_ecm_sig_end /* IMPORTED_LONG_ENUMERATION_ITEM */,
  t4_non_ecm_sig_end /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_cm_message /* IMPORTED_LONG_ENUMERATION_ITEM */,
  cm_message /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_jm_message /* IMPORTED_LONG_ENUMERATION_ITEM */,
  jm_message /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_ci_message /* IMPORTED_LONG_ENUMERATION_ITEM */,
  ci_message /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_v34rate /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v34rate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_Data_Field_Item_field_type,
  _encode_Data_Field_Item_field_type,
} from '../T38/Data-Field-Item-field-type.ta.js';
export {
  Data_Field_Item_field_type,
  _enum_for_Data_Field_Item_field_type,
  Data_Field_Item_field_type_hdlc_data /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hdlc_data /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_hdlc_sig_end /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hdlc_sig_end /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_hdlc_fcs_OK /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hdlc_fcs_OK /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_hdlc_fcs_BAD /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hdlc_fcs_BAD /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_hdlc_fcs_OK_sig_end /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hdlc_fcs_OK_sig_end /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_hdlc_fcs_BAD_sig_end /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hdlc_fcs_BAD_sig_end /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_t4_non_ecm_data /* IMPORTED_LONG_ENUMERATION_ITEM */,
  t4_non_ecm_data /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_t4_non_ecm_sig_end /* IMPORTED_LONG_ENUMERATION_ITEM */,
  t4_non_ecm_sig_end /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_cm_message /* IMPORTED_LONG_ENUMERATION_ITEM */,
  cm_message /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_jm_message /* IMPORTED_LONG_ENUMERATION_ITEM */,
  jm_message /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_ci_message /* IMPORTED_LONG_ENUMERATION_ITEM */,
  ci_message /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Data_Field_Item_field_type_v34rate /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v34rate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_Data_Field_Item_field_type,
  _encode_Data_Field_Item_field_type,
} from '../T38/Data-Field-Item-field-type.ta.js';

/* START_OF_SYMBOL_DEFINITION Data_Field_Item */
/**
 * @summary Data_Field_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Data-Field-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Data_Field_Item {
  constructor(
    /**
     * @summary `field_type`.
     * @public
     * @readonly
     */
    readonly field_type: Data_Field_Item_field_type,
    /**
     * @summary `field_data`.
     * @public
     * @readonly
     */
    readonly field_data: OPTIONAL<OCTET_STRING>
  ) {}

  /**
   * @summary Restructures an object into a Data_Field_Item
   * @description
   *
   * This takes an `object` and converts it to a `Data_Field_Item`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Data_Field_Item`.
   * @returns {Data_Field_Item}
   */
  public static _from_object(
    _o: { [_K in keyof Data_Field_Item]: Data_Field_Item[_K] }
  ): Data_Field_Item {
    return new Data_Field_Item(_o.field_type, _o.field_data);
  }

  /**
   * @summary The enum used as the type of the component `field_type`
   * @public
   * @static
   */

  public static _enum_for_field_type = _enum_for_Data_Field_Item_field_type;
}
/* END_OF_SYMBOL_DEFINITION Data_Field_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Data_Field_Item */
/**
 * @summary The Leading Root Component Types of Data_Field_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Data_Field_Item: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'field-type',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'field-data',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Data_Field_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Data_Field_Item */
/**
 * @summary The Trailing Root Component Types of Data_Field_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Data_Field_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Data_Field_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Data_Field_Item */
/**
 * @summary The Extension Addition Component Types of Data_Field_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Data_Field_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Data_Field_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Data_Field_Item */
let _cached_decoder_for_Data_Field_Item: $.ASN1Decoder<Data_Field_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Data_Field_Item */

/* START_OF_SYMBOL_DEFINITION _decode_Data_Field_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) Data_Field_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Data_Field_Item} The decoded data structure.
 */
export function _decode_Data_Field_Item(el: _Element) {
  if (!_cached_decoder_for_Data_Field_Item) {
    _cached_decoder_for_Data_Field_Item = function (
      el: _Element
    ): Data_Field_Item {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let field_type!: Data_Field_Item_field_type;
      let field_data: OPTIONAL<OCTET_STRING>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'field-type': (_el: _Element): void => {
          field_type = _decode_Data_Field_Item_field_type(_el);
        },
        'field-data': (_el: _Element): void => {
          field_data = $._decodeOctetString(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Data_Field_Item,
        _extension_additions_list_spec_for_Data_Field_Item,
        _root_component_type_list_2_spec_for_Data_Field_Item,
        undefined
      );
      return new Data_Field_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
        field_type,
        field_data
      );
    };
  }
  return _cached_decoder_for_Data_Field_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Data_Field_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Data_Field_Item */
let _cached_encoder_for_Data_Field_Item: $.ASN1Encoder<Data_Field_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Data_Field_Item */

/* START_OF_SYMBOL_DEFINITION _encode_Data_Field_Item */
/**
 * @summary Encodes a(n) Data_Field_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Data_Field_Item, encoded as an ASN.1 Element.
 */
export function _encode_Data_Field_Item(
  value: Data_Field_Item,
  elGetter: $.ASN1Encoder<Data_Field_Item>
) {
  if (!_cached_encoder_for_Data_Field_Item) {
    _cached_encoder_for_Data_Field_Item = function (
      value: Data_Field_Item,
      elGetter: $.ASN1Encoder<Data_Field_Item>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Data_Field_Item_field_type(
              value.field_type,
              $.BER
            ),
            /* IF_ABSENT  */ value.field_data === undefined
              ? undefined
              : $._encodeOctetString(value.field_data, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Data_Field_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Data_Field_Item */

/* eslint-enable */
