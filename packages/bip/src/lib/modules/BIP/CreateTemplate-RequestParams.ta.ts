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
  BioAPI_INPUT_BIR,
  _decode_BioAPI_INPUT_BIR,
  _encode_BioAPI_INPUT_BIR,
} from '../BIP/BioAPI-INPUT-BIR.ta.js';
export {
  BioAPI_INPUT_BIR,
  _decode_BioAPI_INPUT_BIR,
  _encode_BioAPI_INPUT_BIR,
} from '../BIP/BioAPI-INPUT-BIR.ta.js';
import {
  BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  _decode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  _encode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
} from '../BIP/BioAPI-BIR-BIOMETRIC-DATA-FORMAT.ta.js';
export {
  BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  _decode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  _encode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
} from '../BIP/BioAPI-BIR-BIOMETRIC-DATA-FORMAT.ta.js';
import {
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta.js';
export {
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta.js';

/* START_OF_SYMBOL_DEFINITION CreateTemplate_RequestParams */
/**
 * @summary CreateTemplate_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CreateTemplate-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   capturedBIR        BioAPI-INPUT-BIR,
 *   referenceTemplate  BioAPI-INPUT-BIR OPTIONAL,
 *   outputFormat       BioAPI-BIR-BIOMETRIC-DATA-FORMAT OPTIONAL,
 *   payload            BioAPI-DATA OPTIONAL,
 *   no-templateUuid    BOOLEAN
 * }
 * ```
 *
 * @class
 */
export class CreateTemplate_RequestParams {
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
     * @summary `referenceTemplate`.
     * @public
     * @readonly
     */
    readonly referenceTemplate: OPTIONAL<BioAPI_INPUT_BIR>,
    /**
     * @summary `outputFormat`.
     * @public
     * @readonly
     */
    readonly outputFormat: OPTIONAL<BioAPI_BIR_BIOMETRIC_DATA_FORMAT>,
    /**
     * @summary `payload`.
     * @public
     * @readonly
     */
    readonly payload: OPTIONAL<BioAPI_DATA>,
    /**
     * @summary `no_templateUuid`.
     * @public
     * @readonly
     */
    readonly no_templateUuid: BOOLEAN
  ) {}

  /**
   * @summary Restructures an object into a CreateTemplate_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `CreateTemplate_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CreateTemplate_RequestParams`.
   * @returns {CreateTemplate_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof CreateTemplate_RequestParams]: CreateTemplate_RequestParams[_K];
    }
  ): CreateTemplate_RequestParams {
    return new CreateTemplate_RequestParams(
      _o.originalBSPHandle,
      _o.capturedBIR,
      _o.referenceTemplate,
      _o.outputFormat,
      _o.payload,
      _o.no_templateUuid
    );
  }
}
/* END_OF_SYMBOL_DEFINITION CreateTemplate_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CreateTemplate_RequestParams */
/**
 * @summary The Leading Root Component Types of CreateTemplate_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CreateTemplate_RequestParams: $.ComponentSpec[] = [
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
    'referenceTemplate',
    true,
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
  new $.ComponentSpec(
    'payload',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'no-templateUuid',
    false,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CreateTemplate_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CreateTemplate_RequestParams */
/**
 * @summary The Trailing Root Component Types of CreateTemplate_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CreateTemplate_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CreateTemplate_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CreateTemplate_RequestParams */
/**
 * @summary The Extension Addition Component Types of CreateTemplate_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CreateTemplate_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CreateTemplate_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CreateTemplate_RequestParams */
let _cached_decoder_for_CreateTemplate_RequestParams: $.ASN1Decoder<CreateTemplate_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CreateTemplate_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_CreateTemplate_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) CreateTemplate_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CreateTemplate_RequestParams} The decoded data structure.
 */
export function _decode_CreateTemplate_RequestParams(el: _Element) {
  if (!_cached_decoder_for_CreateTemplate_RequestParams) {
    _cached_decoder_for_CreateTemplate_RequestParams = function (
      el: _Element
    ): CreateTemplate_RequestParams {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let originalBSPHandle!: BioAPI_HANDLE;
      let capturedBIR!: BioAPI_INPUT_BIR;
      let referenceTemplate: OPTIONAL<BioAPI_INPUT_BIR>;
      let outputFormat: OPTIONAL<BioAPI_BIR_BIOMETRIC_DATA_FORMAT>;
      let payload: OPTIONAL<BioAPI_DATA>;
      let no_templateUuid!: BOOLEAN;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        originalBSPHandle: (_el: _Element): void => {
          originalBSPHandle = _decode_BioAPI_HANDLE(_el);
        },
        capturedBIR: (_el: _Element): void => {
          capturedBIR = _decode_BioAPI_INPUT_BIR(_el);
        },
        referenceTemplate: (_el: _Element): void => {
          referenceTemplate = _decode_BioAPI_INPUT_BIR(_el);
        },
        outputFormat: (_el: _Element): void => {
          outputFormat = _decode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT(_el);
        },
        payload: (_el: _Element): void => {
          payload = _decode_BioAPI_DATA(_el);
        },
        'no-templateUuid': (_el: _Element): void => {
          no_templateUuid = $._decodeBoolean(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CreateTemplate_RequestParams,
        _extension_additions_list_spec_for_CreateTemplate_RequestParams,
        _root_component_type_list_2_spec_for_CreateTemplate_RequestParams,
        undefined
      );
      return new CreateTemplate_RequestParams /* SEQUENCE_CONSTRUCTOR_CALL */(
        originalBSPHandle,
        capturedBIR,
        referenceTemplate,
        outputFormat,
        payload,
        no_templateUuid
      );
    };
  }
  return _cached_decoder_for_CreateTemplate_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CreateTemplate_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CreateTemplate_RequestParams */
let _cached_encoder_for_CreateTemplate_RequestParams: $.ASN1Encoder<CreateTemplate_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CreateTemplate_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_CreateTemplate_RequestParams */
/**
 * @summary Encodes a(n) CreateTemplate_RequestParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateTemplate_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_CreateTemplate_RequestParams(
  value: CreateTemplate_RequestParams,
  elGetter: $.ASN1Encoder<CreateTemplate_RequestParams>
) {
  if (!_cached_encoder_for_CreateTemplate_RequestParams) {
    _cached_encoder_for_CreateTemplate_RequestParams = function (
      value: CreateTemplate_RequestParams,
      elGetter: $.ASN1Encoder<CreateTemplate_RequestParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_INPUT_BIR(value.capturedBIR, $.BER),
            /* IF_ABSENT  */ value.referenceTemplate === undefined
              ? undefined
              : _encode_BioAPI_INPUT_BIR(value.referenceTemplate, $.BER),
            /* IF_ABSENT  */ value.outputFormat === undefined
              ? undefined
              : _encode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT(
                  value.outputFormat,
                  $.BER
                ),
            /* IF_ABSENT  */ value.payload === undefined
              ? undefined
              : _encode_BioAPI_DATA(value.payload, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.no_templateUuid, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CreateTemplate_RequestParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CreateTemplate_RequestParams */

/* eslint-enable */
