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
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs';
import {
  Reject_problem,
  _decode_Reject_problem,
  _encode_Reject_problem,
} from '../Remote-Operations-Generic-ROS-PDUs/Reject-problem.ta.mjs';
import {
  _decode_RejectProblem,
  _encode_RejectProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/RejectProblem.ta.mjs';

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


/**
 * @summary The Leading Root Component Types of Reject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Reject: $.ComponentSpec[] = [
  new $.ComponentSpec('invokeId', false, $.hasAnyTag),
  new $.ComponentSpec('problem', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of Reject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Reject: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Reject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Reject: $.ComponentSpec[] = [];


let _cached_decoder_for_Reject: $.ASN1Decoder<Reject> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Reject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Reject} The decoded data structure.
 */
export function _decode_Reject(el: _Element): Reject {
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


let _cached_encoder_for_Reject: $.ASN1Encoder<Reject> | null = null;


/**
 * @summary Encodes a(n) Reject into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reject, encoded as an ASN.1 Element.
 */
export function _encode_Reject(value: Reject, elGetter: $.ASN1Encoder<Reject>): _Element {
  if (!_cached_encoder_for_Reject) {
    _cached_encoder_for_Reject = function (
      value: Reject    ): _Element {
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


/* eslint-enable */
