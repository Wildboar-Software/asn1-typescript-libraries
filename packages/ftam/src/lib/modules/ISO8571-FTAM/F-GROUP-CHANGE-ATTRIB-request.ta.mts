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
  Change_Attributes,
  _decode_Change_Attributes,
  _encode_Change_Attributes,
} from '../ISO8571-FTAM/Change-Attributes.ta.mjs';
import {
  Error_Action,
  _decode_Error_Action,
  _encode_Error_Action,
} from '../ISO8571-FTAM/Error-Action.ta.mjs';
import {
  Request_Operation_Result,
  _decode_Request_Operation_Result,
  _encode_Request_Operation_Result,
} from '../ISO8571-FTAM/Request-Operation-Result.ta.mjs';
import {
  Shared_ASE_Information,
  _decode_Shared_ASE_Information,
  _encode_Shared_ASE_Information,
} from '../ISO8571-FTAM/Shared-ASE-Information.ta.mjs';

/**
 * @summary F_GROUP_CHANGE_ATTRIB_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-GROUP-CHANGE-ATTRIB-request ::= SEQUENCE {
 *   attributes                Change-Attributes,
 *   error-action              [1] IMPLICIT Error-Action,
 *   request-Operation-result  Request-Operation-Result OPTIONAL,
 *   shared-ASE-information    Shared-ASE-Information OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_GROUP_CHANGE_ATTRIB_request {
  constructor(
    /**
     * @summary `attributes`.
     * @public
     * @readonly
     */
    readonly attributes: Change_Attributes,
    /**
     * @summary `error_action`.
     * @public
     * @readonly
     */
    readonly error_action: Error_Action,
    /**
     * @summary `request_Operation_result`.
     * @public
     * @readonly
     */
    readonly request_Operation_result: OPTIONAL<Request_Operation_Result>,
    /**
     * @summary `shared_ASE_information`.
     * @public
     * @readonly
     */
    readonly shared_ASE_information: OPTIONAL<Shared_ASE_Information>
  ) {}

  /**
   * @summary Restructures an object into a F_GROUP_CHANGE_ATTRIB_request
   * @description
   *
   * This takes an `object` and converts it to a `F_GROUP_CHANGE_ATTRIB_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_GROUP_CHANGE_ATTRIB_request`.
   * @returns {F_GROUP_CHANGE_ATTRIB_request}
   */
  public static _from_object(
    _o: {
      [_K in keyof F_GROUP_CHANGE_ATTRIB_request]: F_GROUP_CHANGE_ATTRIB_request[_K];
    }
  ): F_GROUP_CHANGE_ATTRIB_request {
    return new F_GROUP_CHANGE_ATTRIB_request(
      _o.attributes,
      _o.error_action,
      _o.request_Operation_result,
      _o.shared_ASE_information
    );
  }
}


/**
 * @summary The Leading Root Component Types of F_GROUP_CHANGE_ATTRIB_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_GROUP_CHANGE_ATTRIB_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'attributes',
    false,
    $.hasTag(_TagClass.application, 8)
  ),
  new $.ComponentSpec(
    'error-action',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'request-Operation-result',
    true,
    $.hasTag(_TagClass.application, 31)
  ),
  new $.ComponentSpec(
    'shared-ASE-information',
    true,
    $.hasTag(_TagClass.application, 20)
  ),
];


/**
 * @summary The Trailing Root Component Types of F_GROUP_CHANGE_ATTRIB_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_GROUP_CHANGE_ATTRIB_request: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_GROUP_CHANGE_ATTRIB_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_GROUP_CHANGE_ATTRIB_request: $.ComponentSpec[] = [];


let _cached_decoder_for_F_GROUP_CHANGE_ATTRIB_request: $.ASN1Decoder<F_GROUP_CHANGE_ATTRIB_request> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_GROUP_CHANGE_ATTRIB_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_GROUP_CHANGE_ATTRIB_request} The decoded data structure.
 */
export function _decode_F_GROUP_CHANGE_ATTRIB_request(el: _Element) {
  if (!_cached_decoder_for_F_GROUP_CHANGE_ATTRIB_request) {
    _cached_decoder_for_F_GROUP_CHANGE_ATTRIB_request = function (
      el: _Element
    ): F_GROUP_CHANGE_ATTRIB_request {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let attributes!: Change_Attributes;
      let error_action!: Error_Action;
      let request_Operation_result: OPTIONAL<Request_Operation_Result>;
      let shared_ASE_information: OPTIONAL<Shared_ASE_Information>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        attributes: (_el: _Element): void => {
          attributes = _decode_Change_Attributes(_el);
        },
        'error-action': (_el: _Element): void => {
          error_action = $._decode_implicit<Error_Action>(
            () => _decode_Error_Action
          )(_el);
        },
        'request-Operation-result': (_el: _Element): void => {
          request_Operation_result = _decode_Request_Operation_Result(_el);
        },
        'shared-ASE-information': (_el: _Element): void => {
          shared_ASE_information = _decode_Shared_ASE_Information(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_GROUP_CHANGE_ATTRIB_request,
        _extension_additions_list_spec_for_F_GROUP_CHANGE_ATTRIB_request,
        _root_component_type_list_2_spec_for_F_GROUP_CHANGE_ATTRIB_request,
        undefined
      );
      return new F_GROUP_CHANGE_ATTRIB_request /* SEQUENCE_CONSTRUCTOR_CALL */(
        attributes,
        error_action,
        request_Operation_result,
        shared_ASE_information
      );
    };
  }
  return _cached_decoder_for_F_GROUP_CHANGE_ATTRIB_request(el);
}


let _cached_encoder_for_F_GROUP_CHANGE_ATTRIB_request: $.ASN1Encoder<F_GROUP_CHANGE_ATTRIB_request> | null = null;


/**
 * @summary Encodes a(n) F_GROUP_CHANGE_ATTRIB_request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_GROUP_CHANGE_ATTRIB_request, encoded as an ASN.1 Element.
 */
export function _encode_F_GROUP_CHANGE_ATTRIB_request(
  value: F_GROUP_CHANGE_ATTRIB_request,
  elGetter: $.ASN1Encoder<F_GROUP_CHANGE_ATTRIB_request>
) {
  if (!_cached_encoder_for_F_GROUP_CHANGE_ATTRIB_request) {
    _cached_encoder_for_F_GROUP_CHANGE_ATTRIB_request = function (
      value: F_GROUP_CHANGE_ATTRIB_request    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Change_Attributes(value.attributes, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              1,
              () => _encode_Error_Action,
              $.BER
            )(value.error_action, $.BER),
            /* IF_ABSENT  */ value.request_Operation_result === undefined
              ? undefined
              : _encode_Request_Operation_Result(
                  value.request_Operation_result,
                  $.BER
                ),
            /* IF_ABSENT  */ value.shared_ASE_information === undefined
              ? undefined
              : _encode_Shared_ASE_Information(
                  value.shared_ASE_information,
                  $.BER
                ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_GROUP_CHANGE_ATTRIB_request(value, elGetter);
}


/* eslint-enable */
