/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
  NamespaceAttribute,
  _decode_NamespaceAttribute,
  _encode_NamespaceAttribute,
} from '../FastInfoset/NamespaceAttribute.ta';
export {
  NamespaceAttribute,
  _decode_NamespaceAttribute,
  _encode_NamespaceAttribute,
} from '../FastInfoset/NamespaceAttribute.ta';
import {
  QualifiedNameOrIndex,
  _decode_QualifiedNameOrIndex,
  _encode_QualifiedNameOrIndex,
} from '../FastInfoset/QualifiedNameOrIndex.ta';
export {
  QualifiedNameOrIndex,
  _decode_QualifiedNameOrIndex,
  _encode_QualifiedNameOrIndex,
} from '../FastInfoset/QualifiedNameOrIndex.ta';
import {
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../FastInfoset/Attribute.ta';
export {
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../FastInfoset/Attribute.ta';
import {
  Element_children_Item,
  _decode_Element_children_Item,
  _encode_Element_children_Item,
} from '../FastInfoset/Element-children-Item.ta';
export {
  Element_children_Item,
  _decode_Element_children_Item,
  _encode_Element_children_Item,
} from '../FastInfoset/Element-children-Item.ta';

/* START_OF_SYMBOL_DEFINITION Element */
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
/* END_OF_SYMBOL_DEFINITION Element */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Element */
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
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'qualified-name',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'attributes',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'children',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Element */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Element */
/**
 * @summary The Trailing Root Component Types of Element
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Element: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Element */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Element */
/**
 * @summary The Extension Addition Component Types of Element
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Element: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Element */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Element */
let _cached_decoder_for_Element: $.ASN1Decoder<Element> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Element */

/* START_OF_SYMBOL_DEFINITION _decode_Element */
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
/* END_OF_SYMBOL_DEFINITION _decode_Element */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Element */
let _cached_encoder_for_Element: $.ASN1Encoder<Element> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Element */

/* START_OF_SYMBOL_DEFINITION _encode_Element */
/**
 * @summary Encodes a(n) Element into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Element, encoded as an ASN.1 Element.
 */
export function _encode_Element(
  value: Element,
  elGetter: $.ASN1Encoder<Element>
) {
  if (!_cached_encoder_for_Element) {
    _cached_encoder_for_Element = function (
      value: Element,
      elGetter: $.ASN1Encoder<Element>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_Element */

/* eslint-enable */
