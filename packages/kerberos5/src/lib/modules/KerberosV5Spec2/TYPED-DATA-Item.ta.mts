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
  Int32,
  _decode_Int32,
  _encode_Int32,
} from '../KerberosV5Spec2/Int32.ta.mjs';

/**
 * @summary TYPED_DATA_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TYPED-DATA-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class TYPED_DATA_Item {
  constructor(
    /**
     * @summary `data_type`.
     * @public
     * @readonly
     */
    readonly data_type: Int32,
    /**
     * @summary `data_value`.
     * @public
     * @readonly
     */
    readonly data_value: OPTIONAL<OCTET_STRING>
  ) {}

  /**
   * @summary Restructures an object into a TYPED_DATA_Item
   * @description
   *
   * This takes an `object` and converts it to a `TYPED_DATA_Item`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `TYPED_DATA_Item`.
   * @returns {TYPED_DATA_Item}
   */
  public static _from_object(
    _o: { [_K in keyof TYPED_DATA_Item]: TYPED_DATA_Item[_K] }
  ): TYPED_DATA_Item {
    return new TYPED_DATA_Item(_o.data_type, _o.data_value);
  }
}


/**
 * @summary The Leading Root Component Types of TYPED_DATA_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TYPED_DATA_Item: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'data-type',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'data-value',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of TYPED_DATA_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TYPED_DATA_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of TYPED_DATA_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TYPED_DATA_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_TYPED_DATA_Item: $.ASN1Decoder<TYPED_DATA_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TYPED_DATA_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TYPED_DATA_Item} The decoded data structure.
 */
export function _decode_TYPED_DATA_Item(el: _Element) {
  if (!_cached_decoder_for_TYPED_DATA_Item) {
    _cached_decoder_for_TYPED_DATA_Item = function (
      el: _Element
    ): TYPED_DATA_Item {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let data_type!: Int32;
      let data_value: OPTIONAL<OCTET_STRING>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'data-type': (_el: _Element): void => {
          data_type = $._decode_explicit<Int32>(() => _decode_Int32)(_el);
        },
        'data-value': (_el: _Element): void => {
          data_value = $._decode_explicit<OCTET_STRING>(
            () => $._decodeOctetString
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_TYPED_DATA_Item,
        _extension_additions_list_spec_for_TYPED_DATA_Item,
        _root_component_type_list_2_spec_for_TYPED_DATA_Item,
        undefined
      );
      return new TYPED_DATA_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
        data_type,
        data_value
      );
    };
  }
  return _cached_decoder_for_TYPED_DATA_Item(el);
}


let _cached_encoder_for_TYPED_DATA_Item: $.ASN1Encoder<TYPED_DATA_Item> | null = null;


/**
 * @summary Encodes a(n) TYPED_DATA_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TYPED_DATA_Item, encoded as an ASN.1 Element.
 */
export function _encode_TYPED_DATA_Item(
  value: TYPED_DATA_Item,
  elGetter: $.ASN1Encoder<TYPED_DATA_Item>
) {
  if (!_cached_encoder_for_TYPED_DATA_Item) {
    _cached_encoder_for_TYPED_DATA_Item = function (
      value: TYPED_DATA_Item    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => _encode_Int32,
              $.DER
            )(value.data_type, $.DER),
            /* IF_ABSENT  */ value.data_value === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => $._encodeOctetString,
                  $.DER
                )(value.data_value, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_TYPED_DATA_Item(value, elGetter);
}


/* eslint-enable */
