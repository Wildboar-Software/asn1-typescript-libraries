/* eslint-disable */
import {
  OPTIONAL,
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
  Action_Result,
    Action_Result_success,
  _decode_Action_Result,
  _encode_Action_Result,
} from '../ISO8571-FTAM/Action-Result.ta.mjs';
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
  Request_Type,
  _decode_Request_Type,
  _encode_Request_Type,
} from '../ISO8571-FTAM/Request-Type.ta.mjs';
/* START_OF_SYMBOL_DEFINITION F_CANCEL_response */
/**
 * @summary F_CANCEL_response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-CANCEL-response ::= SEQUENCE {
 *   action-result                     Action-Result DEFAULT success,
 *   shared-ASE-information            Shared-ASE-Information OPTIONAL,
 *   diagnostic                        Diagnostic OPTIONAL,
 *   -- The following are conditional on the negotiation of consecutive or concurrent access.
 *   request-type                      Request-Type OPTIONAL,
 *   transfer-number                   [0] IMPLICIT INTEGER OPTIONAL,
 *   last-transfer-end-read-request    [1] IMPLICIT INTEGER OPTIONAL,
 *   last-transfer-end-read-response   [2] IMPLICIT INTEGER OPTIONAL,
 *   last-transfer-end-write-request   [3] IMPLICIT INTEGER OPTIONAL,
 *   last-transfer-end-write-response  [4] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_CANCEL_response {
  constructor(
    /**
     * @summary `action_result`.
     * @public
     * @readonly
     */
    readonly action_result: OPTIONAL<Action_Result>,
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
     * @summary `request_type`.
     * @public
     * @readonly
     */
    readonly request_type: OPTIONAL<Request_Type>,
    /**
     * @summary `transfer_number`.
     * @public
     * @readonly
     */
    readonly transfer_number: OPTIONAL<INTEGER>,
    /**
     * @summary `last_transfer_end_read_request`.
     * @public
     * @readonly
     */
    readonly last_transfer_end_read_request: OPTIONAL<INTEGER>,
    /**
     * @summary `last_transfer_end_read_response`.
     * @public
     * @readonly
     */
    readonly last_transfer_end_read_response: OPTIONAL<INTEGER>,
    /**
     * @summary `last_transfer_end_write_request`.
     * @public
     * @readonly
     */
    readonly last_transfer_end_write_request: OPTIONAL<INTEGER>,
    /**
     * @summary `last_transfer_end_write_response`.
     * @public
     * @readonly
     */
    readonly last_transfer_end_write_response: OPTIONAL<INTEGER>
  ) {}

  /**
   * @summary Restructures an object into a F_CANCEL_response
   * @description
   *
   * This takes an `object` and converts it to a `F_CANCEL_response`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_CANCEL_response`.
   * @returns {F_CANCEL_response}
   */
  public static _from_object(
    _o: { [_K in keyof F_CANCEL_response]: F_CANCEL_response[_K] }
  ): F_CANCEL_response {
    return new F_CANCEL_response(
      _o.action_result,
      _o.shared_ASE_information,
      _o.diagnostic,
      _o.request_type,
      _o.transfer_number,
      _o.last_transfer_end_read_request,
      _o.last_transfer_end_read_response,
      _o.last_transfer_end_write_request,
      _o.last_transfer_end_write_response
    );
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
/* END_OF_SYMBOL_DEFINITION F_CANCEL_response */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_CANCEL_response */
/**
 * @summary The Leading Root Component Types of F_CANCEL_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_CANCEL_response: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'action-result',
    true,
    $.hasTag(_TagClass.application, 5),
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
  new $.ComponentSpec(
    'request-type',
    true,
    $.hasTag(_TagClass.application, 31),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'transfer-number',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'last-transfer-end-read-request',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'last-transfer-end-read-response',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'last-transfer-end-write-request',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'last-transfer-end-write-response',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_CANCEL_response */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_CANCEL_response */
/**
 * @summary The Trailing Root Component Types of F_CANCEL_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_CANCEL_response: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_CANCEL_response */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_CANCEL_response */
/**
 * @summary The Extension Addition Component Types of F_CANCEL_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_CANCEL_response: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_CANCEL_response */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_F_CANCEL_response */
let _cached_decoder_for_F_CANCEL_response: $.ASN1Decoder<F_CANCEL_response> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_F_CANCEL_response */

/* START_OF_SYMBOL_DEFINITION _decode_F_CANCEL_response */
/**
 * @summary Decodes an ASN.1 element into a(n) F_CANCEL_response
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_CANCEL_response} The decoded data structure.
 */
export function _decode_F_CANCEL_response(el: _Element) {
  if (!_cached_decoder_for_F_CANCEL_response) {
    _cached_decoder_for_F_CANCEL_response = function (
      el: _Element
    ): F_CANCEL_response {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let action_result: OPTIONAL<Action_Result> =
        F_CANCEL_response._default_value_for_action_result;
      let shared_ASE_information: OPTIONAL<Shared_ASE_Information>;
      let diagnostic: OPTIONAL<Diagnostic>;
      let request_type: OPTIONAL<Request_Type>;
      let transfer_number: OPTIONAL<INTEGER>;
      let last_transfer_end_read_request: OPTIONAL<INTEGER>;
      let last_transfer_end_read_response: OPTIONAL<INTEGER>;
      let last_transfer_end_write_request: OPTIONAL<INTEGER>;
      let last_transfer_end_write_response: OPTIONAL<INTEGER>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'action-result': (_el: _Element): void => {
          action_result = _decode_Action_Result(_el);
        },
        'shared-ASE-information': (_el: _Element): void => {
          shared_ASE_information = _decode_Shared_ASE_Information(_el);
        },
        diagnostic: (_el: _Element): void => {
          diagnostic = _decode_Diagnostic(_el);
        },
        'request-type': (_el: _Element): void => {
          request_type = _decode_Request_Type(_el);
        },
        'transfer-number': (_el: _Element): void => {
          transfer_number = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
            _el
          );
        },
        'last-transfer-end-read-request': (_el: _Element): void => {
          last_transfer_end_read_request = $._decode_implicit<INTEGER>(
            () => $._decodeInteger
          )(_el);
        },
        'last-transfer-end-read-response': (_el: _Element): void => {
          last_transfer_end_read_response = $._decode_implicit<INTEGER>(
            () => $._decodeInteger
          )(_el);
        },
        'last-transfer-end-write-request': (_el: _Element): void => {
          last_transfer_end_write_request = $._decode_implicit<INTEGER>(
            () => $._decodeInteger
          )(_el);
        },
        'last-transfer-end-write-response': (_el: _Element): void => {
          last_transfer_end_write_response = $._decode_implicit<INTEGER>(
            () => $._decodeInteger
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_CANCEL_response,
        _extension_additions_list_spec_for_F_CANCEL_response,
        _root_component_type_list_2_spec_for_F_CANCEL_response,
        undefined
      );
      return new F_CANCEL_response /* SEQUENCE_CONSTRUCTOR_CALL */(
        action_result,
        shared_ASE_information,
        diagnostic,
        request_type,
        transfer_number,
        last_transfer_end_read_request,
        last_transfer_end_read_response,
        last_transfer_end_write_request,
        last_transfer_end_write_response
      );
    };
  }
  return _cached_decoder_for_F_CANCEL_response(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_F_CANCEL_response */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_F_CANCEL_response */
let _cached_encoder_for_F_CANCEL_response: $.ASN1Encoder<F_CANCEL_response> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_F_CANCEL_response */

/* START_OF_SYMBOL_DEFINITION _encode_F_CANCEL_response */
/**
 * @summary Encodes a(n) F_CANCEL_response into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_CANCEL_response, encoded as an ASN.1 Element.
 */
export function _encode_F_CANCEL_response(
  value: F_CANCEL_response,
  elGetter: $.ASN1Encoder<F_CANCEL_response>
) {
  if (!_cached_encoder_for_F_CANCEL_response) {
    _cached_encoder_for_F_CANCEL_response = function (
      value: F_CANCEL_response    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.action_result === undefined ||
            $.deepEq(
              value.action_result,
              F_CANCEL_response._default_value_for_action_result
            )
              ? undefined
              : _encode_Action_Result(value.action_result, $.BER),
            /* IF_ABSENT  */ value.shared_ASE_information === undefined
              ? undefined
              : _encode_Shared_ASE_Information(
                  value.shared_ASE_information,
                  $.BER
                ),
            /* IF_ABSENT  */ value.diagnostic === undefined
              ? undefined
              : _encode_Diagnostic(value.diagnostic, $.BER),
            /* IF_ABSENT  */ value.request_type === undefined
              ? undefined
              : _encode_Request_Type(value.request_type, $.BER),
            /* IF_ABSENT  */ value.transfer_number === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () => $._encodeInteger,
                  $.BER
                )(value.transfer_number, $.BER),
            /* IF_ABSENT  */ value.last_transfer_end_read_request === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  1,
                  () => $._encodeInteger,
                  $.BER
                )(value.last_transfer_end_read_request, $.BER),
            /* IF_ABSENT  */ value.last_transfer_end_read_response === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => $._encodeInteger,
                  $.BER
                )(value.last_transfer_end_read_response, $.BER),
            /* IF_ABSENT  */ value.last_transfer_end_write_request === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  3,
                  () => $._encodeInteger,
                  $.BER
                )(value.last_transfer_end_write_request, $.BER),
            /* IF_ABSENT  */ value.last_transfer_end_write_response ===
            undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  4,
                  () => $._encodeInteger,
                  $.BER
                )(value.last_transfer_end_write_response, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_CANCEL_response(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_F_CANCEL_response */

/* eslint-enable */
