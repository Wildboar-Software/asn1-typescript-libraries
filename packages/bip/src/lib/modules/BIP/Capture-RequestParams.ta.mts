/* eslint-disable */
import {
  OPTIONAL,
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
  BioAPI_BIR_PURPOSE,
  _enum_for_BioAPI_BIR_PURPOSE,
  _decode_BioAPI_BIR_PURPOSE,
  _encode_BioAPI_BIR_PURPOSE,
} from '../BIP/BioAPI-BIR-PURPOSE.ta.mjs';
import {
  BioAPI_BIR_SUBTYPE,
  _decode_BioAPI_BIR_SUBTYPE,
  _encode_BioAPI_BIR_SUBTYPE,
} from '../BIP/BioAPI-BIR-SUBTYPE.ta.mjs';
import {
  BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  _decode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  _encode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
} from '../BIP/BioAPI-BIR-BIOMETRIC-DATA-FORMAT.ta.mjs';
import {
  SignedInt,
  _decode_SignedInt,
  _encode_SignedInt,
} from '../BIP/SignedInt.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Capture_RequestParams */
/**
 * @summary Capture_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Capture-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   purpose            BioAPI-BIR-PURPOSE,
 *   subtype            BioAPI-BIR-SUBTYPE,
 *   outputFormat       BioAPI-BIR-BIOMETRIC-DATA-FORMAT OPTIONAL,
 *   timeout            SignedInt,
 *   no-auditData       BOOLEAN
 * }
 * ```
 *
 * @class
 */
export class Capture_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `purpose`.
     * @public
     * @readonly
     */
    readonly purpose: BioAPI_BIR_PURPOSE,
    /**
     * @summary `subtype`.
     * @public
     * @readonly
     */
    readonly subtype: BioAPI_BIR_SUBTYPE,
    /**
     * @summary `outputFormat`.
     * @public
     * @readonly
     */
    readonly outputFormat: OPTIONAL<BioAPI_BIR_BIOMETRIC_DATA_FORMAT>,
    /**
     * @summary `timeout`.
     * @public
     * @readonly
     */
    readonly timeout: SignedInt,
    /**
     * @summary `no_auditData`.
     * @public
     * @readonly
     */
    readonly no_auditData: BOOLEAN
  ) {}

  /**
   * @summary Restructures an object into a Capture_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `Capture_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Capture_RequestParams`.
   * @returns {Capture_RequestParams}
   */
  public static _from_object(
    _o: { [_K in keyof Capture_RequestParams]: Capture_RequestParams[_K] }
  ): Capture_RequestParams {
    return new Capture_RequestParams(
      _o.originalBSPHandle,
      _o.purpose,
      _o.subtype,
      _o.outputFormat,
      _o.timeout,
      _o.no_auditData
    );
  }

  /**
   * @summary The enum used as the type of the component `purpose`
   * @public
   * @static
   */

  public static _enum_for_purpose = _enum_for_BioAPI_BIR_PURPOSE;
}
/* END_OF_SYMBOL_DEFINITION Capture_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Capture_RequestParams */
/**
 * @summary The Leading Root Component Types of Capture_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Capture_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'purpose',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'subtype',
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
    'timeout',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'no-auditData',
    false,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Capture_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Capture_RequestParams */
/**
 * @summary The Trailing Root Component Types of Capture_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Capture_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Capture_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Capture_RequestParams */
/**
 * @summary The Extension Addition Component Types of Capture_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Capture_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Capture_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Capture_RequestParams */
let _cached_decoder_for_Capture_RequestParams: $.ASN1Decoder<Capture_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Capture_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_Capture_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) Capture_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Capture_RequestParams} The decoded data structure.
 */
export function _decode_Capture_RequestParams(el: _Element) {
  if (!_cached_decoder_for_Capture_RequestParams) {
    _cached_decoder_for_Capture_RequestParams = function (
      el: _Element
    ): Capture_RequestParams {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let originalBSPHandle!: BioAPI_HANDLE;
      let purpose!: BioAPI_BIR_PURPOSE;
      let subtype!: BioAPI_BIR_SUBTYPE;
      let outputFormat: OPTIONAL<BioAPI_BIR_BIOMETRIC_DATA_FORMAT>;
      let timeout!: SignedInt;
      let no_auditData!: BOOLEAN;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        originalBSPHandle: (_el: _Element): void => {
          originalBSPHandle = _decode_BioAPI_HANDLE(_el);
        },
        purpose: (_el: _Element): void => {
          purpose = _decode_BioAPI_BIR_PURPOSE(_el);
        },
        subtype: (_el: _Element): void => {
          subtype = _decode_BioAPI_BIR_SUBTYPE(_el);
        },
        outputFormat: (_el: _Element): void => {
          outputFormat = _decode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT(_el);
        },
        timeout: (_el: _Element): void => {
          timeout = _decode_SignedInt(_el);
        },
        'no-auditData': (_el: _Element): void => {
          no_auditData = $._decodeBoolean(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Capture_RequestParams,
        _extension_additions_list_spec_for_Capture_RequestParams,
        _root_component_type_list_2_spec_for_Capture_RequestParams,
        undefined
      );
      return new Capture_RequestParams /* SEQUENCE_CONSTRUCTOR_CALL */(
        originalBSPHandle,
        purpose,
        subtype,
        outputFormat,
        timeout,
        no_auditData
      );
    };
  }
  return _cached_decoder_for_Capture_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Capture_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Capture_RequestParams */
let _cached_encoder_for_Capture_RequestParams: $.ASN1Encoder<Capture_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Capture_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_Capture_RequestParams */
/**
 * @summary Encodes a(n) Capture_RequestParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Capture_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_Capture_RequestParams(
  value: Capture_RequestParams,
  elGetter: $.ASN1Encoder<Capture_RequestParams>
) {
  if (!_cached_encoder_for_Capture_RequestParams) {
    _cached_encoder_for_Capture_RequestParams = function (
      value: Capture_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_BIR_PURPOSE(value.purpose, $.BER),
            /* REQUIRED   */ _encode_BioAPI_BIR_SUBTYPE(value.subtype, $.BER),
            /* IF_ABSENT  */ value.outputFormat === undefined
              ? undefined
              : _encode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT(
                  value.outputFormat,
                  $.BER
                ),
            /* REQUIRED   */ _encode_SignedInt(value.timeout, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.no_auditData, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Capture_RequestParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Capture_RequestParams */

/* eslint-enable */
