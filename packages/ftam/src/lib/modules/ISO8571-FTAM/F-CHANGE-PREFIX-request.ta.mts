/* eslint-disable */
import {
  OPTIONAL,
  BOOLEAN,
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
  Destination_File_Directory,
  _decode_Destination_File_Directory,
  _encode_Destination_File_Directory,
} from '../ISO8571-FTAM/Destination-File-Directory.ta.mjs';
import {
  Access_Passwords,
  _decode_Access_Passwords,
  _encode_Access_Passwords,
} from '../ISO8571-FTAM/Access-Passwords.ta.mjs';
import {
  Path_Access_Passwords,
  _decode_Path_Access_Passwords,
  _encode_Path_Access_Passwords,
} from '../ISO8571-FTAM/Path-Access-Passwords.ta.mjs';

/**
 * @summary F_CHANGE_PREFIX_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-CHANGE-PREFIX-request ::= SEQUENCE {
 *   reset                       [0] IMPLICIT BOOLEAN DEFAULT FALSE,
 *   destination-file-directory  Destination-File-Directory,
 *   access-passwords            Access-Passwords OPTIONAL,
 *   path-access-passwords       Path-Access-Passwords OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_CHANGE_PREFIX_request {
  constructor(
    /**
     * @summary `reset`.
     * @public
     * @readonly
     */
    readonly reset: OPTIONAL<BOOLEAN>,
    /**
     * @summary `destination_file_directory`.
     * @public
     * @readonly
     */
    readonly destination_file_directory: Destination_File_Directory,
    /**
     * @summary `access_passwords`.
     * @public
     * @readonly
     */
    readonly access_passwords: OPTIONAL<Access_Passwords>,
    /**
     * @summary `path_access_passwords`.
     * @public
     * @readonly
     */
    readonly path_access_passwords: OPTIONAL<Path_Access_Passwords>
  ) {}

  /**
   * @summary Restructures an object into a F_CHANGE_PREFIX_request
   * @description
   *
   * This takes an `object` and converts it to a `F_CHANGE_PREFIX_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_CHANGE_PREFIX_request`.
   * @returns {F_CHANGE_PREFIX_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_CHANGE_PREFIX_request]: F_CHANGE_PREFIX_request[_K] }
  ): F_CHANGE_PREFIX_request {
    return new F_CHANGE_PREFIX_request(
      _o.reset,
      _o.destination_file_directory,
      _o.access_passwords,
      _o.path_access_passwords
    );
  }

  /**
   * @summary Getter that returns the default value for `reset`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_reset(): BOOLEAN {
    return false;
  }
}


/**
 * @summary The Leading Root Component Types of F_CHANGE_PREFIX_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_CHANGE_PREFIX_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'reset',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'destination-file-directory',
    false,
    $.hasTag(_TagClass.application, 24)
  ),
  new $.ComponentSpec(
    'access-passwords',
    true,
    $.hasTag(_TagClass.application, 2)
  ),
  new $.ComponentSpec(
    'path-access-passwords',
    true,
    $.hasTag(_TagClass.application, 27)
  ),
];


/**
 * @summary The Trailing Root Component Types of F_CHANGE_PREFIX_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_CHANGE_PREFIX_request: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_CHANGE_PREFIX_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_CHANGE_PREFIX_request: $.ComponentSpec[] = [];


let _cached_decoder_for_F_CHANGE_PREFIX_request: $.ASN1Decoder<F_CHANGE_PREFIX_request> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_CHANGE_PREFIX_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_CHANGE_PREFIX_request} The decoded data structure.
 */
export function _decode_F_CHANGE_PREFIX_request(el: _Element): F_CHANGE_PREFIX_request {
  if (!_cached_decoder_for_F_CHANGE_PREFIX_request) {
    _cached_decoder_for_F_CHANGE_PREFIX_request = function (
      el: _Element
    ): F_CHANGE_PREFIX_request {
      let reset: OPTIONAL<BOOLEAN> =
        F_CHANGE_PREFIX_request._default_value_for_reset;
      let destination_file_directory!: Destination_File_Directory;
      let access_passwords: OPTIONAL<Access_Passwords>;
      let path_access_passwords: OPTIONAL<Path_Access_Passwords>;
      const callbacks: $.DecodingMap = {
        reset: (_el: _Element): void => {
          reset = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el);
        },
        'destination-file-directory': (_el: _Element): void => {
          destination_file_directory = _decode_Destination_File_Directory(_el);
        },
        'access-passwords': (_el: _Element): void => {
          access_passwords = _decode_Access_Passwords(_el);
        },
        'path-access-passwords': (_el: _Element): void => {
          path_access_passwords = _decode_Path_Access_Passwords(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_CHANGE_PREFIX_request,
        _extension_additions_list_spec_for_F_CHANGE_PREFIX_request,
        _root_component_type_list_2_spec_for_F_CHANGE_PREFIX_request,
        undefined
      );
      return new F_CHANGE_PREFIX_request (
        reset,
        destination_file_directory,
        access_passwords,
        path_access_passwords
      );
    };
  }
  return _cached_decoder_for_F_CHANGE_PREFIX_request(el);
}


let _cached_encoder_for_F_CHANGE_PREFIX_request: $.ASN1Encoder<F_CHANGE_PREFIX_request> | null = null;


/**
 * @summary Encodes a(n) F_CHANGE_PREFIX_request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_CHANGE_PREFIX_request, encoded as an ASN.1 Element.
 */
export function _encode_F_CHANGE_PREFIX_request(
  value: F_CHANGE_PREFIX_request,
  elGetter: $.ASN1Encoder<F_CHANGE_PREFIX_request>
): _Element {
  if (!_cached_encoder_for_F_CHANGE_PREFIX_request) {
    _cached_encoder_for_F_CHANGE_PREFIX_request = function (
      value: F_CHANGE_PREFIX_request    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.reset === undefined ||
            $.deepEq(
              value.reset,
              F_CHANGE_PREFIX_request._default_value_for_reset
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () => $._encodeBoolean,
                  $.BER
                )(value.reset, $.BER),
            /* REQUIRED   */ _encode_Destination_File_Directory(
              value.destination_file_directory,
              $.BER
            ),
            /* IF_ABSENT  */ value.access_passwords === undefined
              ? undefined
              : _encode_Access_Passwords(value.access_passwords, $.BER),
            /* IF_ABSENT  */ value.path_access_passwords === undefined
              ? undefined
              : _encode_Path_Access_Passwords(
                  value.path_access_passwords,
                  $.BER
                ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_CHANGE_PREFIX_request(value, elGetter);
}


/* eslint-enable */
