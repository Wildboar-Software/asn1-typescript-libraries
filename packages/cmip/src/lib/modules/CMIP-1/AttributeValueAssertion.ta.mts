/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
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

/**
 * @summary AttributeValueAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeValueAssertion ::= SEQUENCE {
 *   id     CMIP-AVA.&id({AvaSet}),
 *   value  CMIP-AVA.&Value({AvaSet}{@.id})
 * }
 * ```
 *
 */
export class AttributeValueAssertion {
  constructor(
    /**
     * @summary `id`.
     * @public
     * @readonly
     */
    readonly id: OBJECT_IDENTIFIER,
    /**
     * @summary `value`.
     * @public
     * @readonly
     */
    readonly value: _Element
  ) {}

  /**
   * @summary Restructures an object into a AttributeValueAssertion
   * @description
   *
   * This takes an `object` and converts it to a `AttributeValueAssertion`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AttributeValueAssertion`.
   * @returns {AttributeValueAssertion}
   */
  public static _from_object(
    _o: { [_K in keyof AttributeValueAssertion]: AttributeValueAssertion[_K] }
  ): AttributeValueAssertion {
    return new AttributeValueAssertion(_o.id, _o.value);
  }
}


/**
 * @summary The Leading Root Component Types of AttributeValueAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'id',
    false,
    $.hasTag(_TagClass.universal, 6)
  ),
  new $.ComponentSpec('value', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of AttributeValueAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AttributeValueAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [];


let _cached_decoder_for_AttributeValueAssertion: $.ASN1Decoder<AttributeValueAssertion> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValueAssertion} The decoded data structure.
 */
export function _decode_AttributeValueAssertion(el: _Element): AttributeValueAssertion {
  if (!_cached_decoder_for_AttributeValueAssertion) {
    _cached_decoder_for_AttributeValueAssertion = function (
      el: _Element
    ): AttributeValueAssertion {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'AttributeValueAssertion contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'id';
      sequence[1].name = 'value';
      let id!: OBJECT_IDENTIFIER;
      let value!: _Element;
      id = $._decodeObjectIdentifier(sequence[0]);
      value = $._decodeAny(sequence[1]);
      return new AttributeValueAssertion(id, value);
    };
  }
  return _cached_decoder_for_AttributeValueAssertion(el);
}


let _cached_encoder_for_AttributeValueAssertion: $.ASN1Encoder<AttributeValueAssertion> | null = null;


/**
 * @summary Encodes a(n) AttributeValueAssertion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueAssertion, encoded as an ASN.1 Element.
 */
export function _encode_AttributeValueAssertion(
  value: AttributeValueAssertion,
  elGetter: $.ASN1Encoder<AttributeValueAssertion>
): _Element {
  if (!_cached_encoder_for_AttributeValueAssertion) {
    _cached_encoder_for_AttributeValueAssertion = function (
      value: AttributeValueAssertion    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(value.id, $.BER),
            /* REQUIRED   */ $._encodeAny(value.value, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_AttributeValueAssertion(value, elGetter);
}


/* eslint-enable */
