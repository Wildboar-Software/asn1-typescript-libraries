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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  QualifiedNameOrIndex,
  _decode_QualifiedNameOrIndex,
  _encode_QualifiedNameOrIndex,
} from '../FastInfoset/QualifiedNameOrIndex.ta.mjs';
export {
  QualifiedNameOrIndex,
  _decode_QualifiedNameOrIndex,
  _encode_QualifiedNameOrIndex,
} from '../FastInfoset/QualifiedNameOrIndex.ta.mjs';
import {
  NonIdentifyingStringOrIndex,
  _decode_NonIdentifyingStringOrIndex,
  _encode_NonIdentifyingStringOrIndex,
} from '../FastInfoset/NonIdentifyingStringOrIndex.ta.mjs';
export {
  NonIdentifyingStringOrIndex,
  _decode_NonIdentifyingStringOrIndex,
  _encode_NonIdentifyingStringOrIndex,
} from '../FastInfoset/NonIdentifyingStringOrIndex.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Attribute */
/**
 * @summary Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute ::= SEQUENCE {
 *   qualified-name    QualifiedNameOrIndex-- ATTRIBUTE NAME category --,
 *   normalized-value  NonIdentifyingStringOrIndex
 * }
 * ```
 *
 * @class
 */
export class Attribute {
  constructor(
    /**
     * @summary `qualified_name`.
     * @public
     * @readonly
     */
    readonly qualified_name: QualifiedNameOrIndex,
    /**
     * @summary `normalized_value`.
     * @public
     * @readonly
     */
    readonly normalized_value: NonIdentifyingStringOrIndex
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
    return new Attribute(_o.qualified_name, _o.normalized_value);
  }
}
/* END_OF_SYMBOL_DEFINITION Attribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Attribute */
/**
 * @summary The Leading Root Component Types of Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Attribute: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'qualified-name',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'normalized-value',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Attribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Attribute */
/**
 * @summary The Trailing Root Component Types of Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Attribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Attribute */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Attribute */
/**
 * @summary The Extension Addition Component Types of Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Attribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute */
let _cached_decoder_for_Attribute: $.ASN1Decoder<Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute */

/* START_OF_SYMBOL_DEFINITION _decode_Attribute */
/**
 * @summary Decodes an ASN.1 element into a(n) Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute} The decoded data structure.
 */
export function _decode_Attribute(el: _Element) {
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
      sequence[0].name = 'qualified-name';
      sequence[1].name = 'normalized-value';
      let qualified_name!: QualifiedNameOrIndex;
      let normalized_value!: NonIdentifyingStringOrIndex;
      qualified_name = _decode_QualifiedNameOrIndex(sequence[0]);
      normalized_value = _decode_NonIdentifyingStringOrIndex(sequence[1]);
      return new Attribute(qualified_name, normalized_value);
    };
  }
  return _cached_decoder_for_Attribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute */
let _cached_encoder_for_Attribute: $.ASN1Encoder<Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute */

/* START_OF_SYMBOL_DEFINITION _encode_Attribute */
/**
 * @summary Encodes a(n) Attribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Attribute(
  value: Attribute,
  elGetter: $.ASN1Encoder<Attribute>
) {
  if (!_cached_encoder_for_Attribute) {
    _cached_encoder_for_Attribute = function (
      value: Attribute,
      elGetter: $.ASN1Encoder<Attribute>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_QualifiedNameOrIndex(
              value.qualified_name,
              $.BER
            ),
            /* REQUIRED   */ _encode_NonIdentifyingStringOrIndex(
              value.normalized_value,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Attribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Attribute */

/* eslint-enable */
