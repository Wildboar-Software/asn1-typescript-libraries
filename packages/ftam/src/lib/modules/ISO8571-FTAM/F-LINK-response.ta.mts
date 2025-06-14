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
    Action_Result_success,
  _decode_Action_Result,
  _encode_Action_Result,
} from '../ISO8571-FTAM/Action-Result.ta.mjs';
import {
  Create_Attributes,
  _decode_Create_Attributes,
  _encode_Create_Attributes,
} from '../ISO8571-FTAM/Create-Attributes.ta.mjs';
import {
  Pathname_Attribute,
  _decode_Pathname_Attribute,
  _encode_Pathname_Attribute,
} from '../ISO8571-FTAM/Pathname-Attribute.ta.mjs';
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
/* START_OF_SYMBOL_DEFINITION F_LINK_response */
/**
 * @summary F_LINK_response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-LINK-response ::= SEQUENCE {
 *   state-result            State-Result DEFAULT success,
 *   action-result           Action-Result DEFAULT success,
 *   initial-attributes      Create-Attributes,
 *   target-Object           Pathname-Attribute,
 *   shared-ASE-information  Shared-ASE-Information OPTIONAL,
 *   diagnostic              Diagnostic OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_LINK_response {
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
     * @summary `initial_attributes`.
     * @public
     * @readonly
     */
    readonly initial_attributes: Create_Attributes,
    /**
     * @summary `target_Object`.
     * @public
     * @readonly
     */
    readonly target_Object: Pathname_Attribute,
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
    readonly diagnostic: OPTIONAL<Diagnostic>
  ) {}

  /**
   * @summary Restructures an object into a F_LINK_response
   * @description
   *
   * This takes an `object` and converts it to a `F_LINK_response`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_LINK_response`.
   * @returns {F_LINK_response}
   */
  public static _from_object(
    _o: { [_K in keyof F_LINK_response]: F_LINK_response[_K] }
  ): F_LINK_response {
    return new F_LINK_response(
      _o.state_result,
      _o.action_result,
      _o.initial_attributes,
      _o.target_Object,
      _o.shared_ASE_information,
      _o.diagnostic
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
}
/* END_OF_SYMBOL_DEFINITION F_LINK_response */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_LINK_response */
/**
 * @summary The Leading Root Component Types of F_LINK_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_LINK_response: $.ComponentSpec[] = [
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
    'initial-attributes',
    false,
    $.hasTag(_TagClass.application, 12),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'target-Object',
    false,
    $.hasAnyTag,
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'shared-ASE-information',
    true,
    $.hasTag(_TagClass.application, 20),
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_LINK_response */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_LINK_response */
/**
 * @summary The Trailing Root Component Types of F_LINK_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_LINK_response: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_LINK_response */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_LINK_response */
/**
 * @summary The Extension Addition Component Types of F_LINK_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_LINK_response: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_LINK_response */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_F_LINK_response */
let _cached_decoder_for_F_LINK_response: $.ASN1Decoder<F_LINK_response> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_F_LINK_response */

/* START_OF_SYMBOL_DEFINITION _decode_F_LINK_response */
/**
 * @summary Decodes an ASN.1 element into a(n) F_LINK_response
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_LINK_response} The decoded data structure.
 */
export function _decode_F_LINK_response(el: _Element) {
  if (!_cached_decoder_for_F_LINK_response) {
    _cached_decoder_for_F_LINK_response = function (
      el: _Element
    ): F_LINK_response {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let state_result: OPTIONAL<State_Result> =
        F_LINK_response._default_value_for_state_result;
      let action_result: OPTIONAL<Action_Result> =
        F_LINK_response._default_value_for_action_result;
      let initial_attributes!: Create_Attributes;
      let target_Object!: Pathname_Attribute;
      let shared_ASE_information: OPTIONAL<Shared_ASE_Information>;
      let diagnostic: OPTIONAL<Diagnostic>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'state-result': (_el: _Element): void => {
          state_result = _decode_State_Result(_el);
        },
        'action-result': (_el: _Element): void => {
          action_result = _decode_Action_Result(_el);
        },
        'initial-attributes': (_el: _Element): void => {
          initial_attributes = _decode_Create_Attributes(_el);
        },
        'target-Object': (_el: _Element): void => {
          target_Object = _decode_Pathname_Attribute(_el);
        },
        'shared-ASE-information': (_el: _Element): void => {
          shared_ASE_information = _decode_Shared_ASE_Information(_el);
        },
        diagnostic: (_el: _Element): void => {
          diagnostic = _decode_Diagnostic(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_LINK_response,
        _extension_additions_list_spec_for_F_LINK_response,
        _root_component_type_list_2_spec_for_F_LINK_response,
        undefined
      );
      return new F_LINK_response /* SEQUENCE_CONSTRUCTOR_CALL */(
        state_result,
        action_result,
        initial_attributes,
        target_Object,
        shared_ASE_information,
        diagnostic
      );
    };
  }
  return _cached_decoder_for_F_LINK_response(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_F_LINK_response */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_F_LINK_response */
let _cached_encoder_for_F_LINK_response: $.ASN1Encoder<F_LINK_response> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_F_LINK_response */

/* START_OF_SYMBOL_DEFINITION _encode_F_LINK_response */
/**
 * @summary Encodes a(n) F_LINK_response into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_LINK_response, encoded as an ASN.1 Element.
 */
export function _encode_F_LINK_response(
  value: F_LINK_response,
  elGetter: $.ASN1Encoder<F_LINK_response>
) {
  if (!_cached_encoder_for_F_LINK_response) {
    _cached_encoder_for_F_LINK_response = function (
      value: F_LINK_response    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.state_result === undefined ||
            $.deepEq(
              value.state_result,
              F_LINK_response._default_value_for_state_result
            )
              ? undefined
              : _encode_State_Result(value.state_result, $.BER),
            /* IF_DEFAULT */ value.action_result === undefined ||
            $.deepEq(
              value.action_result,
              F_LINK_response._default_value_for_action_result
            )
              ? undefined
              : _encode_Action_Result(value.action_result, $.BER),
            /* REQUIRED   */ _encode_Create_Attributes(
              value.initial_attributes,
              $.BER
            ),
            /* REQUIRED   */ _encode_Pathname_Attribute(
              value.target_Object,
              $.BER
            ),
            /* IF_ABSENT  */ value.shared_ASE_information === undefined
              ? undefined
              : _encode_Shared_ASE_Information(
                  value.shared_ASE_information,
                  $.BER
                ),
            /* IF_ABSENT  */ value.diagnostic === undefined
              ? undefined
              : _encode_Diagnostic(value.diagnostic, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_LINK_response(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_F_LINK_response */

/* eslint-enable */
