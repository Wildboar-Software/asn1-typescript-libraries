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
import {
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta';
export {
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta';
import {
  Reject_problem,
  _decode_Reject_problem,
  _encode_Reject_problem,
} from '../Remote-Operations-Generic-ROS-PDUs/Reject-problem.ta';
export {
  Reject_problem,
  _decode_Reject_problem,
  _encode_Reject_problem,
} from '../Remote-Operations-Generic-ROS-PDUs/Reject-problem.ta';
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

/* START_OF_SYMBOL_DEFINITION Reject */
/**
 * @summary Reject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Reject ::= SEQUENCE {
 *   invokeId  InvokeId,
 *   problem
 *     CHOICE {general       [0]  GeneralProblem,
 *             invoke        [1]  InvokeProblem,
 *             returnResult  [2]  ReturnResultProblem,
 *             returnError   [3]  ReturnErrorProblem}
 * }
 * (CONSTRAINED BY { -- must conform to the above definition --} !
 *  RejectProblem:general-mistypedPDU)
 * ```
 *
 * @class
 */
export class Reject {
  constructor(
    /**
     * @summary `invokeId`.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId,
    /**
     * @summary `problem`.
     * @public
     * @readonly
     */
    readonly problem: Reject_problem
  ) {}

  /**
   * @summary Restructures an object into a Reject
   * @description
   *
   * This takes an `object` and converts it to a `Reject`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Reject`.
   * @returns {Reject}
   */
  public static _from_object(_o: { [_K in keyof Reject]: Reject[_K] }): Reject {
    return new Reject(_o.invokeId, _o.problem);
  }
}
/* END_OF_SYMBOL_DEFINITION Reject */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Reject */
/**
 * @summary The Leading Root Component Types of Reject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Reject: $.ComponentSpec[] = [
  new $.ComponentSpec('invokeId', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec('problem', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Reject */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Reject */
/**
 * @summary The Trailing Root Component Types of Reject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Reject: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Reject */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Reject */
/**
 * @summary The Extension Addition Component Types of Reject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Reject: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Reject */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Reject */
let _cached_decoder_for_Reject: $.ASN1Decoder<Reject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Reject */

/* START_OF_SYMBOL_DEFINITION _decode_Reject */
/**
 * @summary Decodes an ASN.1 element into a(n) Reject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Reject} The decoded data structure.
 */
export function _decode_Reject(el: _Element) {
  if (!_cached_decoder_for_Reject) {
    _cached_decoder_for_Reject = function (el: _Element): Reject {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Reject contained only ' + sequence.length.toString() + ' elements.'
        );
      }
      sequence[0].name = 'invokeId';
      sequence[1].name = 'problem';
      let invokeId!: InvokeId;
      let problem!: Reject_problem;
      invokeId = _decode_InvokeId(sequence[0]);
      problem = _decode_Reject_problem(sequence[1]);
      return new Reject(invokeId, problem);
    };
  }
  return _cached_decoder_for_Reject(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Reject */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Reject */
let _cached_encoder_for_Reject: $.ASN1Encoder<Reject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Reject */

/* START_OF_SYMBOL_DEFINITION _encode_Reject */
/**
 * @summary Encodes a(n) Reject into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reject, encoded as an ASN.1 Element.
 */
export function _encode_Reject(value: Reject, elGetter: $.ASN1Encoder<Reject>) {
  if (!_cached_encoder_for_Reject) {
    _cached_encoder_for_Reject = function (
      value: Reject,
      elGetter: $.ASN1Encoder<Reject>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
            /* REQUIRED   */ _encode_Reject_problem(value.problem, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Reject(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Reject */

/* eslint-enable */
