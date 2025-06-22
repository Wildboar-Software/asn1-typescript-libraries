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
import * as $ from '@wildboar/asn1/functional';
import {
  NamespaceAttribute,
  _decode_NamespaceAttribute,
  _encode_NamespaceAttribute,
} from '../FastInfoset/NamespaceAttribute.ta.mjs';
import {
  QualifiedNameOrIndex,
  _decode_QualifiedNameOrIndex,
  _encode_QualifiedNameOrIndex,
} from '../FastInfoset/QualifiedNameOrIndex.ta.mjs';
import {
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../FastInfoset/Attribute.ta.mjs';
import {
  Element_children_Item,
  _decode_Element_children_Item,
  _encode_Element_children_Item,
} from '../FastInfoset/Element-children-Item.ta.mjs';
/**
 * @summary Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Element ::= SEQUENCE {
 *   namespace-attributes  SEQUENCE (SIZE (1..MAX)) OF NamespaceAttribute OPTIONAL,
 *   qualified-name        QualifiedNameOrIndex-- ELEMENT NAME category --,
 *   attributes            SEQUENCE (SIZE (1..MAX)) OF Attribute OPTIONAL,
 *   children
 *     SEQUENCE (SIZE (0..MAX)) OF
 *       CHOICE {element                      Element,
 *               processing-instruction       ProcessingInstruction,
 *               unexpanded-entity-reference  UnexpandedEntityReference,
 *               character-chunk              CharacterChunk,
 *               comment                      Comment}
 * }
 * ```
 *
 * @class
 */
export class Element {
  constructor(
    /**
     * @summary `namespace_attributes`.
     * @public
     * @readonly
     */
    readonly namespace_attributes: OPTIONAL<NamespaceAttribute[]>,
    /**
     * @summary `qualified_name`.
     * @public
     * @readonly
     */
    readonly qualified_name: QualifiedNameOrIndex,
    /**
     * @summary `attributes`.
     * @public
     * @readonly
     */
    readonly attributes: OPTIONAL<Attribute[]>,
    /**
     * @summary `children`.
     * @public
     * @readonly
     */
    readonly children: Element_children_Item[]
  ) {}

  /**
   * @summary Restructures an object into a Element
   * @description
   *
   * This takes an `object` and converts it to a `Element`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Element`.
   * @returns {Element}
   */
  public static _from_object(
    _o: { [_K in keyof Element]: Element[_K] }
  ): Element {
    return new Element(
      _o.namespace_attributes,
      _o.qualified_name,
      _o.attributes,
      _o.children
    );
  }
}

/**
 * @summary The Leading Root Component Types of Element
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Element: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'namespace-attributes',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'qualified-name',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'attributes',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'children',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
];

/**
 * @summary The Trailing Root Component Types of Element
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Element: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Element
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Element: $.ComponentSpec[] = [];

let _cached_decoder_for_Element: $.ASN1Decoder<Element> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Element
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Element} The decoded data structure.
 */
export function _decode_Element(el: _Element) {
  if (!_cached_decoder_for_Element) {
    _cached_decoder_for_Element = function (el: _Element): Element {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let namespace_attributes: OPTIONAL<NamespaceAttribute[]>;
      let qualified_name!: QualifiedNameOrIndex;
      let attributes: OPTIONAL<Attribute[]>;
      let children!: Element_children_Item[];
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'namespace-attributes': (_el: _Element): void => {
          namespace_attributes = $._decodeSequenceOf<NamespaceAttribute>(
            () => _decode_NamespaceAttribute
          )(_el);
        },
        'qualified-name': (_el: _Element): void => {
          qualified_name = _decode_QualifiedNameOrIndex(_el);
        },
        attributes: (_el: _Element): void => {
          attributes = $._decodeSequenceOf<Attribute>(() => _decode_Attribute)(
            _el
          );
        },
        children: (_el: _Element): void => {
          children = $._decodeSequenceOf<Element_children_Item>(
            () => _decode_Element_children_Item
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Element,
        _extension_additions_list_spec_for_Element,
        _root_component_type_list_2_spec_for_Element,
        undefined
      );
      return new Element /* SEQUENCE_CONSTRUCTOR_CALL */(
        namespace_attributes,
        qualified_name,
        attributes,
        children
      );
    };
  }
  return _cached_decoder_for_Element(el);
}

let _cached_encoder_for_Element: $.ASN1Encoder<Element> | null = null;

/**
 * @summary Encodes a(n) Element into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Element, encoded as an ASN.1 Element.
 */
export function _encode_Element(
  value: Element,
  elGetter: $.ASN1Encoder<Element>
) {
  if (!_cached_encoder_for_Element) {
    _cached_encoder_for_Element = function (
      value: Element    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.namespace_attributes === undefined
              ? undefined
              : $._encodeSequenceOf<NamespaceAttribute>(
                  () => _encode_NamespaceAttribute,
                  $.BER
                )(value.namespace_attributes, $.BER),
            /* REQUIRED   */ _encode_QualifiedNameOrIndex(
              value.qualified_name,
              $.BER
            ),
            /* IF_ABSENT  */ value.attributes === undefined
              ? undefined
              : $._encodeSequenceOf<Attribute>(() => _encode_Attribute, $.BER)(
                  value.attributes,
                  $.BER
                ),
            /* REQUIRED   */ $._encodeSequenceOf<Element_children_Item>(
              () => _encode_Element_children_Item,
              $.BER
            )(value.children, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Element(value, elGetter);
}


/* eslint-enable */
