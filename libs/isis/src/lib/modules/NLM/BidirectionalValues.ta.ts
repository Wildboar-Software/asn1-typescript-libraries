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
  ChoiceInteger,
  _decode_ChoiceInteger,
  _encode_ChoiceInteger,
} from '../NLM/ChoiceInteger.ta';
export {
  ChoiceInteger,
  _decode_ChoiceInteger,
  _encode_ChoiceInteger,
} from '../NLM/ChoiceInteger.ta';

/* START_OF_SYMBOL_DEFINITION BidirectionalValues */
/**
 * @summary BidirectionalValues
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BidirectionalValues ::= SEQUENCE {
 *   incoming  [0]  ChoiceInteger,
 *   outgoing  [1]  ChoiceInteger
 * }
 * ```
 *
 * @class
 */
export class BidirectionalValues {
  constructor(
    /**
     * @summary `incoming`.
     * @public
     * @readonly
     */
    readonly incoming: ChoiceInteger,
    /**
     * @summary `outgoing`.
     * @public
     * @readonly
     */
    readonly outgoing: ChoiceInteger
  ) {}

  /**
   * @summary Restructures an object into a BidirectionalValues
   * @description
   *
   * This takes an `object` and converts it to a `BidirectionalValues`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BidirectionalValues`.
   * @returns {BidirectionalValues}
   */
  public static _from_object(
    _o: { [_K in keyof BidirectionalValues]: BidirectionalValues[_K] }
  ): BidirectionalValues {
    return new BidirectionalValues(_o.incoming, _o.outgoing);
  }
}
/* END_OF_SYMBOL_DEFINITION BidirectionalValues */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BidirectionalValues */
/**
 * @summary The Leading Root Component Types of BidirectionalValues
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BidirectionalValues: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'incoming',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'outgoing',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BidirectionalValues */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BidirectionalValues */
/**
 * @summary The Trailing Root Component Types of BidirectionalValues
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BidirectionalValues: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BidirectionalValues */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BidirectionalValues */
/**
 * @summary The Extension Addition Component Types of BidirectionalValues
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BidirectionalValues: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BidirectionalValues */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BidirectionalValues */
let _cached_decoder_for_BidirectionalValues: $.ASN1Decoder<BidirectionalValues> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BidirectionalValues */

/* START_OF_SYMBOL_DEFINITION _decode_BidirectionalValues */
/**
 * @summary Decodes an ASN.1 element into a(n) BidirectionalValues
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BidirectionalValues} The decoded data structure.
 */
export function _decode_BidirectionalValues(el: _Element) {
  if (!_cached_decoder_for_BidirectionalValues) {
    _cached_decoder_for_BidirectionalValues = function (
      el: _Element
    ): BidirectionalValues {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'BidirectionalValues contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'incoming';
      sequence[1].name = 'outgoing';
      let incoming!: ChoiceInteger;
      let outgoing!: ChoiceInteger;
      incoming = $._decode_explicit<ChoiceInteger>(() => _decode_ChoiceInteger)(
        sequence[0]
      );
      outgoing = $._decode_explicit<ChoiceInteger>(() => _decode_ChoiceInteger)(
        sequence[1]
      );
      return new BidirectionalValues(incoming, outgoing);
    };
  }
  return _cached_decoder_for_BidirectionalValues(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BidirectionalValues */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BidirectionalValues */
let _cached_encoder_for_BidirectionalValues: $.ASN1Encoder<BidirectionalValues> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BidirectionalValues */

/* START_OF_SYMBOL_DEFINITION _encode_BidirectionalValues */
/**
 * @summary Encodes a(n) BidirectionalValues into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BidirectionalValues, encoded as an ASN.1 Element.
 */
export function _encode_BidirectionalValues(
  value: BidirectionalValues,
  elGetter: $.ASN1Encoder<BidirectionalValues>
) {
  if (!_cached_encoder_for_BidirectionalValues) {
    _cached_encoder_for_BidirectionalValues = function (
      value: BidirectionalValues,
      elGetter: $.ASN1Encoder<BidirectionalValues>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => _encode_ChoiceInteger,
              $.BER
            )(value.incoming, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              1,
              () => _encode_ChoiceInteger,
              $.BER
            )(value.outgoing, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BidirectionalValues(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BidirectionalValues */

/* eslint-enable */
