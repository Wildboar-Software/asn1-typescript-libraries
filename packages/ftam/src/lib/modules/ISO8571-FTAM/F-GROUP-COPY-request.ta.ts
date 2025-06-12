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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  Destination_File_Directory,
  _decode_Destination_File_Directory,
  _encode_Destination_File_Directory,
} from '../ISO8571-FTAM/Destination-File-Directory.ta.js';
export {
  Destination_File_Directory,
  _decode_Destination_File_Directory,
  _encode_Destination_File_Directory,
} from '../ISO8571-FTAM/Destination-File-Directory.ta.js';
import {
  Override,
  Override_create_failure /* IMPORTED_LONG_NAMED_INTEGER */,
  create_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
  Override_select_old_Object /* IMPORTED_LONG_NAMED_INTEGER */,
  select_old_Object /* IMPORTED_SHORT_NAMED_INTEGER */,
  Override_delete_and_create_with_old_attributes /* IMPORTED_LONG_NAMED_INTEGER */,
  delete_and_create_with_old_attributes /* IMPORTED_SHORT_NAMED_INTEGER */,
  Override_delete_and_create_with_new_attributes /* IMPORTED_LONG_NAMED_INTEGER */,
  delete_and_create_with_new_attributes /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Override,
  _encode_Override,
} from '../ISO8571-FTAM/Override.ta.js';
export {
  Override,
  Override_create_failure /* IMPORTED_LONG_NAMED_INTEGER */,
  create_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
  Override_select_old_Object /* IMPORTED_LONG_NAMED_INTEGER */,
  select_old_Object /* IMPORTED_SHORT_NAMED_INTEGER */,
  Override_delete_and_create_with_old_attributes /* IMPORTED_LONG_NAMED_INTEGER */,
  delete_and_create_with_old_attributes /* IMPORTED_SHORT_NAMED_INTEGER */,
  Override_delete_and_create_with_new_attributes /* IMPORTED_LONG_NAMED_INTEGER */,
  delete_and_create_with_new_attributes /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Override,
  _encode_Override,
} from '../ISO8571-FTAM/Override.ta.js';
import {
  Error_Action,
  Error_Action_terminate /* IMPORTED_LONG_NAMED_INTEGER */,
  terminate /* IMPORTED_SHORT_NAMED_INTEGER */,
  Error_Action_continue_ /* IMPORTED_LONG_NAMED_INTEGER */,
  continue_ /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Error_Action,
  _encode_Error_Action,
} from '../ISO8571-FTAM/Error-Action.ta.js';
export {
  Error_Action,
  Error_Action_terminate /* IMPORTED_LONG_NAMED_INTEGER */,
  terminate /* IMPORTED_SHORT_NAMED_INTEGER */,
  Error_Action_continue_ /* IMPORTED_LONG_NAMED_INTEGER */,
  continue_ /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Error_Action,
  _encode_Error_Action,
} from '../ISO8571-FTAM/Error-Action.ta.js';
import {
  Password,
  _decode_Password,
  _encode_Password,
} from '../ISO8571-FTAM/Password.ta.js';
export {
  Password,
  _decode_Password,
  _encode_Password,
} from '../ISO8571-FTAM/Password.ta.js';
import {
  Access_Passwords,
  _decode_Access_Passwords,
  _encode_Access_Passwords,
} from '../ISO8571-FTAM/Access-Passwords.ta.js';
export {
  Access_Passwords,
  _decode_Access_Passwords,
  _encode_Access_Passwords,
} from '../ISO8571-FTAM/Access-Passwords.ta.js';
import {
  Path_Access_Passwords,
  _decode_Path_Access_Passwords,
  _encode_Path_Access_Passwords,
} from '../ISO8571-FTAM/Path-Access-Passwords.ta.js';
export {
  Path_Access_Passwords,
  _decode_Path_Access_Passwords,
  _encode_Path_Access_Passwords,
} from '../ISO8571-FTAM/Path-Access-Passwords.ta.js';
import {
  Request_Operation_Result,
  _decode_Request_Operation_Result,
  _encode_Request_Operation_Result,
} from '../ISO8571-FTAM/Request-Operation-Result.ta.js';
export {
  Request_Operation_Result,
  _decode_Request_Operation_Result,
  _encode_Request_Operation_Result,
} from '../ISO8571-FTAM/Request-Operation-Result.ta.js';
import {
  Change_Attributes,
  _decode_Change_Attributes,
  _encode_Change_Attributes,
} from '../ISO8571-FTAM/Change-Attributes.ta.js';
export {
  Change_Attributes,
  _decode_Change_Attributes,
  _encode_Change_Attributes,
} from '../ISO8571-FTAM/Change-Attributes.ta.js';

/* START_OF_SYMBOL_DEFINITION F_GROUP_COPY_request */
/**
 * @summary F_GROUP_COPY_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-GROUP-COPY-request ::= SEQUENCE {
 *   destination-file-directory  Destination-File-Directory,
 *   override                    [0] IMPLICIT Override DEFAULT create-failure,
 *   -- Only the values create-failure (0)
 *   -- and delete-and-create-with-new-attributes (3) are allowed.
 *   error-action                [1] IMPLICIT Error-Action,
 *   create-password             Password OPTIONAL,
 *   access-passwords            Access-Passwords OPTIONAL,
 *   path-access-passwords       Path-Access-Passwords OPTIONAL,
 *   request-Operation-result    Request-Operation-Result OPTIONAL,
 *   attributes                  Change-Attributes OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_GROUP_COPY_request {
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
     * @summary `error_action`.
     * @public
     * @readonly
     */
    readonly error_action: Error_Action,
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
     * @summary `request_Operation_result`.
     * @public
     * @readonly
     */
    readonly request_Operation_result: OPTIONAL<Request_Operation_Result>,
    /**
     * @summary `attributes`.
     * @public
     * @readonly
     */
    readonly attributes: OPTIONAL<Change_Attributes>
  ) {}

  /**
   * @summary Restructures an object into a F_GROUP_COPY_request
   * @description
   *
   * This takes an `object` and converts it to a `F_GROUP_COPY_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_GROUP_COPY_request`.
   * @returns {F_GROUP_COPY_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_GROUP_COPY_request]: F_GROUP_COPY_request[_K] }
  ): F_GROUP_COPY_request {
    return new F_GROUP_COPY_request(
      _o.destination_file_directory,
      _o.override,
      _o.error_action,
      _o.create_password,
      _o.access_passwords,
      _o.path_access_passwords,
      _o.request_Operation_result,
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
/* END_OF_SYMBOL_DEFINITION F_GROUP_COPY_request */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_GROUP_COPY_request */
/**
 * @summary The Leading Root Component Types of F_GROUP_COPY_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_GROUP_COPY_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'destination-file-directory',
    false,
    $.hasTag(_TagClass.application, 24),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'override',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'error-action',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'create-password',
    true,
    $.hasTag(_TagClass.application, 17),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'access-passwords',
    true,
    $.hasTag(_TagClass.application, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'path-access-passwords',
    true,
    $.hasTag(_TagClass.application, 27),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'request-Operation-result',
    true,
    $.hasTag(_TagClass.application, 31),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'attributes',
    true,
    $.hasTag(_TagClass.application, 8),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_GROUP_COPY_request */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_GROUP_COPY_request */
/**
 * @summary The Trailing Root Component Types of F_GROUP_COPY_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_GROUP_COPY_request: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_GROUP_COPY_request */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_GROUP_COPY_request */
/**
 * @summary The Extension Addition Component Types of F_GROUP_COPY_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_GROUP_COPY_request: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_GROUP_COPY_request */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_F_GROUP_COPY_request */
let _cached_decoder_for_F_GROUP_COPY_request: $.ASN1Decoder<F_GROUP_COPY_request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_F_GROUP_COPY_request */

/* START_OF_SYMBOL_DEFINITION _decode_F_GROUP_COPY_request */
/**
 * @summary Decodes an ASN.1 element into a(n) F_GROUP_COPY_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_GROUP_COPY_request} The decoded data structure.
 */
export function _decode_F_GROUP_COPY_request(el: _Element) {
  if (!_cached_decoder_for_F_GROUP_COPY_request) {
    _cached_decoder_for_F_GROUP_COPY_request = function (
      el: _Element
    ): F_GROUP_COPY_request {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let destination_file_directory!: Destination_File_Directory;
      let override: OPTIONAL<Override> =
        F_GROUP_COPY_request._default_value_for_override;
      let error_action!: Error_Action;
      let create_password: OPTIONAL<Password>;
      let access_passwords: OPTIONAL<Access_Passwords>;
      let path_access_passwords: OPTIONAL<Path_Access_Passwords>;
      let request_Operation_result: OPTIONAL<Request_Operation_Result>;
      let attributes: OPTIONAL<Change_Attributes>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'destination-file-directory': (_el: _Element): void => {
          destination_file_directory = _decode_Destination_File_Directory(_el);
        },
        override: (_el: _Element): void => {
          override = $._decode_implicit<Override>(() => _decode_Override)(_el);
        },
        'error-action': (_el: _Element): void => {
          error_action = $._decode_implicit<Error_Action>(
            () => _decode_Error_Action
          )(_el);
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
        'request-Operation-result': (_el: _Element): void => {
          request_Operation_result = _decode_Request_Operation_Result(_el);
        },
        attributes: (_el: _Element): void => {
          attributes = _decode_Change_Attributes(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_GROUP_COPY_request,
        _extension_additions_list_spec_for_F_GROUP_COPY_request,
        _root_component_type_list_2_spec_for_F_GROUP_COPY_request,
        undefined
      );
      return new F_GROUP_COPY_request /* SEQUENCE_CONSTRUCTOR_CALL */(
        destination_file_directory,
        override,
        error_action,
        create_password,
        access_passwords,
        path_access_passwords,
        request_Operation_result,
        attributes
      );
    };
  }
  return _cached_decoder_for_F_GROUP_COPY_request(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_F_GROUP_COPY_request */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_F_GROUP_COPY_request */
let _cached_encoder_for_F_GROUP_COPY_request: $.ASN1Encoder<F_GROUP_COPY_request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_F_GROUP_COPY_request */

/* START_OF_SYMBOL_DEFINITION _encode_F_GROUP_COPY_request */
/**
 * @summary Encodes a(n) F_GROUP_COPY_request into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_GROUP_COPY_request, encoded as an ASN.1 Element.
 */
export function _encode_F_GROUP_COPY_request(
  value: F_GROUP_COPY_request,
  elGetter: $.ASN1Encoder<F_GROUP_COPY_request>
) {
  if (!_cached_encoder_for_F_GROUP_COPY_request) {
    _cached_encoder_for_F_GROUP_COPY_request = function (
      value: F_GROUP_COPY_request,
      elGetter: $.ASN1Encoder<F_GROUP_COPY_request>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Destination_File_Directory(
              value.destination_file_directory,
              $.BER
            ),
            /* IF_DEFAULT */ value.override === undefined ||
            $.deepEq(
              value.override,
              F_GROUP_COPY_request._default_value_for_override
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () => _encode_Override,
                  $.BER
                )(value.override, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              1,
              () => _encode_Error_Action,
              $.BER
            )(value.error_action, $.BER),
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
            /* IF_ABSENT  */ value.request_Operation_result === undefined
              ? undefined
              : _encode_Request_Operation_Result(
                  value.request_Operation_result,
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
  return _cached_encoder_for_F_GROUP_COPY_request(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_F_GROUP_COPY_request */

/* eslint-enable */
