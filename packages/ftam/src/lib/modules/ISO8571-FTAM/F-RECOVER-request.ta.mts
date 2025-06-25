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
  Activity_Identifier,
  _decode_Activity_Identifier,
  _encode_Activity_Identifier,
} from '../ISO8571-FTAM/Activity-Identifier.ta.mjs';
import {
  Access_Request,
  _decode_Access_Request,
  _encode_Access_Request,
} from '../ISO8571-FTAM/Access-Request.ta.mjs';
import {
  Access_Passwords,
  _decode_Access_Passwords,
  _encode_Access_Passwords,
} from '../ISO8571-FTAM/Access-Passwords.ta.mjs';
import {
  Abstract_Syntax_Name,
  _decode_Abstract_Syntax_Name,
  _encode_Abstract_Syntax_Name,
} from '../ISO8571-FTAM/Abstract-Syntax-Name.ta.mjs';

/**
 * @summary F_RECOVER_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-RECOVER-request ::= SEQUENCE {
 *   activity-identifier               Activity-Identifier,
 *   bulk-transfer-number              [0] IMPLICIT INTEGER,
 *   -- If concurrent access was in use then this parameter indicates the read bulk
 *   -- transfer.
 *   requested-access                  Access-Request,
 *   access-passwords                  Access-Passwords OPTIONAL,
 *   recovefy-Point                    [2] IMPLICIT INTEGER DEFAULT 0,
 *   -- Zero indicates beginning of file
 *   -- Point after last Checkpoint indicates end of file
 *   remove-contexts
 *     [3] IMPLICIT SET OF Abstract-Syntax-Name OPTIONAL,
 *   define-contexts
 *     [4] IMPLICIT SET OF Abstract-Syntax-Name OPTIONAL,
 *   -- The following are conditional on the negotiation of overlapped access.
 *   concurrent-bulk-transfer-number   [7] IMPLICIT INTEGER OPTIONAL,
 *   -- conditional on use of concurrent access
 *   concurrent-recovery-point         [8] IMPLICIT INTEGER OPTIONAL,
 *   -- conditional on use of concurrent access. Zero indicates beginning of file
 *   -- point after last checkpoint indicates end of file
 *   last-transfer-end-read-response   [9] IMPLICIT INTEGER OPTIONAL,
 *   last-transfer-end-write-response  [10] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_RECOVER_request {
  constructor(
    /**
     * @summary `activity_identifier`.
     * @public
     * @readonly
     */
    readonly activity_identifier: Activity_Identifier,
    /**
     * @summary `bulk_transfer_number`.
     * @public
     * @readonly
     */
    readonly bulk_transfer_number: INTEGER,
    /**
     * @summary `requested_access`.
     * @public
     * @readonly
     */
    readonly requested_access: Access_Request,
    /**
     * @summary `access_passwords`.
     * @public
     * @readonly
     */
    readonly access_passwords: OPTIONAL<Access_Passwords>,
    /**
     * @summary `recovefy_Point`.
     * @public
     * @readonly
     */
    readonly recovefy_Point: OPTIONAL<INTEGER>,
    /**
     * @summary `remove_contexts`.
     * @public
     * @readonly
     */
    readonly remove_contexts: OPTIONAL<Abstract_Syntax_Name[]>,
    /**
     * @summary `define_contexts`.
     * @public
     * @readonly
     */
    readonly define_contexts: OPTIONAL<Abstract_Syntax_Name[]>,
    /**
     * @summary `concurrent_bulk_transfer_number`.
     * @public
     * @readonly
     */
    readonly concurrent_bulk_transfer_number: OPTIONAL<INTEGER>,
    /**
     * @summary `concurrent_recovery_point`.
     * @public
     * @readonly
     */
    readonly concurrent_recovery_point: OPTIONAL<INTEGER>,
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
   * @summary Restructures an object into a F_RECOVER_request
   * @description
   *
   * This takes an `object` and converts it to a `F_RECOVER_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_RECOVER_request`.
   * @returns {F_RECOVER_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_RECOVER_request]: F_RECOVER_request[_K] }
  ): F_RECOVER_request {
    return new F_RECOVER_request(
      _o.activity_identifier,
      _o.bulk_transfer_number,
      _o.requested_access,
      _o.access_passwords,
      _o.recovefy_Point,
      _o.remove_contexts,
      _o.define_contexts,
      _o.concurrent_bulk_transfer_number,
      _o.concurrent_recovery_point,
      _o.last_transfer_end_read_response,
      _o.last_transfer_end_write_response
    );
  }

  /**
   * @summary Getter that returns the default value for `recovefy_Point`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_recovefy_Point() {
    return 0;
  }
}


/**
 * @summary The Leading Root Component Types of F_RECOVER_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_RECOVER_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'activity-identifier',
    false,
    $.hasTag(_TagClass.application, 6)
  ),
  new $.ComponentSpec(
    'bulk-transfer-number',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'requested-access',
    false,
    $.hasTag(_TagClass.application, 3)
  ),
  new $.ComponentSpec(
    'access-passwords',
    true,
    $.hasTag(_TagClass.application, 2)
  ),
  new $.ComponentSpec(
    'recovefy-Point',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'remove-contexts',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'define-contexts',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'concurrent-bulk-transfer-number',
    true,
    $.hasTag(_TagClass.context, 7)
  ),
  new $.ComponentSpec(
    'concurrent-recovery-point',
    true,
    $.hasTag(_TagClass.context, 8)
  ),
  new $.ComponentSpec(
    'last-transfer-end-read-response',
    true,
    $.hasTag(_TagClass.context, 9)
  ),
  new $.ComponentSpec(
    'last-transfer-end-write-response',
    true,
    $.hasTag(_TagClass.context, 10)
  ),
];


/**
 * @summary The Trailing Root Component Types of F_RECOVER_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_RECOVER_request: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_RECOVER_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_RECOVER_request: $.ComponentSpec[] = [];


let _cached_decoder_for_F_RECOVER_request: $.ASN1Decoder<F_RECOVER_request> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_RECOVER_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_RECOVER_request} The decoded data structure.
 */
export function _decode_F_RECOVER_request(el: _Element): F_RECOVER_request {
  if (!_cached_decoder_for_F_RECOVER_request) {
    _cached_decoder_for_F_RECOVER_request = function (
      el: _Element
    ): F_RECOVER_request {
      let activity_identifier!: Activity_Identifier;
      let bulk_transfer_number!: INTEGER;
      let requested_access!: Access_Request;
      let access_passwords: OPTIONAL<Access_Passwords>;
      let recovefy_Point: OPTIONAL<INTEGER> =
        F_RECOVER_request._default_value_for_recovefy_Point;
      let remove_contexts: OPTIONAL<Abstract_Syntax_Name[]>;
      let define_contexts: OPTIONAL<Abstract_Syntax_Name[]>;
      let concurrent_bulk_transfer_number: OPTIONAL<INTEGER>;
      let concurrent_recovery_point: OPTIONAL<INTEGER>;
      let last_transfer_end_read_response: OPTIONAL<INTEGER>;
      let last_transfer_end_write_response: OPTIONAL<INTEGER>;
      const callbacks: $.DecodingMap = {
        'activity-identifier': (_el: _Element): void => {
          activity_identifier = _decode_Activity_Identifier(_el);
        },
        'bulk-transfer-number': (_el: _Element): void => {
          bulk_transfer_number = $._decode_implicit<INTEGER>(
            () => $._decodeInteger
          )(_el);
        },
        'requested-access': (_el: _Element): void => {
          requested_access = _decode_Access_Request(_el);
        },
        'access-passwords': (_el: _Element): void => {
          access_passwords = _decode_Access_Passwords(_el);
        },
        'recovefy-Point': (_el: _Element): void => {
          recovefy_Point = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
            _el
          );
        },
        'remove-contexts': (_el: _Element): void => {
          remove_contexts = $._decode_implicit<Abstract_Syntax_Name[]>(() =>
            $._decodeSetOf<Abstract_Syntax_Name>(
              () => _decode_Abstract_Syntax_Name
            )
          )(_el);
        },
        'define-contexts': (_el: _Element): void => {
          define_contexts = $._decode_implicit<Abstract_Syntax_Name[]>(() =>
            $._decodeSetOf<Abstract_Syntax_Name>(
              () => _decode_Abstract_Syntax_Name
            )
          )(_el);
        },
        'concurrent-bulk-transfer-number': (_el: _Element): void => {
          concurrent_bulk_transfer_number = $._decode_implicit<INTEGER>(
            () => $._decodeInteger
          )(_el);
        },
        'concurrent-recovery-point': (_el: _Element): void => {
          concurrent_recovery_point = $._decode_implicit<INTEGER>(
            () => $._decodeInteger
          )(_el);
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
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_RECOVER_request,
        _extension_additions_list_spec_for_F_RECOVER_request,
        _root_component_type_list_2_spec_for_F_RECOVER_request,
        undefined
      );
      return new F_RECOVER_request (
        activity_identifier,
        bulk_transfer_number,
        requested_access,
        access_passwords,
        recovefy_Point,
        remove_contexts,
        define_contexts,
        concurrent_bulk_transfer_number,
        concurrent_recovery_point,
        last_transfer_end_read_response,
        last_transfer_end_write_response
      );
    };
  }
  return _cached_decoder_for_F_RECOVER_request(el);
}


let _cached_encoder_for_F_RECOVER_request: $.ASN1Encoder<F_RECOVER_request> | null = null;


/**
 * @summary Encodes a(n) F_RECOVER_request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_RECOVER_request, encoded as an ASN.1 Element.
 */
export function _encode_F_RECOVER_request(
  value: F_RECOVER_request,
  elGetter: $.ASN1Encoder<F_RECOVER_request>
): _Element {
  if (!_cached_encoder_for_F_RECOVER_request) {
    _cached_encoder_for_F_RECOVER_request = function (
      value: F_RECOVER_request    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Activity_Identifier(
              value.activity_identifier,
              $.BER
            ),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => $._encodeInteger,
              $.BER
            )(value.bulk_transfer_number, $.BER),
            /* REQUIRED   */ _encode_Access_Request(
              value.requested_access,
              $.BER
            ),
            /* IF_ABSENT  */ value.access_passwords === undefined
              ? undefined
              : _encode_Access_Passwords(value.access_passwords, $.BER),
            /* IF_DEFAULT */ value.recovefy_Point === undefined ||
            $.deepEq(
              value.recovefy_Point,
              F_RECOVER_request._default_value_for_recovefy_Point
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => $._encodeInteger,
                  $.BER
                )(value.recovefy_Point, $.BER),
            /* IF_ABSENT  */ value.remove_contexts === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  3,
                  () =>
                    $._encodeSetOf<Abstract_Syntax_Name>(
                      () => _encode_Abstract_Syntax_Name,
                      $.BER
                    ),
                  $.BER
                )(value.remove_contexts, $.BER),
            /* IF_ABSENT  */ value.define_contexts === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  4,
                  () =>
                    $._encodeSetOf<Abstract_Syntax_Name>(
                      () => _encode_Abstract_Syntax_Name,
                      $.BER
                    ),
                  $.BER
                )(value.define_contexts, $.BER),
            /* IF_ABSENT  */ value.concurrent_bulk_transfer_number === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  7,
                  () => $._encodeInteger,
                  $.BER
                )(value.concurrent_bulk_transfer_number, $.BER),
            /* IF_ABSENT  */ value.concurrent_recovery_point === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  8,
                  () => $._encodeInteger,
                  $.BER
                )(value.concurrent_recovery_point, $.BER),
            /* IF_ABSENT  */ value.last_transfer_end_read_response === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  9,
                  () => $._encodeInteger,
                  $.BER
                )(value.last_transfer_end_read_response, $.BER),
            /* IF_ABSENT  */ value.last_transfer_end_write_response ===
            undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  10,
                  () => $._encodeInteger,
                  $.BER
                )(value.last_transfer_end_write_response, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_RECOVER_request(value, elGetter);
}


/* eslint-enable */
