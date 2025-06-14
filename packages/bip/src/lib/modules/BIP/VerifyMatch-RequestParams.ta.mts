/* eslint-disable */
import {
  BOOLEAN,
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
} from '../BIP/BioAPI-HANDLE.ta.mjs';
import {
  BioAPI_FMR,
  _decode_BioAPI_FMR,
  _encode_BioAPI_FMR,
} from '../BIP/BioAPI-FMR.ta.mjs';
import {
  BioAPI_INPUT_BIR,
  _decode_BioAPI_INPUT_BIR,
  _encode_BioAPI_INPUT_BIR,
} from '../BIP/BioAPI-INPUT-BIR.ta.mjs';
/* START_OF_SYMBOL_DEFINITION VerifyMatch_RequestParams */
/**
 * @summary VerifyMatch_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VerifyMatch-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   maxFMRRequested    BioAPI-FMR,
 *   processedBIR       BioAPI-INPUT-BIR,
 *   referenceTemplate  BioAPI-INPUT-BIR,
 *   no-adaptedBIR      BOOLEAN,
 *   no-fmrAchieved     BOOLEAN,
 *   no-payload         BOOLEAN
 * }
 * ```
 *
 * @class
 */
export class VerifyMatch_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `maxFMRRequested`.
     * @public
     * @readonly
     */
    readonly maxFMRRequested: BioAPI_FMR,
    /**
     * @summary `processedBIR`.
     * @public
     * @readonly
     */
    readonly processedBIR: BioAPI_INPUT_BIR,
    /**
     * @summary `referenceTemplate`.
     * @public
     * @readonly
     */
    readonly referenceTemplate: BioAPI_INPUT_BIR,
    /**
     * @summary `no_adaptedBIR`.
     * @public
     * @readonly
     */
    readonly no_adaptedBIR: BOOLEAN,
    /**
     * @summary `no_fmrAchieved`.
     * @public
     * @readonly
     */
    readonly no_fmrAchieved: BOOLEAN,
    /**
     * @summary `no_payload`.
     * @public
     * @readonly
     */
    readonly no_payload: BOOLEAN
  ) {}

  /**
   * @summary Restructures an object into a VerifyMatch_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `VerifyMatch_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `VerifyMatch_RequestParams`.
   * @returns {VerifyMatch_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof VerifyMatch_RequestParams]: VerifyMatch_RequestParams[_K];
    }
  ): VerifyMatch_RequestParams {
    return new VerifyMatch_RequestParams(
      _o.originalBSPHandle,
      _o.maxFMRRequested,
      _o.processedBIR,
      _o.referenceTemplate,
      _o.no_adaptedBIR,
      _o.no_fmrAchieved,
      _o.no_payload
    );
  }
}
/* END_OF_SYMBOL_DEFINITION VerifyMatch_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_VerifyMatch_RequestParams */
/**
 * @summary The Leading Root Component Types of VerifyMatch_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_VerifyMatch_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'maxFMRRequested',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'processedBIR',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'referenceTemplate',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'no-adaptedBIR',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'no-fmrAchieved',
    false,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'no-payload',
    false,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_VerifyMatch_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_VerifyMatch_RequestParams */
/**
 * @summary The Trailing Root Component Types of VerifyMatch_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_VerifyMatch_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_VerifyMatch_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_VerifyMatch_RequestParams */
/**
 * @summary The Extension Addition Component Types of VerifyMatch_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_VerifyMatch_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_VerifyMatch_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VerifyMatch_RequestParams */
let _cached_decoder_for_VerifyMatch_RequestParams: $.ASN1Decoder<VerifyMatch_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VerifyMatch_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_VerifyMatch_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) VerifyMatch_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VerifyMatch_RequestParams} The decoded data structure.
 */
export function _decode_VerifyMatch_RequestParams(el: _Element) {
  if (!_cached_decoder_for_VerifyMatch_RequestParams) {
    _cached_decoder_for_VerifyMatch_RequestParams = function (
      el: _Element
    ): VerifyMatch_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 7) {
        throw new _ConstructionError(
          'VerifyMatch-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'maxFMRRequested';
      sequence[2].name = 'processedBIR';
      sequence[3].name = 'referenceTemplate';
      sequence[4].name = 'no-adaptedBIR';
      sequence[5].name = 'no-fmrAchieved';
      sequence[6].name = 'no-payload';
      let originalBSPHandle!: BioAPI_HANDLE;
      let maxFMRRequested!: BioAPI_FMR;
      let processedBIR!: BioAPI_INPUT_BIR;
      let referenceTemplate!: BioAPI_INPUT_BIR;
      let no_adaptedBIR!: BOOLEAN;
      let no_fmrAchieved!: BOOLEAN;
      let no_payload!: BOOLEAN;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      maxFMRRequested = _decode_BioAPI_FMR(sequence[1]);
      processedBIR = _decode_BioAPI_INPUT_BIR(sequence[2]);
      referenceTemplate = _decode_BioAPI_INPUT_BIR(sequence[3]);
      no_adaptedBIR = $._decodeBoolean(sequence[4]);
      no_fmrAchieved = $._decodeBoolean(sequence[5]);
      no_payload = $._decodeBoolean(sequence[6]);
      return new VerifyMatch_RequestParams(
        originalBSPHandle,
        maxFMRRequested,
        processedBIR,
        referenceTemplate,
        no_adaptedBIR,
        no_fmrAchieved,
        no_payload
      );
    };
  }
  return _cached_decoder_for_VerifyMatch_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_VerifyMatch_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VerifyMatch_RequestParams */
let _cached_encoder_for_VerifyMatch_RequestParams: $.ASN1Encoder<VerifyMatch_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VerifyMatch_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_VerifyMatch_RequestParams */
/**
 * @summary Encodes a(n) VerifyMatch_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VerifyMatch_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_VerifyMatch_RequestParams(
  value: VerifyMatch_RequestParams,
  elGetter: $.ASN1Encoder<VerifyMatch_RequestParams>
) {
  if (!_cached_encoder_for_VerifyMatch_RequestParams) {
    _cached_encoder_for_VerifyMatch_RequestParams = function (
      value: VerifyMatch_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_FMR(value.maxFMRRequested, $.BER),
            /* REQUIRED   */ _encode_BioAPI_INPUT_BIR(
              value.processedBIR,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_INPUT_BIR(
              value.referenceTemplate,
              $.BER
            ),
            /* REQUIRED   */ $._encodeBoolean(value.no_adaptedBIR, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.no_fmrAchieved, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.no_payload, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_VerifyMatch_RequestParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_VerifyMatch_RequestParams */

/* eslint-enable */
