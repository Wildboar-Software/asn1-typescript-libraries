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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
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

/**
 * @summary Capture_RequestParams
 * @description
 *
 * Parameters of a `capture` request BIP message (master→slave)
 * for `BioAPI_Capture`. `BSPHandle` is rewritten to the
 * hosting-endpoint attach handle (clause 26). `CapturedBIR`
 * has no request component (clause 22). X.1083 §16.30.
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
 */
export class Capture_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @description
     *
     * Attach-session handle on the hosting (slave) endpoint.
     * BioAPI `BSPHandle` is rewritten from the caller's local
     * handle (clauses 24 and 26). X.1083 §16.30.5.
     *
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `purpose`.
     * @description
     *
     * Intended purpose of the captured BIR, from BioAPI
     * `Purpose`. X.1083 §16.30.5.
     *
     * @public
     * @readonly
     */
    readonly purpose: BioAPI_BIR_PURPOSE,
    /**
     * @summary `subtype`.
     * @description
     *
     * Requested BIR subtype, from BioAPI `Subtype`. X.1083
     * §16.30.5.
     *
     * @public
     * @readonly
     */
    readonly subtype: BioAPI_BIR_SUBTYPE,
    /**
     * @summary `outputFormat`.
     * @description
     *
     * Requested biometric-data format of the captured BIR.
     * C `NULL` `OutputFormat` ↔ absent (clause 19). X.1083
     * §16.30.5.
     *
     * @public
     * @readonly
     */
    readonly outputFormat: OPTIONAL<BioAPI_BIR_BIOMETRIC_DATA_FORMAT>,
    /**
     * @summary `timeout`.
     * @description
     *
     * Capture timeout from BioAPI `Timeout`. X.1083 §16.30.5.
     *
     * @public
     * @readonly
     */
    readonly timeout: SignedInt,
    /**
     * @summary `no_auditData`.
     * @description
     *
     * `TRUE` if the caller passed a NULL `AuditData` pointer
     * (do not return an audit BIR). `FALSE` requests
     * `auditData` on the response. X.1083 §16.30.5, clause 21.
     *
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
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'purpose',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'subtype',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'outputFormat',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'timeout',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'no-auditData',
    false,
    $.hasTag(_TagClass.context, 5)
  ),
];


/**
 * @summary The Trailing Root Component Types of Capture_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Capture_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Capture_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Capture_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_Capture_RequestParams: $.ASN1Decoder<Capture_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Capture_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Capture_RequestParams} The decoded data structure.
 */
export function _decode_Capture_RequestParams(el: _Element): Capture_RequestParams {
  if (!_cached_decoder_for_Capture_RequestParams) {
    _cached_decoder_for_Capture_RequestParams = function (
      el: _Element
    ): Capture_RequestParams {
      let originalBSPHandle!: BioAPI_HANDLE;
      let purpose!: BioAPI_BIR_PURPOSE;
      let subtype!: BioAPI_BIR_SUBTYPE;
      let outputFormat: OPTIONAL<BioAPI_BIR_BIOMETRIC_DATA_FORMAT>;
      let timeout!: SignedInt;
      let no_auditData!: BOOLEAN;
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
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Capture_RequestParams,
        _extension_additions_list_spec_for_Capture_RequestParams,
        _root_component_type_list_2_spec_for_Capture_RequestParams,
        undefined
      );
      return new Capture_RequestParams (
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


let _cached_encoder_for_Capture_RequestParams: $.ASN1Encoder<Capture_RequestParams> | null = null;


/**
 * @summary Encodes a(n) Capture_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Capture_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_Capture_RequestParams(
  value: Capture_RequestParams,
  elGetter: $.ASN1Encoder<Capture_RequestParams>
): _Element {
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


/* eslint-enable */
