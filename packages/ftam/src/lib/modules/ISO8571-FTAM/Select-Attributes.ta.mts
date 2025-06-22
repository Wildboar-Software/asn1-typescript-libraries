/* eslint-disable */
import {
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
import {
  Pathname_Attribute,
  _decode_Pathname_Attribute,
  _encode_Pathname_Attribute,
} from '../ISO8571-FTAM/Pathname-Attribute.ta.mjs';

/**
 * @summary Select_Attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Select-Attributes ::= [APPLICATION 19] IMPLICIT SEQUENCE {
 *   -- Kerne1 Group
 *   pathname  Pathname-Attribute
 * }
 * ```
 *
 * @class
 */
export class Select_Attributes {
  constructor(
    /**
     * @summary `pathname`.
     * @public
     * @readonly
     */
    readonly pathname: Pathname_Attribute
  ) {}

  /**
   * @summary Restructures an object into a Select_Attributes
   * @description
   *
   * This takes an `object` and converts it to a `Select_Attributes`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Select_Attributes`.
   * @returns {Select_Attributes}
   */
  public static _from_object(
    _o: { [_K in keyof Select_Attributes]: Select_Attributes[_K] }
  ): Select_Attributes {
    return new Select_Attributes(_o.pathname);
  }
}


/**
 * @summary The Leading Root Component Types of Select_Attributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Select_Attributes: $.ComponentSpec[] = [
  new $.ComponentSpec('pathname', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of Select_Attributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Select_Attributes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Select_Attributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Select_Attributes: $.ComponentSpec[] = [];


let _cached_decoder_for_Select_Attributes: $.ASN1Decoder<Select_Attributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Select_Attributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Select_Attributes} The decoded data structure.
 */
export function _decode_Select_Attributes(el: _Element) {
  if (!_cached_decoder_for_Select_Attributes) {
    _cached_decoder_for_Select_Attributes = $._decode_implicit<Select_Attributes>(
      () =>
        function (el: _Element): Select_Attributes {
          const sequence: _Element[] = el.sequence;
          if (sequence.length < 1) {
            throw new _ConstructionError(
              'Select-Attributes contained only ' +
                sequence.length.toString() +
                ' elements.'
            );
          }
          sequence[0].name = 'pathname';
          let pathname!: Pathname_Attribute;
          pathname = _decode_Pathname_Attribute(sequence[0]);
          return new Select_Attributes(pathname);
        }
    );
  }
  return _cached_decoder_for_Select_Attributes(el);
}


let _cached_encoder_for_Select_Attributes: $.ASN1Encoder<Select_Attributes> | null = null;


/**
 * @summary Encodes a(n) Select_Attributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Select_Attributes, encoded as an ASN.1 Element.
 */
export function _encode_Select_Attributes(
  value: Select_Attributes,
  elGetter: $.ASN1Encoder<Select_Attributes>
) {
  if (!_cached_encoder_for_Select_Attributes) {
    _cached_encoder_for_Select_Attributes = $._encode_implicit(
      _TagClass.application,
      19,
      () =>
        function (
          value: Select_Attributes        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat([
                /* REQUIRED   */ _encode_Pathname_Attribute(
                  value.pathname,
                  $.BER
                ),
              ])
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_Select_Attributes(value, elGetter);
}


/* eslint-enable */
