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
 * @summary VerifyMatch_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VerifyMatch-ResponseParams ::= SEQUENCE {
 *   adaptedBIR   BioAPI-BIR-HANDLE OPTIONAL,
 *   result       BOOLEAN,
 *   fmrAchieved  BioAPI-FMR OPTIONAL,
 *   payload      BioAPI-DATA OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class VerifyMatch_ResponseParams {
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
    readonly payload: OPTIONAL<BioAPI_DATA>
  ) {}

  /**
   * @summary Restructures an object into a VerifyMatch_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `VerifyMatch_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `VerifyMatch_ResponseParams`.
   * @returns {VerifyMatch_ResponseParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof VerifyMatch_ResponseParams]: VerifyMatch_ResponseParams[_K];
    }
  ): VerifyMatch_ResponseParams {
    return new VerifyMatch_ResponseParams(
      _o.adaptedBIR,
      _o.result,
      _o.fmrAchieved,
      _o.payload
    );
  }
}


/**
 * @summary The Leading Root Component Types of VerifyMatch_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_VerifyMatch_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'adaptedBIR',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'result',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'fmrAchieved',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'payload',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of VerifyMatch_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_VerifyMatch_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of VerifyMatch_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_VerifyMatch_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_VerifyMatch_ResponseParams: $.ASN1Decoder<VerifyMatch_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) VerifyMatch_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VerifyMatch_ResponseParams} The decoded data structure.
 */
export function _decode_VerifyMatch_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_VerifyMatch_ResponseParams) {
    _cached_decoder_for_VerifyMatch_ResponseParams = function (
      el: _Element
    ): VerifyMatch_ResponseParams {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let adaptedBIR: OPTIONAL<BioAPI_BIR_HANDLE>;
      let result!: BOOLEAN;
      let fmrAchieved: OPTIONAL<BioAPI_FMR>;
      let payload: OPTIONAL<BioAPI_DATA>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
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
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_VerifyMatch_ResponseParams,
        _extension_additions_list_spec_for_VerifyMatch_ResponseParams,
        _root_component_type_list_2_spec_for_VerifyMatch_ResponseParams,
        undefined
      );
      return new VerifyMatch_ResponseParams /* SEQUENCE_CONSTRUCTOR_CALL */(
        adaptedBIR,
        result,
        fmrAchieved,
        payload
      );
    };
  }
  return _cached_decoder_for_VerifyMatch_ResponseParams(el);
}


let _cached_encoder_for_VerifyMatch_ResponseParams: $.ASN1Encoder<VerifyMatch_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) VerifyMatch_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VerifyMatch_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_VerifyMatch_ResponseParams(
  value: VerifyMatch_ResponseParams,
  elGetter: $.ASN1Encoder<VerifyMatch_ResponseParams>
) {
  if (!_cached_encoder_for_VerifyMatch_ResponseParams) {
    _cached_encoder_for_VerifyMatch_ResponseParams = function (
      value: VerifyMatch_ResponseParams    ): _Element {
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
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_VerifyMatch_ResponseParams(value, elGetter);
}


/* eslint-enable */
