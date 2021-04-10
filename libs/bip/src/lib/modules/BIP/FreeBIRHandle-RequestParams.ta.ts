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
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta';
export {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta';
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

/* START_OF_SYMBOL_DEFINITION FreeBIRHandle_RequestParams */
/**
 * @summary FreeBIRHandle_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FreeBIRHandle-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   birHandle          BioAPI-BIR-HANDLE
 * }
 * ```
 *
 * @class
 */
export class FreeBIRHandle_RequestParams {
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
   * @summary Restructures an object into a FreeBIRHandle_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `FreeBIRHandle_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `FreeBIRHandle_RequestParams`.
   * @returns {FreeBIRHandle_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof FreeBIRHandle_RequestParams]: FreeBIRHandle_RequestParams[_K];
    }
  ): FreeBIRHandle_RequestParams {
    return new FreeBIRHandle_RequestParams(_o.originalBSPHandle, _o.birHandle);
  }
}
/* END_OF_SYMBOL_DEFINITION FreeBIRHandle_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FreeBIRHandle_RequestParams */
/**
 * @summary The Leading Root Component Types of FreeBIRHandle_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FreeBIRHandle_RequestParams: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FreeBIRHandle_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FreeBIRHandle_RequestParams */
/**
 * @summary The Trailing Root Component Types of FreeBIRHandle_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FreeBIRHandle_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FreeBIRHandle_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FreeBIRHandle_RequestParams */
/**
 * @summary The Extension Addition Component Types of FreeBIRHandle_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FreeBIRHandle_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FreeBIRHandle_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FreeBIRHandle_RequestParams */
let _cached_decoder_for_FreeBIRHandle_RequestParams: $.ASN1Decoder<FreeBIRHandle_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FreeBIRHandle_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_FreeBIRHandle_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) FreeBIRHandle_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FreeBIRHandle_RequestParams} The decoded data structure.
 */
export function _decode_FreeBIRHandle_RequestParams(el: _Element) {
  if (!_cached_decoder_for_FreeBIRHandle_RequestParams) {
    _cached_decoder_for_FreeBIRHandle_RequestParams = function (
      el: _Element
    ): FreeBIRHandle_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'FreeBIRHandle-RequestParams contained only ' +
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
      return new FreeBIRHandle_RequestParams(originalBSPHandle, birHandle);
    };
  }
  return _cached_decoder_for_FreeBIRHandle_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FreeBIRHandle_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FreeBIRHandle_RequestParams */
let _cached_encoder_for_FreeBIRHandle_RequestParams: $.ASN1Encoder<FreeBIRHandle_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FreeBIRHandle_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_FreeBIRHandle_RequestParams */
/**
 * @summary Encodes a(n) FreeBIRHandle_RequestParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FreeBIRHandle_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_FreeBIRHandle_RequestParams(
  value: FreeBIRHandle_RequestParams,
  elGetter: $.ASN1Encoder<FreeBIRHandle_RequestParams>
) {
  if (!_cached_encoder_for_FreeBIRHandle_RequestParams) {
    _cached_encoder_for_FreeBIRHandle_RequestParams = function (
      value: FreeBIRHandle_RequestParams,
      elGetter: $.ASN1Encoder<FreeBIRHandle_RequestParams>
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
  return _cached_encoder_for_FreeBIRHandle_RequestParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FreeBIRHandle_RequestParams */

/* eslint-enable */
