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
  CancelProblem,
  _enum_for_CancelProblem,
  _decode_CancelProblem,
  _encode_CancelProblem,
} from '../Remote-Operations-Useful-Definitions/CancelProblem.ta.mjs';
import {
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs';

/**
 * @summary cancelFailed_ParameterType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cancelFailed-ParameterType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class cancelFailed_ParameterType {
  constructor(
    /**
     * @summary `problem`.
     * @public
     * @readonly
     */
    readonly problem: CancelProblem,
    /**
     * @summary `operation`.
     * @public
     * @readonly
     */
    readonly operation: InvokeId
  ) {}

  /**
   * @summary Restructures an object into a cancelFailed_ParameterType
   * @description
   *
   * This takes an `object` and converts it to a `cancelFailed_ParameterType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `cancelFailed_ParameterType`.
   * @returns {cancelFailed_ParameterType}
   */
  public static _from_object(
    _o: {
      [_K in keyof cancelFailed_ParameterType]: cancelFailed_ParameterType[_K];
    }
  ): cancelFailed_ParameterType {
    return new cancelFailed_ParameterType(_o.problem, _o.operation);
  }

  /**
   * @summary The enum used as the type of the component `problem`
   * @public
   * @static
   */

  public static _enum_for_problem = _enum_for_CancelProblem;
}


/**
 * @summary The Leading Root Component Types of cancelFailed_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_cancelFailed_ParameterType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'problem',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'operation',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of cancelFailed_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_cancelFailed_ParameterType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of cancelFailed_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_cancelFailed_ParameterType: $.ComponentSpec[] = [];


let _cached_decoder_for_cancelFailed_ParameterType: $.ASN1Decoder<cancelFailed_ParameterType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) cancelFailed_ParameterType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {cancelFailed_ParameterType} The decoded data structure.
 */
export function _decode_cancelFailed_ParameterType(el: _Element) {
  if (!_cached_decoder_for_cancelFailed_ParameterType) {
    _cached_decoder_for_cancelFailed_ParameterType = function (
      el: _Element
    ): cancelFailed_ParameterType {
      /* START_OF_SET_COMPONENT_DECLARATIONS */
      let problem!: CancelProblem;
      let operation!: InvokeId;
      /* END_OF_SET_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        problem: (_el: _Element): void => {
          problem = $._decode_implicit<CancelProblem>(
            () => _decode_CancelProblem
          )(_el);
        },
        operation: (_el: _Element): void => {
          operation = $._decode_explicit<InvokeId>(() => _decode_InvokeId)(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_set(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_cancelFailed_ParameterType,
        _extension_additions_list_spec_for_cancelFailed_ParameterType,
        _root_component_type_list_2_spec_for_cancelFailed_ParameterType,
        undefined
      );
      return new cancelFailed_ParameterType /* SET_CONSTRUCTOR_CALL */(
        problem,
        operation
      );
    };
  }
  return _cached_decoder_for_cancelFailed_ParameterType(el);
}


let _cached_encoder_for_cancelFailed_ParameterType: $.ASN1Encoder<cancelFailed_ParameterType> | null = null;


/**
 * @summary Encodes a(n) cancelFailed_ParameterType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The cancelFailed_ParameterType, encoded as an ASN.1 Element.
 */
export function _encode_cancelFailed_ParameterType(
  value: cancelFailed_ParameterType,
  elGetter: $.ASN1Encoder<cancelFailed_ParameterType>
) {
  if (!_cached_encoder_for_cancelFailed_ParameterType) {
    _cached_encoder_for_cancelFailed_ParameterType = function (
      value: cancelFailed_ParameterType    ): _Element {
      return $._encodeSet(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => _encode_CancelProblem,
              $.BER
            )(value.problem, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              1,
              () => _encode_InvokeId,
              $.BER
            )(value.operation, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_cancelFailed_ParameterType(value, elGetter);
}


/* eslint-enable */
