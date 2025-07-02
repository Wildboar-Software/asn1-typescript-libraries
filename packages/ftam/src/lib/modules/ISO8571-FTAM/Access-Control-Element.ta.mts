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
  Access_Request,
  _decode_Access_Request,
  _encode_Access_Request,
} from '../ISO8571-FTAM/Access-Request.ta.mjs';
import {
  Concurrency_Access,
  _decode_Concurrency_Access,
  _encode_Concurrency_Access,
} from '../ISO8571-FTAM/Concurrency-Access.ta.mjs';
import {
  User_Identity,
  _decode_User_Identity,
  _encode_User_Identity,
} from '../ISO8571-FTAM/User-Identity.ta.mjs';
import {
  Access_Passwords,
  _decode_Access_Passwords,
  _encode_Access_Passwords,
} from '../ISO8571-FTAM/Access-Passwords.ta.mjs';
import {
  Application_Entity_Title,
  _decode_Application_Entity_Title,
  _encode_Application_Entity_Title,
} from '../ISO8571-FTAM/Application-Entity-Title.ta.mjs';

/**
 * @summary Access_Control_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Access-Control-Element ::= SEQUENCE {
 *   action-list         [0] IMPLICIT Access-Request,
 *   concurrency-access  [1] IMPLICIT Concurrency-Access OPTIONAL,
 *   identity            [2] IMPLICIT User-Identity OPTIONAL,
 *   passwords           [3] IMPLICIT Access-Passwords OPTIONAL,
 *   location            [4] IMPLICIT Application-Entity-Title OPTIONAL
 * }
 * ```
 *
 */
export class Access_Control_Element {
  constructor(
    /**
     * @summary `action_list`.
     * @public
     * @readonly
     */
    readonly action_list: Access_Request,
    /**
     * @summary `concurrency_access`.
     * @public
     * @readonly
     */
    readonly concurrency_access: OPTIONAL<Concurrency_Access>,
    /**
     * @summary `identity`.
     * @public
     * @readonly
     */
    readonly identity: OPTIONAL<User_Identity>,
    /**
     * @summary `passwords`.
     * @public
     * @readonly
     */
    readonly passwords: OPTIONAL<Access_Passwords>,
    /**
     * @summary `location`.
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Application_Entity_Title>
  ) {}

  /**
   * @summary Restructures an object into a Access_Control_Element
   * @description
   *
   * This takes an `object` and converts it to a `Access_Control_Element`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Access_Control_Element`.
   * @returns {Access_Control_Element}
   */
  public static _from_object(
    _o: { [_K in keyof Access_Control_Element]: Access_Control_Element[_K] }
  ): Access_Control_Element {
    return new Access_Control_Element(
      _o.action_list,
      _o.concurrency_access,
      _o.identity,
      _o.passwords,
      _o.location
    );
  }
}


/**
 * @summary The Leading Root Component Types of Access_Control_Element
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Access_Control_Element: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'action-list',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'concurrency-access',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'identity',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'passwords',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'location',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of Access_Control_Element
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Access_Control_Element: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Access_Control_Element
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Access_Control_Element: $.ComponentSpec[] = [];


let _cached_decoder_for_Access_Control_Element: $.ASN1Decoder<Access_Control_Element> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Access_Control_Element
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Access_Control_Element} The decoded data structure.
 */
export function _decode_Access_Control_Element(el: _Element): Access_Control_Element {
  if (!_cached_decoder_for_Access_Control_Element) {
    _cached_decoder_for_Access_Control_Element = function (
      el: _Element
    ): Access_Control_Element {
      let action_list!: Access_Request;
      let concurrency_access: OPTIONAL<Concurrency_Access>;
      let identity: OPTIONAL<User_Identity>;
      let passwords: OPTIONAL<Access_Passwords>;
      let location: OPTIONAL<Application_Entity_Title>;
      const callbacks: $.DecodingMap = {
        'action-list': (_el: _Element): void => {
          action_list = $._decode_implicit<Access_Request>(
            () => _decode_Access_Request
          )(_el);
        },
        'concurrency-access': (_el: _Element): void => {
          concurrency_access = $._decode_implicit<Concurrency_Access>(
            () => _decode_Concurrency_Access
          )(_el);
        },
        identity: (_el: _Element): void => {
          identity = $._decode_implicit<User_Identity>(
            () => _decode_User_Identity
          )(_el);
        },
        passwords: (_el: _Element): void => {
          passwords = $._decode_implicit<Access_Passwords>(
            () => _decode_Access_Passwords
          )(_el);
        },
        location: (_el: _Element): void => {
          location = $._decode_implicit<Application_Entity_Title>(
            () => _decode_Application_Entity_Title
          )(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Access_Control_Element,
        _extension_additions_list_spec_for_Access_Control_Element,
        _root_component_type_list_2_spec_for_Access_Control_Element,
        undefined
      );
      return new Access_Control_Element (
        action_list,
        concurrency_access,
        identity,
        passwords,
        location
      );
    };
  }
  return _cached_decoder_for_Access_Control_Element(el);
}


let _cached_encoder_for_Access_Control_Element: $.ASN1Encoder<Access_Control_Element> | null = null;


/**
 * @summary Encodes a(n) Access_Control_Element into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Access_Control_Element, encoded as an ASN.1 Element.
 */
export function _encode_Access_Control_Element(
  value: Access_Control_Element,
  elGetter: $.ASN1Encoder<Access_Control_Element>
): _Element {
  if (!_cached_encoder_for_Access_Control_Element) {
    _cached_encoder_for_Access_Control_Element = function (
      value: Access_Control_Element    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => _encode_Access_Request,
              $.BER
            )(value.action_list, $.BER),
            /* IF_ABSENT  */ value.concurrency_access === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  1,
                  () => _encode_Concurrency_Access,
                  $.BER
                )(value.concurrency_access, $.BER),
            /* IF_ABSENT  */ value.identity === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => _encode_User_Identity,
                  $.BER
                )(value.identity, $.BER),
            /* IF_ABSENT  */ value.passwords === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  3,
                  () => _encode_Access_Passwords,
                  $.BER
                )(value.passwords, $.BER),
            /* IF_ABSENT  */ value.location === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  4,
                  () => _encode_Application_Entity_Title,
                  $.BER
                )(value.location, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Access_Control_Element(value, elGetter);
}


/* eslint-enable */
