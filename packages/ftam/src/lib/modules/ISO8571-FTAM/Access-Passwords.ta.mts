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
  Password,
  _decode_Password,
  _encode_Password,
} from '../ISO8571-FTAM/Password.ta.mjs';
import {
  Pass_Passwords,
  _decode_Pass_Passwords,
  _encode_Pass_Passwords,
} from '../ISO8571-FTAM/Pass-Passwords.ta.mjs';

/**
 * @summary Access_Passwords
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Access-Passwords ::= [APPLICATION 2] IMPLICIT SEQUENCE {
 *   read-password              [0]  Password,
 *   insert-password            [1]  Password,
 *   replace-password           [2]  Password,
 *   extend-password            [3]  Password,
 *   erase-password             [4]  Password,
 *   read-attribute-password    [5]  Password,
 *   change-attribute-password  [6]  Password,
 *   delete-password            [7]  Password,
 *   pass-passwords             [8] IMPLICIT Pass-Passwords OPTIONAL,
 *   link-password              [9]  Password OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Access_Passwords {
  constructor(
    /**
     * @summary `read_password`.
     * @public
     * @readonly
     */
    readonly read_password: Password,
    /**
     * @summary `insert_password`.
     * @public
     * @readonly
     */
    readonly insert_password: Password,
    /**
     * @summary `replace_password`.
     * @public
     * @readonly
     */
    readonly replace_password: Password,
    /**
     * @summary `extend_password`.
     * @public
     * @readonly
     */
    readonly extend_password: Password,
    /**
     * @summary `erase_password`.
     * @public
     * @readonly
     */
    readonly erase_password: Password,
    /**
     * @summary `read_attribute_password`.
     * @public
     * @readonly
     */
    readonly read_attribute_password: Password,
    /**
     * @summary `change_attribute_password`.
     * @public
     * @readonly
     */
    readonly change_attribute_password: Password,
    /**
     * @summary `delete_password`.
     * @public
     * @readonly
     */
    readonly delete_password: Password,
    /**
     * @summary `pass_passwords`.
     * @public
     * @readonly
     */
    readonly pass_passwords: OPTIONAL<Pass_Passwords>,
    /**
     * @summary `link_password`.
     * @public
     * @readonly
     */
    readonly link_password: OPTIONAL<Password>
  ) {}

  /**
   * @summary Restructures an object into a Access_Passwords
   * @description
   *
   * This takes an `object` and converts it to a `Access_Passwords`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Access_Passwords`.
   * @returns {Access_Passwords}
   */
  public static _from_object(
    _o: { [_K in keyof Access_Passwords]: Access_Passwords[_K] }
  ): Access_Passwords {
    return new Access_Passwords(
      _o.read_password,
      _o.insert_password,
      _o.replace_password,
      _o.extend_password,
      _o.erase_password,
      _o.read_attribute_password,
      _o.change_attribute_password,
      _o.delete_password,
      _o.pass_passwords,
      _o.link_password
    );
  }
}


/**
 * @summary The Leading Root Component Types of Access_Passwords
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Access_Passwords: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'read-password',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'insert-password',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'replace-password',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'extend-password',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'erase-password',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'read-attribute-password',
    false,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'change-attribute-password',
    false,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'delete-password',
    false,
    $.hasTag(_TagClass.context, 7)
  ),
  new $.ComponentSpec(
    'pass-passwords',
    true,
    $.hasTag(_TagClass.context, 8)
  ),
  new $.ComponentSpec(
    'link-password',
    true,
    $.hasTag(_TagClass.context, 9)
  ),
];


/**
 * @summary The Trailing Root Component Types of Access_Passwords
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Access_Passwords: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Access_Passwords
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Access_Passwords: $.ComponentSpec[] = [];


let _cached_decoder_for_Access_Passwords: $.ASN1Decoder<Access_Passwords> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Access_Passwords
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Access_Passwords} The decoded data structure.
 */
export function _decode_Access_Passwords(el: _Element) {
  if (!_cached_decoder_for_Access_Passwords) {
    _cached_decoder_for_Access_Passwords = $._decode_implicit<Access_Passwords>(
      () =>
        function (el: _Element): Access_Passwords {
          let read_password!: Password;
          let insert_password!: Password;
          let replace_password!: Password;
          let extend_password!: Password;
          let erase_password!: Password;
          let read_attribute_password!: Password;
          let change_attribute_password!: Password;
          let delete_password!: Password;
          let pass_passwords: OPTIONAL<Pass_Passwords>;
          let link_password: OPTIONAL<Password>;
          const callbacks: $.DecodingMap = {
            'read-password': (_el: _Element): void => {
              read_password = $._decode_explicit<Password>(
                () => _decode_Password
              )(_el);
            },
            'insert-password': (_el: _Element): void => {
              insert_password = $._decode_explicit<Password>(
                () => _decode_Password
              )(_el);
            },
            'replace-password': (_el: _Element): void => {
              replace_password = $._decode_explicit<Password>(
                () => _decode_Password
              )(_el);
            },
            'extend-password': (_el: _Element): void => {
              extend_password = $._decode_explicit<Password>(
                () => _decode_Password
              )(_el);
            },
            'erase-password': (_el: _Element): void => {
              erase_password = $._decode_explicit<Password>(
                () => _decode_Password
              )(_el);
            },
            'read-attribute-password': (_el: _Element): void => {
              read_attribute_password = $._decode_explicit<Password>(
                () => _decode_Password
              )(_el);
            },
            'change-attribute-password': (_el: _Element): void => {
              change_attribute_password = $._decode_explicit<Password>(
                () => _decode_Password
              )(_el);
            },
            'delete-password': (_el: _Element): void => {
              delete_password = $._decode_explicit<Password>(
                () => _decode_Password
              )(_el);
            },
            'pass-passwords': (_el: _Element): void => {
              pass_passwords = $._decode_implicit<Pass_Passwords>(
                () => _decode_Pass_Passwords
              )(_el);
            },
            'link-password': (_el: _Element): void => {
              link_password = $._decode_explicit<Password>(
                () => _decode_Password
              )(_el);
            },
          };
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_Access_Passwords,
            _extension_additions_list_spec_for_Access_Passwords,
            _root_component_type_list_2_spec_for_Access_Passwords,
            undefined
          );
          return new Access_Passwords (
            read_password,
            insert_password,
            replace_password,
            extend_password,
            erase_password,
            read_attribute_password,
            change_attribute_password,
            delete_password,
            pass_passwords,
            link_password
          );
        }
    );
  }
  return _cached_decoder_for_Access_Passwords(el);
}


let _cached_encoder_for_Access_Passwords: $.ASN1Encoder<Access_Passwords> | null = null;


/**
 * @summary Encodes a(n) Access_Passwords into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Access_Passwords, encoded as an ASN.1 Element.
 */
export function _encode_Access_Passwords(
  value: Access_Passwords,
  elGetter: $.ASN1Encoder<Access_Passwords>
) {
  if (!_cached_encoder_for_Access_Passwords) {
    _cached_encoder_for_Access_Passwords = $._encode_implicit(
      _TagClass.application,
      2,
      () =>
        function (
          value: Access_Passwords        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat([
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  0,
                  () => _encode_Password,
                  $.BER
                )(value.read_password, $.BER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => _encode_Password,
                  $.BER
                )(value.insert_password, $.BER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  2,
                  () => _encode_Password,
                  $.BER
                )(value.replace_password, $.BER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  3,
                  () => _encode_Password,
                  $.BER
                )(value.extend_password, $.BER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  4,
                  () => _encode_Password,
                  $.BER
                )(value.erase_password, $.BER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  5,
                  () => _encode_Password,
                  $.BER
                )(value.read_attribute_password, $.BER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  6,
                  () => _encode_Password,
                  $.BER
                )(value.change_attribute_password, $.BER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  7,
                  () => _encode_Password,
                  $.BER
                )(value.delete_password, $.BER),
                /* IF_ABSENT  */ value.pass_passwords === undefined
                  ? undefined
                  : $._encode_implicit(
                      _TagClass.context,
                      8,
                      () => _encode_Pass_Passwords,
                      $.BER
                    )(value.pass_passwords, $.BER),
                /* IF_ABSENT  */ value.link_password === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      9,
                      () => _encode_Password,
                      $.BER
                    )(value.link_password, $.BER),
              ])
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_Access_Passwords(value, elGetter);
}


/* eslint-enable */
