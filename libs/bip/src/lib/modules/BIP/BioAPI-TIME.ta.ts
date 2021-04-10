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

/* START_OF_SYMBOL_DEFINITION BioAPI_TIME */
/**
 * @summary BioAPI_TIME
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-TIME ::= SEQUENCE {
 *   hour    INTEGER(0..99),
 *   minute  INTEGER(0..99),
 *   second  INTEGER(0..99)
 * }
 * ```
 *
 * @class
 */
export class BioAPI_TIME {
  constructor(
    /**
     * @summary `hour`.
     * @public
     * @readonly
     */
    readonly hour: INTEGER,
    /**
     * @summary `minute`.
     * @public
     * @readonly
     */
    readonly minute: INTEGER,
    /**
     * @summary `second`.
     * @public
     * @readonly
     */
    readonly second: INTEGER
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_TIME
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_TIME`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_TIME`.
   * @returns {BioAPI_TIME}
   */
  public static _from_object(
    _o: { [_K in keyof BioAPI_TIME]: BioAPI_TIME[_K] }
  ): BioAPI_TIME {
    return new BioAPI_TIME(_o.hour, _o.minute, _o.second);
  }
}
/* END_OF_SYMBOL_DEFINITION BioAPI_TIME */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_TIME */
/**
 * @summary The Leading Root Component Types of BioAPI_TIME
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_TIME: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'hour',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'minute',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'second',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_TIME */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_TIME */
/**
 * @summary The Trailing Root Component Types of BioAPI_TIME
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_TIME: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_TIME */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_TIME */
/**
 * @summary The Extension Addition Component Types of BioAPI_TIME
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_TIME: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_TIME */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_TIME */
let _cached_decoder_for_BioAPI_TIME: $.ASN1Decoder<BioAPI_TIME> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_TIME */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_TIME */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_TIME
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_TIME} The decoded data structure.
 */
export function _decode_BioAPI_TIME(el: _Element) {
  if (!_cached_decoder_for_BioAPI_TIME) {
    _cached_decoder_for_BioAPI_TIME = function (el: _Element): BioAPI_TIME {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'BioAPI-TIME contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'hour';
      sequence[1].name = 'minute';
      sequence[2].name = 'second';
      let hour!: INTEGER;
      let minute!: INTEGER;
      let second!: INTEGER;
      hour = $._decodeInteger(sequence[0]);
      minute = $._decodeInteger(sequence[1]);
      second = $._decodeInteger(sequence[2]);
      return new BioAPI_TIME(hour, minute, second);
    };
  }
  return _cached_decoder_for_BioAPI_TIME(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_TIME */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_TIME */
let _cached_encoder_for_BioAPI_TIME: $.ASN1Encoder<BioAPI_TIME> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_TIME */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_TIME */
/**
 * @summary Encodes a(n) BioAPI_TIME into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_TIME, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_TIME(
  value: BioAPI_TIME,
  elGetter: $.ASN1Encoder<BioAPI_TIME>
) {
  if (!_cached_encoder_for_BioAPI_TIME) {
    _cached_encoder_for_BioAPI_TIME = function (
      value: BioAPI_TIME,
      elGetter: $.ASN1Encoder<BioAPI_TIME>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeInteger(value.hour, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.minute, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.second, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_TIME(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_TIME */

/* eslint-enable */
