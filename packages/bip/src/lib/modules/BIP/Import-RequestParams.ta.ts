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
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta.js';
export {
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta.js';
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
  BioAPI_BIR_PURPOSE,
  _enum_for_BioAPI_BIR_PURPOSE,
  BioAPI_BIR_PURPOSE_verify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  verify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_identify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  identify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_enroll /* IMPORTED_LONG_ENUMERATION_ITEM */,
  enroll /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_enrollVerify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  enrollVerify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_enrollIdentify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  enrollIdentify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_audit /* IMPORTED_LONG_ENUMERATION_ITEM */,
  audit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_any_ /* IMPORTED_LONG_ENUMERATION_ITEM */,
  any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BioAPI_BIR_PURPOSE,
  _encode_BioAPI_BIR_PURPOSE,
} from '../BIP/BioAPI-BIR-PURPOSE.ta.js';
export {
  BioAPI_BIR_PURPOSE,
  _enum_for_BioAPI_BIR_PURPOSE,
  BioAPI_BIR_PURPOSE_verify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  verify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_identify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  identify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_enroll /* IMPORTED_LONG_ENUMERATION_ITEM */,
  enroll /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_enrollVerify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  enrollVerify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_enrollIdentify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  enrollIdentify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_audit /* IMPORTED_LONG_ENUMERATION_ITEM */,
  audit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_any_ /* IMPORTED_LONG_ENUMERATION_ITEM */,
  any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BioAPI_BIR_PURPOSE,
  _encode_BioAPI_BIR_PURPOSE,
} from '../BIP/BioAPI-BIR-PURPOSE.ta.js';

/* START_OF_SYMBOL_DEFINITION Import_RequestParams */
/**
 * @summary Import_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Import-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   inputData          BioAPI-DATA,
 *   inputFormat        BioAPI-BIR-BIOMETRIC-DATA-FORMAT,
 *   outputFormat       BioAPI-BIR-BIOMETRIC-DATA-FORMAT OPTIONAL,
 *   purpose            BioAPI-BIR-PURPOSE
 * }
 * ```
 *
 * @class
 */
export class Import_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `inputData`.
     * @public
     * @readonly
     */
    readonly inputData: BioAPI_DATA,
    /**
     * @summary `inputFormat`.
     * @public
     * @readonly
     */
    readonly inputFormat: BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
    /**
     * @summary `outputFormat`.
     * @public
     * @readonly
     */
    readonly outputFormat: OPTIONAL<BioAPI_BIR_BIOMETRIC_DATA_FORMAT>,
    /**
     * @summary `purpose`.
     * @public
     * @readonly
     */
    readonly purpose: BioAPI_BIR_PURPOSE
  ) {}

  /**
   * @summary Restructures an object into a Import_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `Import_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Import_RequestParams`.
   * @returns {Import_RequestParams}
   */
  public static _from_object(
    _o: { [_K in keyof Import_RequestParams]: Import_RequestParams[_K] }
  ): Import_RequestParams {
    return new Import_RequestParams(
      _o.originalBSPHandle,
      _o.inputData,
      _o.inputFormat,
      _o.outputFormat,
      _o.purpose
    );
  }

  /**
   * @summary The enum used as the type of the component `purpose`
   * @public
   * @static
   */

  public static _enum_for_purpose = _enum_for_BioAPI_BIR_PURPOSE;
}
/* END_OF_SYMBOL_DEFINITION Import_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Import_RequestParams */
/**
 * @summary The Leading Root Component Types of Import_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Import_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'inputData',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'inputFormat',
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
  new $.ComponentSpec(
    'purpose',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Import_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Import_RequestParams */
/**
 * @summary The Trailing Root Component Types of Import_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Import_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Import_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Import_RequestParams */
/**
 * @summary The Extension Addition Component Types of Import_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Import_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Import_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Import_RequestParams */
let _cached_decoder_for_Import_RequestParams: $.ASN1Decoder<Import_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Import_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_Import_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) Import_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Import_RequestParams} The decoded data structure.
 */
export function _decode_Import_RequestParams(el: _Element) {
  if (!_cached_decoder_for_Import_RequestParams) {
    _cached_decoder_for_Import_RequestParams = function (
      el: _Element
    ): Import_RequestParams {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let originalBSPHandle!: BioAPI_HANDLE;
      let inputData!: BioAPI_DATA;
      let inputFormat!: BioAPI_BIR_BIOMETRIC_DATA_FORMAT;
      let outputFormat: OPTIONAL<BioAPI_BIR_BIOMETRIC_DATA_FORMAT>;
      let purpose!: BioAPI_BIR_PURPOSE;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        originalBSPHandle: (_el: _Element): void => {
          originalBSPHandle = _decode_BioAPI_HANDLE(_el);
        },
        inputData: (_el: _Element): void => {
          inputData = _decode_BioAPI_DATA(_el);
        },
        inputFormat: (_el: _Element): void => {
          inputFormat = _decode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT(_el);
        },
        outputFormat: (_el: _Element): void => {
          outputFormat = _decode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT(_el);
        },
        purpose: (_el: _Element): void => {
          purpose = _decode_BioAPI_BIR_PURPOSE(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Import_RequestParams,
        _extension_additions_list_spec_for_Import_RequestParams,
        _root_component_type_list_2_spec_for_Import_RequestParams,
        undefined
      );
      return new Import_RequestParams /* SEQUENCE_CONSTRUCTOR_CALL */(
        originalBSPHandle,
        inputData,
        inputFormat,
        outputFormat,
        purpose
      );
    };
  }
  return _cached_decoder_for_Import_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Import_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Import_RequestParams */
let _cached_encoder_for_Import_RequestParams: $.ASN1Encoder<Import_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Import_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_Import_RequestParams */
/**
 * @summary Encodes a(n) Import_RequestParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Import_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_Import_RequestParams(
  value: Import_RequestParams,
  elGetter: $.ASN1Encoder<Import_RequestParams>
) {
  if (!_cached_encoder_for_Import_RequestParams) {
    _cached_encoder_for_Import_RequestParams = function (
      value: Import_RequestParams,
      elGetter: $.ASN1Encoder<Import_RequestParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_DATA(value.inputData, $.BER),
            /* REQUIRED   */ _encode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT(
              value.inputFormat,
              $.BER
            ),
            /* IF_ABSENT  */ value.outputFormat === undefined
              ? undefined
              : _encode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT(
                  value.outputFormat,
                  $.BER
                ),
            /* REQUIRED   */ _encode_BioAPI_BIR_PURPOSE(value.purpose, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Import_RequestParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Import_RequestParams */

/* eslint-enable */
