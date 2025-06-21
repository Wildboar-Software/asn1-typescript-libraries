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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta.mjs';

/**
 * @summary Capture_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Capture-ResponseParams ::= SEQUENCE {
 *   capturedBIR  BioAPI-BIR-HANDLE,
 *   auditData    BioAPI-BIR-HANDLE OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Capture_ResponseParams {
  constructor(
    /**
     * @summary `capturedBIR`.
     * @public
     * @readonly
     */
    readonly capturedBIR: BioAPI_BIR_HANDLE,
    /**
     * @summary `auditData`.
     * @public
     * @readonly
     */
    readonly auditData: OPTIONAL<BioAPI_BIR_HANDLE>
  ) {}

  /**
   * @summary Restructures an object into a Capture_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `Capture_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Capture_ResponseParams`.
   * @returns {Capture_ResponseParams}
   */
  public static _from_object(
    _o: { [_K in keyof Capture_ResponseParams]: Capture_ResponseParams[_K] }
  ): Capture_ResponseParams {
    return new Capture_ResponseParams(_o.capturedBIR, _o.auditData);
  }
}


/**
 * @summary The Leading Root Component Types of Capture_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Capture_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'capturedBIR',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'auditData',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of Capture_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Capture_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Capture_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Capture_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_Capture_ResponseParams: $.ASN1Decoder<Capture_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Capture_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Capture_ResponseParams} The decoded data structure.
 */
export function _decode_Capture_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_Capture_ResponseParams) {
    _cached_decoder_for_Capture_ResponseParams = function (
      el: _Element
    ): Capture_ResponseParams {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let capturedBIR!: BioAPI_BIR_HANDLE;
      let auditData: OPTIONAL<BioAPI_BIR_HANDLE>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        capturedBIR: (_el: _Element): void => {
          capturedBIR = _decode_BioAPI_BIR_HANDLE(_el);
        },
        auditData: (_el: _Element): void => {
          auditData = _decode_BioAPI_BIR_HANDLE(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Capture_ResponseParams,
        _extension_additions_list_spec_for_Capture_ResponseParams,
        _root_component_type_list_2_spec_for_Capture_ResponseParams,
        undefined
      );
      return new Capture_ResponseParams /* SEQUENCE_CONSTRUCTOR_CALL */(
        capturedBIR,
        auditData
      );
    };
  }
  return _cached_decoder_for_Capture_ResponseParams(el);
}


let _cached_encoder_for_Capture_ResponseParams: $.ASN1Encoder<Capture_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) Capture_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Capture_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_Capture_ResponseParams(
  value: Capture_ResponseParams,
  elGetter: $.ASN1Encoder<Capture_ResponseParams>
) {
  if (!_cached_encoder_for_Capture_ResponseParams) {
    _cached_encoder_for_Capture_ResponseParams = function (
      value: Capture_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_BIR_HANDLE(
              value.capturedBIR,
              $.BER
            ),
            /* IF_ABSENT  */ value.auditData === undefined
              ? undefined
              : _encode_BioAPI_BIR_HANDLE(value.auditData, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Capture_ResponseParams(value, elGetter);
}


/* eslint-enable */
