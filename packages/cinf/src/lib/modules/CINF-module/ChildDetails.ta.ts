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
  UnicodeLabels,
  _decode_UnicodeLabels,
  _encode_UnicodeLabels,
} from '../CINF-module/UnicodeLabels.ta.js';
export {
  UnicodeLabels,
  _decode_UnicodeLabels,
  _encode_UnicodeLabels,
} from '../CINF-module/UnicodeLabels.ta.js';

/* START_OF_SYMBOL_DEFINITION ChildDetails */
/**
 * @summary ChildDetails
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChildDetails ::= SEQUENCE {
 *     orsSupported    BOOLEAN
 *     / * Set to TRUE if the child OID node is ORS-supported * /,
 *     unicodeLabels    UnicodeLabels
 * }
 * ```
 *
 * @class
 */
export class ChildDetails {
  constructor(
    /**
     * @summary `orsSupported`.
     * @public
     * @readonly
     */
    readonly orsSupported: BOOLEAN,
    /**
     * @summary `unicodeLabels`.
     * @public
     * @readonly
     */
    readonly unicodeLabels: UnicodeLabels
  ) {}

  /**
   * @summary Restructures an object into a ChildDetails
   * @description
   *
   * This takes an `object` and converts it to a `ChildDetails`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ChildDetails`.
   * @returns {ChildDetails}
   */
  public static _from_object(
    _o: { [_K in keyof ChildDetails]: ChildDetails[_K] }
  ): ChildDetails {
    return new ChildDetails(_o.orsSupported, _o.unicodeLabels);
  }
}
/* END_OF_SYMBOL_DEFINITION ChildDetails */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ChildDetails */
/**
 * @summary The Leading Root Component Types of ChildDetails
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ChildDetails: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'orsSupported',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'unicodeLabels',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ChildDetails */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ChildDetails */
/**
 * @summary The Trailing Root Component Types of ChildDetails
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ChildDetails: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ChildDetails */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ChildDetails */
/**
 * @summary The Extension Addition Component Types of ChildDetails
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ChildDetails: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ChildDetails */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ChildDetails */
let _cached_decoder_for_ChildDetails: $.ASN1Decoder<ChildDetails> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ChildDetails */

/* START_OF_SYMBOL_DEFINITION _decode_ChildDetails */
/**
 * @summary Decodes an ASN.1 element into a(n) ChildDetails
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChildDetails} The decoded data structure.
 */
export function _decode_ChildDetails(el: _Element) {
  if (!_cached_decoder_for_ChildDetails) {
    _cached_decoder_for_ChildDetails = function (el: _Element): ChildDetails {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'ChildDetails contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'orsSupported';
      sequence[1].name = 'unicodeLabels';
      let orsSupported!: BOOLEAN;
      let unicodeLabels!: UnicodeLabels;
      orsSupported = $._decodeBoolean(sequence[0]);
      unicodeLabels = _decode_UnicodeLabels(sequence[1]);
      return new ChildDetails(orsSupported, unicodeLabels);
    };
  }
  return _cached_decoder_for_ChildDetails(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ChildDetails */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ChildDetails */
let _cached_encoder_for_ChildDetails: $.ASN1Encoder<ChildDetails> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ChildDetails */

/* START_OF_SYMBOL_DEFINITION _encode_ChildDetails */
/**
 * @summary Encodes a(n) ChildDetails into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChildDetails, encoded as an ASN.1 Element.
 */
export function _encode_ChildDetails(
  value: ChildDetails,
  elGetter: $.ASN1Encoder<ChildDetails>
) {
  if (!_cached_encoder_for_ChildDetails) {
    _cached_encoder_for_ChildDetails = function (
      value: ChildDetails,
      elGetter: $.ASN1Encoder<ChildDetails>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeBoolean(value.orsSupported, $.BER),
            /* REQUIRED   */ _encode_UnicodeLabels(value.unicodeLabels, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ChildDetails(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ChildDetails */

/* eslint-enable */
