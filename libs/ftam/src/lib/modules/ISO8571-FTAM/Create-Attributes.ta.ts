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
  Pathname_Attribute,
  _decode_Pathname_Attribute,
  _encode_Pathname_Attribute,
} from '../ISO8571-FTAM/Pathname-Attribute.ta';
export {
  Pathname_Attribute,
  _decode_Pathname_Attribute,
  _encode_Pathname_Attribute,
} from '../ISO8571-FTAM/Pathname-Attribute.ta';
import {
  Object_Type_Attribute,
  Object_Type_Attribute_file /* IMPORTED_LONG_NAMED_INTEGER */,
  file /* IMPORTED_SHORT_NAMED_INTEGER */,
  Object_Type_Attribute_file_directory /* IMPORTED_LONG_NAMED_INTEGER */,
  file_directory /* IMPORTED_SHORT_NAMED_INTEGER */,
  Object_Type_Attribute_reference /* IMPORTED_LONG_NAMED_INTEGER */,
  reference /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Object_Type_Attribute,
  _encode_Object_Type_Attribute,
} from '../ISO8571-FTAM/Object-Type-Attribute.ta';
export {
  Object_Type_Attribute,
  Object_Type_Attribute_file /* IMPORTED_LONG_NAMED_INTEGER */,
  file /* IMPORTED_SHORT_NAMED_INTEGER */,
  Object_Type_Attribute_file_directory /* IMPORTED_LONG_NAMED_INTEGER */,
  file_directory /* IMPORTED_SHORT_NAMED_INTEGER */,
  Object_Type_Attribute_reference /* IMPORTED_LONG_NAMED_INTEGER */,
  reference /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Object_Type_Attribute,
  _encode_Object_Type_Attribute,
} from '../ISO8571-FTAM/Object-Type-Attribute.ta';
import {
  Permitted_Actions_Attribute,
  Permitted_Actions_Attribute_read /* IMPORTED_LONG_NAMED_BIT */,
  read /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_insert /* IMPORTED_LONG_NAMED_BIT */,
  insert /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_replace /* IMPORTED_LONG_NAMED_BIT */,
  replace /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_extend /* IMPORTED_LONG_NAMED_BIT */,
  extend /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_erase /* IMPORTED_LONG_NAMED_BIT */,
  erase /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_read_attribute /* IMPORTED_LONG_NAMED_BIT */,
  read_attribute /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_change_attribute /* IMPORTED_LONG_NAMED_BIT */,
  change_attribute /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_delete_Object /* IMPORTED_LONG_NAMED_BIT */,
  delete_Object /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_pass /* IMPORTED_LONG_NAMED_BIT */,
  pass /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_link /* IMPORTED_LONG_NAMED_BIT */,
  link /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_traversal /* IMPORTED_LONG_NAMED_BIT */,
  traversal /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_reverse_traversal /* IMPORTED_LONG_NAMED_BIT */,
  reverse_traversal /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_random_Order /* IMPORTED_LONG_NAMED_BIT */,
  random_Order /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_Permitted_Actions_Attribute,
  _encode_Permitted_Actions_Attribute,
} from '../ISO8571-FTAM/Permitted-Actions-Attribute.ta';
export {
  Permitted_Actions_Attribute,
  Permitted_Actions_Attribute_read /* IMPORTED_LONG_NAMED_BIT */,
  read /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_insert /* IMPORTED_LONG_NAMED_BIT */,
  insert /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_replace /* IMPORTED_LONG_NAMED_BIT */,
  replace /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_extend /* IMPORTED_LONG_NAMED_BIT */,
  extend /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_erase /* IMPORTED_LONG_NAMED_BIT */,
  erase /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_read_attribute /* IMPORTED_LONG_NAMED_BIT */,
  read_attribute /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_change_attribute /* IMPORTED_LONG_NAMED_BIT */,
  change_attribute /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_delete_Object /* IMPORTED_LONG_NAMED_BIT */,
  delete_Object /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_pass /* IMPORTED_LONG_NAMED_BIT */,
  pass /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_link /* IMPORTED_LONG_NAMED_BIT */,
  link /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_traversal /* IMPORTED_LONG_NAMED_BIT */,
  traversal /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_reverse_traversal /* IMPORTED_LONG_NAMED_BIT */,
  reverse_traversal /* IMPORTED_SHORT_NAMED_BIT */,
  Permitted_Actions_Attribute_random_Order /* IMPORTED_LONG_NAMED_BIT */,
  random_Order /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_Permitted_Actions_Attribute,
  _encode_Permitted_Actions_Attribute,
} from '../ISO8571-FTAM/Permitted-Actions-Attribute.ta';
import {
  Contents_Type_Attribute,
  _decode_Contents_Type_Attribute,
  _encode_Contents_Type_Attribute,
} from '../ISO8571-FTAM/Contents-Type-Attribute.ta';
export {
  Contents_Type_Attribute,
  _decode_Contents_Type_Attribute,
  _encode_Contents_Type_Attribute,
} from '../ISO8571-FTAM/Contents-Type-Attribute.ta';
import {
  Account_Attribute,
  _decode_Account_Attribute,
  _encode_Account_Attribute,
} from '../ISO8571-FTAM/Account-Attribute.ta';
export {
  Account_Attribute,
  _decode_Account_Attribute,
  _encode_Account_Attribute,
} from '../ISO8571-FTAM/Account-Attribute.ta';
import {
  Object_Availability_Attribute,
  _decode_Object_Availability_Attribute,
  _encode_Object_Availability_Attribute,
} from '../ISO8571-FTAM/Object-Availability-Attribute.ta';
export {
  Object_Availability_Attribute,
  _decode_Object_Availability_Attribute,
  _encode_Object_Availability_Attribute,
} from '../ISO8571-FTAM/Object-Availability-Attribute.ta';
import {
  Object_Size_Attribute,
  _decode_Object_Size_Attribute,
  _encode_Object_Size_Attribute,
} from '../ISO8571-FTAM/Object-Size-Attribute.ta';
export {
  Object_Size_Attribute,
  _decode_Object_Size_Attribute,
  _encode_Object_Size_Attribute,
} from '../ISO8571-FTAM/Object-Size-Attribute.ta';
import {
  Access_Control_Attribute,
  _decode_Access_Control_Attribute,
  _encode_Access_Control_Attribute,
} from '../ISO8571-FTAM/Access-Control-Attribute.ta';
export {
  Access_Control_Attribute,
  _decode_Access_Control_Attribute,
  _encode_Access_Control_Attribute,
} from '../ISO8571-FTAM/Access-Control-Attribute.ta';
import {
  Legal_Qualification_Attribute,
  _decode_Legal_Qualification_Attribute,
  _encode_Legal_Qualification_Attribute,
} from '../ISO8571-FTAM/Legal-Qualification-Attribute.ta';
export {
  Legal_Qualification_Attribute,
  _decode_Legal_Qualification_Attribute,
  _encode_Legal_Qualification_Attribute,
} from '../ISO8571-FTAM/Legal-Qualification-Attribute.ta';
import {
  Private_Use_Attribute,
  _decode_Private_Use_Attribute,
  _encode_Private_Use_Attribute,
} from '../ISO8571-FTAM/Private-Use-Attribute.ta';
export {
  Private_Use_Attribute,
  _decode_Private_Use_Attribute,
  _encode_Private_Use_Attribute,
} from '../ISO8571-FTAM/Private-Use-Attribute.ta';
import {
  Attribute_Extensions,
  _decode_Attribute_Extensions,
  _encode_Attribute_Extensions,
} from '../ISO8571-FTAM/Attribute-Extensions.ta';
export {
  Attribute_Extensions,
  _decode_Attribute_Extensions,
  _encode_Attribute_Extensions,
} from '../ISO8571-FTAM/Attribute-Extensions.ta';

/* START_OF_SYMBOL_DEFINITION Create_Attributes */
/**
 * @summary Create_Attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Create-Attributes ::= [APPLICATION 12] IMPLICIT SEQUENCE {
 *   -- Kerne1 Group
 *   pathname              Pathname-Attribute,
 *   object-type           [18] IMPLICIT Object-Type-Attribute DEFAULT file,
 *   -- This Parameter tan be sent if and only if the
 *   -- limited-filestore-management functional unit is available.
 *   permitted-actions     [1] IMPLICIT Permitted-Actions-Attribute,
 *   contents-type         [2]  Contents-Type-Attribute,
 *   -- Storage group
 *   storage-account       [3]  Account-Attribute OPTIONAL,
 *   object-availability   [12]  Object-Availability-Attribute OPTIONAL,
 *   future-Object-size    [14]  Object-Size-Attribute OPTIONAL,
 *   -- Security group
 *   access-control        [15]  Access-Control-Attribute OPTIONAL,
 *   path-access-control   [21]  Access-Control-Attribute OPTIONAL,
 *   -- This Parameter tan be sent if and only if the
 *   -- enhanced-filestore-management functional unit is available.
 *   legal-qualification   [16]  Legal-Qualification-Attribute OPTIONAL,
 *   -- Private group
 *   private-use           [17]  Private-Use-Attribute OPTIONAL,
 *   -- Attribute Extensions group
 *   attribute-extensions  [22] IMPLICIT Attribute-Extensions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Create_Attributes {
  constructor(
    /**
     * @summary `pathname`.
     * @public
     * @readonly
     */
    readonly pathname: Pathname_Attribute,
    /**
     * @summary `object_type`.
     * @public
     * @readonly
     */
    readonly object_type: OPTIONAL<Object_Type_Attribute>,
    /**
     * @summary `permitted_actions`.
     * @public
     * @readonly
     */
    readonly permitted_actions: Permitted_Actions_Attribute,
    /**
     * @summary `contents_type`.
     * @public
     * @readonly
     */
    readonly contents_type: Contents_Type_Attribute,
    /**
     * @summary `storage_account`.
     * @public
     * @readonly
     */
    readonly storage_account: OPTIONAL<Account_Attribute>,
    /**
     * @summary `object_availability`.
     * @public
     * @readonly
     */
    readonly object_availability: OPTIONAL<Object_Availability_Attribute>,
    /**
     * @summary `future_Object_size`.
     * @public
     * @readonly
     */
    readonly future_Object_size: OPTIONAL<Object_Size_Attribute>,
    /**
     * @summary `access_control`.
     * @public
     * @readonly
     */
    readonly access_control: OPTIONAL<Access_Control_Attribute>,
    /**
     * @summary `path_access_control`.
     * @public
     * @readonly
     */
    readonly path_access_control: OPTIONAL<Access_Control_Attribute>,
    /**
     * @summary `legal_qualification`.
     * @public
     * @readonly
     */
    readonly legal_qualification: OPTIONAL<Legal_Qualification_Attribute>,
    /**
     * @summary `private_use`.
     * @public
     * @readonly
     */
    readonly private_use: OPTIONAL<Private_Use_Attribute>,
    /**
     * @summary `attribute_extensions`.
     * @public
     * @readonly
     */
    readonly attribute_extensions: OPTIONAL<Attribute_Extensions>
  ) {}

  /**
   * @summary Restructures an object into a Create_Attributes
   * @description
   *
   * This takes an `object` and converts it to a `Create_Attributes`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Create_Attributes`.
   * @returns {Create_Attributes}
   */
  public static _from_object(
    _o: { [_K in keyof Create_Attributes]: Create_Attributes[_K] }
  ): Create_Attributes {
    return new Create_Attributes(
      _o.pathname,
      _o.object_type,
      _o.permitted_actions,
      _o.contents_type,
      _o.storage_account,
      _o.object_availability,
      _o.future_Object_size,
      _o.access_control,
      _o.path_access_control,
      _o.legal_qualification,
      _o.private_use,
      _o.attribute_extensions
    );
  }

  /**
   * @summary Getter that returns the default value for `object_type`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_object_type() {
    return file;
  }
}
/* END_OF_SYMBOL_DEFINITION Create_Attributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Create_Attributes */
/**
 * @summary The Leading Root Component Types of Create_Attributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Create_Attributes: $.ComponentSpec[] = [
  new $.ComponentSpec('pathname', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec(
    'object-type',
    true,
    $.hasTag(_TagClass.context, 18),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'permitted-actions',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'contents-type',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'storage-account',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'object-availability',
    true,
    $.hasTag(_TagClass.context, 12),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'future-Object-size',
    true,
    $.hasTag(_TagClass.context, 14),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'access-control',
    true,
    $.hasTag(_TagClass.context, 15),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'path-access-control',
    true,
    $.hasTag(_TagClass.context, 21),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'legal-qualification',
    true,
    $.hasTag(_TagClass.context, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'private-use',
    true,
    $.hasTag(_TagClass.context, 17),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'attribute-extensions',
    true,
    $.hasTag(_TagClass.context, 22),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Create_Attributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Create_Attributes */
/**
 * @summary The Trailing Root Component Types of Create_Attributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Create_Attributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Create_Attributes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Create_Attributes */
/**
 * @summary The Extension Addition Component Types of Create_Attributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Create_Attributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Create_Attributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Create_Attributes */
let _cached_decoder_for_Create_Attributes: $.ASN1Decoder<Create_Attributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Create_Attributes */

/* START_OF_SYMBOL_DEFINITION _decode_Create_Attributes */
/**
 * @summary Decodes an ASN.1 element into a(n) Create_Attributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Create_Attributes} The decoded data structure.
 */
export function _decode_Create_Attributes(el: _Element) {
  if (!_cached_decoder_for_Create_Attributes) {
    _cached_decoder_for_Create_Attributes = $._decode_implicit<Create_Attributes>(
      () =>
        function (el: _Element): Create_Attributes {
          /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          let pathname!: Pathname_Attribute;
          let object_type: OPTIONAL<Object_Type_Attribute> =
            Create_Attributes._default_value_for_object_type;
          let permitted_actions!: Permitted_Actions_Attribute;
          let contents_type!: Contents_Type_Attribute;
          let storage_account: OPTIONAL<Account_Attribute>;
          let object_availability: OPTIONAL<Object_Availability_Attribute>;
          let future_Object_size: OPTIONAL<Object_Size_Attribute>;
          let access_control: OPTIONAL<Access_Control_Attribute>;
          let path_access_control: OPTIONAL<Access_Control_Attribute>;
          let legal_qualification: OPTIONAL<Legal_Qualification_Attribute>;
          let private_use: OPTIONAL<Private_Use_Attribute>;
          let attribute_extensions: OPTIONAL<Attribute_Extensions>;
          /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          /* START_OF_CALLBACKS_MAP */
          const callbacks: $.DecodingMap = {
            pathname: (_el: _Element): void => {
              pathname = _decode_Pathname_Attribute(_el);
            },
            'object-type': (_el: _Element): void => {
              object_type = $._decode_implicit<Object_Type_Attribute>(
                () => _decode_Object_Type_Attribute
              )(_el);
            },
            'permitted-actions': (_el: _Element): void => {
              permitted_actions = $._decode_implicit<Permitted_Actions_Attribute>(
                () => _decode_Permitted_Actions_Attribute
              )(_el);
            },
            'contents-type': (_el: _Element): void => {
              contents_type = $._decode_explicit<Contents_Type_Attribute>(
                () => _decode_Contents_Type_Attribute
              )(_el);
            },
            'storage-account': (_el: _Element): void => {
              storage_account = $._decode_explicit<Account_Attribute>(
                () => _decode_Account_Attribute
              )(_el);
            },
            'object-availability': (_el: _Element): void => {
              object_availability = $._decode_explicit<Object_Availability_Attribute>(
                () => _decode_Object_Availability_Attribute
              )(_el);
            },
            'future-Object-size': (_el: _Element): void => {
              future_Object_size = $._decode_explicit<Object_Size_Attribute>(
                () => _decode_Object_Size_Attribute
              )(_el);
            },
            'access-control': (_el: _Element): void => {
              access_control = $._decode_explicit<Access_Control_Attribute>(
                () => _decode_Access_Control_Attribute
              )(_el);
            },
            'path-access-control': (_el: _Element): void => {
              path_access_control = $._decode_explicit<Access_Control_Attribute>(
                () => _decode_Access_Control_Attribute
              )(_el);
            },
            'legal-qualification': (_el: _Element): void => {
              legal_qualification = $._decode_explicit<Legal_Qualification_Attribute>(
                () => _decode_Legal_Qualification_Attribute
              )(_el);
            },
            'private-use': (_el: _Element): void => {
              private_use = $._decode_explicit<Private_Use_Attribute>(
                () => _decode_Private_Use_Attribute
              )(_el);
            },
            'attribute-extensions': (_el: _Element): void => {
              attribute_extensions = $._decode_implicit<Attribute_Extensions>(
                () => _decode_Attribute_Extensions
              )(_el);
            },
          };
          /* END_OF_CALLBACKS_MAP */
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_Create_Attributes,
            _extension_additions_list_spec_for_Create_Attributes,
            _root_component_type_list_2_spec_for_Create_Attributes,
            undefined
          );
          return new Create_Attributes /* SEQUENCE_CONSTRUCTOR_CALL */(
            pathname,
            object_type,
            permitted_actions,
            contents_type,
            storage_account,
            object_availability,
            future_Object_size,
            access_control,
            path_access_control,
            legal_qualification,
            private_use,
            attribute_extensions
          );
        }
    );
  }
  return _cached_decoder_for_Create_Attributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Create_Attributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Create_Attributes */
let _cached_encoder_for_Create_Attributes: $.ASN1Encoder<Create_Attributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Create_Attributes */

/* START_OF_SYMBOL_DEFINITION _encode_Create_Attributes */
/**
 * @summary Encodes a(n) Create_Attributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Create_Attributes, encoded as an ASN.1 Element.
 */
export function _encode_Create_Attributes(
  value: Create_Attributes,
  elGetter: $.ASN1Encoder<Create_Attributes>
) {
  if (!_cached_encoder_for_Create_Attributes) {
    _cached_encoder_for_Create_Attributes = $._encode_implicit(
      _TagClass.application,
      12,
      () =>
        function (
          value: Create_Attributes,
          elGetter: $.ASN1Encoder<Create_Attributes>
        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat([
                /* REQUIRED   */ _encode_Pathname_Attribute(
                  value.pathname,
                  $.BER
                ),
                /* IF_DEFAULT */ value.object_type === undefined ||
                $.deepEq(
                  value.object_type,
                  Create_Attributes._default_value_for_object_type
                )
                  ? undefined
                  : $._encode_implicit(
                      _TagClass.context,
                      18,
                      () => _encode_Object_Type_Attribute,
                      $.BER
                    )(value.object_type, $.BER),
                /* REQUIRED   */ $._encode_implicit(
                  _TagClass.context,
                  1,
                  () => _encode_Permitted_Actions_Attribute,
                  $.BER
                )(value.permitted_actions, $.BER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  2,
                  () => _encode_Contents_Type_Attribute,
                  $.BER
                )(value.contents_type, $.BER),
                /* IF_ABSENT  */ value.storage_account === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      3,
                      () => _encode_Account_Attribute,
                      $.BER
                    )(value.storage_account, $.BER),
                /* IF_ABSENT  */ value.object_availability === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      12,
                      () => _encode_Object_Availability_Attribute,
                      $.BER
                    )(value.object_availability, $.BER),
                /* IF_ABSENT  */ value.future_Object_size === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      14,
                      () => _encode_Object_Size_Attribute,
                      $.BER
                    )(value.future_Object_size, $.BER),
                /* IF_ABSENT  */ value.access_control === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      15,
                      () => _encode_Access_Control_Attribute,
                      $.BER
                    )(value.access_control, $.BER),
                /* IF_ABSENT  */ value.path_access_control === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      21,
                      () => _encode_Access_Control_Attribute,
                      $.BER
                    )(value.path_access_control, $.BER),
                /* IF_ABSENT  */ value.legal_qualification === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      16,
                      () => _encode_Legal_Qualification_Attribute,
                      $.BER
                    )(value.legal_qualification, $.BER),
                /* IF_ABSENT  */ value.private_use === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      17,
                      () => _encode_Private_Use_Attribute,
                      $.BER
                    )(value.private_use, $.BER),
                /* IF_ABSENT  */ value.attribute_extensions === undefined
                  ? undefined
                  : $._encode_implicit(
                      _TagClass.context,
                      22,
                      () => _encode_Attribute_Extensions,
                      $.BER
                    )(value.attribute_extensions, $.BER),
              ])
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_Create_Attributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Create_Attributes */

/* eslint-enable */
