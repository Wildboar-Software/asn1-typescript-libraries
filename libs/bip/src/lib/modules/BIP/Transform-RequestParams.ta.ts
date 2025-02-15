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
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta';
export {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta';
import {
  BioAPI_INPUT_BIR,
  _decode_BioAPI_INPUT_BIR,
  _encode_BioAPI_INPUT_BIR,
} from '../BIP/BioAPI-INPUT-BIR.ta';
export {
  BioAPI_INPUT_BIR,
  _decode_BioAPI_INPUT_BIR,
  _encode_BioAPI_INPUT_BIR,
} from '../BIP/BioAPI-INPUT-BIR.ta';

/* START_OF_SYMBOL_DEFINITION Transform_RequestParams */
/**
 * @summary Transform_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Transform-RequestParams ::= SEQUENCE {
 *   bspHandle      BioAPI-HANDLE,
 *   operationUuid  BioAPI-UUID,
 *   inputBIRs      SEQUENCE (SIZE (0..max-unsigned-int)) OF BioAPI-INPUT-BIR
 * }
 * ```
 *
 * @class
 */
export class Transform_RequestParams {
  constructor(
    /**
     * @summary `bspHandle`.
     * @public
     * @readonly
     */
    readonly bspHandle: BioAPI_HANDLE,
    /**
     * @summary `operationUuid`.
     * @public
     * @readonly
     */
    readonly operationUuid: BioAPI_UUID,
    /**
     * @summary `inputBIRs`.
     * @public
     * @readonly
     */
    readonly inputBIRs: BioAPI_INPUT_BIR[]
  ) {}

  /**
   * @summary Restructures an object into a Transform_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `Transform_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Transform_RequestParams`.
   * @returns {Transform_RequestParams}
   */
  public static _from_object(
    _o: { [_K in keyof Transform_RequestParams]: Transform_RequestParams[_K] }
  ): Transform_RequestParams {
    return new Transform_RequestParams(
      _o.bspHandle,
      _o.operationUuid,
      _o.inputBIRs
    );
  }
}
/* END_OF_SYMBOL_DEFINITION Transform_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Transform_RequestParams */
/**
 * @summary The Leading Root Component Types of Transform_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Transform_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspHandle',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'operationUuid',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'inputBIRs',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Transform_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Transform_RequestParams */
/**
 * @summary The Trailing Root Component Types of Transform_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Transform_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Transform_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Transform_RequestParams */
/**
 * @summary The Extension Addition Component Types of Transform_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Transform_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Transform_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Transform_RequestParams */
let _cached_decoder_for_Transform_RequestParams: $.ASN1Decoder<Transform_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Transform_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_Transform_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) Transform_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Transform_RequestParams} The decoded data structure.
 */
export function _decode_Transform_RequestParams(el: _Element) {
  if (!_cached_decoder_for_Transform_RequestParams) {
    _cached_decoder_for_Transform_RequestParams = function (
      el: _Element
    ): Transform_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'Transform-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bspHandle';
      sequence[1].name = 'operationUuid';
      sequence[2].name = 'inputBIRs';
      let bspHandle!: BioAPI_HANDLE;
      let operationUuid!: BioAPI_UUID;
      let inputBIRs!: BioAPI_INPUT_BIR[];
      bspHandle = _decode_BioAPI_HANDLE(sequence[0]);
      operationUuid = _decode_BioAPI_UUID(sequence[1]);
      inputBIRs = $._decodeSequenceOf<BioAPI_INPUT_BIR>(
        () => _decode_BioAPI_INPUT_BIR
      )(sequence[2]);
      return new Transform_RequestParams(bspHandle, operationUuid, inputBIRs);
    };
  }
  return _cached_decoder_for_Transform_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Transform_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Transform_RequestParams */
let _cached_encoder_for_Transform_RequestParams: $.ASN1Encoder<Transform_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Transform_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_Transform_RequestParams */
/**
 * @summary Encodes a(n) Transform_RequestParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Transform_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_Transform_RequestParams(
  value: Transform_RequestParams,
  elGetter: $.ASN1Encoder<Transform_RequestParams>
) {
  if (!_cached_encoder_for_Transform_RequestParams) {
    _cached_encoder_for_Transform_RequestParams = function (
      value: Transform_RequestParams,
      elGetter: $.ASN1Encoder<Transform_RequestParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(value.bspHandle, $.BER),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.operationUuid, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<BioAPI_INPUT_BIR>(
              () => _encode_BioAPI_INPUT_BIR,
              $.BER
            )(value.inputBIRs, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Transform_RequestParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Transform_RequestParams */

/* eslint-enable */
