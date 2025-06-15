/* eslint-disable */
import {
  OPTIONAL,
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
  Abstract_syntax_name,
  _decode_Abstract_syntax_name,
  _encode_Abstract_syntax_name,
} from '../ACSE-1/Abstract-syntax-name.ta.mjs';
import {
  Transfer_syntax_name,
  _decode_Transfer_syntax_name,
  _encode_Transfer_syntax_name,
} from '../ACSE-1/Transfer-syntax-name.ta.mjs';
/**
 * @summary Default_Context_List_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Default-Context-List-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Default_Context_List_Item {
  constructor(
    /**
     * @summary `abstract_syntax_name`.
     * @public
     * @readonly
     */
    readonly abstract_syntax_name: OPTIONAL<Abstract_syntax_name>,
    /**
     * @summary `transfer_syntax_name`.
     * @public
     * @readonly
     */
    readonly transfer_syntax_name: Transfer_syntax_name
  ) {}

  /**
   * @summary Restructures an object into a Default_Context_List_Item
   * @description
   *
   * This takes an `object` and converts it to a `Default_Context_List_Item`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Default_Context_List_Item`.
   * @returns {Default_Context_List_Item}
   */
  public static _from_object(
    _o: {
      [_K in keyof Default_Context_List_Item]: Default_Context_List_Item[_K];
    }
  ): Default_Context_List_Item {
    return new Default_Context_List_Item(
      _o.abstract_syntax_name,
      _o.transfer_syntax_name
    );
  }
}

/**
 * @summary The Leading Root Component Types of Default_Context_List_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Default_Context_List_Item: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'abstract-syntax-name',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'transfer-syntax-name',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];

/**
 * @summary The Trailing Root Component Types of Default_Context_List_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Default_Context_List_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Default_Context_List_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Default_Context_List_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_Default_Context_List_Item: $.ASN1Decoder<Default_Context_List_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Default_Context_List_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Default_Context_List_Item} The decoded data structure.
 */
export function _decode_Default_Context_List_Item(el: _Element) {
  if (!_cached_decoder_for_Default_Context_List_Item) {
    _cached_decoder_for_Default_Context_List_Item = function (
      el: _Element
    ): Default_Context_List_Item {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let abstract_syntax_name: OPTIONAL<Abstract_syntax_name>;
      let transfer_syntax_name!: Transfer_syntax_name;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'abstract-syntax-name': (_el: _Element): void => {
          abstract_syntax_name = $._decode_implicit<Abstract_syntax_name>(
            () => _decode_Abstract_syntax_name
          )(_el);
        },
        'transfer-syntax-name': (_el: _Element): void => {
          transfer_syntax_name = $._decode_implicit<Transfer_syntax_name>(
            () => _decode_Transfer_syntax_name
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Default_Context_List_Item,
        _extension_additions_list_spec_for_Default_Context_List_Item,
        _root_component_type_list_2_spec_for_Default_Context_List_Item,
        undefined
      );
      return new Default_Context_List_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
        abstract_syntax_name,
        transfer_syntax_name
      );
    };
  }
  return _cached_decoder_for_Default_Context_List_Item(el);
}

let _cached_encoder_for_Default_Context_List_Item: $.ASN1Encoder<Default_Context_List_Item> | null = null;

/**
 * @summary Encodes a(n) Default_Context_List_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Default_Context_List_Item, encoded as an ASN.1 Element.
 */
export function _encode_Default_Context_List_Item(
  value: Default_Context_List_Item,
  elGetter: $.ASN1Encoder<Default_Context_List_Item>
) {
  if (!_cached_encoder_for_Default_Context_List_Item) {
    _cached_encoder_for_Default_Context_List_Item = function (
      value: Default_Context_List_Item    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.abstract_syntax_name === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () => _encode_Abstract_syntax_name,
                  $.BER
                )(value.abstract_syntax_name, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              1,
              () => _encode_Transfer_syntax_name,
              $.BER
            )(value.transfer_syntax_name, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Default_Context_List_Item(value, elGetter);
}


/* eslint-enable */
