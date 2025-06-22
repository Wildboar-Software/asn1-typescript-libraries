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
  Invoke_linkedId,
  _decode_Invoke_linkedId,
  _encode_Invoke_linkedId,
} from '../Remote-Operations-Generic-ROS-PDUs/Invoke-linkedId.ta.mjs';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '../Remote-Operations-Information-Objects/Code.ta.mjs';


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


/**
 * @summary The Leading Root Component Types of Invoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Invoke: $.ComponentSpec[] = [
  new $.ComponentSpec('invokeId', false, $.hasAnyTag),
  new $.ComponentSpec('linkedId', true, $.hasAnyTag), // FIXME:
  new $.ComponentSpec('opcode', false, $.hasAnyTag),
  new $.ComponentSpec('argument', true, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of Invoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Invoke: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Invoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Invoke: $.ComponentSpec[] = [];


let _cached_decoder_for_Invoke: $.ASN1Decoder<Invoke> | null = null;


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


let _cached_encoder_for_Invoke: $.ASN1Encoder<Invoke> | null = null;


/**
 * @summary Encodes a(n) Invoke into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Invoke, encoded as an ASN.1 Element.
 */
export function _encode_Invoke(value: Invoke, elGetter: $.ASN1Encoder<Invoke>) {
  if (!_cached_encoder_for_Invoke) {
    _cached_encoder_for_Invoke = function (
      value: Invoke    ): _Element {
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


/* eslint-enable */
