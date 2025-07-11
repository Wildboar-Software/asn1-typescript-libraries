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
  Attribute_Value_Assertions,
  _decode_Attribute_Value_Assertions,
  _encode_Attribute_Value_Assertions,
} from '../ISO8571-FTAM/Attribute-Value-Assertions.ta.mjs';
import { Scope, _decode_Scope, _encode_Scope } from '../ISO8571-FTAM/Scope.ta.mjs';
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
  Attribute_Names,
  _decode_Attribute_Names,
  _encode_Attribute_Names,
} from '../ISO8571-FTAM/Attribute-Names.ta.mjs';
import {
  Attribute_Extension_Names,
  _decode_Attribute_Extension_Names,
  _encode_Attribute_Extension_Names,
} from '../ISO8571-FTAM/Attribute-Extension-Names.ta.mjs';

/**
 * @summary F_LIST_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-LIST-request ::= SEQUENCE {
 *   attribute-value-asset-tions  Attribute-Value-Assertions,
 *   scope                        Scope,
 *   access-passwords             Access-Passwords OPTIONAL,
 *   path-access-passwords        Path-Access-Passwords OPTIONAL,
 *   attribute-names              [0] IMPLICIT Attribute-Names,
 *   attribute-extension-names    [1] IMPLICIT Attribute-Extension-Names OPTIONAL
 * }
 * ```
 *
 */
export class F_LIST_request {
  constructor(
    /**
     * @summary `attribute_value_asset_tions`.
     * @public
     * @readonly
     */
    readonly attribute_value_asset_tions: Attribute_Value_Assertions,
    /**
     * @summary `scope`.
     * @public
     * @readonly
     */
    readonly scope: Scope,
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
     * @summary `attribute_names`.
     * @public
     * @readonly
     */
    readonly attribute_names: Attribute_Names,
    /**
     * @summary `attribute_extension_names`.
     * @public
     * @readonly
     */
    readonly attribute_extension_names: OPTIONAL<Attribute_Extension_Names>
  ) {}

  /**
   * @summary Restructures an object into a F_LIST_request
   * @description
   *
   * This takes an `object` and converts it to a `F_LIST_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_LIST_request`.
   * @returns {F_LIST_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_LIST_request]: F_LIST_request[_K] }
  ): F_LIST_request {
    return new F_LIST_request(
      _o.attribute_value_asset_tions,
      _o.scope,
      _o.access_passwords,
      _o.path_access_passwords,
      _o.attribute_names,
      _o.attribute_extension_names
    );
  }
}


/**
 * @summary The Leading Root Component Types of F_LIST_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_LIST_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'attribute-value-asset-tions',
    false,
    $.hasTag(_TagClass.application, 26)
  ),
  new $.ComponentSpec(
    'scope',
    false,
    $.hasTag(_TagClass.application, 28)
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
    'attribute-names',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'attribute-extension-names',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of F_LIST_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_LIST_request: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_LIST_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_LIST_request: $.ComponentSpec[] = [];


let _cached_decoder_for_F_LIST_request: $.ASN1Decoder<F_LIST_request> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_LIST_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_LIST_request} The decoded data structure.
 */
export function _decode_F_LIST_request(el: _Element): F_LIST_request {
  if (!_cached_decoder_for_F_LIST_request) {
    _cached_decoder_for_F_LIST_request = function (
      el: _Element
    ): F_LIST_request {
      let attribute_value_asset_tions!: Attribute_Value_Assertions;
      let scope!: Scope;
      let access_passwords: OPTIONAL<Access_Passwords>;
      let path_access_passwords: OPTIONAL<Path_Access_Passwords>;
      let attribute_names!: Attribute_Names;
      let attribute_extension_names: OPTIONAL<Attribute_Extension_Names>;
      const callbacks: $.DecodingMap = {
        'attribute-value-asset-tions': (_el: _Element): void => {
          attribute_value_asset_tions = _decode_Attribute_Value_Assertions(_el);
        },
        scope: (_el: _Element): void => {
          scope = _decode_Scope(_el);
        },
        'access-passwords': (_el: _Element): void => {
          access_passwords = _decode_Access_Passwords(_el);
        },
        'path-access-passwords': (_el: _Element): void => {
          path_access_passwords = _decode_Path_Access_Passwords(_el);
        },
        'attribute-names': (_el: _Element): void => {
          attribute_names = $._decode_implicit<Attribute_Names>(
            () => _decode_Attribute_Names
          )(_el);
        },
        'attribute-extension-names': (_el: _Element): void => {
          attribute_extension_names = $._decode_implicit<Attribute_Extension_Names>(
            () => _decode_Attribute_Extension_Names
          )(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_LIST_request,
        _extension_additions_list_spec_for_F_LIST_request,
        _root_component_type_list_2_spec_for_F_LIST_request,
        undefined
      );
      return new F_LIST_request (
        attribute_value_asset_tions,
        scope,
        access_passwords,
        path_access_passwords,
        attribute_names,
        attribute_extension_names
      );
    };
  }
  return _cached_decoder_for_F_LIST_request(el);
}


let _cached_encoder_for_F_LIST_request: $.ASN1Encoder<F_LIST_request> | null = null;


/**
 * @summary Encodes a(n) F_LIST_request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_LIST_request, encoded as an ASN.1 Element.
 */
export function _encode_F_LIST_request(
  value: F_LIST_request,
  elGetter: $.ASN1Encoder<F_LIST_request>
): _Element {
  if (!_cached_encoder_for_F_LIST_request) {
    _cached_encoder_for_F_LIST_request = function (
      value: F_LIST_request    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Attribute_Value_Assertions(
              value.attribute_value_asset_tions,
              $.BER
            ),
            /* REQUIRED   */ _encode_Scope(value.scope, $.BER),
            /* IF_ABSENT  */ value.access_passwords === undefined
              ? undefined
              : _encode_Access_Passwords(value.access_passwords, $.BER),
            /* IF_ABSENT  */ value.path_access_passwords === undefined
              ? undefined
              : _encode_Path_Access_Passwords(
                  value.path_access_passwords,
                  $.BER
                ),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => _encode_Attribute_Names,
              $.BER
            )(value.attribute_names, $.BER),
            /* IF_ABSENT  */ value.attribute_extension_names === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  1,
                  () => _encode_Attribute_Extension_Names,
                  $.BER
                )(value.attribute_extension_names, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_LIST_request(value, elGetter);
}


/* eslint-enable */
