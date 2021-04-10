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
  BioAPI_CANDIDATE,
  _decode_BioAPI_CANDIDATE,
  _encode_BioAPI_CANDIDATE,
} from '../BIP/BioAPI-CANDIDATE.ta';
export {
  BioAPI_CANDIDATE,
  _decode_BioAPI_CANDIDATE,
  _encode_BioAPI_CANDIDATE,
} from '../BIP/BioAPI-CANDIDATE.ta';

/* START_OF_SYMBOL_DEFINITION IdentifyMatch_ResponseParams */
/**
 * @summary IdentifyMatch_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdentifyMatch-ResponseParams ::= SEQUENCE {
 *   candidates
 *     SEQUENCE (SIZE (0..max-unsigned-int)) OF candidate BioAPI-CANDIDATE
 * }
 * ```
 *
 * @class
 */
export class IdentifyMatch_ResponseParams {
  constructor(
    /**
     * @summary `candidates`.
     * @public
     * @readonly
     */
    readonly candidates: BioAPI_CANDIDATE[]
  ) {}

  /**
   * @summary Restructures an object into a IdentifyMatch_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `IdentifyMatch_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `IdentifyMatch_ResponseParams`.
   * @returns {IdentifyMatch_ResponseParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof IdentifyMatch_ResponseParams]: IdentifyMatch_ResponseParams[_K];
    }
  ): IdentifyMatch_ResponseParams {
    return new IdentifyMatch_ResponseParams(_o.candidates);
  }
}
/* END_OF_SYMBOL_DEFINITION IdentifyMatch_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IdentifyMatch_ResponseParams */
/**
 * @summary The Leading Root Component Types of IdentifyMatch_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IdentifyMatch_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'candidates',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IdentifyMatch_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IdentifyMatch_ResponseParams */
/**
 * @summary The Trailing Root Component Types of IdentifyMatch_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IdentifyMatch_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IdentifyMatch_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IdentifyMatch_ResponseParams */
/**
 * @summary The Extension Addition Component Types of IdentifyMatch_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IdentifyMatch_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IdentifyMatch_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IdentifyMatch_ResponseParams */
let _cached_decoder_for_IdentifyMatch_ResponseParams: $.ASN1Decoder<IdentifyMatch_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IdentifyMatch_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_IdentifyMatch_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) IdentifyMatch_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdentifyMatch_ResponseParams} The decoded data structure.
 */
export function _decode_IdentifyMatch_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_IdentifyMatch_ResponseParams) {
    _cached_decoder_for_IdentifyMatch_ResponseParams = function (
      el: _Element
    ): IdentifyMatch_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'IdentifyMatch-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'candidates';
      let candidates!: BioAPI_CANDIDATE[];
      candidates = $._decodeSequenceOf<BioAPI_CANDIDATE>(
        () => _decode_BioAPI_CANDIDATE
      )(sequence[0]);
      return new IdentifyMatch_ResponseParams(candidates);
    };
  }
  return _cached_decoder_for_IdentifyMatch_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IdentifyMatch_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IdentifyMatch_ResponseParams */
let _cached_encoder_for_IdentifyMatch_ResponseParams: $.ASN1Encoder<IdentifyMatch_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IdentifyMatch_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_IdentifyMatch_ResponseParams */
/**
 * @summary Encodes a(n) IdentifyMatch_ResponseParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdentifyMatch_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_IdentifyMatch_ResponseParams(
  value: IdentifyMatch_ResponseParams,
  elGetter: $.ASN1Encoder<IdentifyMatch_ResponseParams>
) {
  if (!_cached_encoder_for_IdentifyMatch_ResponseParams) {
    _cached_encoder_for_IdentifyMatch_ResponseParams = function (
      value: IdentifyMatch_ResponseParams,
      elGetter: $.ASN1Encoder<IdentifyMatch_ResponseParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeSequenceOf<BioAPI_CANDIDATE>(
              () => _encode_BioAPI_CANDIDATE,
              $.BER
            )(value.candidates, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_IdentifyMatch_ResponseParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IdentifyMatch_ResponseParams */

/* eslint-enable */
