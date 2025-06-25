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
 * @summary F_CREATE_DIRECTORY_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-CREATE-DIRECTORY-request ::= SEQUENCE {
 *   initial-attributes      Create-Attributes,
 *   create-password         Password OPTIONAL,
 *   requested-access        Access-Request,
 *   shared-ASE-infonnation  Shared-ASE-Information OPTIONAL,
 *   account                 Account OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_CREATE_DIRECTORY_request {
  constructor(
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
     * @summary `shared_ASE_infonnation`.
     * @public
     * @readonly
     */
    readonly shared_ASE_infonnation: OPTIONAL<Shared_ASE_Information>,
    /**
     * @summary `account`.
     * @public
     * @readonly
     */
    readonly account: OPTIONAL<Account>
  ) {}

  /**
   * @summary Restructures an object into a F_CREATE_DIRECTORY_request
   * @description
   *
   * This takes an `object` and converts it to a `F_CREATE_DIRECTORY_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_CREATE_DIRECTORY_request`.
   * @returns {F_CREATE_DIRECTORY_request}
   */
  public static _from_object(
    _o: {
      [_K in keyof F_CREATE_DIRECTORY_request]: F_CREATE_DIRECTORY_request[_K];
    }
  ): F_CREATE_DIRECTORY_request {
    return new F_CREATE_DIRECTORY_request(
      _o.initial_attributes,
      _o.create_password,
      _o.requested_access,
      _o.shared_ASE_infonnation,
      _o.account
    );
  }
}


/**
 * @summary The Leading Root Component Types of F_CREATE_DIRECTORY_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_CREATE_DIRECTORY_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'initial-attributes',
    false,
    $.hasTag(_TagClass.application, 12)
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
    'shared-ASE-infonnation',
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
 * @summary The Trailing Root Component Types of F_CREATE_DIRECTORY_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_CREATE_DIRECTORY_request: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_CREATE_DIRECTORY_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_CREATE_DIRECTORY_request: $.ComponentSpec[] = [];


let _cached_decoder_for_F_CREATE_DIRECTORY_request: $.ASN1Decoder<F_CREATE_DIRECTORY_request> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_CREATE_DIRECTORY_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_CREATE_DIRECTORY_request} The decoded data structure.
 */
export function _decode_F_CREATE_DIRECTORY_request(el: _Element): F_CREATE_DIRECTORY_request {
  if (!_cached_decoder_for_F_CREATE_DIRECTORY_request) {
    _cached_decoder_for_F_CREATE_DIRECTORY_request = function (
      el: _Element
    ): F_CREATE_DIRECTORY_request {
      let initial_attributes!: Create_Attributes;
      let create_password: OPTIONAL<Password>;
      let requested_access!: Access_Request;
      let shared_ASE_infonnation: OPTIONAL<Shared_ASE_Information>;
      let account: OPTIONAL<Account>;
      const callbacks: $.DecodingMap = {
        'initial-attributes': (_el: _Element): void => {
          initial_attributes = _decode_Create_Attributes(_el);
        },
        'create-password': (_el: _Element): void => {
          create_password = _decode_Password(_el);
        },
        'requested-access': (_el: _Element): void => {
          requested_access = _decode_Access_Request(_el);
        },
        'shared-ASE-infonnation': (_el: _Element): void => {
          shared_ASE_infonnation = _decode_Shared_ASE_Information(_el);
        },
        account: (_el: _Element): void => {
          account = _decode_Account(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_CREATE_DIRECTORY_request,
        _extension_additions_list_spec_for_F_CREATE_DIRECTORY_request,
        _root_component_type_list_2_spec_for_F_CREATE_DIRECTORY_request,
        undefined
      );
      return new F_CREATE_DIRECTORY_request (
        initial_attributes,
        create_password,
        requested_access,
        shared_ASE_infonnation,
        account
      );
    };
  }
  return _cached_decoder_for_F_CREATE_DIRECTORY_request(el);
}


let _cached_encoder_for_F_CREATE_DIRECTORY_request: $.ASN1Encoder<F_CREATE_DIRECTORY_request> | null = null;


/**
 * @summary Encodes a(n) F_CREATE_DIRECTORY_request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_CREATE_DIRECTORY_request, encoded as an ASN.1 Element.
 */
export function _encode_F_CREATE_DIRECTORY_request(
  value: F_CREATE_DIRECTORY_request,
  elGetter: $.ASN1Encoder<F_CREATE_DIRECTORY_request>
): _Element {
  if (!_cached_encoder_for_F_CREATE_DIRECTORY_request) {
    _cached_encoder_for_F_CREATE_DIRECTORY_request = function (
      value: F_CREATE_DIRECTORY_request    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
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
            /* IF_ABSENT  */ value.shared_ASE_infonnation === undefined
              ? undefined
              : _encode_Shared_ASE_Information(
                  value.shared_ASE_infonnation,
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
  return _cached_encoder_for_F_CREATE_DIRECTORY_request(value, elGetter);
}


/* eslint-enable */
