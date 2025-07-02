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
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs';
import {
  _decode_RejectProblem,
  _encode_RejectProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/RejectProblem.ta.mjs';
import {
  ReturnResult_result,
  _decode_ReturnResult_result,
  _encode_ReturnResult_result,
} from '../Remote-Operations-Generic-ROS-PDUs/ReturnResult-result.ta.mjs';

/**
 * @summary ReturnResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReturnResult{OPERATION:Operations} ::= SEQUENCE {
 *   invokeId
 *     InvokeId
 *       (CONSTRAINED BY {-- must be that for an outstanding operation -- } !
 *        RejectProblem:returnResult-unrecognizedInvocation)
 *       (CONSTRAINED BY {-- which returns a result -- } !
 *        RejectProblem:returnResult-resultResponseUnexpected),
 *   result
 *     SEQUENCE {opcode
 *                 OPERATION.&operationCode({Operations})
 *                   (CONSTRAINED BY {-- identified by invokeId -- } !
 *                    RejectProblem:returnResult-unrecognizedInvocation),
 *               result
 *                 OPERATION.&ResultType
 *                   ({Operations}{@.opcode} !
 *                    RejectProblem:returnResult-mistypedResult)} OPTIONAL
 * }
 * (CONSTRAINED BY { -- must conform to the above definition --} !
 *  RejectProblem:general-mistypedPDU)
 * ```
 *
 */
export class ReturnResult {
  constructor(
    /**
     * @summary `invokeId`.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId,
    /**
     * @summary `result`.
     * @public
     * @readonly
     */
    readonly result: OPTIONAL<ReturnResult_result>
  ) {}

  /**
   * @summary Restructures an object into a ReturnResult
   * @description
   *
   * This takes an `object` and converts it to a `ReturnResult`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ReturnResult`.
   * @returns {ReturnResult}
   */
  public static _from_object(
    _o: { [_K in keyof ReturnResult]: ReturnResult[_K] }
  ): ReturnResult {
    return new ReturnResult(_o.invokeId, _o.result);
  }
}


/**
 * @summary The Leading Root Component Types of ReturnResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReturnResult: $.ComponentSpec[] = [
  new $.ComponentSpec('invokeId', false, $.hasAnyTag),
  new $.ComponentSpec(
    'result',
    true,
    $.hasTag(_TagClass.universal, 16)
  ),
];


/**
 * @summary The Trailing Root Component Types of ReturnResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReturnResult: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ReturnResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReturnResult: $.ComponentSpec[] = [];


let _cached_decoder_for_ReturnResult: $.ASN1Decoder<ReturnResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ReturnResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReturnResult} The decoded data structure.
 */
export function _decode_ReturnResult(el: _Element): ReturnResult {
  if (!_cached_decoder_for_ReturnResult) {
    _cached_decoder_for_ReturnResult = function (el: _Element): ReturnResult {
      let invokeId!: InvokeId;
      let result: OPTIONAL<ReturnResult_result>;
      const callbacks: $.DecodingMap = {
        invokeId: (_el: _Element): void => {
          invokeId = _decode_InvokeId(_el);
        },
        result: (_el: _Element): void => {
          result = _decode_ReturnResult_result(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ReturnResult,
        _extension_additions_list_spec_for_ReturnResult,
        _root_component_type_list_2_spec_for_ReturnResult,
        undefined
      );
      return new ReturnResult (invokeId, result);
    };
  }
  return _cached_decoder_for_ReturnResult(el);
}


let _cached_encoder_for_ReturnResult: $.ASN1Encoder<ReturnResult> | null = null;


/**
 * @summary Encodes a(n) ReturnResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReturnResult, encoded as an ASN.1 Element.
 */
export function _encode_ReturnResult(
  value: ReturnResult,
  elGetter: $.ASN1Encoder<ReturnResult>
): _Element {
  if (!_cached_encoder_for_ReturnResult) {
    _cached_encoder_for_ReturnResult = function (
      value: ReturnResult    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
            /* IF_ABSENT  */ value.result === undefined
              ? undefined
              : _encode_ReturnResult_result(value.result, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ReturnResult(value, elGetter);
}


/* eslint-enable */
