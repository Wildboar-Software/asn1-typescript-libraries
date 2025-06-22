/* eslint-disable */
import {
  OPTIONAL,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.mjs';
import {
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta.mjs';
import {
  BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  _decode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  _encode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
} from '../BIP/BioAPI-BIR-BIOMETRIC-DATA-FORMAT.ta.mjs';
import {
  BioAPI_BIR_PURPOSE,
  _enum_for_BioAPI_BIR_PURPOSE,
  _decode_BioAPI_BIR_PURPOSE,
  _encode_BioAPI_BIR_PURPOSE,
} from '../BIP/BioAPI-BIR-PURPOSE.ta.mjs';

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
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'inputData',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'inputFormat',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'outputFormat',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'purpose',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of Import_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Import_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Import_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Import_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_Import_RequestParams: $.ASN1Decoder<Import_RequestParams> | null = null;


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


let _cached_encoder_for_Import_RequestParams: $.ASN1Encoder<Import_RequestParams> | null = null;


/**
 * @summary Encodes a(n) Import_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Import_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_Import_RequestParams(
  value: Import_RequestParams,
  elGetter: $.ASN1Encoder<Import_RequestParams>
) {
  if (!_cached_encoder_for_Import_RequestParams) {
    _cached_encoder_for_Import_RequestParams = function (
      value: Import_RequestParams    ): _Element {
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


/* eslint-enable */
