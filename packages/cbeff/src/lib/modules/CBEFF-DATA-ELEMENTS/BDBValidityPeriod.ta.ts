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
  Date_Time,
  _decode_Date_Time,
  _encode_Date_Time,
} from '../CBEFF-DATA-ELEMENTS/Date-Time.ta';
export {
  Date_Time,
  _decode_Date_Time,
  _encode_Date_Time,
} from '../CBEFF-DATA-ELEMENTS/Date-Time.ta';

/* START_OF_SYMBOL_DEFINITION BDBValidityPeriod */
/**
 * @summary BDBValidityPeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BDBValidityPeriod ::= SEQUENCE {
 *   not-valid-before  Date-Time OPTIONAL,
 *   not-valid-after   Date-Time OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class BDBValidityPeriod {
  constructor(
    /**
     * @summary `not_valid_before`.
     * @public
     * @readonly
     */
    readonly not_valid_before: OPTIONAL<Date_Time>,
    /**
     * @summary `not_valid_after`.
     * @public
     * @readonly
     */
    readonly not_valid_after: OPTIONAL<Date_Time>
  ) {}

  /**
   * @summary Restructures an object into a BDBValidityPeriod
   * @description
   *
   * This takes an `object` and converts it to a `BDBValidityPeriod`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BDBValidityPeriod`.
   * @returns {BDBValidityPeriod}
   */
  public static _from_object(
    _o: { [_K in keyof BDBValidityPeriod]: BDBValidityPeriod[_K] }
  ): BDBValidityPeriod {
    return new BDBValidityPeriod(_o.not_valid_before, _o.not_valid_after);
  }
}
/* END_OF_SYMBOL_DEFINITION BDBValidityPeriod */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BDBValidityPeriod */
/**
 * @summary The Leading Root Component Types of BDBValidityPeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BDBValidityPeriod: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'not-valid-before',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'not-valid-after',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BDBValidityPeriod */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BDBValidityPeriod */
/**
 * @summary The Trailing Root Component Types of BDBValidityPeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BDBValidityPeriod: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BDBValidityPeriod */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BDBValidityPeriod */
/**
 * @summary The Extension Addition Component Types of BDBValidityPeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BDBValidityPeriod: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BDBValidityPeriod */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BDBValidityPeriod */
let _cached_decoder_for_BDBValidityPeriod: $.ASN1Decoder<BDBValidityPeriod> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BDBValidityPeriod */

/* START_OF_SYMBOL_DEFINITION _decode_BDBValidityPeriod */
/**
 * @summary Decodes an ASN.1 element into a(n) BDBValidityPeriod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BDBValidityPeriod} The decoded data structure.
 */
export function _decode_BDBValidityPeriod(el: _Element) {
  if (!_cached_decoder_for_BDBValidityPeriod) {
    _cached_decoder_for_BDBValidityPeriod = function (
      el: _Element
    ): BDBValidityPeriod {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let not_valid_before: OPTIONAL<Date_Time>;
      let not_valid_after: OPTIONAL<Date_Time>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'not-valid-before': (_el: _Element): void => {
          not_valid_before = _decode_Date_Time(_el);
        },
        'not-valid-after': (_el: _Element): void => {
          not_valid_after = _decode_Date_Time(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_BDBValidityPeriod,
        _extension_additions_list_spec_for_BDBValidityPeriod,
        _root_component_type_list_2_spec_for_BDBValidityPeriod,
        undefined
      );
      return new BDBValidityPeriod /* SEQUENCE_CONSTRUCTOR_CALL */(
        not_valid_before,
        not_valid_after
      );
    };
  }
  return _cached_decoder_for_BDBValidityPeriod(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BDBValidityPeriod */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BDBValidityPeriod */
let _cached_encoder_for_BDBValidityPeriod: $.ASN1Encoder<BDBValidityPeriod> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BDBValidityPeriod */

/* START_OF_SYMBOL_DEFINITION _encode_BDBValidityPeriod */
/**
 * @summary Encodes a(n) BDBValidityPeriod into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDBValidityPeriod, encoded as an ASN.1 Element.
 */
export function _encode_BDBValidityPeriod(
  value: BDBValidityPeriod,
  elGetter: $.ASN1Encoder<BDBValidityPeriod>
) {
  if (!_cached_encoder_for_BDBValidityPeriod) {
    _cached_encoder_for_BDBValidityPeriod = function (
      value: BDBValidityPeriod,
      elGetter: $.ASN1Encoder<BDBValidityPeriod>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.not_valid_before === undefined
              ? undefined
              : _encode_Date_Time(value.not_valid_before, $.BER),
            /* IF_ABSENT  */ value.not_valid_after === undefined
              ? undefined
              : _encode_Date_Time(value.not_valid_after, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BDBValidityPeriod(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BDBValidityPeriod */

/* eslint-enable */
