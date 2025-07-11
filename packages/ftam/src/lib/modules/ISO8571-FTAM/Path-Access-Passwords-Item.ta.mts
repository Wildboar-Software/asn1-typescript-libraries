/* eslint-disable */
import {
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
 * @summary Path_Access_Passwords_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Path-Access-Passwords-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class Path_Access_Passwords_Item {
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
    readonly pass_passwords: Pass_Passwords,
    /**
     * @summary `link_password`.
     * @public
     * @readonly
     */
    readonly link_password: Password
  ) {}

  /**
   * @summary Restructures an object into a Path_Access_Passwords_Item
   * @description
   *
   * This takes an `object` and converts it to a `Path_Access_Passwords_Item`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Path_Access_Passwords_Item`.
   * @returns {Path_Access_Passwords_Item}
   */
  public static _from_object(
    _o: {
      [_K in keyof Path_Access_Passwords_Item]: Path_Access_Passwords_Item[_K];
    }
  ): Path_Access_Passwords_Item {
    return new Path_Access_Passwords_Item(
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
 * @summary The Leading Root Component Types of Path_Access_Passwords_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Path_Access_Passwords_Item: $.ComponentSpec[] = [
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
    false,
    $.hasTag(_TagClass.context, 8)
  ),
  new $.ComponentSpec(
    'link-password',
    false,
    $.hasTag(_TagClass.context, 9)
  ),
];


/**
 * @summary The Trailing Root Component Types of Path_Access_Passwords_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Path_Access_Passwords_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Path_Access_Passwords_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Path_Access_Passwords_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_Path_Access_Passwords_Item: $.ASN1Decoder<Path_Access_Passwords_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Path_Access_Passwords_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Path_Access_Passwords_Item} The decoded data structure.
 */
export function _decode_Path_Access_Passwords_Item(el: _Element): Path_Access_Passwords_Item {
  if (!_cached_decoder_for_Path_Access_Passwords_Item) {
    _cached_decoder_for_Path_Access_Passwords_Item = function (
      el: _Element
    ): Path_Access_Passwords_Item {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 10) {
        throw new _ConstructionError(
          'Path-Access-Passwords-Item contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'read-password';
      sequence[1].name = 'insert-password';
      sequence[2].name = 'replace-password';
      sequence[3].name = 'extend-password';
      sequence[4].name = 'erase-password';
      sequence[5].name = 'read-attribute-password';
      sequence[6].name = 'change-attribute-password';
      sequence[7].name = 'delete-password';
      sequence[8].name = 'pass-passwords';
      sequence[9].name = 'link-password';
      let read_password!: Password;
      let insert_password!: Password;
      let replace_password!: Password;
      let extend_password!: Password;
      let erase_password!: Password;
      let read_attribute_password!: Password;
      let change_attribute_password!: Password;
      let delete_password!: Password;
      let pass_passwords!: Pass_Passwords;
      let link_password!: Password;
      read_password = $._decode_implicit<Password>(() => _decode_Password)(
        sequence[0]
      );
      insert_password = $._decode_implicit<Password>(() => _decode_Password)(
        sequence[1]
      );
      replace_password = $._decode_implicit<Password>(() => _decode_Password)(
        sequence[2]
      );
      extend_password = $._decode_implicit<Password>(() => _decode_Password)(
        sequence[3]
      );
      erase_password = $._decode_implicit<Password>(() => _decode_Password)(
        sequence[4]
      );
      read_attribute_password = $._decode_implicit<Password>(
        () => _decode_Password
      )(sequence[5]);
      change_attribute_password = $._decode_implicit<Password>(
        () => _decode_Password
      )(sequence[6]);
      delete_password = $._decode_implicit<Password>(() => _decode_Password)(
        sequence[7]
      );
      pass_passwords = $._decode_implicit<Pass_Passwords>(
        () => _decode_Pass_Passwords
      )(sequence[8]);
      link_password = $._decode_implicit<Password>(() => _decode_Password)(
        sequence[9]
      );
      return new Path_Access_Passwords_Item(
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
    };
  }
  return _cached_decoder_for_Path_Access_Passwords_Item(el);
}


let _cached_encoder_for_Path_Access_Passwords_Item: $.ASN1Encoder<Path_Access_Passwords_Item> | null = null;


/**
 * @summary Encodes a(n) Path_Access_Passwords_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Path_Access_Passwords_Item, encoded as an ASN.1 Element.
 */
export function _encode_Path_Access_Passwords_Item(
  value: Path_Access_Passwords_Item,
  elGetter: $.ASN1Encoder<Path_Access_Passwords_Item>
): _Element {
  if (!_cached_encoder_for_Path_Access_Passwords_Item) {
    _cached_encoder_for_Path_Access_Passwords_Item = function (
      value: Path_Access_Passwords_Item    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => _encode_Password,
              $.BER
            )(value.read_password, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              1,
              () => _encode_Password,
              $.BER
            )(value.insert_password, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              2,
              () => _encode_Password,
              $.BER
            )(value.replace_password, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              3,
              () => _encode_Password,
              $.BER
            )(value.extend_password, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              4,
              () => _encode_Password,
              $.BER
            )(value.erase_password, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              5,
              () => _encode_Password,
              $.BER
            )(value.read_attribute_password, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              6,
              () => _encode_Password,
              $.BER
            )(value.change_attribute_password, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              7,
              () => _encode_Password,
              $.BER
            )(value.delete_password, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              8,
              () => _encode_Pass_Passwords,
              $.BER
            )(value.pass_passwords, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              9,
              () => _encode_Password,
              $.BER
            )(value.link_password, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Path_Access_Passwords_Item(value, elGetter);
}


/* eslint-enable */
