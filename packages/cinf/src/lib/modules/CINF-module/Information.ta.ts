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
  ChildDetails,
  _decode_ChildDetails,
  _encode_ChildDetails,
} from '../CINF-module/ChildDetails.ta.js';
export {
  ChildDetails,
  _decode_ChildDetails,
  _encode_ChildDetails,
} from '../CINF-module/ChildDetails.ta.js';

/* START_OF_SYMBOL_DEFINITION Information */
/**
 * @summary Information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Information ::= SEQUENCE {
 *     disclosedChildren    SEQUENCE OF disclosedChild  ChildDetails,
 *     otherChildren        INTEGER (-1..MAX)
 *     / * The number of additional non-disclosed children (-1 indicates that the
 *            node is not prepared to disclose the number of other children) * / }
 * ```
 *
 * @class
 */
export class Information {
  constructor(
    /**
     * @summary `disclosedChildren`.
     * @public
     * @readonly
     */
    readonly disclosedChildren: ChildDetails[],
    /**
     * @summary `otherChildren`.
     * @public
     * @readonly
     */
    readonly otherChildren: INTEGER
  ) {}

  /**
   * @summary Restructures an object into a Information
   * @description
   *
   * This takes an `object` and converts it to a `Information`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Information`.
   * @returns {Information}
   */
  public static _from_object(
    _o: { [_K in keyof Information]: Information[_K] }
  ): Information {
    return new Information(_o.disclosedChildren, _o.otherChildren);
  }
}
/* END_OF_SYMBOL_DEFINITION Information */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Information */
/**
 * @summary The Leading Root Component Types of Information
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Information: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'disclosedChildren',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'otherChildren',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Information */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Information */
/**
 * @summary The Trailing Root Component Types of Information
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Information: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Information */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Information */
/**
 * @summary The Extension Addition Component Types of Information
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Information: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Information */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Information */
let _cached_decoder_for_Information: $.ASN1Decoder<Information> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Information */

/* START_OF_SYMBOL_DEFINITION _decode_Information */
/**
 * @summary Decodes an ASN.1 element into a(n) Information
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Information} The decoded data structure.
 */
export function _decode_Information(el: _Element) {
  if (!_cached_decoder_for_Information) {
    _cached_decoder_for_Information = function (el: _Element): Information {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Information contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'disclosedChildren';
      sequence[1].name = 'otherChildren';
      let disclosedChildren!: ChildDetails[];
      let otherChildren!: INTEGER;
      disclosedChildren = $._decodeSequenceOf<ChildDetails>(
        () => _decode_ChildDetails
      )(sequence[0]);
      otherChildren = $._decodeInteger(sequence[1]);
      return new Information(disclosedChildren, otherChildren);
    };
  }
  return _cached_decoder_for_Information(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Information */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Information */
let _cached_encoder_for_Information: $.ASN1Encoder<Information> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Information */

/* START_OF_SYMBOL_DEFINITION _encode_Information */
/**
 * @summary Encodes a(n) Information into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Information, encoded as an ASN.1 Element.
 */
export function _encode_Information(
  value: Information,
  elGetter: $.ASN1Encoder<Information>
) {
  if (!_cached_encoder_for_Information) {
    _cached_encoder_for_Information = function (
      value: Information,
      elGetter: $.ASN1Encoder<Information>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeSequenceOf<ChildDetails>(
              () => _encode_ChildDetails,
              $.BER
            )(value.disclosedChildren, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.otherChildren, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Information(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Information */

/* eslint-enable */
