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
  Shared_ASE_Information,
  _decode_Shared_ASE_Information,
  _encode_Shared_ASE_Information,
} from '../ISO8571-FTAM/Shared-ASE-Information.ta.mjs';
import {
  Request_Type,
  _decode_Request_Type,
  _encode_Request_Type,
} from '../ISO8571-FTAM/Request-Type.ta.mjs';

/**
 * @summary F_TRANSFER_END_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-TRANSFER-END-request ::= SEQUENCE {
 *   shared-ASE-information            Shared-ASE-Information OPTIONAL,
 *   -- The following are conditional on the negotiation of consecutive or concurrent access.
 *   request-type                      Request-Type OPTIONAL,
 *   transfer-number                   [0] IMPLICIT INTEGER OPTIONAL,
 *   last-transfer-end-read-response   [1] IMPLICIT INTEGER OPTIONAL,
 *   last-transfer-end-write-response  [2] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_TRANSFER_END_request {
  constructor(
    /**
     * @summary `shared_ASE_information`.
     * @public
     * @readonly
     */
    readonly shared_ASE_information: OPTIONAL<Shared_ASE_Information>,
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
     * @summary `last_transfer_end_read_response`.
     * @public
     * @readonly
     */
    readonly last_transfer_end_read_response: OPTIONAL<INTEGER>,
    /**
     * @summary `last_transfer_end_write_response`.
     * @public
     * @readonly
     */
    readonly last_transfer_end_write_response: OPTIONAL<INTEGER>
  ) {}

  /**
   * @summary Restructures an object into a F_TRANSFER_END_request
   * @description
   *
   * This takes an `object` and converts it to a `F_TRANSFER_END_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_TRANSFER_END_request`.
   * @returns {F_TRANSFER_END_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_TRANSFER_END_request]: F_TRANSFER_END_request[_K] }
  ): F_TRANSFER_END_request {
    return new F_TRANSFER_END_request(
      _o.shared_ASE_information,
      _o.request_type,
      _o.transfer_number,
      _o.last_transfer_end_read_response,
      _o.last_transfer_end_write_response
    );
  }
}


/**
 * @summary The Leading Root Component Types of F_TRANSFER_END_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_TRANSFER_END_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'shared-ASE-information',
    true,
    $.hasTag(_TagClass.application, 20)
  ),
  new $.ComponentSpec(
    'request-type',
    true,
    $.hasTag(_TagClass.application, 31)
  ),
  new $.ComponentSpec(
    'transfer-number',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'last-transfer-end-read-response',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'last-transfer-end-write-response',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of F_TRANSFER_END_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_TRANSFER_END_request: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_TRANSFER_END_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_TRANSFER_END_request: $.ComponentSpec[] = [];


let _cached_decoder_for_F_TRANSFER_END_request: $.ASN1Decoder<F_TRANSFER_END_request> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_TRANSFER_END_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_TRANSFER_END_request} The decoded data structure.
 */
export function _decode_F_TRANSFER_END_request(el: _Element) {
  if (!_cached_decoder_for_F_TRANSFER_END_request) {
    _cached_decoder_for_F_TRANSFER_END_request = function (
      el: _Element
    ): F_TRANSFER_END_request {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let shared_ASE_information: OPTIONAL<Shared_ASE_Information>;
      let request_type: OPTIONAL<Request_Type>;
      let transfer_number: OPTIONAL<INTEGER>;
      let last_transfer_end_read_response: OPTIONAL<INTEGER>;
      let last_transfer_end_write_response: OPTIONAL<INTEGER>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'shared-ASE-information': (_el: _Element): void => {
          shared_ASE_information = _decode_Shared_ASE_Information(_el);
        },
        'request-type': (_el: _Element): void => {
          request_type = _decode_Request_Type(_el);
        },
        'transfer-number': (_el: _Element): void => {
          transfer_number = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
            _el
          );
        },
        'last-transfer-end-read-response': (_el: _Element): void => {
          last_transfer_end_read_response = $._decode_implicit<INTEGER>(
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
        _root_component_type_list_1_spec_for_F_TRANSFER_END_request,
        _extension_additions_list_spec_for_F_TRANSFER_END_request,
        _root_component_type_list_2_spec_for_F_TRANSFER_END_request,
        undefined
      );
      return new F_TRANSFER_END_request /* SEQUENCE_CONSTRUCTOR_CALL */(
        shared_ASE_information,
        request_type,
        transfer_number,
        last_transfer_end_read_response,
        last_transfer_end_write_response
      );
    };
  }
  return _cached_decoder_for_F_TRANSFER_END_request(el);
}


let _cached_encoder_for_F_TRANSFER_END_request: $.ASN1Encoder<F_TRANSFER_END_request> | null = null;


/**
 * @summary Encodes a(n) F_TRANSFER_END_request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_TRANSFER_END_request, encoded as an ASN.1 Element.
 */
export function _encode_F_TRANSFER_END_request(
  value: F_TRANSFER_END_request,
  elGetter: $.ASN1Encoder<F_TRANSFER_END_request>
) {
  if (!_cached_encoder_for_F_TRANSFER_END_request) {
    _cached_encoder_for_F_TRANSFER_END_request = function (
      value: F_TRANSFER_END_request    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.shared_ASE_information === undefined
              ? undefined
              : _encode_Shared_ASE_Information(
                  value.shared_ASE_information,
                  $.BER
                ),
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
            /* IF_ABSENT  */ value.last_transfer_end_read_response === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  1,
                  () => $._encodeInteger,
                  $.BER
                )(value.last_transfer_end_read_response, $.BER),
            /* IF_ABSENT  */ value.last_transfer_end_write_response ===
            undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => $._encodeInteger,
                  $.BER
                )(value.last_transfer_end_write_response, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_TRANSFER_END_request(value, elGetter);
}


/* eslint-enable */
