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
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.js';
export {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.js';
import {
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta.js';
export {
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta.js';

/* START_OF_SYMBOL_DEFINITION GetHeaderFromHandle_RequestParams */
/**
 * @summary GetHeaderFromHandle_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GetHeaderFromHandle-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   birHandle          BioAPI-BIR-HANDLE
 * }
 * ```
 *
 * @class
 */
export class GetHeaderFromHandle_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `birHandle`.
     * @public
     * @readonly
     */
    readonly birHandle: BioAPI_BIR_HANDLE
  ) {}

  /**
   * @summary Restructures an object into a GetHeaderFromHandle_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `GetHeaderFromHandle_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GetHeaderFromHandle_RequestParams`.
   * @returns {GetHeaderFromHandle_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof GetHeaderFromHandle_RequestParams]: GetHeaderFromHandle_RequestParams[_K];
    }
  ): GetHeaderFromHandle_RequestParams {
    return new GetHeaderFromHandle_RequestParams(
      _o.originalBSPHandle,
      _o.birHandle
    );
  }
}
/* END_OF_SYMBOL_DEFINITION GetHeaderFromHandle_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GetHeaderFromHandle_RequestParams */
/**
 * @summary The Leading Root Component Types of GetHeaderFromHandle_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GetHeaderFromHandle_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'birHandle',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GetHeaderFromHandle_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GetHeaderFromHandle_RequestParams */
/**
 * @summary The Trailing Root Component Types of GetHeaderFromHandle_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GetHeaderFromHandle_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GetHeaderFromHandle_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GetHeaderFromHandle_RequestParams */
/**
 * @summary The Extension Addition Component Types of GetHeaderFromHandle_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GetHeaderFromHandle_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GetHeaderFromHandle_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GetHeaderFromHandle_RequestParams */
let _cached_decoder_for_GetHeaderFromHandle_RequestParams: $.ASN1Decoder<GetHeaderFromHandle_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GetHeaderFromHandle_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_GetHeaderFromHandle_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) GetHeaderFromHandle_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GetHeaderFromHandle_RequestParams} The decoded data structure.
 */
export function _decode_GetHeaderFromHandle_RequestParams(el: _Element) {
  if (!_cached_decoder_for_GetHeaderFromHandle_RequestParams) {
    _cached_decoder_for_GetHeaderFromHandle_RequestParams = function (
      el: _Element
    ): GetHeaderFromHandle_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'GetHeaderFromHandle-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'birHandle';
      let originalBSPHandle!: BioAPI_HANDLE;
      let birHandle!: BioAPI_BIR_HANDLE;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      birHandle = _decode_BioAPI_BIR_HANDLE(sequence[1]);
      return new GetHeaderFromHandle_RequestParams(
        originalBSPHandle,
        birHandle
      );
    };
  }
  return _cached_decoder_for_GetHeaderFromHandle_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GetHeaderFromHandle_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GetHeaderFromHandle_RequestParams */
let _cached_encoder_for_GetHeaderFromHandle_RequestParams: $.ASN1Encoder<GetHeaderFromHandle_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GetHeaderFromHandle_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_GetHeaderFromHandle_RequestParams */
/**
 * @summary Encodes a(n) GetHeaderFromHandle_RequestParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetHeaderFromHandle_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_GetHeaderFromHandle_RequestParams(
  value: GetHeaderFromHandle_RequestParams,
  elGetter: $.ASN1Encoder<GetHeaderFromHandle_RequestParams>
) {
  if (!_cached_encoder_for_GetHeaderFromHandle_RequestParams) {
    _cached_encoder_for_GetHeaderFromHandle_RequestParams = function (
      value: GetHeaderFromHandle_RequestParams,
      elGetter: $.ASN1Encoder<GetHeaderFromHandle_RequestParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_BIR_HANDLE(value.birHandle, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_GetHeaderFromHandle_RequestParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GetHeaderFromHandle_RequestParams */

/* eslint-enable */
