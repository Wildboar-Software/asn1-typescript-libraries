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
import * as $ from '@wildboar/asn1/functional';
import {
  State_Result,
  State_Result_success,
  _decode_State_Result,
  _encode_State_Result,
} from '../ISO8571-FTAM/State-Result.ta.mjs';
import {
  Action_Result,
    Action_Result_success,
  _decode_Action_Result,
  _encode_Action_Result,
} from '../ISO8571-FTAM/Action-Result.ta.mjs';
import {
  Contents_Type_Attribute,
  _decode_Contents_Type_Attribute,
  _encode_Contents_Type_Attribute,
} from '../ISO8571-FTAM/Contents-Type-Attribute.ta.mjs';
import {
  Concurrency_Control,
  _decode_Concurrency_Control,
  _encode_Concurrency_Control,
} from '../ISO8571-FTAM/Concurrency-Control.ta.mjs';
import {
  Shared_ASE_Information,
  _decode_Shared_ASE_Information,
  _encode_Shared_ASE_Information,
} from '../ISO8571-FTAM/Shared-ASE-Information.ta.mjs';
import {
  Diagnostic,
  _decode_Diagnostic,
  _encode_Diagnostic,
} from '../ISO8571-FTAM/Diagnostic.ta.mjs';
import {
  F_OPEN_response_recovery_mode,
  none /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_F_OPEN_response_recovery_mode,
  _encode_F_OPEN_response_recovery_mode,
} from '../ISO8571-FTAM/F-OPEN-response-recovery-mode.ta.mjs';
import {
  Degree_Of_Overlap,
  _decode_Degree_Of_Overlap,
  _encode_Degree_Of_Overlap,
} from '../ISO8571-FTAM/Degree-Of-Overlap.ta.mjs';

/**
 * @summary F_OPEN_response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-OPEN-response ::= SEQUENCE {
 *   state-result            State-Result DEFAULT success,
 *   action-result           Action-Result DEFAULT success,
 *   contents-type           [1]  Contents-Type-Attribute,
 *   concurrency-control     Concurrency-Control OPTIONAL,
 *   shared-ASE-information  Shared-ASE-Information OPTIONAL,
 *   diagnostic              Diagnostic OPTIONAL,
 *   recovery-mode
 *     [3] IMPLICIT INTEGER {none(0), at-start-of-file(1),
 *                           at-any-active-Checkpoint(2)} DEFAULT none,
 *   presentation-action     [6] IMPLICIT BOOLEAN DEFAULT FALSE,
 *   -- This flag is set if the responder is going to follow this response
 *   -- by a P-ALTER-CONTEXT exchange.
 *   --The following are conditional on the negotiation of the concecutive access
 *   -- or concurent access functional units.
 *   degree-of-overlap       Degree-Of-Overlap OPTIONAL,
 *   transfer-window         [7] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_OPEN_response {
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
     * @summary `concurrency_control`.
     * @public
     * @readonly
     */
    readonly concurrency_control: OPTIONAL<Concurrency_Control>,
    /**
     * @summary `shared_ASE_information`.
     * @public
     * @readonly
     */
    readonly shared_ASE_information: OPTIONAL<Shared_ASE_Information>,
    /**
     * @summary `diagnostic`.
     * @public
     * @readonly
     */
    readonly diagnostic: OPTIONAL<Diagnostic>,
    /**
     * @summary `recovery_mode`.
     * @public
     * @readonly
     */
    readonly recovery_mode: OPTIONAL<F_OPEN_response_recovery_mode>,
    /**
     * @summary `presentation_action`.
     * @public
     * @readonly
     */
    readonly presentation_action: OPTIONAL<BOOLEAN>,
    /**
     * @summary `degree_of_overlap`.
     * @public
     * @readonly
     */
    readonly degree_of_overlap: OPTIONAL<Degree_Of_Overlap>,
    /**
     * @summary `transfer_window`.
     * @public
     * @readonly
     */
    readonly transfer_window: OPTIONAL<INTEGER>
  ) {}

  /**
   * @summary Restructures an object into a F_OPEN_response
   * @description
   *
   * This takes an `object` and converts it to a `F_OPEN_response`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_OPEN_response`.
   * @returns {F_OPEN_response}
   */
  public static _from_object(
    _o: { [_K in keyof F_OPEN_response]: F_OPEN_response[_K] }
  ): F_OPEN_response {
    return new F_OPEN_response(
      _o.state_result,
      _o.action_result,
      _o.contents_type,
      _o.concurrency_control,
      _o.shared_ASE_information,
      _o.diagnostic,
      _o.recovery_mode,
      _o.presentation_action,
      _o.degree_of_overlap,
      _o.transfer_window
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
    return Action_Result_success;
  }
  /**
   * @summary Getter that returns the default value for `recovery_mode`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_recovery_mode() {
    return none;
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


/**
 * @summary The Leading Root Component Types of F_OPEN_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_OPEN_response: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'state-result',
    true,
    $.hasTag(_TagClass.application, 21)
  ),
  new $.ComponentSpec(
    'action-result',
    true,
    $.hasTag(_TagClass.application, 5)
  ),
  new $.ComponentSpec(
    'contents-type',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'concurrency-control',
    true,
    $.hasTag(_TagClass.application, 10)
  ),
  new $.ComponentSpec(
    'shared-ASE-information',
    true,
    $.hasTag(_TagClass.application, 20)
  ),
  new $.ComponentSpec(
    'diagnostic',
    true,
    $.hasTag(_TagClass.application, 13)
  ),
  new $.ComponentSpec(
    'recovery-mode',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'presentation-action',
    true,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'degree-of-overlap',
    true,
    $.hasTag(_TagClass.application, 30)
  ),
  new $.ComponentSpec(
    'transfer-window',
    true,
    $.hasTag(_TagClass.context, 7)
  ),
];


/**
 * @summary The Trailing Root Component Types of F_OPEN_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_OPEN_response: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_OPEN_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_OPEN_response: $.ComponentSpec[] = [];


let _cached_decoder_for_F_OPEN_response: $.ASN1Decoder<F_OPEN_response> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_OPEN_response
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_OPEN_response} The decoded data structure.
 */
export function _decode_F_OPEN_response(el: _Element) {
  if (!_cached_decoder_for_F_OPEN_response) {
    _cached_decoder_for_F_OPEN_response = function (
      el: _Element
    ): F_OPEN_response {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let state_result: OPTIONAL<State_Result> =
        F_OPEN_response._default_value_for_state_result;
      let action_result: OPTIONAL<Action_Result> =
        F_OPEN_response._default_value_for_action_result;
      let contents_type!: Contents_Type_Attribute;
      let concurrency_control: OPTIONAL<Concurrency_Control>;
      let shared_ASE_information: OPTIONAL<Shared_ASE_Information>;
      let diagnostic: OPTIONAL<Diagnostic>;
      let recovery_mode: OPTIONAL<F_OPEN_response_recovery_mode> =
        F_OPEN_response._default_value_for_recovery_mode;
      let presentation_action: OPTIONAL<BOOLEAN> =
        F_OPEN_response._default_value_for_presentation_action;
      let degree_of_overlap: OPTIONAL<Degree_Of_Overlap>;
      let transfer_window: OPTIONAL<INTEGER>;
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
        'concurrency-control': (_el: _Element): void => {
          concurrency_control = _decode_Concurrency_Control(_el);
        },
        'shared-ASE-information': (_el: _Element): void => {
          shared_ASE_information = _decode_Shared_ASE_Information(_el);
        },
        diagnostic: (_el: _Element): void => {
          diagnostic = _decode_Diagnostic(_el);
        },
        'recovery-mode': (_el: _Element): void => {
          recovery_mode = $._decode_implicit<F_OPEN_response_recovery_mode>(
            () => _decode_F_OPEN_response_recovery_mode
          )(_el);
        },
        'presentation-action': (_el: _Element): void => {
          presentation_action = $._decode_implicit<BOOLEAN>(
            () => $._decodeBoolean
          )(_el);
        },
        'degree-of-overlap': (_el: _Element): void => {
          degree_of_overlap = _decode_Degree_Of_Overlap(_el);
        },
        'transfer-window': (_el: _Element): void => {
          transfer_window = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
            _el
          );
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_OPEN_response,
        _extension_additions_list_spec_for_F_OPEN_response,
        _root_component_type_list_2_spec_for_F_OPEN_response,
        undefined
      );
      return new F_OPEN_response /* SEQUENCE_CONSTRUCTOR_CALL */(
        state_result,
        action_result,
        contents_type,
        concurrency_control,
        shared_ASE_information,
        diagnostic,
        recovery_mode,
        presentation_action,
        degree_of_overlap,
        transfer_window
      );
    };
  }
  return _cached_decoder_for_F_OPEN_response(el);
}


let _cached_encoder_for_F_OPEN_response: $.ASN1Encoder<F_OPEN_response> | null = null;


/**
 * @summary Encodes a(n) F_OPEN_response into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_OPEN_response, encoded as an ASN.1 Element.
 */
export function _encode_F_OPEN_response(
  value: F_OPEN_response,
  elGetter: $.ASN1Encoder<F_OPEN_response>
) {
  if (!_cached_encoder_for_F_OPEN_response) {
    _cached_encoder_for_F_OPEN_response = function (
      value: F_OPEN_response    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.state_result === undefined ||
            $.deepEq(
              value.state_result,
              F_OPEN_response._default_value_for_state_result
            )
              ? undefined
              : _encode_State_Result(value.state_result, $.BER),
            /* IF_DEFAULT */ value.action_result === undefined ||
            $.deepEq(
              value.action_result,
              F_OPEN_response._default_value_for_action_result
            )
              ? undefined
              : _encode_Action_Result(value.action_result, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              1,
              () => _encode_Contents_Type_Attribute,
              $.BER
            )(value.contents_type, $.BER),
            /* IF_ABSENT  */ value.concurrency_control === undefined
              ? undefined
              : _encode_Concurrency_Control(value.concurrency_control, $.BER),
            /* IF_ABSENT  */ value.shared_ASE_information === undefined
              ? undefined
              : _encode_Shared_ASE_Information(
                  value.shared_ASE_information,
                  $.BER
                ),
            /* IF_ABSENT  */ value.diagnostic === undefined
              ? undefined
              : _encode_Diagnostic(value.diagnostic, $.BER),
            /* IF_DEFAULT */ value.recovery_mode === undefined ||
            $.deepEq(
              value.recovery_mode,
              F_OPEN_response._default_value_for_recovery_mode
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  3,
                  () => _encode_F_OPEN_response_recovery_mode,
                  $.BER
                )(value.recovery_mode, $.BER),
            /* IF_DEFAULT */ value.presentation_action === undefined ||
            $.deepEq(
              value.presentation_action,
              F_OPEN_response._default_value_for_presentation_action
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  6,
                  () => $._encodeBoolean,
                  $.BER
                )(value.presentation_action, $.BER),
            /* IF_ABSENT  */ value.degree_of_overlap === undefined
              ? undefined
              : _encode_Degree_Of_Overlap(value.degree_of_overlap, $.BER),
            /* IF_ABSENT  */ value.transfer_window === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  7,
                  () => $._encodeInteger,
                  $.BER
                )(value.transfer_window, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_OPEN_response(value, elGetter);
}


/* eslint-enable */
