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
  Attribute_Value_Assertions,
  _decode_Attribute_Value_Assertions,
  _encode_Attribute_Value_Assertions,
} from '../ISO8571-FTAM/Attribute-Value-Assertions.ta';
export {
  Attribute_Value_Assertions,
  _decode_Attribute_Value_Assertions,
  _encode_Attribute_Value_Assertions,
} from '../ISO8571-FTAM/Attribute-Value-Assertions.ta';
import { Scope, _decode_Scope, _encode_Scope } from '../ISO8571-FTAM/Scope.ta';
export { Scope, _decode_Scope, _encode_Scope } from '../ISO8571-FTAM/Scope.ta';
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
  Attribute_Names,
  Attribute_Names_read_pathname /* IMPORTED_LONG_NAMED_BIT */,
  read_pathname /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_Object_type /* IMPORTED_LONG_NAMED_BIT */,
  read_Object_type /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_permitted_actions /* IMPORTED_LONG_NAMED_BIT */,
  read_permitted_actions /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_contents_type /* IMPORTED_LONG_NAMED_BIT */,
  read_contents_type /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_linked_Object /* IMPORTED_LONG_NAMED_BIT */,
  read_linked_Object /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_Child_objects /* IMPORTED_LONG_NAMED_BIT */,
  read_Child_objects /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_primary_pathname /* IMPORTED_LONG_NAMED_BIT */,
  read_primary_pathname /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_storage_account /* IMPORTED_LONG_NAMED_BIT */,
  read_storage_account /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_date_and_time_of_creation /* IMPORTED_LONG_NAMED_BIT */,
  read_date_and_time_of_creation /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_date_and_time_of_last_modification /* IMPORTED_LONG_NAMED_BIT */,
  read_date_and_time_of_last_modification /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_date_and_time_of_last_read_access /* IMPORTED_LONG_NAMED_BIT */,
  read_date_and_time_of_last_read_access /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_date_and_time_of_last_attribute_modification /* IMPORTED_LONG_NAMED_BIT */,
  read_date_and_time_of_last_attribute_modification /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_identity_of_creator /* IMPORTED_LONG_NAMED_BIT */,
  read_identity_of_creator /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_identity_of_last_modifier /* IMPORTED_LONG_NAMED_BIT */,
  read_identity_of_last_modifier /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_identity_of_last_reader /* IMPORTED_LONG_NAMED_BIT */,
  read_identity_of_last_reader /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_identity_of_last_attribute_modifier /* IMPORTED_LONG_NAMED_BIT */,
  read_identity_of_last_attribute_modifier /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_Object_availability /* IMPORTED_LONG_NAMED_BIT */,
  read_Object_availability /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_Object_size /* IMPORTED_LONG_NAMED_BIT */,
  read_Object_size /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_future_Object_size /* IMPORTED_LONG_NAMED_BIT */,
  read_future_Object_size /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_access_control /* IMPORTED_LONG_NAMED_BIT */,
  read_access_control /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_path_access_control /* IMPORTED_LONG_NAMED_BIT */,
  read_path_access_control /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_l8gal_qualifiCatiOnS /* IMPORTED_LONG_NAMED_BIT */,
  read_l8gal_qualifiCatiOnS /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_private_use /* IMPORTED_LONG_NAMED_BIT */,
  read_private_use /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_Attribute_Names,
  _encode_Attribute_Names,
} from '../ISO8571-FTAM/Attribute-Names.ta';
export {
  Attribute_Names,
  Attribute_Names_read_pathname /* IMPORTED_LONG_NAMED_BIT */,
  read_pathname /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_Object_type /* IMPORTED_LONG_NAMED_BIT */,
  read_Object_type /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_permitted_actions /* IMPORTED_LONG_NAMED_BIT */,
  read_permitted_actions /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_contents_type /* IMPORTED_LONG_NAMED_BIT */,
  read_contents_type /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_linked_Object /* IMPORTED_LONG_NAMED_BIT */,
  read_linked_Object /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_Child_objects /* IMPORTED_LONG_NAMED_BIT */,
  read_Child_objects /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_primary_pathname /* IMPORTED_LONG_NAMED_BIT */,
  read_primary_pathname /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_storage_account /* IMPORTED_LONG_NAMED_BIT */,
  read_storage_account /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_date_and_time_of_creation /* IMPORTED_LONG_NAMED_BIT */,
  read_date_and_time_of_creation /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_date_and_time_of_last_modification /* IMPORTED_LONG_NAMED_BIT */,
  read_date_and_time_of_last_modification /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_date_and_time_of_last_read_access /* IMPORTED_LONG_NAMED_BIT */,
  read_date_and_time_of_last_read_access /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_date_and_time_of_last_attribute_modification /* IMPORTED_LONG_NAMED_BIT */,
  read_date_and_time_of_last_attribute_modification /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_identity_of_creator /* IMPORTED_LONG_NAMED_BIT */,
  read_identity_of_creator /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_identity_of_last_modifier /* IMPORTED_LONG_NAMED_BIT */,
  read_identity_of_last_modifier /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_identity_of_last_reader /* IMPORTED_LONG_NAMED_BIT */,
  read_identity_of_last_reader /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_identity_of_last_attribute_modifier /* IMPORTED_LONG_NAMED_BIT */,
  read_identity_of_last_attribute_modifier /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_Object_availability /* IMPORTED_LONG_NAMED_BIT */,
  read_Object_availability /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_Object_size /* IMPORTED_LONG_NAMED_BIT */,
  read_Object_size /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_future_Object_size /* IMPORTED_LONG_NAMED_BIT */,
  read_future_Object_size /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_access_control /* IMPORTED_LONG_NAMED_BIT */,
  read_access_control /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_path_access_control /* IMPORTED_LONG_NAMED_BIT */,
  read_path_access_control /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_l8gal_qualifiCatiOnS /* IMPORTED_LONG_NAMED_BIT */,
  read_l8gal_qualifiCatiOnS /* IMPORTED_SHORT_NAMED_BIT */,
  Attribute_Names_read_private_use /* IMPORTED_LONG_NAMED_BIT */,
  read_private_use /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_Attribute_Names,
  _encode_Attribute_Names,
} from '../ISO8571-FTAM/Attribute-Names.ta';
import {
  Attribute_Extension_Names,
  _decode_Attribute_Extension_Names,
  _encode_Attribute_Extension_Names,
} from '../ISO8571-FTAM/Attribute-Extension-Names.ta';
export {
  Attribute_Extension_Names,
  _decode_Attribute_Extension_Names,
  _encode_Attribute_Extension_Names,
} from '../ISO8571-FTAM/Attribute-Extension-Names.ta';

/* START_OF_SYMBOL_DEFINITION F_LIST_request */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION F_LIST_request */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_LIST_request */
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
    $.hasTag(_TagClass.application, 26),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'scope',
    false,
    $.hasTag(_TagClass.application, 28),
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
    'attribute-names',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'attribute-extension-names',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_LIST_request */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_LIST_request */
/**
 * @summary The Trailing Root Component Types of F_LIST_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_LIST_request: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_LIST_request */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_LIST_request */
/**
 * @summary The Extension Addition Component Types of F_LIST_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_LIST_request: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_LIST_request */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_F_LIST_request */
let _cached_decoder_for_F_LIST_request: $.ASN1Decoder<F_LIST_request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_F_LIST_request */

/* START_OF_SYMBOL_DEFINITION _decode_F_LIST_request */
/**
 * @summary Decodes an ASN.1 element into a(n) F_LIST_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_LIST_request} The decoded data structure.
 */
export function _decode_F_LIST_request(el: _Element) {
  if (!_cached_decoder_for_F_LIST_request) {
    _cached_decoder_for_F_LIST_request = function (
      el: _Element
    ): F_LIST_request {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let attribute_value_asset_tions!: Attribute_Value_Assertions;
      let scope!: Scope;
      let access_passwords: OPTIONAL<Access_Passwords>;
      let path_access_passwords: OPTIONAL<Path_Access_Passwords>;
      let attribute_names!: Attribute_Names;
      let attribute_extension_names: OPTIONAL<Attribute_Extension_Names>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
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
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_LIST_request,
        _extension_additions_list_spec_for_F_LIST_request,
        _root_component_type_list_2_spec_for_F_LIST_request,
        undefined
      );
      return new F_LIST_request /* SEQUENCE_CONSTRUCTOR_CALL */(
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
/* END_OF_SYMBOL_DEFINITION _decode_F_LIST_request */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_F_LIST_request */
let _cached_encoder_for_F_LIST_request: $.ASN1Encoder<F_LIST_request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_F_LIST_request */

/* START_OF_SYMBOL_DEFINITION _encode_F_LIST_request */
/**
 * @summary Encodes a(n) F_LIST_request into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_LIST_request, encoded as an ASN.1 Element.
 */
export function _encode_F_LIST_request(
  value: F_LIST_request,
  elGetter: $.ASN1Encoder<F_LIST_request>
) {
  if (!_cached_encoder_for_F_LIST_request) {
    _cached_encoder_for_F_LIST_request = function (
      value: F_LIST_request,
      elGetter: $.ASN1Encoder<F_LIST_request>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_F_LIST_request */

/* eslint-enable */
