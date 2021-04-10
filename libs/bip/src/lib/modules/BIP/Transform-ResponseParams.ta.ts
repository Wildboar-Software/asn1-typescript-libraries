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
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta';
export {
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta';

/* START_OF_SYMBOL_DEFINITION Transform_ResponseParams */
/**
 * @summary Transform_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Transform-ResponseParams ::= SEQUENCE {
 *   outputBIRs  SEQUENCE (SIZE (0..max-unsigned-int)) OF BioAPI-BIR-HANDLE
 * }
 * ```
 *
 * @class
 */
export class Transform_ResponseParams {
  constructor(
    /**
     * @summary `outputBIRs`.
     * @public
     * @readonly
     */
    readonly outputBIRs: BioAPI_BIR_HANDLE[]
  ) {}

  /**
   * @summary Restructures an object into a Transform_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `Transform_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Transform_ResponseParams`.
   * @returns {Transform_ResponseParams}
   */
  public static _from_object(
    _o: { [_K in keyof Transform_ResponseParams]: Transform_ResponseParams[_K] }
  ): Transform_ResponseParams {
    return new Transform_ResponseParams(_o.outputBIRs);
  }
}
/* END_OF_SYMBOL_DEFINITION Transform_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Transform_ResponseParams */
/**
 * @summary The Leading Root Component Types of Transform_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Transform_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'outputBIRs',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Transform_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Transform_ResponseParams */
/**
 * @summary The Trailing Root Component Types of Transform_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Transform_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Transform_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Transform_ResponseParams */
/**
 * @summary The Extension Addition Component Types of Transform_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Transform_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Transform_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Transform_ResponseParams */
let _cached_decoder_for_Transform_ResponseParams: $.ASN1Decoder<Transform_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Transform_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_Transform_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) Transform_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Transform_ResponseParams} The decoded data structure.
 */
export function _decode_Transform_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_Transform_ResponseParams) {
    _cached_decoder_for_Transform_ResponseParams = function (
      el: _Element
    ): Transform_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'Transform-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'outputBIRs';
      let outputBIRs!: BioAPI_BIR_HANDLE[];
      outputBIRs = $._decodeSequenceOf<BioAPI_BIR_HANDLE>(
        () => _decode_BioAPI_BIR_HANDLE
      )(sequence[0]);
      return new Transform_ResponseParams(outputBIRs);
    };
  }
  return _cached_decoder_for_Transform_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Transform_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Transform_ResponseParams */
let _cached_encoder_for_Transform_ResponseParams: $.ASN1Encoder<Transform_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Transform_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_Transform_ResponseParams */
/**
 * @summary Encodes a(n) Transform_ResponseParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Transform_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_Transform_ResponseParams(
  value: Transform_ResponseParams,
  elGetter: $.ASN1Encoder<Transform_ResponseParams>
) {
  if (!_cached_encoder_for_Transform_ResponseParams) {
    _cached_encoder_for_Transform_ResponseParams = function (
      value: Transform_ResponseParams,
      elGetter: $.ASN1Encoder<Transform_ResponseParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeSequenceOf<BioAPI_BIR_HANDLE>(
              () => _encode_BioAPI_BIR_HANDLE,
              $.BER
            )(value.outputBIRs, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Transform_ResponseParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Transform_ResponseParams */

/* eslint-enable */
