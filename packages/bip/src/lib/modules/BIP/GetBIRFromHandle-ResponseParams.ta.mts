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
  BioAPI_BIR,
  _decode_BioAPI_BIR,
  _encode_BioAPI_BIR,
} from '../BIP/BioAPI-BIR.ta.mjs';
export {
  BioAPI_BIR,
  _decode_BioAPI_BIR,
  _encode_BioAPI_BIR,
} from '../BIP/BioAPI-BIR.ta.mjs';

/* START_OF_SYMBOL_DEFINITION GetBIRFromHandle_ResponseParams */
/**
 * @summary GetBIRFromHandle_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GetBIRFromHandle-ResponseParams ::= SEQUENCE {bir  BioAPI-BIR
 * }
 * ```
 *
 * @class
 */
export class GetBIRFromHandle_ResponseParams {
  constructor(
    /**
     * @summary `bir`.
     * @public
     * @readonly
     */
    readonly bir: BioAPI_BIR
  ) {}

  /**
   * @summary Restructures an object into a GetBIRFromHandle_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `GetBIRFromHandle_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GetBIRFromHandle_ResponseParams`.
   * @returns {GetBIRFromHandle_ResponseParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof GetBIRFromHandle_ResponseParams]: GetBIRFromHandle_ResponseParams[_K];
    }
  ): GetBIRFromHandle_ResponseParams {
    return new GetBIRFromHandle_ResponseParams(_o.bir);
  }
}
/* END_OF_SYMBOL_DEFINITION GetBIRFromHandle_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GetBIRFromHandle_ResponseParams */
/**
 * @summary The Leading Root Component Types of GetBIRFromHandle_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GetBIRFromHandle_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bir',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GetBIRFromHandle_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GetBIRFromHandle_ResponseParams */
/**
 * @summary The Trailing Root Component Types of GetBIRFromHandle_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GetBIRFromHandle_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GetBIRFromHandle_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GetBIRFromHandle_ResponseParams */
/**
 * @summary The Extension Addition Component Types of GetBIRFromHandle_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GetBIRFromHandle_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GetBIRFromHandle_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GetBIRFromHandle_ResponseParams */
let _cached_decoder_for_GetBIRFromHandle_ResponseParams: $.ASN1Decoder<GetBIRFromHandle_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GetBIRFromHandle_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_GetBIRFromHandle_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) GetBIRFromHandle_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GetBIRFromHandle_ResponseParams} The decoded data structure.
 */
export function _decode_GetBIRFromHandle_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_GetBIRFromHandle_ResponseParams) {
    _cached_decoder_for_GetBIRFromHandle_ResponseParams = function (
      el: _Element
    ): GetBIRFromHandle_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'GetBIRFromHandle-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bir';
      let bir!: BioAPI_BIR;
      bir = _decode_BioAPI_BIR(sequence[0]);
      return new GetBIRFromHandle_ResponseParams(bir);
    };
  }
  return _cached_decoder_for_GetBIRFromHandle_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GetBIRFromHandle_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GetBIRFromHandle_ResponseParams */
let _cached_encoder_for_GetBIRFromHandle_ResponseParams: $.ASN1Encoder<GetBIRFromHandle_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GetBIRFromHandle_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_GetBIRFromHandle_ResponseParams */
/**
 * @summary Encodes a(n) GetBIRFromHandle_ResponseParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetBIRFromHandle_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_GetBIRFromHandle_ResponseParams(
  value: GetBIRFromHandle_ResponseParams,
  elGetter: $.ASN1Encoder<GetBIRFromHandle_ResponseParams>
) {
  if (!_cached_encoder_for_GetBIRFromHandle_ResponseParams) {
    _cached_encoder_for_GetBIRFromHandle_ResponseParams = function (
      value: GetBIRFromHandle_ResponseParams,
      elGetter: $.ASN1Encoder<GetBIRFromHandle_ResponseParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([/* REQUIRED   */ _encode_BioAPI_BIR(value.bir, $.BER)])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_GetBIRFromHandle_ResponseParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GetBIRFromHandle_ResponseParams */

/* eslint-enable */
