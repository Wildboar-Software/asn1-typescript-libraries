/* eslint-disable */
import {
  OPTIONAL,
  BOOLEAN,
  INTEGER,
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
  State_Result,
  State_Result_success,
  _decode_State_Result,
  _encode_State_Result,
} from '../ISO8571-FTAM/State-Result.ta.mjs';
import {
  Action_Result,
  _decode_Action_Result,
  _encode_Action_Result,
} from '../ISO8571-FTAM/Action-Result.ta.mjs';
import {
  Contents_Type_Attribute,
  _decode_Contents_Type_Attribute,
  _encode_Contents_Type_Attribute,
} from '../ISO8571-FTAM/Contents-Type-Attribute.ta.mjs';
import {
  Diagnostic,
  _decode_Diagnostic,
  _encode_Diagnostic,
} from '../ISO8571-FTAM/Diagnostic.ta.mjs';
/* START_OF_SYMBOL_DEFINITION F_RECOVER_response */
/**
 * @summary F_RECOVER_response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-RECOVER-response ::= SEQUENCE {
 *   state-result                     State-Result DEFAULT success,
 *   action-result                    Action-Result DEFAULT success,
 *   contents-type                    [1]  Contents-Type-Attribute,
 *   recovety-Point                   [2] IMPLICIT INTEGER DEFAULT 0,
 *   -- Zero indicates beginning of file.
 *   -- Point after last Checkpoint indicates end of file.
 *   diagnostic                       Diagnostic OPTIONAL,
 *   presentation-action              [6] IMPLICIT BOOLEAN DEFAULT FALSE,
 *   -- This flag is set if the responder is going to follow this response
 *   -- by a P-ALTER-CONTEXT exchange.
 *   -- The following are conditional on the negotiation of overlapped access.
 *   concurrent-recovery-point        [8] IMPLICIT INTEGER OPTIONAL,
 *   -- conditional on use of concurrent access. Zero indicates beginning of file; point after
 *   -- last checkpoint indicates end of file
 *   last-transfer-end-read-request   [9] IMPLICIT INTEGER OPTIONAL,
 *   last-transfer-end-write-request  [10] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_RECOVER_response {
  constructor(
    /**
     * @summary `state_result`.
     * @public
     * @readonly
     */
    readonly state_result: OPTIONAL<State_Result>,
    /**
     * @summary `action_result`.
     * @public
     * @readonly
     */
    readonly action_result: OPTIONAL<Action_Result>,
    /**
     * @summary `contents_type`.
     * @public
     * @readonly
     */
    readonly contents_type: Contents_Type_Attribute,
    /**
     * @summary `recovety_Point`.
     * @public
     * @readonly
     */
    readonly recovety_Point: OPTIONAL<INTEGER>,
    /**
     * @summary `diagnostic`.
     * @public
     * @readonly
     */
    readonly diagnostic: OPTIONAL<Diagnostic>,
    /**
     * @summary `presentation_action`.
     * @public
     * @readonly
     */
    readonly presentation_action: OPTIONAL<BOOLEAN>,
    /**
     * @summary `concurrent_recovery_point`.
     * @public
     * @readonly
     */
    readonly concurrent_recovery_point: OPTIONAL<INTEGER>,
    /**
     * @summary `last_transfer_end_read_request`.
     * @public
     * @readonly
     */
    readonly last_transfer_end_read_request: OPTIONAL<INTEGER>,
    /**
     * @summary `last_transfer_end_write_request`.
     * @public
     * @readonly
     */
    readonly last_transfer_end_write_request: OPTIONAL<INTEGER>
  ) {}

  /**
   * @summary Restructures an object into a F_RECOVER_response
   * @description
   *
   * This takes an `object` and converts it to a `F_RECOVER_response`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_RECOVER_response`.
   * @returns {F_RECOVER_response}
   */
  public static _from_object(
    _o: { [_K in keyof F_RECOVER_response]: F_RECOVER_response[_K] }
  ): F_RECOVER_response {
    return new F_RECOVER_response(
      _o.state_result,
      _o.action_result,
      _o.contents_type,
      _o.recovety_Point,
      _o.diagnostic,
      _o.presentation_action,
      _o.concurrent_recovery_point,
      _o.last_transfer_end_read_request,
      _o.last_transfer_end_write_request
    );
  }

  /**
   * @summary Getter that returns the default value for `state_result`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_state_result() {
    return State_Result_success;
  }
  /**
   * @summary Getter that returns the default value for `action_result`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_action_result() {
    return State_Result_success;
  }
  /**
   * @summary Getter that returns the default value for `recovety_Point`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_recovety_Point() {
    return 0;
  }
  /**
   * @summary Getter that returns the default value for `presentation_action`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_presentation_action() {
    return false;
  }
}
/* END_OF_SYMBOL_DEFINITION F_RECOVER_response */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_RECOVER_response */
/**
 * @summary The Leading Root Component Types of F_RECOVER_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_RECOVER_response: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'state-result',
    true,
    $.hasTag(_TagClass.application, 21),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'action-result',
    true,
    $.hasTag(_TagClass.application, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'contents-type',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'recovety-Point',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'diagnostic',
    true,
    $.hasTag(_TagClass.application, 13),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'presentation-action',
    true,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'concurrent-recovery-point',
    true,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'last-transfer-end-read-request',
    true,
    $.hasTag(_TagClass.context, 9),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'last-transfer-end-write-request',
    true,
    $.hasTag(_TagClass.context, 10),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_RECOVER_response */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_RECOVER_response */
/**
 * @summary The Trailing Root Component Types of F_RECOVER_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_RECOVER_response: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_RECOVER_response */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_RECOVER_response */
/**
 * @summary The Extension Addition Component Types of F_RECOVER_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_RECOVER_response: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_RECOVER_response */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_F_RECOVER_response */
let _cached_decoder_for_F_RECOVER_response: $.ASN1Decoder<F_RECOVER_response> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_F_RECOVER_response */

/* START_OF_SYMBOL_DEFINITION _decode_F_RECOVER_response */
/**
 * @summary Decodes an ASN.1 element into a(n) F_RECOVER_response
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_RECOVER_response} The decoded data structure.
 */
export function _decode_F_RECOVER_response(el: _Element) {
  if (!_cached_decoder_for_F_RECOVER_response) {
    _cached_decoder_for_F_RECOVER_response = function (
      el: _Element
    ): F_RECOVER_response {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let state_result: OPTIONAL<State_Result> =
        F_RECOVER_response._default_value_for_state_result;
      let action_result: OPTIONAL<Action_Result> =
        F_RECOVER_response._default_value_for_action_result;
      let contents_type!: Contents_Type_Attribute;
      let recovety_Point: OPTIONAL<INTEGER> =
        F_RECOVER_response._default_value_for_recovety_Point;
      let diagnostic: OPTIONAL<Diagnostic>;
      let presentation_action: OPTIONAL<BOOLEAN> =
        F_RECOVER_response._default_value_for_presentation_action;
      let concurrent_recovery_point: OPTIONAL<INTEGER>;
      let last_transfer_end_read_request: OPTIONAL<INTEGER>;
      let last_transfer_end_write_request: OPTIONAL<INTEGER>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'state-result': (_el: _Element): void => {
          state_result = _decode_State_Result(_el);
        },
        'action-result': (_el: _Element): void => {
          action_result = _decode_Action_Result(_el);
        },
        'contents-type': (_el: _Element): void => {
          contents_type = $._decode_explicit<Contents_Type_Attribute>(
            () => _decode_Contents_Type_Attribute
          )(_el);
        },
        'recovety-Point': (_el: _Element): void => {
          recovety_Point = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
            _el
          );
        },
        diagnostic: (_el: _Element): void => {
          diagnostic = _decode_Diagnostic(_el);
        },
        'presentation-action': (_el: _Element): void => {
          presentation_action = $._decode_implicit<BOOLEAN>(
            () => $._decodeBoolean
          )(_el);
        },
        'concurrent-recovery-point': (_el: _Element): void => {
          concurrent_recovery_point = $._decode_implicit<INTEGER>(
            () => $._decodeInteger
          )(_el);
        },
        'last-transfer-end-read-request': (_el: _Element): void => {
          last_transfer_end_read_request = $._decode_implicit<INTEGER>(
            () => $._decodeInteger
          )(_el);
        },
        'last-transfer-end-write-request': (_el: _Element): void => {
          last_transfer_end_write_request = $._decode_implicit<INTEGER>(
            () => $._decodeInteger
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_RECOVER_response,
        _extension_additions_list_spec_for_F_RECOVER_response,
        _root_component_type_list_2_spec_for_F_RECOVER_response,
        undefined
      );
      return new F_RECOVER_response /* SEQUENCE_CONSTRUCTOR_CALL */(
        state_result,
        action_result,
        contents_type,
        recovety_Point,
        diagnostic,
        presentation_action,
        concurrent_recovery_point,
        last_transfer_end_read_request,
        last_transfer_end_write_request
      );
    };
  }
  return _cached_decoder_for_F_RECOVER_response(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_F_RECOVER_response */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_F_RECOVER_response */
let _cached_encoder_for_F_RECOVER_response: $.ASN1Encoder<F_RECOVER_response> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_F_RECOVER_response */

/* START_OF_SYMBOL_DEFINITION _encode_F_RECOVER_response */
/**
 * @summary Encodes a(n) F_RECOVER_response into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_RECOVER_response, encoded as an ASN.1 Element.
 */
export function _encode_F_RECOVER_response(
  value: F_RECOVER_response,
  elGetter: $.ASN1Encoder<F_RECOVER_response>
) {
  if (!_cached_encoder_for_F_RECOVER_response) {
    _cached_encoder_for_F_RECOVER_response = function (
      value: F_RECOVER_response    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.state_result === undefined ||
            $.deepEq(
              value.state_result,
              F_RECOVER_response._default_value_for_state_result
            )
              ? undefined
              : _encode_State_Result(value.state_result, $.BER),
            /* IF_DEFAULT */ value.action_result === undefined ||
            $.deepEq(
              value.action_result,
              F_RECOVER_response._default_value_for_action_result
            )
              ? undefined
              : _encode_Action_Result(value.action_result, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              1,
              () => _encode_Contents_Type_Attribute,
              $.BER
            )(value.contents_type, $.BER),
            /* IF_DEFAULT */ value.recovety_Point === undefined ||
            $.deepEq(
              value.recovety_Point,
              F_RECOVER_response._default_value_for_recovety_Point
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => $._encodeInteger,
                  $.BER
                )(value.recovety_Point, $.BER),
            /* IF_ABSENT  */ value.diagnostic === undefined
              ? undefined
              : _encode_Diagnostic(value.diagnostic, $.BER),
            /* IF_DEFAULT */ value.presentation_action === undefined ||
            $.deepEq(
              value.presentation_action,
              F_RECOVER_response._default_value_for_presentation_action
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  6,
                  () => $._encodeBoolean,
                  $.BER
                )(value.presentation_action, $.BER),
            /* IF_ABSENT  */ value.concurrent_recovery_point === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  8,
                  () => $._encodeInteger,
                  $.BER
                )(value.concurrent_recovery_point, $.BER),
            /* IF_ABSENT  */ value.last_transfer_end_read_request === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  9,
                  () => $._encodeInteger,
                  $.BER
                )(value.last_transfer_end_read_request, $.BER),
            /* IF_ABSENT  */ value.last_transfer_end_write_request === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  10,
                  () => $._encodeInteger,
                  $.BER
                )(value.last_transfer_end_write_request, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_RECOVER_response(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_F_RECOVER_response */

/* eslint-enable */
