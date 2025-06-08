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
  Action_Result,
    Action_Result_success,
  _decode_Action_Result,
  _encode_Action_Result,
} from '../ISO8571-FTAM/Action-Result.ta';
export {
  Action_Result,
  _decode_Action_Result,
  _encode_Action_Result,
} from '../ISO8571-FTAM/Action-Result.ta';
import {
  Shared_ASE_Information,
  _decode_Shared_ASE_Information,
  _encode_Shared_ASE_Information,
} from '../ISO8571-FTAM/Shared-ASE-Information.ta';
export {
  Shared_ASE_Information,
  _decode_Shared_ASE_Information,
  _encode_Shared_ASE_Information,
} from '../ISO8571-FTAM/Shared-ASE-Information.ta';
import {
  Diagnostic,
  _decode_Diagnostic,
  _encode_Diagnostic,
} from '../ISO8571-FTAM/Diagnostic.ta';
export {
  Diagnostic,
  _decode_Diagnostic,
  _encode_Diagnostic,
} from '../ISO8571-FTAM/Diagnostic.ta';
import {
  Request_Type,
  _decode_Request_Type,
  _encode_Request_Type,
} from '../ISO8571-FTAM/Request-Type.ta';
export {
  Request_Type,
  _decode_Request_Type,
  _encode_Request_Type,
} from '../ISO8571-FTAM/Request-Type.ta';

/* START_OF_SYMBOL_DEFINITION F_TRANSFER_END_response */
/**
 * @summary F_TRANSFER_END_response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-TRANSFER-END-response ::= SEQUENCE {
 *   action-result           Action-Result DEFAULT success,
 *   shared-ASE-information  Shared-ASE-Information OPTIONAL,
 *   diagnostic              Diagnostic OPTIONAL,
 *   -- The following are conditional on the negotiation of consecutive or concurrent access.
 *   request-type            Request-Type OPTIONAL,
 *   transfer-number         [0] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_TRANSFER_END_response {
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
    readonly transfer_number: OPTIONAL<INTEGER>
  ) {}

  /**
   * @summary Restructures an object into a F_TRANSFER_END_response
   * @description
   *
   * This takes an `object` and converts it to a `F_TRANSFER_END_response`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_TRANSFER_END_response`.
   * @returns {F_TRANSFER_END_response}
   */
  public static _from_object(
    _o: { [_K in keyof F_TRANSFER_END_response]: F_TRANSFER_END_response[_K] }
  ): F_TRANSFER_END_response {
    return new F_TRANSFER_END_response(
      _o.action_result,
      _o.shared_ASE_information,
      _o.diagnostic,
      _o.request_type,
      _o.transfer_number
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
/* END_OF_SYMBOL_DEFINITION F_TRANSFER_END_response */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_TRANSFER_END_response */
/**
 * @summary The Leading Root Component Types of F_TRANSFER_END_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_TRANSFER_END_response: $.ComponentSpec[] = [
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_TRANSFER_END_response */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_TRANSFER_END_response */
/**
 * @summary The Trailing Root Component Types of F_TRANSFER_END_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_TRANSFER_END_response: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_TRANSFER_END_response */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_TRANSFER_END_response */
/**
 * @summary The Extension Addition Component Types of F_TRANSFER_END_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_TRANSFER_END_response: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_TRANSFER_END_response */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_F_TRANSFER_END_response */
let _cached_decoder_for_F_TRANSFER_END_response: $.ASN1Decoder<F_TRANSFER_END_response> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_F_TRANSFER_END_response */

/* START_OF_SYMBOL_DEFINITION _decode_F_TRANSFER_END_response */
/**
 * @summary Decodes an ASN.1 element into a(n) F_TRANSFER_END_response
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_TRANSFER_END_response} The decoded data structure.
 */
export function _decode_F_TRANSFER_END_response(el: _Element) {
  if (!_cached_decoder_for_F_TRANSFER_END_response) {
    _cached_decoder_for_F_TRANSFER_END_response = function (
      el: _Element
    ): F_TRANSFER_END_response {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let action_result: OPTIONAL<Action_Result> =
        F_TRANSFER_END_response._default_value_for_action_result;
      let shared_ASE_information: OPTIONAL<Shared_ASE_Information>;
      let diagnostic: OPTIONAL<Diagnostic>;
      let request_type: OPTIONAL<Request_Type>;
      let transfer_number: OPTIONAL<INTEGER>;
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
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_TRANSFER_END_response,
        _extension_additions_list_spec_for_F_TRANSFER_END_response,
        _root_component_type_list_2_spec_for_F_TRANSFER_END_response,
        undefined
      );
      return new F_TRANSFER_END_response /* SEQUENCE_CONSTRUCTOR_CALL */(
        action_result,
        shared_ASE_information,
        diagnostic,
        request_type,
        transfer_number
      );
    };
  }
  return _cached_decoder_for_F_TRANSFER_END_response(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_F_TRANSFER_END_response */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_F_TRANSFER_END_response */
let _cached_encoder_for_F_TRANSFER_END_response: $.ASN1Encoder<F_TRANSFER_END_response> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_F_TRANSFER_END_response */

/* START_OF_SYMBOL_DEFINITION _encode_F_TRANSFER_END_response */
/**
 * @summary Encodes a(n) F_TRANSFER_END_response into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_TRANSFER_END_response, encoded as an ASN.1 Element.
 */
export function _encode_F_TRANSFER_END_response(
  value: F_TRANSFER_END_response,
  elGetter: $.ASN1Encoder<F_TRANSFER_END_response>
) {
  if (!_cached_encoder_for_F_TRANSFER_END_response) {
    _cached_encoder_for_F_TRANSFER_END_response = function (
      value: F_TRANSFER_END_response,
      elGetter: $.ASN1Encoder<F_TRANSFER_END_response>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.action_result === undefined ||
            $.deepEq(
              value.action_result,
              F_TRANSFER_END_response._default_value_for_action_result
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
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_TRANSFER_END_response(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_F_TRANSFER_END_response */

/* eslint-enable */
