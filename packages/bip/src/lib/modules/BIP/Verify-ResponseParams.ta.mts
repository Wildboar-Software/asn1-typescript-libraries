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
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta.mjs';
import {
  BioAPI_FMR,
  _decode_BioAPI_FMR,
  _encode_BioAPI_FMR,
} from '../BIP/BioAPI-FMR.ta.mjs';
import {
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta.mjs';

/**
 * @summary Verify_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Verify-ResponseParams ::= SEQUENCE {
 *   adaptedBIR   BioAPI-BIR-HANDLE OPTIONAL,
 *   result       BOOLEAN,
 *   fmrAchieved  BioAPI-FMR OPTIONAL,
 *   payload      BioAPI-DATA OPTIONAL,
 *   auditData    BioAPI-BIR-HANDLE OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Verify_ResponseParams {
  constructor(
    /**
     * @summary `adaptedBIR`.
     * @public
     * @readonly
     */
    readonly adaptedBIR: OPTIONAL<BioAPI_BIR_HANDLE>,
    /**
     * @summary `result`.
     * @public
     * @readonly
     */
    readonly result: BOOLEAN,
    /**
     * @summary `fmrAchieved`.
     * @public
     * @readonly
     */
    readonly fmrAchieved: OPTIONAL<BioAPI_FMR>,
    /**
     * @summary `payload`.
     * @public
     * @readonly
     */
    readonly payload: OPTIONAL<BioAPI_DATA>,
    /**
     * @summary `auditData`.
     * @public
     * @readonly
     */
    readonly auditData: OPTIONAL<BioAPI_BIR_HANDLE>
  ) {}

  /**
   * @summary Restructures an object into a Verify_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `Verify_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Verify_ResponseParams`.
   * @returns {Verify_ResponseParams}
   */
  public static _from_object(
    _o: { [_K in keyof Verify_ResponseParams]: Verify_ResponseParams[_K] }
  ): Verify_ResponseParams {
    return new Verify_ResponseParams(
      _o.adaptedBIR,
      _o.result,
      _o.fmrAchieved,
      _o.payload,
      _o.auditData
    );
  }
}


/**
 * @summary The Leading Root Component Types of Verify_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Verify_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'adaptedBIR',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'result',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'fmrAchieved',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'payload',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'auditData',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of Verify_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Verify_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Verify_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Verify_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_Verify_ResponseParams: $.ASN1Decoder<Verify_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Verify_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Verify_ResponseParams} The decoded data structure.
 */
export function _decode_Verify_ResponseParams(el: _Element): Verify_ResponseParams {
  if (!_cached_decoder_for_Verify_ResponseParams) {
    _cached_decoder_for_Verify_ResponseParams = function (
      el: _Element
    ): Verify_ResponseParams {
      let adaptedBIR: OPTIONAL<BioAPI_BIR_HANDLE>;
      let result!: BOOLEAN;
      let fmrAchieved: OPTIONAL<BioAPI_FMR>;
      let payload: OPTIONAL<BioAPI_DATA>;
      let auditData: OPTIONAL<BioAPI_BIR_HANDLE>;
      const callbacks: $.DecodingMap = {
        adaptedBIR: (_el: _Element): void => {
          adaptedBIR = _decode_BioAPI_BIR_HANDLE(_el);
        },
        result: (_el: _Element): void => {
          result = $._decodeBoolean(_el);
        },
        fmrAchieved: (_el: _Element): void => {
          fmrAchieved = _decode_BioAPI_FMR(_el);
        },
        payload: (_el: _Element): void => {
          payload = _decode_BioAPI_DATA(_el);
        },
        auditData: (_el: _Element): void => {
          auditData = _decode_BioAPI_BIR_HANDLE(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Verify_ResponseParams,
        _extension_additions_list_spec_for_Verify_ResponseParams,
        _root_component_type_list_2_spec_for_Verify_ResponseParams,
        undefined
      );
      return new Verify_ResponseParams (
        adaptedBIR,
        result,
        fmrAchieved,
        payload,
        auditData
      );
    };
  }
  return _cached_decoder_for_Verify_ResponseParams(el);
}


let _cached_encoder_for_Verify_ResponseParams: $.ASN1Encoder<Verify_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) Verify_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Verify_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_Verify_ResponseParams(
  value: Verify_ResponseParams,
  elGetter: $.ASN1Encoder<Verify_ResponseParams>
): _Element {
  if (!_cached_encoder_for_Verify_ResponseParams) {
    _cached_encoder_for_Verify_ResponseParams = function (
      value: Verify_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.adaptedBIR === undefined
              ? undefined
              : _encode_BioAPI_BIR_HANDLE(value.adaptedBIR, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.result, $.BER),
            /* IF_ABSENT  */ value.fmrAchieved === undefined
              ? undefined
              : _encode_BioAPI_FMR(value.fmrAchieved, $.BER),
            /* IF_ABSENT  */ value.payload === undefined
              ? undefined
              : _encode_BioAPI_DATA(value.payload, $.BER),
            /* IF_ABSENT  */ value.auditData === undefined
              ? undefined
              : _encode_BioAPI_BIR_HANDLE(value.auditData, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Verify_ResponseParams(value, elGetter);
}


/* eslint-enable */
