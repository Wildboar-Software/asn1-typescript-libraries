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
 * @summary Extension_Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Extension-Attribute ::= SEQUENCE {
 *   extension-attribute-identifier
 *     TYPE-IDENTIFIER.&id({Extension-Attributes}),
 *   extension-attribute
 *     TYPE-IDENTIFIER.&Type
 *       ({Extension-Attributes}{@extension-attribute-identifier})
 * }
 * ```
 *
 */
export class Extension_Attribute {
  constructor(
    /**
     * @summary `extension_attribute_identifier`.
     * @public
     * @readonly
     */
    readonly extension_attribute_identifier: OBJECT_IDENTIFIER,
    /**
     * @summary `extension_attribute`.
     * @public
     * @readonly
     */
    readonly extension_attribute: _Element
  ) {}

  /**
   * @summary Restructures an object into a Extension_Attribute
   * @description
   *
   * This takes an `object` and converts it to a `Extension_Attribute`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Extension_Attribute`.
   * @returns {Extension_Attribute}
   */
  public static _from_object(
    _o: { [_K in keyof Extension_Attribute]: Extension_Attribute[_K] }
  ): Extension_Attribute {
    return new Extension_Attribute(
      _o.extension_attribute_identifier,
      _o.extension_attribute
    );
  }
}


/**
 * @summary The Leading Root Component Types of Extension_Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Extension_Attribute: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'extension-attribute-identifier',
    false,
    $.hasTag(_TagClass.universal, 6)
  ),
  new $.ComponentSpec(
    'extension-attribute',
    false,
    $.hasAnyTag
  ),
];


/**
 * @summary The Trailing Root Component Types of Extension_Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Extension_Attribute: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Extension_Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Extension_Attribute: $.ComponentSpec[] = [];


let _cached_decoder_for_Extension_Attribute: $.ASN1Decoder<Extension_Attribute> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Extension_Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Extension_Attribute} The decoded data structure.
 */
export function _decode_Extension_Attribute(el: _Element): Extension_Attribute {
  if (!_cached_decoder_for_Extension_Attribute) {
    _cached_decoder_for_Extension_Attribute = function (
      el: _Element
    ): Extension_Attribute {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Extension-Attribute contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'extension-attribute-identifier';
      sequence[1].name = 'extension-attribute';
      let extension_attribute_identifier!: OBJECT_IDENTIFIER;
      let extension_attribute!: _Element;
      extension_attribute_identifier = $._decodeObjectIdentifier(sequence[0]);
      extension_attribute = $._decodeAny(sequence[1]);
      return new Extension_Attribute(
        extension_attribute_identifier,
        extension_attribute
      );
    };
  }
  return _cached_decoder_for_Extension_Attribute(el);
}


let _cached_encoder_for_Extension_Attribute: $.ASN1Encoder<Extension_Attribute> | null = null;


/**
 * @summary Encodes a(n) Extension_Attribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Extension_Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Extension_Attribute(
  value: Extension_Attribute,
  elGetter: $.ASN1Encoder<Extension_Attribute>
): _Element {
  if (!_cached_encoder_for_Extension_Attribute) {
    _cached_encoder_for_Extension_Attribute = function (
      value: Extension_Attribute    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(
              value.extension_attribute_identifier,
              $.BER
            ),
            /* REQUIRED   */ $._encodeAny(value.extension_attribute, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Extension_Attribute(value, elGetter);
}


/* eslint-enable */
