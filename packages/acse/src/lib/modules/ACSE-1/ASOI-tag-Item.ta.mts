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
  ASO_qualifier,
  _decode_ASO_qualifier,
  _encode_ASO_qualifier,
} from '../ACSE-1/ASO-qualifier.ta.mjs';
import {
  ASOI_identifier,
  _decode_ASOI_identifier,
  _encode_ASOI_identifier,
} from '../ACSE-1/ASOI-identifier.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ASOI_tag_Item */
/**
 * @summary ASOI_tag_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASOI-tag-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ASOI_tag_Item {
  constructor(
    /**
     * @summary `qualifier`.
     * @public
     * @readonly
     */
    readonly qualifier: OPTIONAL<ASO_qualifier>,
    /**
     * @summary `identifier`.
     * @public
     * @readonly
     */
    readonly identifier: OPTIONAL<ASOI_identifier>
  ) {}

  /**
   * @summary Restructures an object into a ASOI_tag_Item
   * @description
   *
   * This takes an `object` and converts it to a `ASOI_tag_Item`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ASOI_tag_Item`.
   * @returns {ASOI_tag_Item}
   */
  public static _from_object(
    _o: { [_K in keyof ASOI_tag_Item]: ASOI_tag_Item[_K] }
  ): ASOI_tag_Item {
    return new ASOI_tag_Item(_o.qualifier, _o.identifier);
  }
}
/* END_OF_SYMBOL_DEFINITION ASOI_tag_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ASOI_tag_Item */
/**
 * @summary The Leading Root Component Types of ASOI_tag_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ASOI_tag_Item: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'qualifier',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'identifier',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ASOI_tag_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ASOI_tag_Item */
/**
 * @summary The Trailing Root Component Types of ASOI_tag_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ASOI_tag_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ASOI_tag_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ASOI_tag_Item */
/**
 * @summary The Extension Addition Component Types of ASOI_tag_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ASOI_tag_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ASOI_tag_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ASOI_tag_Item */
let _cached_decoder_for_ASOI_tag_Item: $.ASN1Decoder<ASOI_tag_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ASOI_tag_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ASOI_tag_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ASOI_tag_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ASOI_tag_Item} The decoded data structure.
 */
export function _decode_ASOI_tag_Item(el: _Element) {
  if (!_cached_decoder_for_ASOI_tag_Item) {
    _cached_decoder_for_ASOI_tag_Item = function (el: _Element): ASOI_tag_Item {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let qualifier: OPTIONAL<ASO_qualifier>;
      let identifier: OPTIONAL<ASOI_identifier>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        qualifier: (_el: _Element): void => {
          qualifier = $._decode_explicit<ASO_qualifier>(
            () => _decode_ASO_qualifier
          )(_el);
        },
        identifier: (_el: _Element): void => {
          identifier = $._decode_explicit<ASOI_identifier>(
            () => _decode_ASOI_identifier
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ASOI_tag_Item,
        _extension_additions_list_spec_for_ASOI_tag_Item,
        _root_component_type_list_2_spec_for_ASOI_tag_Item,
        undefined
      );
      return new ASOI_tag_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
        qualifier,
        identifier
      );
    };
  }
  return _cached_decoder_for_ASOI_tag_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ASOI_tag_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ASOI_tag_Item */
let _cached_encoder_for_ASOI_tag_Item: $.ASN1Encoder<ASOI_tag_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ASOI_tag_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ASOI_tag_Item */
/**
 * @summary Encodes a(n) ASOI_tag_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASOI_tag_Item, encoded as an ASN.1 Element.
 */
export function _encode_ASOI_tag_Item(
  value: ASOI_tag_Item,
  elGetter: $.ASN1Encoder<ASOI_tag_Item>
) {
  if (!_cached_encoder_for_ASOI_tag_Item) {
    _cached_encoder_for_ASOI_tag_Item = function (
      value: ASOI_tag_Item    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.qualifier === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  0,
                  () => _encode_ASO_qualifier,
                  $.BER
                )(value.qualifier, $.BER),
            /* IF_ABSENT  */ value.identifier === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => _encode_ASOI_identifier,
                  $.BER
                )(value.identifier, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ASOI_tag_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ASOI_tag_Item */

/* eslint-enable */
