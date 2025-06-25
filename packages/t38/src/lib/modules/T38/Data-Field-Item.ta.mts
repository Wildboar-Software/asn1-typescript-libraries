/* eslint-disable */
import {
  OPTIONAL,
  OCTET_STRING,
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
import {
  Data_Field_Item_field_type,
  _enum_for_Data_Field_Item_field_type,
  _decode_Data_Field_Item_field_type,
  _encode_Data_Field_Item_field_type,
} from '../T38/Data-Field-Item-field-type.ta.mjs';

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
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'field-data',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of Data_Field_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Data_Field_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Data_Field_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Data_Field_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_Data_Field_Item: $.ASN1Decoder<Data_Field_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Data_Field_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Data_Field_Item} The decoded data structure.
 */
export function _decode_Data_Field_Item(el: _Element): Data_Field_Item {
  if (!_cached_decoder_for_Data_Field_Item) {
    _cached_decoder_for_Data_Field_Item = function (
      el: _Element
    ): Data_Field_Item {
      let field_type!: Data_Field_Item_field_type;
      let field_data: OPTIONAL<OCTET_STRING>;
      const callbacks: $.DecodingMap = {
        'field-type': (_el: _Element): void => {
          field_type = _decode_Data_Field_Item_field_type(_el);
        },
        'field-data': (_el: _Element): void => {
          field_data = $._decodeOctetString(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Data_Field_Item,
        _extension_additions_list_spec_for_Data_Field_Item,
        _root_component_type_list_2_spec_for_Data_Field_Item,
        undefined
      );
      return new Data_Field_Item (
        field_type,
        field_data
      );
    };
  }
  return _cached_decoder_for_Data_Field_Item(el);
}


let _cached_encoder_for_Data_Field_Item: $.ASN1Encoder<Data_Field_Item> | null = null;


/**
 * @summary Encodes a(n) Data_Field_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Data_Field_Item, encoded as an ASN.1 Element.
 */
export function _encode_Data_Field_Item(
  value: Data_Field_Item,
  elGetter: $.ASN1Encoder<Data_Field_Item>
): _Element {
  if (!_cached_encoder_for_Data_Field_Item) {
    _cached_encoder_for_Data_Field_Item = function (
      value: Data_Field_Item    ): _Element {
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


/* eslint-enable */
