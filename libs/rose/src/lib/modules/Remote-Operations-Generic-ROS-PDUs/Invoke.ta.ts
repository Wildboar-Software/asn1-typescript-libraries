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
  Invoke_linkedId,
  _decode_Invoke_linkedId,
  _encode_Invoke_linkedId,
} from '../Remote-Operations-Generic-ROS-PDUs/Invoke-linkedId.ta';
export {
  Invoke_linkedId,
  _decode_Invoke_linkedId,
  _encode_Invoke_linkedId,
} from '../Remote-Operations-Generic-ROS-PDUs/Invoke-linkedId.ta';
import { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca';
export { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '../Remote-Operations-Information-Objects/Code.ta';

/* START_OF_SYMBOL_DEFINITION Invoke */
/**
 * @summary Invoke
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Invoke{InvokeId:InvokeIdSet, OPERATION:Operations} ::= SEQUENCE {
 *   invokeId
 *     InvokeId(InvokeIdSet)
 *       (CONSTRAINED BY {-- must be unambiguous -- } !
 *        RejectProblem:invoke-duplicateInvocation),
 *   linkedId
 *     CHOICE {present  [0] IMPLICIT present < InvokeId,
 *             absent   [1] IMPLICIT NULL
 *   }
 *   (CONSTRAINED BY { -- must identify an outstanding operation --} !
 *    RejectProblem:invoke-unrecognizedLinkedId)
 *   (CONSTRAINED BY { -- which has one or more linked operations--} !
 *    RejectProblem:invoke-linkedResponseUnexpected) OPTIONAL,
 *   opcode
 *     OPERATION.&operationCode
 *       ({Operations} !RejectProblem:invoke-unrecognizedOperation),
 *   argument
 *     OPERATION.&ArgumentType
 *       ({Operations}{@opcode} !RejectProblem:invoke-mistypedArgument) OPTIONAL
 * }
 * (CONSTRAINED BY { -- must conform to the above definition --} !
 *  RejectProblem:general-mistypedPDU)
 * (WITH COMPONENTS {
 *    ...,
 *    linkedId  ABSENT
 *  } |
 *  WITH COMPONENTS {
 *    ...,
 *    linkedId  PRESENT,
 *    opcode    (CONSTRAINED BY { -- must be in the &Linked field of the associated operation --
 *                 } !RejectProblem:invoke-unexpectedLinkedOperation)
 *  })
 * ```
 *
 * @class
 */
export class Invoke {
  constructor(
    /**
     * @summary `invokeId`.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId,
    /**
     * @summary `linkedId`.
     * @public
     * @readonly
     */
    readonly linkedId: OPTIONAL<Invoke_linkedId>,
    /**
     * @summary `opcode`.
     * @public
     * @readonly
     */
    readonly opcode: Code,
    /**
     * @summary `argument`.
     * @public
     * @readonly
     */
    readonly argument: OPTIONAL<_Element>
  ) {}

  /**
   * @summary Restructures an object into a Invoke
   * @description
   *
   * This takes an `object` and converts it to a `Invoke`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Invoke`.
   * @returns {Invoke}
   */
  public static _from_object(_o: { [_K in keyof Invoke]: Invoke[_K] }): Invoke {
    return new Invoke(_o.invokeId, _o.linkedId, _o.opcode, _o.argument);
  }
}
/* END_OF_SYMBOL_DEFINITION Invoke */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Invoke */
/**
 * @summary The Leading Root Component Types of Invoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Invoke: $.ComponentSpec[] = [
  new $.ComponentSpec('invokeId', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec('linkedId', true, $.hasAnyTag, undefined, undefined), // FIXME:
  new $.ComponentSpec('opcode', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec('argument', true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Invoke */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Invoke */
/**
 * @summary The Trailing Root Component Types of Invoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Invoke: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Invoke */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Invoke */
/**
 * @summary The Extension Addition Component Types of Invoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Invoke: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Invoke */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Invoke */
let _cached_decoder_for_Invoke: $.ASN1Decoder<Invoke> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Invoke */

/* START_OF_SYMBOL_DEFINITION _decode_Invoke */
/**
 * @summary Decodes an ASN.1 element into a(n) Invoke
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Invoke} The decoded data structure.
 */
export function _decode_Invoke(el: _Element) {
  if (!_cached_decoder_for_Invoke) {
    _cached_decoder_for_Invoke = function (el: _Element): Invoke {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let invokeId!: InvokeId;
      let linkedId: OPTIONAL<Invoke_linkedId>;
      let opcode!: Code;
      let argument: OPTIONAL<_Element>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        invokeId: (_el: _Element): void => {
          invokeId = _decode_InvokeId(_el);
        },
        linkedId: (_el: _Element): void => {
          linkedId = _decode_Invoke_linkedId(_el);
        },
        opcode: (_el: _Element): void => {
          opcode = _decode_Code(_el);
        },
        argument: (_el: _Element): void => {
          argument = $._decodeAny(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Invoke,
        _extension_additions_list_spec_for_Invoke,
        _root_component_type_list_2_spec_for_Invoke,
        undefined
      );
      return new Invoke /* SEQUENCE_CONSTRUCTOR_CALL */(
        invokeId,
        linkedId,
        opcode,
        argument
      );
    };
  }
  return _cached_decoder_for_Invoke(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Invoke */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Invoke */
let _cached_encoder_for_Invoke: $.ASN1Encoder<Invoke> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Invoke */

/* START_OF_SYMBOL_DEFINITION _encode_Invoke */
/**
 * @summary Encodes a(n) Invoke into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Invoke, encoded as an ASN.1 Element.
 */
export function _encode_Invoke(value: Invoke, elGetter: $.ASN1Encoder<Invoke>) {
  if (!_cached_encoder_for_Invoke) {
    _cached_encoder_for_Invoke = function (
      value: Invoke,
      elGetter: $.ASN1Encoder<Invoke>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
            /* IF_ABSENT  */ value.linkedId === undefined
              ? undefined
              : _encode_Invoke_linkedId(value.linkedId, $.BER),
            /* REQUIRED   */ _encode_Code(value.opcode, $.BER),
            /* IF_ABSENT  */ value.argument === undefined
              ? undefined
              : $._encodeAny(value.argument, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Invoke(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Invoke */

/* eslint-enable */
