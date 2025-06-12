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

/* START_OF_SYMBOL_DEFINITION BioAPI_DATE */
/**
 * @summary BioAPI_DATE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-DATE ::= SEQUENCE {
 *   year   INTEGER(0 | 1900..9999),
 *   month  INTEGER(0..12),
 *   day    INTEGER(0..31)
 * }
 * ```
 *
 * @class
 */
export class BioAPI_DATE {
  constructor(
    /**
     * @summary `year`.
     * @public
     * @readonly
     */
    readonly year: INTEGER,
    /**
     * @summary `month`.
     * @public
     * @readonly
     */
    readonly month: INTEGER,
    /**
     * @summary `day`.
     * @public
     * @readonly
     */
    readonly day: INTEGER
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_DATE
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_DATE`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_DATE`.
   * @returns {BioAPI_DATE}
   */
  public static _from_object(
    _o: { [_K in keyof BioAPI_DATE]: BioAPI_DATE[_K] }
  ): BioAPI_DATE {
    return new BioAPI_DATE(_o.year, _o.month, _o.day);
  }
}
/* END_OF_SYMBOL_DEFINITION BioAPI_DATE */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_DATE */
/**
 * @summary The Leading Root Component Types of BioAPI_DATE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_DATE: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'year',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'month',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'day',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_DATE */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_DATE */
/**
 * @summary The Trailing Root Component Types of BioAPI_DATE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_DATE: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_DATE */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_DATE */
/**
 * @summary The Extension Addition Component Types of BioAPI_DATE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_DATE: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_DATE */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_DATE */
let _cached_decoder_for_BioAPI_DATE: $.ASN1Decoder<BioAPI_DATE> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_DATE */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_DATE */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_DATE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_DATE} The decoded data structure.
 */
export function _decode_BioAPI_DATE(el: _Element) {
  if (!_cached_decoder_for_BioAPI_DATE) {
    _cached_decoder_for_BioAPI_DATE = function (el: _Element): BioAPI_DATE {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'BioAPI-DATE contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'year';
      sequence[1].name = 'month';
      sequence[2].name = 'day';
      let year!: INTEGER;
      let month!: INTEGER;
      let day!: INTEGER;
      year = $._decodeInteger(sequence[0]);
      month = $._decodeInteger(sequence[1]);
      day = $._decodeInteger(sequence[2]);
      return new BioAPI_DATE(year, month, day);
    };
  }
  return _cached_decoder_for_BioAPI_DATE(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_DATE */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_DATE */
let _cached_encoder_for_BioAPI_DATE: $.ASN1Encoder<BioAPI_DATE> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_DATE */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_DATE */
/**
 * @summary Encodes a(n) BioAPI_DATE into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_DATE, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_DATE(
  value: BioAPI_DATE,
  elGetter: $.ASN1Encoder<BioAPI_DATE>
) {
  if (!_cached_encoder_for_BioAPI_DATE) {
    _cached_encoder_for_BioAPI_DATE = function (
      value: BioAPI_DATE,
      elGetter: $.ASN1Encoder<BioAPI_DATE>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeInteger(value.year, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.month, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.day, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_DATE(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_DATE */

/* eslint-enable */
