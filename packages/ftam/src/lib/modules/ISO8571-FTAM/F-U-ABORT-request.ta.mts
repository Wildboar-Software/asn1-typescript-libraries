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
  Action_Result,
    Action_Result_success,
  _decode_Action_Result,
  _encode_Action_Result,
} from '../ISO8571-FTAM/Action-Result.ta.mjs';
import {
  Diagnostic,
  _decode_Diagnostic,
  _encode_Diagnostic,
} from '../ISO8571-FTAM/Diagnostic.ta.mjs';

/**
 * @summary F_U_ABORT_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-U-ABORT-request ::= SEQUENCE {
 *   action-result  Action-Result DEFAULT success,
 *   diagnostic     Diagnostic OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_U_ABORT_request {
  constructor(
    /**
     * @summary `action_result`.
     * @public
     * @readonly
     */
    readonly action_result: OPTIONAL<Action_Result>,
    /**
     * @summary `diagnostic`.
     * @public
     * @readonly
     */
    readonly diagnostic: OPTIONAL<Diagnostic>
  ) {}

  /**
   * @summary Restructures an object into a F_U_ABORT_request
   * @description
   *
   * This takes an `object` and converts it to a `F_U_ABORT_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_U_ABORT_request`.
   * @returns {F_U_ABORT_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_U_ABORT_request]: F_U_ABORT_request[_K] }
  ): F_U_ABORT_request {
    return new F_U_ABORT_request(_o.action_result, _o.diagnostic);
  }

  /**
   * @summary Getter that returns the default value for `action_result`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_action_result() {
    return Action_Result_success;
  }
}


/**
 * @summary The Leading Root Component Types of F_U_ABORT_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_U_ABORT_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'action-result',
    true,
    $.hasTag(_TagClass.application, 5)
  ),
  new $.ComponentSpec(
    'diagnostic',
    true,
    $.hasTag(_TagClass.application, 13)
  ),
];


/**
 * @summary The Trailing Root Component Types of F_U_ABORT_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_U_ABORT_request: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_U_ABORT_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_U_ABORT_request: $.ComponentSpec[] = [];


let _cached_decoder_for_F_U_ABORT_request: $.ASN1Decoder<F_U_ABORT_request> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_U_ABORT_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_U_ABORT_request} The decoded data structure.
 */
export function _decode_F_U_ABORT_request(el: _Element) {
  if (!_cached_decoder_for_F_U_ABORT_request) {
    _cached_decoder_for_F_U_ABORT_request = function (
      el: _Element
    ): F_U_ABORT_request {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let action_result: OPTIONAL<Action_Result> =
        F_U_ABORT_request._default_value_for_action_result;
      let diagnostic: OPTIONAL<Diagnostic>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'action-result': (_el: _Element): void => {
          action_result = _decode_Action_Result(_el);
        },
        diagnostic: (_el: _Element): void => {
          diagnostic = _decode_Diagnostic(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_U_ABORT_request,
        _extension_additions_list_spec_for_F_U_ABORT_request,
        _root_component_type_list_2_spec_for_F_U_ABORT_request,
        undefined
      );
      return new F_U_ABORT_request /* SEQUENCE_CONSTRUCTOR_CALL */(
        action_result,
        diagnostic
      );
    };
  }
  return _cached_decoder_for_F_U_ABORT_request(el);
}


let _cached_encoder_for_F_U_ABORT_request: $.ASN1Encoder<F_U_ABORT_request> | null = null;


/**
 * @summary Encodes a(n) F_U_ABORT_request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_U_ABORT_request, encoded as an ASN.1 Element.
 */
export function _encode_F_U_ABORT_request(
  value: F_U_ABORT_request,
  elGetter: $.ASN1Encoder<F_U_ABORT_request>
) {
  if (!_cached_encoder_for_F_U_ABORT_request) {
    _cached_encoder_for_F_U_ABORT_request = function (
      value: F_U_ABORT_request    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.action_result === undefined ||
            $.deepEq(
              value.action_result,
              F_U_ABORT_request._default_value_for_action_result
            )
              ? undefined
              : _encode_Action_Result(value.action_result, $.BER),
            /* IF_ABSENT  */ value.diagnostic === undefined
              ? undefined
              : _encode_Diagnostic(value.diagnostic, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_U_ABORT_request(value, elGetter);
}


/* eslint-enable */
