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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  Request_Type,
  _decode_Request_Type,
  _encode_Request_Type,
} from '../ISO8571-FTAM/Request-Type.ta.mjs';

/**
 * @summary F_RESTART_response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-RESTART-response ::= SEQUENCE {
 *   checkpoint-identifier             [0] IMPLICIT INTEGER,
 *   -- The following are conditional on the negotiation of consecutive or concurrent access.
 *   request-type                      Request-Type OPTIONAL,
 *   transfer-number                   [1] IMPLICIT INTEGER,
 *   last-transfer-end-read-request    [2] IMPLICIT INTEGER OPTIONAL,
 *   last-transfer-end-read-response   [3] IMPLICIT INTEGER OPTIONAL,
 *   last-transfer-end-write-request   [4] IMPLICIT INTEGER OPTIONAL,
 *   last-transfer-end-write-response  [5] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_RESTART_response {
  constructor(
    /**
     * @summary `checkpoint_identifier`.
     * @public
     * @readonly
     */
    readonly checkpoint_identifier: INTEGER,
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
    readonly transfer_number: INTEGER,
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
   * @summary Restructures an object into a F_RESTART_response
   * @description
   *
   * This takes an `object` and converts it to a `F_RESTART_response`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_RESTART_response`.
   * @returns {F_RESTART_response}
   */
  public static _from_object(
    _o: { [_K in keyof F_RESTART_response]: F_RESTART_response[_K] }
  ): F_RESTART_response {
    return new F_RESTART_response(
      _o.checkpoint_identifier,
      _o.request_type,
      _o.transfer_number,
      _o.last_transfer_end_read_request,
      _o.last_transfer_end_read_response,
      _o.last_transfer_end_write_request,
      _o.last_transfer_end_write_response
    );
  }
}


/**
 * @summary The Leading Root Component Types of F_RESTART_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_RESTART_response: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'checkpoint-identifier',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'request-type',
    true,
    $.hasTag(_TagClass.application, 31)
  ),
  new $.ComponentSpec(
    'transfer-number',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'last-transfer-end-read-request',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'last-transfer-end-read-response',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'last-transfer-end-write-request',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'last-transfer-end-write-response',
    true,
    $.hasTag(_TagClass.context, 5)
  ),
];


/**
 * @summary The Trailing Root Component Types of F_RESTART_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_RESTART_response: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_RESTART_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_RESTART_response: $.ComponentSpec[] = [];


let _cached_decoder_for_F_RESTART_response: $.ASN1Decoder<F_RESTART_response> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_RESTART_response
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_RESTART_response} The decoded data structure.
 */
export function _decode_F_RESTART_response(el: _Element): F_RESTART_response {
  if (!_cached_decoder_for_F_RESTART_response) {
    _cached_decoder_for_F_RESTART_response = function (
      el: _Element
    ): F_RESTART_response {
      let checkpoint_identifier!: INTEGER;
      let request_type: OPTIONAL<Request_Type>;
      let transfer_number!: INTEGER;
      let last_transfer_end_read_request: OPTIONAL<INTEGER>;
      let last_transfer_end_read_response: OPTIONAL<INTEGER>;
      let last_transfer_end_write_request: OPTIONAL<INTEGER>;
      let last_transfer_end_write_response: OPTIONAL<INTEGER>;
      const callbacks: $.DecodingMap = {
        'checkpoint-identifier': (_el: _Element): void => {
          checkpoint_identifier = $._decode_implicit<INTEGER>(
            () => $._decodeInteger
          )(_el);
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
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_RESTART_response,
        _extension_additions_list_spec_for_F_RESTART_response,
        _root_component_type_list_2_spec_for_F_RESTART_response,
        undefined
      );
      return new F_RESTART_response (
        checkpoint_identifier,
        request_type,
        transfer_number,
        last_transfer_end_read_request,
        last_transfer_end_read_response,
        last_transfer_end_write_request,
        last_transfer_end_write_response
      );
    };
  }
  return _cached_decoder_for_F_RESTART_response(el);
}


let _cached_encoder_for_F_RESTART_response: $.ASN1Encoder<F_RESTART_response> | null = null;


/**
 * @summary Encodes a(n) F_RESTART_response into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_RESTART_response, encoded as an ASN.1 Element.
 */
export function _encode_F_RESTART_response(
  value: F_RESTART_response,
  elGetter: $.ASN1Encoder<F_RESTART_response>
): _Element {
  if (!_cached_encoder_for_F_RESTART_response) {
    _cached_encoder_for_F_RESTART_response = function (
      value: F_RESTART_response    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => $._encodeInteger,
              $.BER
            )(value.checkpoint_identifier, $.BER),
            /* IF_ABSENT  */ value.request_type === undefined
              ? undefined
              : _encode_Request_Type(value.request_type, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              1,
              () => $._encodeInteger,
              $.BER
            )(value.transfer_number, $.BER),
            /* IF_ABSENT  */ value.last_transfer_end_read_request === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => $._encodeInteger,
                  $.BER
                )(value.last_transfer_end_read_request, $.BER),
            /* IF_ABSENT  */ value.last_transfer_end_read_response === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  3,
                  () => $._encodeInteger,
                  $.BER
                )(value.last_transfer_end_read_response, $.BER),
            /* IF_ABSENT  */ value.last_transfer_end_write_request === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  4,
                  () => $._encodeInteger,
                  $.BER
                )(value.last_transfer_end_write_request, $.BER),
            /* IF_ABSENT  */ value.last_transfer_end_write_response ===
            undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  5,
                  () => $._encodeInteger,
                  $.BER
                )(value.last_transfer_end_write_response, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_RESTART_response(value, elGetter);
}


/* eslint-enable */
