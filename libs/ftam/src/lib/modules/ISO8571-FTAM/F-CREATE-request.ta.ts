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
} from '../ISO8571-FTAM/Override.ta';
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
} from '../ISO8571-FTAM/Override.ta';
import {
  Create_Attributes,
  _decode_Create_Attributes,
  _encode_Create_Attributes,
} from '../ISO8571-FTAM/Create-Attributes.ta';
export {
  Create_Attributes,
  _decode_Create_Attributes,
  _encode_Create_Attributes,
} from '../ISO8571-FTAM/Create-Attributes.ta';
import {
  Password,
  _decode_Password,
  _encode_Password,
} from '../ISO8571-FTAM/Password.ta';
export {
  Password,
  _decode_Password,
  _encode_Password,
} from '../ISO8571-FTAM/Password.ta';
import {
  Access_Request,
  _decode_Access_Request,
  _encode_Access_Request,
} from '../ISO8571-FTAM/Access-Request.ta';
export {
  Access_Request,
  _decode_Access_Request,
  _encode_Access_Request,
} from '../ISO8571-FTAM/Access-Request.ta';
import {
  Access_Passwords,
  _decode_Access_Passwords,
  _encode_Access_Passwords,
} from '../ISO8571-FTAM/Access-Passwords.ta';
export {
  Access_Passwords,
  _decode_Access_Passwords,
  _encode_Access_Passwords,
} from '../ISO8571-FTAM/Access-Passwords.ta';
import {
  Path_Access_Passwords,
  _decode_Path_Access_Passwords,
  _encode_Path_Access_Passwords,
} from '../ISO8571-FTAM/Path-Access-Passwords.ta';
export {
  Path_Access_Passwords,
  _decode_Path_Access_Passwords,
  _encode_Path_Access_Passwords,
} from '../ISO8571-FTAM/Path-Access-Passwords.ta';
import {
  Concurrency_Control,
  _decode_Concurrency_Control,
  _encode_Concurrency_Control,
} from '../ISO8571-FTAM/Concurrency-Control.ta';
export {
  Concurrency_Control,
  _decode_Concurrency_Control,
  _encode_Concurrency_Control,
} from '../ISO8571-FTAM/Concurrency-Control.ta';
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
  Account,
  _decode_Account,
  _encode_Account,
} from '../ISO8571-FTAM/Account.ta';
export {
  Account,
  _decode_Account,
  _encode_Account,
} from '../ISO8571-FTAM/Account.ta';

/* START_OF_SYMBOL_DEFINITION F_CREATE_request */
/**
 * @summary F_CREATE_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-CREATE-request ::= SEQUENCE {
 *   override                [0] IMPLICIT Override DEFAULT create-failure,
 *   initial-attributes      Create-Attributes,
 *   create-password         Password OPTIONAL,
 *   requested-access        Access-Request,
 *   access-passwords        Access-Passwords OPTIONAL,
 *   path-access-passwords   Path-Access-Passwords OPTIONAL,
 *   -- This Parameter tan only be sent when the
 *   -- limited-filestore-management or the Object-manipulation or
 *   -- the group-manipulation functional units are available.
 *   concurrency-control     Concurrency-Control OPTIONAL,
 *   shared-ASE-information  Shared-ASE-Information OPTIONAL,
 *   account                 Account OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_CREATE_request {
  constructor(
    /**
     * @summary `override`.
     * @public
     * @readonly
     */
    readonly override: OPTIONAL<Override>,
    /**
     * @summary `initial_attributes`.
     * @public
     * @readonly
     */
    readonly initial_attributes: Create_Attributes,
    /**
     * @summary `create_password`.
     * @public
     * @readonly
     */
    readonly create_password: OPTIONAL<Password>,
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
     * @summary `path_access_passwords`.
     * @public
     * @readonly
     */
    readonly path_access_passwords: OPTIONAL<Path_Access_Passwords>,
    /**
     * @summary `concurrency_control`.
     * @public
     * @readonly
     */
    readonly concurrency_control: OPTIONAL<Concurrency_Control>,
    /**
     * @summary `shared_ASE_information`.
     * @public
     * @readonly
     */
    readonly shared_ASE_information: OPTIONAL<Shared_ASE_Information>,
    /**
     * @summary `account`.
     * @public
     * @readonly
     */
    readonly account: OPTIONAL<Account>
  ) {}

  /**
   * @summary Restructures an object into a F_CREATE_request
   * @description
   *
   * This takes an `object` and converts it to a `F_CREATE_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_CREATE_request`.
   * @returns {F_CREATE_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_CREATE_request]: F_CREATE_request[_K] }
  ): F_CREATE_request {
    return new F_CREATE_request(
      _o.override,
      _o.initial_attributes,
      _o.create_password,
      _o.requested_access,
      _o.access_passwords,
      _o.path_access_passwords,
      _o.concurrency_control,
      _o.shared_ASE_information,
      _o.account
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
/* END_OF_SYMBOL_DEFINITION F_CREATE_request */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_CREATE_request */
/**
 * @summary The Leading Root Component Types of F_CREATE_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_CREATE_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'override',
    true,
    $.hasTag(_TagClass.context, 0),
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
    'create-password',
    true,
    $.hasTag(_TagClass.application, 17),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'requested-access',
    false,
    $.hasTag(_TagClass.application, 3),
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
    'concurrency-control',
    true,
    $.hasTag(_TagClass.application, 10),
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
    'account',
    true,
    $.hasTag(_TagClass.application, 4),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_CREATE_request */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_CREATE_request */
/**
 * @summary The Trailing Root Component Types of F_CREATE_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_CREATE_request: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_CREATE_request */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_CREATE_request */
/**
 * @summary The Extension Addition Component Types of F_CREATE_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_CREATE_request: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_CREATE_request */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_F_CREATE_request */
let _cached_decoder_for_F_CREATE_request: $.ASN1Decoder<F_CREATE_request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_F_CREATE_request */

/* START_OF_SYMBOL_DEFINITION _decode_F_CREATE_request */
/**
 * @summary Decodes an ASN.1 element into a(n) F_CREATE_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_CREATE_request} The decoded data structure.
 */
export function _decode_F_CREATE_request(el: _Element) {
  if (!_cached_decoder_for_F_CREATE_request) {
    _cached_decoder_for_F_CREATE_request = function (
      el: _Element
    ): F_CREATE_request {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let override: OPTIONAL<Override> =
        F_CREATE_request._default_value_for_override;
      let initial_attributes!: Create_Attributes;
      let create_password: OPTIONAL<Password>;
      let requested_access!: Access_Request;
      let access_passwords: OPTIONAL<Access_Passwords>;
      let path_access_passwords: OPTIONAL<Path_Access_Passwords>;
      let concurrency_control: OPTIONAL<Concurrency_Control>;
      let shared_ASE_information: OPTIONAL<Shared_ASE_Information>;
      let account: OPTIONAL<Account>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        override: (_el: _Element): void => {
          override = $._decode_implicit<Override>(() => _decode_Override)(_el);
        },
        'initial-attributes': (_el: _Element): void => {
          initial_attributes = _decode_Create_Attributes(_el);
        },
        'create-password': (_el: _Element): void => {
          create_password = _decode_Password(_el);
        },
        'requested-access': (_el: _Element): void => {
          requested_access = _decode_Access_Request(_el);
        },
        'access-passwords': (_el: _Element): void => {
          access_passwords = _decode_Access_Passwords(_el);
        },
        'path-access-passwords': (_el: _Element): void => {
          path_access_passwords = _decode_Path_Access_Passwords(_el);
        },
        'concurrency-control': (_el: _Element): void => {
          concurrency_control = _decode_Concurrency_Control(_el);
        },
        'shared-ASE-information': (_el: _Element): void => {
          shared_ASE_information = _decode_Shared_ASE_Information(_el);
        },
        account: (_el: _Element): void => {
          account = _decode_Account(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_CREATE_request,
        _extension_additions_list_spec_for_F_CREATE_request,
        _root_component_type_list_2_spec_for_F_CREATE_request,
        undefined
      );
      return new F_CREATE_request /* SEQUENCE_CONSTRUCTOR_CALL */(
        override,
        initial_attributes,
        create_password,
        requested_access,
        access_passwords,
        path_access_passwords,
        concurrency_control,
        shared_ASE_information,
        account
      );
    };
  }
  return _cached_decoder_for_F_CREATE_request(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_F_CREATE_request */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_F_CREATE_request */
let _cached_encoder_for_F_CREATE_request: $.ASN1Encoder<F_CREATE_request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_F_CREATE_request */

/* START_OF_SYMBOL_DEFINITION _encode_F_CREATE_request */
/**
 * @summary Encodes a(n) F_CREATE_request into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_CREATE_request, encoded as an ASN.1 Element.
 */
export function _encode_F_CREATE_request(
  value: F_CREATE_request,
  elGetter: $.ASN1Encoder<F_CREATE_request>
) {
  if (!_cached_encoder_for_F_CREATE_request) {
    _cached_encoder_for_F_CREATE_request = function (
      value: F_CREATE_request,
      elGetter: $.ASN1Encoder<F_CREATE_request>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.override === undefined ||
            $.deepEq(
              value.override,
              F_CREATE_request._default_value_for_override
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () => _encode_Override,
                  $.BER
                )(value.override, $.BER),
            /* REQUIRED   */ _encode_Create_Attributes(
              value.initial_attributes,
              $.BER
            ),
            /* IF_ABSENT  */ value.create_password === undefined
              ? undefined
              : _encode_Password(value.create_password, $.BER),
            /* REQUIRED   */ _encode_Access_Request(
              value.requested_access,
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
            /* IF_ABSENT  */ value.concurrency_control === undefined
              ? undefined
              : _encode_Concurrency_Control(value.concurrency_control, $.BER),
            /* IF_ABSENT  */ value.shared_ASE_information === undefined
              ? undefined
              : _encode_Shared_ASE_Information(
                  value.shared_ASE_information,
                  $.BER
                ),
            /* IF_ABSENT  */ value.account === undefined
              ? undefined
              : _encode_Account(value.account, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_CREATE_request(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_F_CREATE_request */

/* eslint-enable */
