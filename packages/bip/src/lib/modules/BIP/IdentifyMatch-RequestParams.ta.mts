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
import {
  BioAPI_IDENTIFY_POPULATION,
  _decode_BioAPI_IDENTIFY_POPULATION,
  _encode_BioAPI_IDENTIFY_POPULATION,
} from '../BIP/BioAPI-IDENTIFY-POPULATION.ta.mjs';
import {
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta.mjs';
import {
  SignedInt,
  _decode_SignedInt,
  _encode_SignedInt,
} from '../BIP/SignedInt.ta.mjs';

/**
 * @summary IdentifyMatch_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdentifyMatch-RequestParams ::= SEQUENCE {
 *   originalBSPHandle       BioAPI-HANDLE,
 *   maxFMRRequested         BioAPI-FMR,
 *   processedBIR            BioAPI-INPUT-BIR,
 *   population              BioAPI-IDENTIFY-POPULATION,
 *   totalNumberOfTemplates  UnsignedInt,
 *   binning                 BOOLEAN,
 *   maxNumberOfResults      UnsignedInt,
 *   timeout                 SignedInt
 * }
 * ```
 *
 * @class
 */
export class IdentifyMatch_RequestParams {
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
     * @summary `population`.
     * @public
     * @readonly
     */
    readonly population: BioAPI_IDENTIFY_POPULATION,
    /**
     * @summary `totalNumberOfTemplates`.
     * @public
     * @readonly
     */
    readonly totalNumberOfTemplates: UnsignedInt,
    /**
     * @summary `binning`.
     * @public
     * @readonly
     */
    readonly binning: BOOLEAN,
    /**
     * @summary `maxNumberOfResults`.
     * @public
     * @readonly
     */
    readonly maxNumberOfResults: UnsignedInt,
    /**
     * @summary `timeout`.
     * @public
     * @readonly
     */
    readonly timeout: SignedInt
  ) {}

  /**
   * @summary Restructures an object into a IdentifyMatch_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `IdentifyMatch_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `IdentifyMatch_RequestParams`.
   * @returns {IdentifyMatch_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof IdentifyMatch_RequestParams]: IdentifyMatch_RequestParams[_K];
    }
  ): IdentifyMatch_RequestParams {
    return new IdentifyMatch_RequestParams(
      _o.originalBSPHandle,
      _o.maxFMRRequested,
      _o.processedBIR,
      _o.population,
      _o.totalNumberOfTemplates,
      _o.binning,
      _o.maxNumberOfResults,
      _o.timeout
    );
  }
}


/**
 * @summary The Leading Root Component Types of IdentifyMatch_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IdentifyMatch_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'maxFMRRequested',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'processedBIR',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'population',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'totalNumberOfTemplates',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'binning',
    false,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'maxNumberOfResults',
    false,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'timeout',
    false,
    $.hasTag(_TagClass.context, 7)
  ),
];


/**
 * @summary The Trailing Root Component Types of IdentifyMatch_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IdentifyMatch_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of IdentifyMatch_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IdentifyMatch_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_IdentifyMatch_RequestParams: $.ASN1Decoder<IdentifyMatch_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) IdentifyMatch_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdentifyMatch_RequestParams} The decoded data structure.
 */
export function _decode_IdentifyMatch_RequestParams(el: _Element) {
  if (!_cached_decoder_for_IdentifyMatch_RequestParams) {
    _cached_decoder_for_IdentifyMatch_RequestParams = function (
      el: _Element
    ): IdentifyMatch_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 8) {
        throw new _ConstructionError(
          'IdentifyMatch-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'maxFMRRequested';
      sequence[2].name = 'processedBIR';
      sequence[3].name = 'population';
      sequence[4].name = 'totalNumberOfTemplates';
      sequence[5].name = 'binning';
      sequence[6].name = 'maxNumberOfResults';
      sequence[7].name = 'timeout';
      let originalBSPHandle!: BioAPI_HANDLE;
      let maxFMRRequested!: BioAPI_FMR;
      let processedBIR!: BioAPI_INPUT_BIR;
      let population!: BioAPI_IDENTIFY_POPULATION;
      let totalNumberOfTemplates!: UnsignedInt;
      let binning!: BOOLEAN;
      let maxNumberOfResults!: UnsignedInt;
      let timeout!: SignedInt;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      maxFMRRequested = _decode_BioAPI_FMR(sequence[1]);
      processedBIR = _decode_BioAPI_INPUT_BIR(sequence[2]);
      population = _decode_BioAPI_IDENTIFY_POPULATION(sequence[3]);
      totalNumberOfTemplates = _decode_UnsignedInt(sequence[4]);
      binning = $._decodeBoolean(sequence[5]);
      maxNumberOfResults = _decode_UnsignedInt(sequence[6]);
      timeout = _decode_SignedInt(sequence[7]);
      return new IdentifyMatch_RequestParams(
        originalBSPHandle,
        maxFMRRequested,
        processedBIR,
        population,
        totalNumberOfTemplates,
        binning,
        maxNumberOfResults,
        timeout
      );
    };
  }
  return _cached_decoder_for_IdentifyMatch_RequestParams(el);
}


let _cached_encoder_for_IdentifyMatch_RequestParams: $.ASN1Encoder<IdentifyMatch_RequestParams> | null = null;


/**
 * @summary Encodes a(n) IdentifyMatch_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdentifyMatch_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_IdentifyMatch_RequestParams(
  value: IdentifyMatch_RequestParams,
  elGetter: $.ASN1Encoder<IdentifyMatch_RequestParams>
) {
  if (!_cached_encoder_for_IdentifyMatch_RequestParams) {
    _cached_encoder_for_IdentifyMatch_RequestParams = function (
      value: IdentifyMatch_RequestParams    ): _Element {
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
            /* REQUIRED   */ _encode_BioAPI_IDENTIFY_POPULATION(
              value.population,
              $.BER
            ),
            /* REQUIRED   */ _encode_UnsignedInt(
              value.totalNumberOfTemplates,
              $.BER
            ),
            /* REQUIRED   */ $._encodeBoolean(value.binning, $.BER),
            /* REQUIRED   */ _encode_UnsignedInt(
              value.maxNumberOfResults,
              $.BER
            ),
            /* REQUIRED   */ _encode_SignedInt(value.timeout, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_IdentifyMatch_RequestParams(value, elGetter);
}


/* eslint-enable */
