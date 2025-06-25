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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '../CMIP-1/AttributeId.ta.mjs';


/**
 * @summary Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute ::= SEQUENCE {
 *   id     CMIP-ATTRIBUTE.&id({AttributeSet}),
 *   value  CMIP-ATTRIBUTE.&Value({AttributeSet}{@.id})
 * }
 * ```
 *
 * @class
 */
export class Attribute {
  constructor(
    /**
     * @summary `id`.
     * @public
     * @readonly
     */
    readonly id: AttributeId,
    /**
     * @summary `value`.
     * @public
     * @readonly
     */
    readonly value: _Element
  ) {}

  /**
   * @summary Restructures an object into a Attribute
   * @description
   *
   * This takes an `object` and converts it to a `Attribute`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Attribute`.
   * @returns {Attribute}
   */
  public static _from_object(
    _o: { [_K in keyof Attribute]: Attribute[_K] }
  ): Attribute {
    return new Attribute(_o.id, _o.value);
  }
}


/**
 * @summary The Leading Root Component Types of Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Attribute: $.ComponentSpec[] = [
  new $.ComponentSpec('id', false, $.hasAnyTag),
  new $.ComponentSpec('value', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Attribute: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Attribute: $.ComponentSpec[] = [];


let _cached_decoder_for_Attribute: $.ASN1Decoder<Attribute> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute} The decoded data structure.
 */
export function _decode_Attribute(el: _Element): Attribute {
  if (!_cached_decoder_for_Attribute) {
    _cached_decoder_for_Attribute = function (el: _Element): Attribute {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Attribute contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'id';
      sequence[1].name = 'value';
      let id!: AttributeId;
      let value!: _Element;
      id = _decode_AttributeId(sequence[0]);
      value = $._decodeAny(sequence[1]);
      return new Attribute(id, value);
    };
  }
  return _cached_decoder_for_Attribute(el);
}


let _cached_encoder_for_Attribute: $.ASN1Encoder<Attribute> | null = null;


/**
 * @summary Encodes a(n) Attribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Attribute(
  value: Attribute,
  elGetter: $.ASN1Encoder<Attribute>
): _Element {
  if (!_cached_encoder_for_Attribute) {
    _cached_encoder_for_Attribute = function (
      value: Attribute    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_AttributeId(value.id, $.BER),
            /* REQUIRED   */ $._encodeAny(value.value, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Attribute(value, elGetter);
}


/* eslint-enable */
