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
  Create_Attributes,
  _decode_Create_Attributes,
  _encode_Create_Attributes,
} from '../ISO8571-FTAM/Create-Attributes.ta.mjs';
import {
  Pathname_Attribute,
  _decode_Pathname_Attribute,
  _encode_Pathname_Attribute,
} from '../ISO8571-FTAM/Pathname-Attribute.ta.mjs';
import {
  Password,
  _decode_Password,
  _encode_Password,
} from '../ISO8571-FTAM/Password.ta.mjs';
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
  Path_Access_Passwords,
  _decode_Path_Access_Passwords,
  _encode_Path_Access_Passwords,
} from '../ISO8571-FTAM/Path-Access-Passwords.ta.mjs';
import {
  Concurrency_Control,
  _decode_Concurrency_Control,
  _encode_Concurrency_Control,
} from '../ISO8571-FTAM/Concurrency-Control.ta.mjs';
import {
  Shared_ASE_Information,
  _decode_Shared_ASE_Information,
  _encode_Shared_ASE_Information,
} from '../ISO8571-FTAM/Shared-ASE-Information.ta.mjs';
import {
  Account,
  _decode_Account,
  _encode_Account,
} from '../ISO8571-FTAM/Account.ta.mjs';

/**
 * @summary F_LINK_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-LINK-request ::= SEQUENCE {
 *   initial-attributes      Create-Attributes,
 *   target-object           Pathname-Attribute,
 *   create-password         Password OPTIONAL,
 *   requested-access        Access-Request,
 *   access-passwords        Access-Passwords OPTIONAL,
 *   path-access-passwords   Path-Access-Passwords OPTIONAL,
 *   concurrency-control     Concurrency-Control OPTIONAL,
 *   shared-ASE-information  Shared-ASE-Information OPTIONAL,
 *   account                 Account OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_LINK_request {
  constructor(
    /**
     * @summary `initial_attributes`.
     * @public
     * @readonly
     */
    readonly initial_attributes: Create_Attributes,
    /**
     * @summary `target_object`.
     * @public
     * @readonly
     */
    readonly target_object: Pathname_Attribute,
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
   * @summary Restructures an object into a F_LINK_request
   * @description
   *
   * This takes an `object` and converts it to a `F_LINK_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_LINK_request`.
   * @returns {F_LINK_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_LINK_request]: F_LINK_request[_K] }
  ): F_LINK_request {
    return new F_LINK_request(
      _o.initial_attributes,
      _o.target_object,
      _o.create_password,
      _o.requested_access,
      _o.access_passwords,
      _o.path_access_passwords,
      _o.concurrency_control,
      _o.shared_ASE_information,
      _o.account
    );
  }
}


/**
 * @summary The Leading Root Component Types of F_LINK_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_LINK_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'initial-attributes',
    false,
    $.hasTag(_TagClass.application, 12)
  ),
  new $.ComponentSpec(
    'target-object',
    false,
    $.hasAnyTag
  ),
  new $.ComponentSpec(
    'create-password',
    true,
    $.hasTag(_TagClass.application, 17)
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
    'path-access-passwords',
    true,
    $.hasTag(_TagClass.application, 27)
  ),
  new $.ComponentSpec(
    'concurrency-control',
    true,
    $.hasTag(_TagClass.application, 10)
  ),
  new $.ComponentSpec(
    'shared-ASE-information',
    true,
    $.hasTag(_TagClass.application, 20)
  ),
  new $.ComponentSpec(
    'account',
    true,
    $.hasTag(_TagClass.application, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of F_LINK_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_LINK_request: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_LINK_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_LINK_request: $.ComponentSpec[] = [];


let _cached_decoder_for_F_LINK_request: $.ASN1Decoder<F_LINK_request> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_LINK_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_LINK_request} The decoded data structure.
 */
export function _decode_F_LINK_request(el: _Element) {
  if (!_cached_decoder_for_F_LINK_request) {
    _cached_decoder_for_F_LINK_request = function (
      el: _Element
    ): F_LINK_request {
      let initial_attributes!: Create_Attributes;
      let target_object!: Pathname_Attribute;
      let create_password: OPTIONAL<Password>;
      let requested_access!: Access_Request;
      let access_passwords: OPTIONAL<Access_Passwords>;
      let path_access_passwords: OPTIONAL<Path_Access_Passwords>;
      let concurrency_control: OPTIONAL<Concurrency_Control>;
      let shared_ASE_information: OPTIONAL<Shared_ASE_Information>;
      let account: OPTIONAL<Account>;
      const callbacks: $.DecodingMap = {
        'initial-attributes': (_el: _Element): void => {
          initial_attributes = _decode_Create_Attributes(_el);
        },
        'target-object': (_el: _Element): void => {
          target_object = _decode_Pathname_Attribute(_el);
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
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_LINK_request,
        _extension_additions_list_spec_for_F_LINK_request,
        _root_component_type_list_2_spec_for_F_LINK_request,
        undefined
      );
      return new F_LINK_request (
        initial_attributes,
        target_object,
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
  return _cached_decoder_for_F_LINK_request(el);
}


let _cached_encoder_for_F_LINK_request: $.ASN1Encoder<F_LINK_request> | null = null;


/**
 * @summary Encodes a(n) F_LINK_request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_LINK_request, encoded as an ASN.1 Element.
 */
export function _encode_F_LINK_request(
  value: F_LINK_request,
  elGetter: $.ASN1Encoder<F_LINK_request>
) {
  if (!_cached_encoder_for_F_LINK_request) {
    _cached_encoder_for_F_LINK_request = function (
      value: F_LINK_request    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Create_Attributes(
              value.initial_attributes,
              $.BER
            ),
            /* REQUIRED   */ _encode_Pathname_Attribute(
              value.target_object,
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
  return _cached_encoder_for_F_LINK_request(value, elGetter);
}


/* eslint-enable */
