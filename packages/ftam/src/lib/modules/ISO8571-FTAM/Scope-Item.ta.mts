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
  Pathname_Attribute,
  _decode_Pathname_Attribute,
  _encode_Pathname_Attribute,
} from '../ISO8571-FTAM/Pathname-Attribute.ta.mjs';
import {
  Scope_Item_retrieval_scope,
  _decode_Scope_Item_retrieval_scope,
  _encode_Scope_Item_retrieval_scope,
} from '../ISO8571-FTAM/Scope-Item-retrieval-scope.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Scope_Item */
/**
 * @summary Scope_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Scope-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Scope_Item {
  constructor(
    /**
     * @summary `root_directory`.
     * @public
     * @readonly
     */
    readonly root_directory: OPTIONAL<Pathname_Attribute>,
    /**
     * @summary `retrieval_scope`.
     * @public
     * @readonly
     */
    readonly retrieval_scope: Scope_Item_retrieval_scope
  ) {}

  /**
   * @summary Restructures an object into a Scope_Item
   * @description
   *
   * This takes an `object` and converts it to a `Scope_Item`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Scope_Item`.
   * @returns {Scope_Item}
   */
  public static _from_object(
    _o: { [_K in keyof Scope_Item]: Scope_Item[_K] }
  ): Scope_Item {
    return new Scope_Item(_o.root_directory, _o.retrieval_scope);
  }
}
/* END_OF_SYMBOL_DEFINITION Scope_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Scope_Item */
/**
 * @summary The Leading Root Component Types of Scope_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Scope_Item: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'root-directory',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'retrieval-scope',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Scope_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Scope_Item */
/**
 * @summary The Trailing Root Component Types of Scope_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Scope_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Scope_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Scope_Item */
/**
 * @summary The Extension Addition Component Types of Scope_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Scope_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Scope_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Scope_Item */
let _cached_decoder_for_Scope_Item: $.ASN1Decoder<Scope_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Scope_Item */

/* START_OF_SYMBOL_DEFINITION _decode_Scope_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) Scope_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Scope_Item} The decoded data structure.
 */
export function _decode_Scope_Item(el: _Element) {
  if (!_cached_decoder_for_Scope_Item) {
    _cached_decoder_for_Scope_Item = function (el: _Element): Scope_Item {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let root_directory: OPTIONAL<Pathname_Attribute>;
      let retrieval_scope!: Scope_Item_retrieval_scope;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'root-directory': (_el: _Element): void => {
          root_directory = $._decode_explicit<Pathname_Attribute>(
            () => _decode_Pathname_Attribute
          )(_el);
        },
        'retrieval-scope': (_el: _Element): void => {
          retrieval_scope = $._decode_implicit<Scope_Item_retrieval_scope>(
            () => _decode_Scope_Item_retrieval_scope
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Scope_Item,
        _extension_additions_list_spec_for_Scope_Item,
        _root_component_type_list_2_spec_for_Scope_Item,
        undefined
      );
      return new Scope_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
        root_directory,
        retrieval_scope
      );
    };
  }
  return _cached_decoder_for_Scope_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Scope_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Scope_Item */
let _cached_encoder_for_Scope_Item: $.ASN1Encoder<Scope_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Scope_Item */

/* START_OF_SYMBOL_DEFINITION _encode_Scope_Item */
/**
 * @summary Encodes a(n) Scope_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Scope_Item, encoded as an ASN.1 Element.
 */
export function _encode_Scope_Item(
  value: Scope_Item,
  elGetter: $.ASN1Encoder<Scope_Item>
) {
  if (!_cached_encoder_for_Scope_Item) {
    _cached_encoder_for_Scope_Item = function (
      value: Scope_Item    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.root_directory === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  0,
                  () => _encode_Pathname_Attribute,
                  $.BER
                )(value.root_directory, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              1,
              () => _encode_Scope_Item_retrieval_scope,
              $.BER
            )(value.retrieval_scope, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Scope_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Scope_Item */

/* eslint-enable */
