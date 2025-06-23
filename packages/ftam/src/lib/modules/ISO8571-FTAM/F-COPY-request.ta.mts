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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  Destination_File_Directory,
  _decode_Destination_File_Directory,
  _encode_Destination_File_Directory,
} from '../ISO8571-FTAM/Destination-File-Directory.ta.mjs';
import {
  Override,
  create_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Override,
  _encode_Override,
} from '../ISO8571-FTAM/Override.ta.mjs';
import {
  Password,
  _decode_Password,
  _encode_Password,
} from '../ISO8571-FTAM/Password.ta.mjs';
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
import {
  Change_Attributes,
  _decode_Change_Attributes,
  _encode_Change_Attributes,
} from '../ISO8571-FTAM/Change-Attributes.ta.mjs';

/**
 * @summary F_COPY_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-COPY-request ::= SEQUENCE {
 *   destination-file-directory  Destination-File-Directory,
 *   override                    [0] IMPLICIT Override DEFAULT create-failure,
 *   -- Only the values create-failure (0)
 *   -- and delete-and-create-with-new-attributes (3) are allowed.
 *   create-password             Password OPTIONAL,
 *   access-passwords            Access-Passwords OPTIONAL,
 *   path-access-passwords       Path-Access-Passwords OPTIONAL,
 *   attributes                  Change-Attributes OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_COPY_request {
  constructor(
    /**
     * @summary `destination_file_directory`.
     * @public
     * @readonly
     */
    readonly destination_file_directory: Destination_File_Directory,
    /**
     * @summary `override`.
     * @public
     * @readonly
     */
    readonly override: OPTIONAL<Override>,
    /**
     * @summary `create_password`.
     * @public
     * @readonly
     */
    readonly create_password: OPTIONAL<Password>,
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
    readonly path_access_passwords: OPTIONAL<Path_Access_Passwords>,
    /**
     * @summary `attributes`.
     * @public
     * @readonly
     */
    readonly attributes: OPTIONAL<Change_Attributes>
  ) {}

  /**
   * @summary Restructures an object into a F_COPY_request
   * @description
   *
   * This takes an `object` and converts it to a `F_COPY_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_COPY_request`.
   * @returns {F_COPY_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_COPY_request]: F_COPY_request[_K] }
  ): F_COPY_request {
    return new F_COPY_request(
      _o.destination_file_directory,
      _o.override,
      _o.create_password,
      _o.access_passwords,
      _o.path_access_passwords,
      _o.attributes
    );
  }

  /**
   * @summary Getter that returns the default value for `override`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_override() {
    return create_failure;
  }
}


/**
 * @summary The Leading Root Component Types of F_COPY_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_COPY_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'destination-file-directory',
    false,
    $.hasTag(_TagClass.application, 24)
  ),
  new $.ComponentSpec(
    'override',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'create-password',
    true,
    $.hasTag(_TagClass.application, 17)
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
  new $.ComponentSpec(
    'attributes',
    true,
    $.hasTag(_TagClass.application, 8)
  ),
];


/**
 * @summary The Trailing Root Component Types of F_COPY_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_COPY_request: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_COPY_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_COPY_request: $.ComponentSpec[] = [];


let _cached_decoder_for_F_COPY_request: $.ASN1Decoder<F_COPY_request> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_COPY_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_COPY_request} The decoded data structure.
 */
export function _decode_F_COPY_request(el: _Element) {
  if (!_cached_decoder_for_F_COPY_request) {
    _cached_decoder_for_F_COPY_request = function (
      el: _Element
    ): F_COPY_request {
      let destination_file_directory!: Destination_File_Directory;
      let override: OPTIONAL<Override> =
        F_COPY_request._default_value_for_override;
      let create_password: OPTIONAL<Password>;
      let access_passwords: OPTIONAL<Access_Passwords>;
      let path_access_passwords: OPTIONAL<Path_Access_Passwords>;
      let attributes: OPTIONAL<Change_Attributes>;
      const callbacks: $.DecodingMap = {
        'destination-file-directory': (_el: _Element): void => {
          destination_file_directory = _decode_Destination_File_Directory(_el);
        },
        override: (_el: _Element): void => {
          override = $._decode_implicit<Override>(() => _decode_Override)(_el);
        },
        'create-password': (_el: _Element): void => {
          create_password = _decode_Password(_el);
        },
        'access-passwords': (_el: _Element): void => {
          access_passwords = _decode_Access_Passwords(_el);
        },
        'path-access-passwords': (_el: _Element): void => {
          path_access_passwords = _decode_Path_Access_Passwords(_el);
        },
        attributes: (_el: _Element): void => {
          attributes = _decode_Change_Attributes(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_COPY_request,
        _extension_additions_list_spec_for_F_COPY_request,
        _root_component_type_list_2_spec_for_F_COPY_request,
        undefined
      );
      return new F_COPY_request (
        destination_file_directory,
        override,
        create_password,
        access_passwords,
        path_access_passwords,
        attributes
      );
    };
  }
  return _cached_decoder_for_F_COPY_request(el);
}


let _cached_encoder_for_F_COPY_request: $.ASN1Encoder<F_COPY_request> | null = null;


/**
 * @summary Encodes a(n) F_COPY_request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_COPY_request, encoded as an ASN.1 Element.
 */
export function _encode_F_COPY_request(
  value: F_COPY_request,
  elGetter: $.ASN1Encoder<F_COPY_request>
) {
  if (!_cached_encoder_for_F_COPY_request) {
    _cached_encoder_for_F_COPY_request = function (
      value: F_COPY_request    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Destination_File_Directory(
              value.destination_file_directory,
              $.BER
            ),
            /* IF_DEFAULT */ value.override === undefined ||
            $.deepEq(value.override, F_COPY_request._default_value_for_override)
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () => _encode_Override,
                  $.BER
                )(value.override, $.BER),
            /* IF_ABSENT  */ value.create_password === undefined
              ? undefined
              : _encode_Password(value.create_password, $.BER),
            /* IF_ABSENT  */ value.access_passwords === undefined
              ? undefined
              : _encode_Access_Passwords(value.access_passwords, $.BER),
            /* IF_ABSENT  */ value.path_access_passwords === undefined
              ? undefined
              : _encode_Path_Access_Passwords(
                  value.path_access_passwords,
                  $.BER
                ),
            /* IF_ABSENT  */ value.attributes === undefined
              ? undefined
              : _encode_Change_Attributes(value.attributes, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_COPY_request(value, elGetter);
}


/* eslint-enable */
