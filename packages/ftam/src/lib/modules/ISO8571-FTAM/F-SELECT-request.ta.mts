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
import * as $ from '@wildboar/asn1/functional';
import {
  Select_Attributes,
  _decode_Select_Attributes,
  _encode_Select_Attributes,
} from '../ISO8571-FTAM/Select-Attributes.ta.mjs';
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
 * @summary F_SELECT_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-SELECT-request ::= SEQUENCE {
 *   attributes              Select-Attributes,
 *   requested-access        Access-Request,
 *   access-passwords        Access-Passwords OPTIONAL,
 *   path-access-passwords   Path-Access-Passwords OPTIONAL,
 *   -- This Parameter tan only be sent when the
 *   -- limited-filestore-management or the object-manipulation or
 *   -- the group-manipulation functional units are available.
 *   concurrency-control     Concurrency-Control OPTIONAL,
 *   shared-ASE-information  Shared-ASE-Information OPTIONAL,
 *   account                 Account OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_SELECT_request {
  constructor(
    /**
     * @summary `attributes`.
     * @public
     * @readonly
     */
    readonly attributes: Select_Attributes,
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
   * @summary Restructures an object into a F_SELECT_request
   * @description
   *
   * This takes an `object` and converts it to a `F_SELECT_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_SELECT_request`.
   * @returns {F_SELECT_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_SELECT_request]: F_SELECT_request[_K] }
  ): F_SELECT_request {
    return new F_SELECT_request(
      _o.attributes,
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
 * @summary The Leading Root Component Types of F_SELECT_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_SELECT_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'attributes',
    false,
    $.hasTag(_TagClass.application, 19)
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
 * @summary The Trailing Root Component Types of F_SELECT_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_SELECT_request: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_SELECT_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_SELECT_request: $.ComponentSpec[] = [];


let _cached_decoder_for_F_SELECT_request: $.ASN1Decoder<F_SELECT_request> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_SELECT_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_SELECT_request} The decoded data structure.
 */
export function _decode_F_SELECT_request(el: _Element) {
  if (!_cached_decoder_for_F_SELECT_request) {
    _cached_decoder_for_F_SELECT_request = function (
      el: _Element
    ): F_SELECT_request {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let attributes!: Select_Attributes;
      let requested_access!: Access_Request;
      let access_passwords: OPTIONAL<Access_Passwords>;
      let path_access_passwords: OPTIONAL<Path_Access_Passwords>;
      let concurrency_control: OPTIONAL<Concurrency_Control>;
      let shared_ASE_information: OPTIONAL<Shared_ASE_Information>;
      let account: OPTIONAL<Account>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        attributes: (_el: _Element): void => {
          attributes = _decode_Select_Attributes(_el);
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
        _root_component_type_list_1_spec_for_F_SELECT_request,
        _extension_additions_list_spec_for_F_SELECT_request,
        _root_component_type_list_2_spec_for_F_SELECT_request,
        undefined
      );
      return new F_SELECT_request /* SEQUENCE_CONSTRUCTOR_CALL */(
        attributes,
        requested_access,
        access_passwords,
        path_access_passwords,
        concurrency_control,
        shared_ASE_information,
        account
      );
    };
  }
  return _cached_decoder_for_F_SELECT_request(el);
}


let _cached_encoder_for_F_SELECT_request: $.ASN1Encoder<F_SELECT_request> | null = null;


/**
 * @summary Encodes a(n) F_SELECT_request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_SELECT_request, encoded as an ASN.1 Element.
 */
export function _encode_F_SELECT_request(
  value: F_SELECT_request,
  elGetter: $.ASN1Encoder<F_SELECT_request>
) {
  if (!_cached_encoder_for_F_SELECT_request) {
    _cached_encoder_for_F_SELECT_request = function (
      value: F_SELECT_request    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Select_Attributes(value.attributes, $.BER),
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
  return _cached_encoder_for_F_SELECT_request(value, elGetter);
}


/* eslint-enable */
