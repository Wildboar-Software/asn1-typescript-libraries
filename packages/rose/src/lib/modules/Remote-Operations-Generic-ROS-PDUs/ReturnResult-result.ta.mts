/* eslint-disable */
import {
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
  _decode_RejectProblem,
  _encode_RejectProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/RejectProblem.ta.mjs';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '../Remote-Operations-Information-Objects/Code.ta.mjs';


/**
 * @summary ReturnResult_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReturnResult-result ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ReturnResult_result {
  constructor(
    /**
     * @summary `opcode`.
     * @public
     * @readonly
     */
    readonly opcode: Code,
    /**
     * @summary `result`.
     * @public
     * @readonly
     */
    readonly result: _Element
  ) {}

  /**
   * @summary Restructures an object into a ReturnResult_result
   * @description
   *
   * This takes an `object` and converts it to a `ReturnResult_result`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ReturnResult_result`.
   * @returns {ReturnResult_result}
   */
  public static _from_object(
    _o: { [_K in keyof ReturnResult_result]: ReturnResult_result[_K] }
  ): ReturnResult_result {
    return new ReturnResult_result(_o.opcode, _o.result);
  }
}


/**
 * @summary The Leading Root Component Types of ReturnResult_result
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReturnResult_result: $.ComponentSpec[] = [
  new $.ComponentSpec('opcode', false, $.hasAnyTag),
  new $.ComponentSpec('result', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of ReturnResult_result
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReturnResult_result: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ReturnResult_result
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReturnResult_result: $.ComponentSpec[] = [];


let _cached_decoder_for_ReturnResult_result: $.ASN1Decoder<ReturnResult_result> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ReturnResult_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReturnResult_result} The decoded data structure.
 */
export function _decode_ReturnResult_result(el: _Element): ReturnResult_result {
  if (!_cached_decoder_for_ReturnResult_result) {
    _cached_decoder_for_ReturnResult_result = function (
      el: _Element
    ): ReturnResult_result {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'ReturnResult-result contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'opcode';
      sequence[1].name = 'result';
      let opcode!: Code;
      let result!: _Element;
      opcode = _decode_Code(sequence[0]);
      result = $._decodeAny(sequence[1]);
      return new ReturnResult_result(opcode, result);
    };
  }
  return _cached_decoder_for_ReturnResult_result(el);
}


let _cached_encoder_for_ReturnResult_result: $.ASN1Encoder<ReturnResult_result> | null = null;


/**
 * @summary Encodes a(n) ReturnResult_result into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReturnResult_result, encoded as an ASN.1 Element.
 */
export function _encode_ReturnResult_result(
  value: ReturnResult_result,
  elGetter: $.ASN1Encoder<ReturnResult_result>
): _Element {
  if (!_cached_encoder_for_ReturnResult_result) {
    _cached_encoder_for_ReturnResult_result = function (
      value: ReturnResult_result    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Code(value.opcode, $.BER),
            /* REQUIRED   */ $._encodeAny(value.result, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ReturnResult_result(value, elGetter);
}


/* eslint-enable */
