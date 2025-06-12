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
} from '../BIP/BioAPI-HANDLE.ta.mjs';
export {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.mjs';
import {
  BioAPI_INPUT_BIR,
  _decode_BioAPI_INPUT_BIR,
  _encode_BioAPI_INPUT_BIR,
} from '../BIP/BioAPI-INPUT-BIR.ta.mjs';
export {
  BioAPI_INPUT_BIR,
  _decode_BioAPI_INPUT_BIR,
  _encode_BioAPI_INPUT_BIR,
} from '../BIP/BioAPI-INPUT-BIR.ta.mjs';
import {
  BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  _decode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  _encode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
} from '../BIP/BioAPI-BIR-BIOMETRIC-DATA-FORMAT.ta.mjs';
export {
  BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  _decode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  _encode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
} from '../BIP/BioAPI-BIR-BIOMETRIC-DATA-FORMAT.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ProcessWithAuxBIR_RequestParams */
/**
 * @summary ProcessWithAuxBIR_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessWithAuxBIR-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   capturedBIR        BioAPI-INPUT-BIR,
 *   auxiliaryData      BioAPI-INPUT-BIR,
 *   outputFormat       BioAPI-BIR-BIOMETRIC-DATA-FORMAT OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ProcessWithAuxBIR_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `capturedBIR`.
     * @public
     * @readonly
     */
    readonly capturedBIR: BioAPI_INPUT_BIR,
    /**
     * @summary `auxiliaryData`.
     * @public
     * @readonly
     */
    readonly auxiliaryData: BioAPI_INPUT_BIR,
    /**
     * @summary `outputFormat`.
     * @public
     * @readonly
     */
    readonly outputFormat: OPTIONAL<BioAPI_BIR_BIOMETRIC_DATA_FORMAT>
  ) {}

  /**
   * @summary Restructures an object into a ProcessWithAuxBIR_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `ProcessWithAuxBIR_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ProcessWithAuxBIR_RequestParams`.
   * @returns {ProcessWithAuxBIR_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof ProcessWithAuxBIR_RequestParams]: ProcessWithAuxBIR_RequestParams[_K];
    }
  ): ProcessWithAuxBIR_RequestParams {
    return new ProcessWithAuxBIR_RequestParams(
      _o.originalBSPHandle,
      _o.capturedBIR,
      _o.auxiliaryData,
      _o.outputFormat
    );
  }
}
/* END_OF_SYMBOL_DEFINITION ProcessWithAuxBIR_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProcessWithAuxBIR_RequestParams */
/**
 * @summary The Leading Root Component Types of ProcessWithAuxBIR_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProcessWithAuxBIR_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'capturedBIR',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'auxiliaryData',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'outputFormat',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProcessWithAuxBIR_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProcessWithAuxBIR_RequestParams */
/**
 * @summary The Trailing Root Component Types of ProcessWithAuxBIR_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProcessWithAuxBIR_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProcessWithAuxBIR_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProcessWithAuxBIR_RequestParams */
/**
 * @summary The Extension Addition Component Types of ProcessWithAuxBIR_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProcessWithAuxBIR_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProcessWithAuxBIR_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProcessWithAuxBIR_RequestParams */
let _cached_decoder_for_ProcessWithAuxBIR_RequestParams: $.ASN1Decoder<ProcessWithAuxBIR_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProcessWithAuxBIR_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_ProcessWithAuxBIR_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) ProcessWithAuxBIR_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProcessWithAuxBIR_RequestParams} The decoded data structure.
 */
export function _decode_ProcessWithAuxBIR_RequestParams(el: _Element) {
  if (!_cached_decoder_for_ProcessWithAuxBIR_RequestParams) {
    _cached_decoder_for_ProcessWithAuxBIR_RequestParams = function (
      el: _Element
    ): ProcessWithAuxBIR_RequestParams {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let originalBSPHandle!: BioAPI_HANDLE;
      let capturedBIR!: BioAPI_INPUT_BIR;
      let auxiliaryData!: BioAPI_INPUT_BIR;
      let outputFormat: OPTIONAL<BioAPI_BIR_BIOMETRIC_DATA_FORMAT>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        originalBSPHandle: (_el: _Element): void => {
          originalBSPHandle = _decode_BioAPI_HANDLE(_el);
        },
        capturedBIR: (_el: _Element): void => {
          capturedBIR = _decode_BioAPI_INPUT_BIR(_el);
        },
        auxiliaryData: (_el: _Element): void => {
          auxiliaryData = _decode_BioAPI_INPUT_BIR(_el);
        },
        outputFormat: (_el: _Element): void => {
          outputFormat = _decode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ProcessWithAuxBIR_RequestParams,
        _extension_additions_list_spec_for_ProcessWithAuxBIR_RequestParams,
        _root_component_type_list_2_spec_for_ProcessWithAuxBIR_RequestParams,
        undefined
      );
      return new ProcessWithAuxBIR_RequestParams /* SEQUENCE_CONSTRUCTOR_CALL */(
        originalBSPHandle,
        capturedBIR,
        auxiliaryData,
        outputFormat
      );
    };
  }
  return _cached_decoder_for_ProcessWithAuxBIR_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProcessWithAuxBIR_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProcessWithAuxBIR_RequestParams */
let _cached_encoder_for_ProcessWithAuxBIR_RequestParams: $.ASN1Encoder<ProcessWithAuxBIR_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProcessWithAuxBIR_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_ProcessWithAuxBIR_RequestParams */
/**
 * @summary Encodes a(n) ProcessWithAuxBIR_RequestParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProcessWithAuxBIR_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_ProcessWithAuxBIR_RequestParams(
  value: ProcessWithAuxBIR_RequestParams,
  elGetter: $.ASN1Encoder<ProcessWithAuxBIR_RequestParams>
) {
  if (!_cached_encoder_for_ProcessWithAuxBIR_RequestParams) {
    _cached_encoder_for_ProcessWithAuxBIR_RequestParams = function (
      value: ProcessWithAuxBIR_RequestParams,
      elGetter: $.ASN1Encoder<ProcessWithAuxBIR_RequestParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_INPUT_BIR(value.capturedBIR, $.BER),
            /* REQUIRED   */ _encode_BioAPI_INPUT_BIR(
              value.auxiliaryData,
              $.BER
            ),
            /* IF_ABSENT  */ value.outputFormat === undefined
              ? undefined
              : _encode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT(
                  value.outputFormat,
                  $.BER
                ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ProcessWithAuxBIR_RequestParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProcessWithAuxBIR_RequestParams */

/* eslint-enable */
