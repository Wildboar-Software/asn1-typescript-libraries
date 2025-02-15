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
import * as $ from 'asn1-ts/dist/node/functional';
import { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca';
export { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca';
import {
  RejectProblem,
  RejectProblem_general_unrecognizedPDU /* IMPORTED_LONG_NAMED_INTEGER */,
  general_unrecognizedPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_general_mistypedPDU /* IMPORTED_LONG_NAMED_INTEGER */,
  general_mistypedPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_general_badlyStructuredPDU /* IMPORTED_LONG_NAMED_INTEGER */,
  general_badlyStructuredPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_duplicateInvocation /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_duplicateInvocation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_unrecognizedOperation /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_unrecognizedOperation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_mistypedArgument /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_mistypedArgument /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_resourceLimitation /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_resourceLimitation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_releaseInProgress /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_releaseInProgress /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_unrecognizedLinkedId /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_unrecognizedLinkedId /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_linkedResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_linkedResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_unexpectedLinkedOperation /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_unexpectedLinkedOperation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnResult_unrecognizedInvocation /* IMPORTED_LONG_NAMED_INTEGER */,
  returnResult_unrecognizedInvocation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnResult_resultResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */,
  returnResult_resultResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnResult_mistypedResult /* IMPORTED_LONG_NAMED_INTEGER */,
  returnResult_mistypedResult /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_unrecognizedInvocation /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_unrecognizedInvocation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_errorResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_errorResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_unrecognizedError /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_unrecognizedError /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_unexpectedError /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_unexpectedError /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_mistypedParameter /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_mistypedParameter /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_RejectProblem,
  _encode_RejectProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/RejectProblem.ta';
export {
  RejectProblem,
  RejectProblem_general_unrecognizedPDU /* IMPORTED_LONG_NAMED_INTEGER */,
  general_unrecognizedPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_general_mistypedPDU /* IMPORTED_LONG_NAMED_INTEGER */,
  general_mistypedPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_general_badlyStructuredPDU /* IMPORTED_LONG_NAMED_INTEGER */,
  general_badlyStructuredPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_duplicateInvocation /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_duplicateInvocation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_unrecognizedOperation /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_unrecognizedOperation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_mistypedArgument /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_mistypedArgument /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_resourceLimitation /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_resourceLimitation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_releaseInProgress /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_releaseInProgress /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_unrecognizedLinkedId /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_unrecognizedLinkedId /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_linkedResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_linkedResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_unexpectedLinkedOperation /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_unexpectedLinkedOperation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnResult_unrecognizedInvocation /* IMPORTED_LONG_NAMED_INTEGER */,
  returnResult_unrecognizedInvocation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnResult_resultResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */,
  returnResult_resultResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnResult_mistypedResult /* IMPORTED_LONG_NAMED_INTEGER */,
  returnResult_mistypedResult /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_unrecognizedInvocation /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_unrecognizedInvocation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_errorResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_errorResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_unrecognizedError /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_unrecognizedError /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_unexpectedError /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_unexpectedError /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_mistypedParameter /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_mistypedParameter /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_RejectProblem,
  _encode_RejectProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/RejectProblem.ta';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '../Remote-Operations-Information-Objects/Code.ta';

/* START_OF_SYMBOL_DEFINITION ReturnResult_result */
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
/* END_OF_SYMBOL_DEFINITION ReturnResult_result */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReturnResult_result */
/**
 * @summary The Leading Root Component Types of ReturnResult_result
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReturnResult_result: $.ComponentSpec[] = [
  new $.ComponentSpec('opcode', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec('result', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReturnResult_result */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReturnResult_result */
/**
 * @summary The Trailing Root Component Types of ReturnResult_result
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReturnResult_result: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReturnResult_result */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReturnResult_result */
/**
 * @summary The Extension Addition Component Types of ReturnResult_result
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReturnResult_result: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReturnResult_result */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReturnResult_result */
let _cached_decoder_for_ReturnResult_result: $.ASN1Decoder<ReturnResult_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReturnResult_result */

/* START_OF_SYMBOL_DEFINITION _decode_ReturnResult_result */
/**
 * @summary Decodes an ASN.1 element into a(n) ReturnResult_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReturnResult_result} The decoded data structure.
 */
export function _decode_ReturnResult_result(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_ReturnResult_result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReturnResult_result */
let _cached_encoder_for_ReturnResult_result: $.ASN1Encoder<ReturnResult_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReturnResult_result */

/* START_OF_SYMBOL_DEFINITION _encode_ReturnResult_result */
/**
 * @summary Encodes a(n) ReturnResult_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReturnResult_result, encoded as an ASN.1 Element.
 */
export function _encode_ReturnResult_result(
  value: ReturnResult_result,
  elGetter: $.ASN1Encoder<ReturnResult_result>
) {
  if (!_cached_encoder_for_ReturnResult_result) {
    _cached_encoder_for_ReturnResult_result = function (
      value: ReturnResult_result,
      elGetter: $.ASN1Encoder<ReturnResult_result>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_ReturnResult_result */

/* eslint-enable */
