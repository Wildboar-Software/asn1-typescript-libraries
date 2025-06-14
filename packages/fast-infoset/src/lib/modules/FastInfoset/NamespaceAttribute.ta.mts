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
  IdentifyingStringOrIndex,
  _decode_IdentifyingStringOrIndex,
  _encode_IdentifyingStringOrIndex,
} from '../FastInfoset/IdentifyingStringOrIndex.ta.mjs';
/* START_OF_SYMBOL_DEFINITION NamespaceAttribute */
/**
 * @summary NamespaceAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamespaceAttribute ::= SEQUENCE {
 *   prefix          IdentifyingStringOrIndex OPTIONAL-- PREFIX category --,
 *   namespace-name  IdentifyingStringOrIndex OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class NamespaceAttribute {
  constructor(
    /**
     * @summary `prefix`.
     * @public
     * @readonly
     */
    readonly prefix: OPTIONAL<IdentifyingStringOrIndex>,
    /**
     * @summary `namespace_name`.
     * @public
     * @readonly
     */
    readonly namespace_name: OPTIONAL<IdentifyingStringOrIndex>
  ) {}

  /**
   * @summary Restructures an object into a NamespaceAttribute
   * @description
   *
   * This takes an `object` and converts it to a `NamespaceAttribute`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `NamespaceAttribute`.
   * @returns {NamespaceAttribute}
   */
  public static _from_object(
    _o: { [_K in keyof NamespaceAttribute]: NamespaceAttribute[_K] }
  ): NamespaceAttribute {
    return new NamespaceAttribute(_o.prefix, _o.namespace_name);
  }
}
/* END_OF_SYMBOL_DEFINITION NamespaceAttribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NamespaceAttribute */
/**
 * @summary The Leading Root Component Types of NamespaceAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NamespaceAttribute: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'prefix',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'namespace-name',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NamespaceAttribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NamespaceAttribute */
/**
 * @summary The Trailing Root Component Types of NamespaceAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NamespaceAttribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NamespaceAttribute */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NamespaceAttribute */
/**
 * @summary The Extension Addition Component Types of NamespaceAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NamespaceAttribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NamespaceAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NamespaceAttribute */
let _cached_decoder_for_NamespaceAttribute: $.ASN1Decoder<NamespaceAttribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NamespaceAttribute */

/* START_OF_SYMBOL_DEFINITION _decode_NamespaceAttribute */
/**
 * @summary Decodes an ASN.1 element into a(n) NamespaceAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NamespaceAttribute} The decoded data structure.
 */
export function _decode_NamespaceAttribute(el: _Element) {
  if (!_cached_decoder_for_NamespaceAttribute) {
    _cached_decoder_for_NamespaceAttribute = function (
      el: _Element
    ): NamespaceAttribute {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let prefix: OPTIONAL<IdentifyingStringOrIndex>;
      let namespace_name: OPTIONAL<IdentifyingStringOrIndex>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        prefix: (_el: _Element): void => {
          prefix = _decode_IdentifyingStringOrIndex(_el);
        },
        'namespace-name': (_el: _Element): void => {
          namespace_name = _decode_IdentifyingStringOrIndex(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_NamespaceAttribute,
        _extension_additions_list_spec_for_NamespaceAttribute,
        _root_component_type_list_2_spec_for_NamespaceAttribute,
        undefined
      );
      return new NamespaceAttribute /* SEQUENCE_CONSTRUCTOR_CALL */(
        prefix,
        namespace_name
      );
    };
  }
  return _cached_decoder_for_NamespaceAttribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NamespaceAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NamespaceAttribute */
let _cached_encoder_for_NamespaceAttribute: $.ASN1Encoder<NamespaceAttribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NamespaceAttribute */

/* START_OF_SYMBOL_DEFINITION _encode_NamespaceAttribute */
/**
 * @summary Encodes a(n) NamespaceAttribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamespaceAttribute, encoded as an ASN.1 Element.
 */
export function _encode_NamespaceAttribute(
  value: NamespaceAttribute,
  elGetter: $.ASN1Encoder<NamespaceAttribute>
) {
  if (!_cached_encoder_for_NamespaceAttribute) {
    _cached_encoder_for_NamespaceAttribute = function (
      value: NamespaceAttribute    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.prefix === undefined
              ? undefined
              : _encode_IdentifyingStringOrIndex(value.prefix, $.BER),
            /* IF_ABSENT  */ value.namespace_name === undefined
              ? undefined
              : _encode_IdentifyingStringOrIndex(value.namespace_name, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_NamespaceAttribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NamespaceAttribute */

/* eslint-enable */
