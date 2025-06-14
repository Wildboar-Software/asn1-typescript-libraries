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
  BioAPI_BIR_SUBTYPE,
  _decode_BioAPI_BIR_SUBTYPE,
  _encode_BioAPI_BIR_SUBTYPE,
} from '../BIP/BioAPI-BIR-SUBTYPE.ta.mjs';
import {
  SignedInt,
  _decode_SignedInt,
  _encode_SignedInt,
} from '../BIP/SignedInt.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Verify_RequestParams */
/**
 * @summary Verify_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Verify-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   maxFMRRequested    BioAPI-FMR,
 *   referenceTemplate  BioAPI-INPUT-BIR,
 *   subtype            BioAPI-BIR-SUBTYPE,
 *   timeout            SignedInt,
 *   no-adaptedBIR      BOOLEAN,
 *   no-fmrAchieved     BOOLEAN,
 *   no-payload         BOOLEAN,
 *   no-auditData       BOOLEAN
 * }
 * ```
 *
 * @class
 */
export class Verify_RequestParams {
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
     * @summary `referenceTemplate`.
     * @public
     * @readonly
     */
    readonly referenceTemplate: BioAPI_INPUT_BIR,
    /**
     * @summary `subtype`.
     * @public
     * @readonly
     */
    readonly subtype: BioAPI_BIR_SUBTYPE,
    /**
     * @summary `timeout`.
     * @public
     * @readonly
     */
    readonly timeout: SignedInt,
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
    readonly no_payload: BOOLEAN,
    /**
     * @summary `no_auditData`.
     * @public
     * @readonly
     */
    readonly no_auditData: BOOLEAN
  ) {}

  /**
   * @summary Restructures an object into a Verify_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `Verify_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Verify_RequestParams`.
   * @returns {Verify_RequestParams}
   */
  public static _from_object(
    _o: { [_K in keyof Verify_RequestParams]: Verify_RequestParams[_K] }
  ): Verify_RequestParams {
    return new Verify_RequestParams(
      _o.originalBSPHandle,
      _o.maxFMRRequested,
      _o.referenceTemplate,
      _o.subtype,
      _o.timeout,
      _o.no_adaptedBIR,
      _o.no_fmrAchieved,
      _o.no_payload,
      _o.no_auditData
    );
  }
}
/* END_OF_SYMBOL_DEFINITION Verify_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Verify_RequestParams */
/**
 * @summary The Leading Root Component Types of Verify_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Verify_RequestParams: $.ComponentSpec[] = [
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
    'referenceTemplate',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'subtype',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'timeout',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'no-adaptedBIR',
    false,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'no-fmrAchieved',
    false,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'no-payload',
    false,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'no-auditData',
    false,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Verify_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Verify_RequestParams */
/**
 * @summary The Trailing Root Component Types of Verify_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Verify_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Verify_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Verify_RequestParams */
/**
 * @summary The Extension Addition Component Types of Verify_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Verify_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Verify_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Verify_RequestParams */
let _cached_decoder_for_Verify_RequestParams: $.ASN1Decoder<Verify_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Verify_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_Verify_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) Verify_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Verify_RequestParams} The decoded data structure.
 */
export function _decode_Verify_RequestParams(el: _Element) {
  if (!_cached_decoder_for_Verify_RequestParams) {
    _cached_decoder_for_Verify_RequestParams = function (
      el: _Element
    ): Verify_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 9) {
        throw new _ConstructionError(
          'Verify-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'maxFMRRequested';
      sequence[2].name = 'referenceTemplate';
      sequence[3].name = 'subtype';
      sequence[4].name = 'timeout';
      sequence[5].name = 'no-adaptedBIR';
      sequence[6].name = 'no-fmrAchieved';
      sequence[7].name = 'no-payload';
      sequence[8].name = 'no-auditData';
      let originalBSPHandle!: BioAPI_HANDLE;
      let maxFMRRequested!: BioAPI_FMR;
      let referenceTemplate!: BioAPI_INPUT_BIR;
      let subtype!: BioAPI_BIR_SUBTYPE;
      let timeout!: SignedInt;
      let no_adaptedBIR!: BOOLEAN;
      let no_fmrAchieved!: BOOLEAN;
      let no_payload!: BOOLEAN;
      let no_auditData!: BOOLEAN;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      maxFMRRequested = _decode_BioAPI_FMR(sequence[1]);
      referenceTemplate = _decode_BioAPI_INPUT_BIR(sequence[2]);
      subtype = _decode_BioAPI_BIR_SUBTYPE(sequence[3]);
      timeout = _decode_SignedInt(sequence[4]);
      no_adaptedBIR = $._decodeBoolean(sequence[5]);
      no_fmrAchieved = $._decodeBoolean(sequence[6]);
      no_payload = $._decodeBoolean(sequence[7]);
      no_auditData = $._decodeBoolean(sequence[8]);
      return new Verify_RequestParams(
        originalBSPHandle,
        maxFMRRequested,
        referenceTemplate,
        subtype,
        timeout,
        no_adaptedBIR,
        no_fmrAchieved,
        no_payload,
        no_auditData
      );
    };
  }
  return _cached_decoder_for_Verify_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Verify_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Verify_RequestParams */
let _cached_encoder_for_Verify_RequestParams: $.ASN1Encoder<Verify_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Verify_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_Verify_RequestParams */
/**
 * @summary Encodes a(n) Verify_RequestParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Verify_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_Verify_RequestParams(
  value: Verify_RequestParams,
  elGetter: $.ASN1Encoder<Verify_RequestParams>
) {
  if (!_cached_encoder_for_Verify_RequestParams) {
    _cached_encoder_for_Verify_RequestParams = function (
      value: Verify_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_FMR(value.maxFMRRequested, $.BER),
            /* REQUIRED   */ _encode_BioAPI_INPUT_BIR(
              value.referenceTemplate,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_BIR_SUBTYPE(value.subtype, $.BER),
            /* REQUIRED   */ _encode_SignedInt(value.timeout, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.no_adaptedBIR, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.no_fmrAchieved, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.no_payload, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.no_auditData, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Verify_RequestParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Verify_RequestParams */

/* eslint-enable */
