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
  AttributeDescription,
  _decode_AttributeDescription,
  _encode_AttributeDescription,
} from '../Lightweight-Directory-Access-Protocol-V3/AttributeDescription.ta';
export {
  AttributeDescription,
  _decode_AttributeDescription,
  _encode_AttributeDescription,
} from '../Lightweight-Directory-Access-Protocol-V3/AttributeDescription.ta';
import {
  SubstringFilter_substrings_substring,
  _decode_SubstringFilter_substrings_substring,
  _encode_SubstringFilter_substrings_substring,
} from '../Lightweight-Directory-Access-Protocol-V3/SubstringFilter-substrings-substring.ta';
export {
  SubstringFilter_substrings_substring,
  _decode_SubstringFilter_substrings_substring,
  _encode_SubstringFilter_substrings_substring,
} from '../Lightweight-Directory-Access-Protocol-V3/SubstringFilter-substrings-substring.ta';

/* START_OF_SYMBOL_DEFINITION SubstringFilter */
/**
 * @summary SubstringFilter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringFilter ::= SEQUENCE {
 *   type        AttributeDescription,
 *   substrings
 *     SEQUENCE SIZE (1..MAX) OF substring
 *       CHOICE {initial  [0]  AssertionValue, -- can occur at most once--
 *               any      [1]  AssertionValue,
 *               final    [2]  AssertionValue} -- can occur at most once
 * }
 * ```
 *
 * @class
 */
export class SubstringFilter {
  constructor(
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    readonly type_: AttributeDescription,
    /**
     * @summary `substrings`.
     * @public
     * @readonly
     */
    readonly substrings: SubstringFilter_substrings_substring[],
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a SubstringFilter
   * @description
   *
   * This takes an `object` and converts it to a `SubstringFilter`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SubstringFilter`.
   * @returns {SubstringFilter}
   */
  public static _from_object(
    _o: { [_K in keyof SubstringFilter]: SubstringFilter[_K] }
  ): SubstringFilter {
    return new SubstringFilter(
      _o.type_,
      _o.substrings,
      _o._unrecognizedExtensionsList
    );
  }
}
/* END_OF_SYMBOL_DEFINITION SubstringFilter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SubstringFilter */
/**
 * @summary The Leading Root Component Types of SubstringFilter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubstringFilter: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'type',
    false,
    $.hasTag(_TagClass.universal, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'substrings',
    false,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SubstringFilter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SubstringFilter */
/**
 * @summary The Trailing Root Component Types of SubstringFilter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubstringFilter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SubstringFilter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SubstringFilter */
/**
 * @summary The Extension Addition Component Types of SubstringFilter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubstringFilter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SubstringFilter */

/* START_OF_SYMBOL_DEFINITION _decode_SubstringFilter */
/**
 * @summary Decodes an ASN.1 element into a(n) SubstringFilter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubstringFilter} The decoded data structure.
 */
export function _decode_SubstringFilter(el: _Element) {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError(
            'SubstringFilter contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
    }
    sequence[0].name = 'type';
    sequence[1].name = 'substrings';
    let type_!: AttributeDescription;
    let substrings!: SubstringFilter_substrings_substring[];
    type_ = _decode_AttributeDescription(sequence[0]);
    substrings = $._decodeSequenceOf<SubstringFilter_substrings_substring>(
      () => _decode_SubstringFilter_substrings_substring
    )(sequence[1]);
    return new SubstringFilter(type_, substrings, sequence.slice(2));
}
/* END_OF_SYMBOL_DEFINITION _decode_SubstringFilter */

/* START_OF_SYMBOL_DEFINITION _encode_SubstringFilter */
/**
 * @summary Encodes a(n) SubstringFilter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubstringFilter, encoded as an ASN.1 Element.
 */
export function _encode_SubstringFilter(
  value: SubstringFilter,
  elGetter: $.ASN1Encoder<SubstringFilter>
) {
    const components: _Element[] = [
        _encode_AttributeDescription(value.type_, $.BER),
        $._encodeSequenceOf<SubstringFilter_substrings_substring>(
            () => _encode_SubstringFilter_substrings_substring,
            $.BER
        )(value.substrings, $.BER),
        ...value._unrecognizedExtensionsList ?? [],
    ];
    return $._encodeSequence(components, $.BER);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubstringFilter */

/* eslint-enable */
