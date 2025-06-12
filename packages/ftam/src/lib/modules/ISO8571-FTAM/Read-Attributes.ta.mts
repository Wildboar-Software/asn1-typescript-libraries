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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  Pathname_Attribute,
  _decode_Pathname_Attribute,
  _encode_Pathname_Attribute,
} from '../ISO8571-FTAM/Pathname-Attribute.ta.mjs';
export {
  Pathname_Attribute,
  _decode_Pathname_Attribute,
  _encode_Pathname_Attribute,
} from '../ISO8571-FTAM/Pathname-Attribute.ta.mjs';
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
} from '../ISO8571-FTAM/Object-Type-Attribute.ta.mjs';
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
} from '../ISO8571-FTAM/Object-Type-Attribute.ta.mjs';
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
} from '../ISO8571-FTAM/Permitted-Actions-Attribute.ta.mjs';
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
} from '../ISO8571-FTAM/Permitted-Actions-Attribute.ta.mjs';
import {
  Contents_Type_Attribute,
  _decode_Contents_Type_Attribute,
  _encode_Contents_Type_Attribute,
} from '../ISO8571-FTAM/Contents-Type-Attribute.ta.mjs';
export {
  Contents_Type_Attribute,
  _decode_Contents_Type_Attribute,
  _encode_Contents_Type_Attribute,
} from '../ISO8571-FTAM/Contents-Type-Attribute.ta.mjs';
import {
  Child_Objects_Attribute,
  _decode_Child_Objects_Attribute,
  _encode_Child_Objects_Attribute,
} from '../ISO8571-FTAM/Child-Objects-Attribute.ta.mjs';
export {
  Child_Objects_Attribute,
  _decode_Child_Objects_Attribute,
  _encode_Child_Objects_Attribute,
} from '../ISO8571-FTAM/Child-Objects-Attribute.ta.mjs';
import {
  Account_Attribute,
  _decode_Account_Attribute,
  _encode_Account_Attribute,
} from '../ISO8571-FTAM/Account-Attribute.ta.mjs';
export {
  Account_Attribute,
  _decode_Account_Attribute,
  _encode_Account_Attribute,
} from '../ISO8571-FTAM/Account-Attribute.ta.mjs';
import {
  Date_and_Time_Attribute,
  _decode_Date_and_Time_Attribute,
  _encode_Date_and_Time_Attribute,
} from '../ISO8571-FTAM/Date-and-Time-Attribute.ta.mjs';
export {
  Date_and_Time_Attribute,
  _decode_Date_and_Time_Attribute,
  _encode_Date_and_Time_Attribute,
} from '../ISO8571-FTAM/Date-and-Time-Attribute.ta.mjs';
import {
  User_Identity_Attribute,
  _decode_User_Identity_Attribute,
  _encode_User_Identity_Attribute,
} from '../ISO8571-FTAM/User-Identity-Attribute.ta.mjs';
export {
  User_Identity_Attribute,
  _decode_User_Identity_Attribute,
  _encode_User_Identity_Attribute,
} from '../ISO8571-FTAM/User-Identity-Attribute.ta.mjs';
import {
  Object_Availability_Attribute,
  _decode_Object_Availability_Attribute,
  _encode_Object_Availability_Attribute,
} from '../ISO8571-FTAM/Object-Availability-Attribute.ta.mjs';
export {
  Object_Availability_Attribute,
  _decode_Object_Availability_Attribute,
  _encode_Object_Availability_Attribute,
} from '../ISO8571-FTAM/Object-Availability-Attribute.ta.mjs';
import {
  Object_Size_Attribute,
  _decode_Object_Size_Attribute,
  _encode_Object_Size_Attribute,
} from '../ISO8571-FTAM/Object-Size-Attribute.ta.mjs';
export {
  Object_Size_Attribute,
  _decode_Object_Size_Attribute,
  _encode_Object_Size_Attribute,
} from '../ISO8571-FTAM/Object-Size-Attribute.ta.mjs';
import {
  Access_Control_Attribute,
  _decode_Access_Control_Attribute,
  _encode_Access_Control_Attribute,
} from '../ISO8571-FTAM/Access-Control-Attribute.ta.mjs';
export {
  Access_Control_Attribute,
  _decode_Access_Control_Attribute,
  _encode_Access_Control_Attribute,
} from '../ISO8571-FTAM/Access-Control-Attribute.ta.mjs';
import {
  Legal_Qualification_Attribute,
  _decode_Legal_Qualification_Attribute,
  _encode_Legal_Qualification_Attribute,
} from '../ISO8571-FTAM/Legal-Qualification-Attribute.ta.mjs';
export {
  Legal_Qualification_Attribute,
  _decode_Legal_Qualification_Attribute,
  _encode_Legal_Qualification_Attribute,
} from '../ISO8571-FTAM/Legal-Qualification-Attribute.ta.mjs';
import {
  Private_Use_Attribute,
  _decode_Private_Use_Attribute,
  _encode_Private_Use_Attribute,
} from '../ISO8571-FTAM/Private-Use-Attribute.ta.mjs';
export {
  Private_Use_Attribute,
  _decode_Private_Use_Attribute,
  _encode_Private_Use_Attribute,
} from '../ISO8571-FTAM/Private-Use-Attribute.ta.mjs';
import {
  Attribute_Extensions,
  _decode_Attribute_Extensions,
  _encode_Attribute_Extensions,
} from '../ISO8571-FTAM/Attribute-Extensions.ta.mjs';
export {
  Attribute_Extensions,
  _decode_Attribute_Extensions,
  _encode_Attribute_Extensions,
} from '../ISO8571-FTAM/Attribute-Extensions.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Read_Attributes */
/**
 * @summary Read_Attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Read-Attributes ::= [APPLICATION 18] IMPLICIT SEQUENCE {
 *   -- Kerne1 Group
 *   pathname                                      Pathname-Attribute OPTIONAL,
 *   object-type
 *     [18] IMPLICIT Object-Type-Attribute OPTIONAL,
 *   -- This Parameter tan be sent if and only if
 *   -- the limited-filestore-management functional unit is available.
 *   permitted-actions
 *     [1] IMPLICIT Permitted-Actions-Attribute OPTIONAL,
 *   contents-type
 *     [2]  Contents-Type-Attribute OPTIONAL,
 *   linked-Object
 *     [19]  Pathname-Attribute OPTIONAL,
 *   -- This Parameter tan be sent if and only if
 *   -- the limited-filestore-management functional unit is available.
 *   child-objects
 *     [23]  Child-Objects-Attribute OPTIONAL,
 *   -- This Parameter tan be sent if and only if
 *   -- the limited-filestore-management functional unit is available.
 *   -- Storage group
 *   primaty-pathname
 *     [20]  Pathname-Attribute OPTIONAL,
 *   storage-account                               [3]  Account-Attribute OPTIONAL,
 *   date-and-time-of-creation
 *     [4]  Date-and-Time-Attribute OPTIONAL,
 *   date-and-time-of-last-modification
 *     [5]  Date-and-Time-Attribute OPTIONAL,
 *   date-and-time-of-last-read-access
 *     [6]  Date-and-Time-Attribute OPTIONAL,
 *   date-and-time-of-last-attribute-modification
 *     [7]  Date-and-Time-Attribute OPTIONAL,
 *   identity-of-creator
 *     [8]  User-Identity-Attribute OPTIONAL,
 *   identity-of-last-modifier
 *     [9]  User-Identity-Attribute OPTIONAL,
 *   identity-of-last-reader
 *     [10]  User-Identity-Attribute OPTIONAL,
 *   identity-last-attribute-modifier
 *     [11]  User-Identity-Attribute OPTIONAL,
 *   object-availability
 *     [12]  Object-Availability-Attribute OPTIONAL,
 *   object-size
 *     [13]  Object-Size-Attribute OPTIONAL,
 *   future-Object-size
 *     [14]  Object-Size-Attribute OPTIONAL,
 *   -- Security group
 *   access-control
 *     [15]  Access-Control-Attribute OPTIONAL,
 *   path-access-control
 *     [21]  Access-Control-Attribute OPTIONAL,
 *   -- This Parameter tan be sent if and only if
 *   -- the limited-filestore-management functional unit is available.
 *   legal-qualification
 *     [16]  Legal-Qualification-Attribute OPTIONAL,
 *   -- Private group
 *   private-use
 *     [17]  Private-Use-Attribute OPTIONAL,
 *   -- Attribute Extensions group
 *   attribute-extensions
 *     [22] IMPLICIT Attribute-Extensions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Read_Attributes {
  constructor(
    /**
     * @summary `pathname`.
     * @public
     * @readonly
     */
    readonly pathname: OPTIONAL<Pathname_Attribute>,
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
    readonly permitted_actions: OPTIONAL<Permitted_Actions_Attribute>,
    /**
     * @summary `contents_type`.
     * @public
     * @readonly
     */
    readonly contents_type: OPTIONAL<Contents_Type_Attribute>,
    /**
     * @summary `linked_Object`.
     * @public
     * @readonly
     */
    readonly linked_Object: OPTIONAL<Pathname_Attribute>,
    /**
     * @summary `child_objects`.
     * @public
     * @readonly
     */
    readonly child_objects: OPTIONAL<Child_Objects_Attribute>,
    /**
     * @summary `primaty_pathname`.
     * @public
     * @readonly
     */
    readonly primaty_pathname: OPTIONAL<Pathname_Attribute>,
    /**
     * @summary `storage_account`.
     * @public
     * @readonly
     */
    readonly storage_account: OPTIONAL<Account_Attribute>,
    /**
     * @summary `date_and_time_of_creation`.
     * @public
     * @readonly
     */
    readonly date_and_time_of_creation: OPTIONAL<Date_and_Time_Attribute>,
    /**
     * @summary `date_and_time_of_last_modification`.
     * @public
     * @readonly
     */
    readonly date_and_time_of_last_modification: OPTIONAL<Date_and_Time_Attribute>,
    /**
     * @summary `date_and_time_of_last_read_access`.
     * @public
     * @readonly
     */
    readonly date_and_time_of_last_read_access: OPTIONAL<Date_and_Time_Attribute>,
    /**
     * @summary `date_and_time_of_last_attribute_modification`.
     * @public
     * @readonly
     */
    readonly date_and_time_of_last_attribute_modification: OPTIONAL<Date_and_Time_Attribute>,
    /**
     * @summary `identity_of_creator`.
     * @public
     * @readonly
     */
    readonly identity_of_creator: OPTIONAL<User_Identity_Attribute>,
    /**
     * @summary `identity_of_last_modifier`.
     * @public
     * @readonly
     */
    readonly identity_of_last_modifier: OPTIONAL<User_Identity_Attribute>,
    /**
     * @summary `identity_of_last_reader`.
     * @public
     * @readonly
     */
    readonly identity_of_last_reader: OPTIONAL<User_Identity_Attribute>,
    /**
     * @summary `identity_last_attribute_modifier`.
     * @public
     * @readonly
     */
    readonly identity_last_attribute_modifier: OPTIONAL<User_Identity_Attribute>,
    /**
     * @summary `object_availability`.
     * @public
     * @readonly
     */
    readonly object_availability: OPTIONAL<Object_Availability_Attribute>,
    /**
     * @summary `object_size`.
     * @public
     * @readonly
     */
    readonly object_size: OPTIONAL<Object_Size_Attribute>,
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
   * @summary Restructures an object into a Read_Attributes
   * @description
   *
   * This takes an `object` and converts it to a `Read_Attributes`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Read_Attributes`.
   * @returns {Read_Attributes}
   */
  public static _from_object(
    _o: { [_K in keyof Read_Attributes]: Read_Attributes[_K] }
  ): Read_Attributes {
    return new Read_Attributes(
      _o.pathname,
      _o.object_type,
      _o.permitted_actions,
      _o.contents_type,
      _o.linked_Object,
      _o.child_objects,
      _o.primaty_pathname,
      _o.storage_account,
      _o.date_and_time_of_creation,
      _o.date_and_time_of_last_modification,
      _o.date_and_time_of_last_read_access,
      _o.date_and_time_of_last_attribute_modification,
      _o.identity_of_creator,
      _o.identity_of_last_modifier,
      _o.identity_of_last_reader,
      _o.identity_last_attribute_modifier,
      _o.object_availability,
      _o.object_size,
      _o.future_Object_size,
      _o.access_control,
      _o.path_access_control,
      _o.legal_qualification,
      _o.private_use,
      _o.attribute_extensions
    );
  }
}
/* END_OF_SYMBOL_DEFINITION Read_Attributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Read_Attributes */
/**
 * @summary The Leading Root Component Types of Read_Attributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Read_Attributes: $.ComponentSpec[] = [
  new $.ComponentSpec('pathname', true, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec(
    'object-type',
    true,
    $.hasTag(_TagClass.context, 18),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'permitted-actions',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'contents-type',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'linked-Object',
    true,
    $.hasTag(_TagClass.context, 19),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'child-objects',
    true,
    $.hasTag(_TagClass.context, 23),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'primaty-pathname',
    true,
    $.hasTag(_TagClass.context, 20),
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
    'date-and-time-of-creation',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'date-and-time-of-last-modification',
    true,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'date-and-time-of-last-read-access',
    true,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'date-and-time-of-last-attribute-modification',
    true,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'identity-of-creator',
    true,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'identity-of-last-modifier',
    true,
    $.hasTag(_TagClass.context, 9),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'identity-of-last-reader',
    true,
    $.hasTag(_TagClass.context, 10),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'identity-last-attribute-modifier',
    true,
    $.hasTag(_TagClass.context, 11),
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
    'object-size',
    true,
    $.hasTag(_TagClass.context, 13),
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Read_Attributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Read_Attributes */
/**
 * @summary The Trailing Root Component Types of Read_Attributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Read_Attributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Read_Attributes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Read_Attributes */
/**
 * @summary The Extension Addition Component Types of Read_Attributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Read_Attributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Read_Attributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Read_Attributes */
let _cached_decoder_for_Read_Attributes: $.ASN1Decoder<Read_Attributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Read_Attributes */

/* START_OF_SYMBOL_DEFINITION _decode_Read_Attributes */
/**
 * @summary Decodes an ASN.1 element into a(n) Read_Attributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Read_Attributes} The decoded data structure.
 */
export function _decode_Read_Attributes(el: _Element) {
  if (!_cached_decoder_for_Read_Attributes) {
    _cached_decoder_for_Read_Attributes = $._decode_implicit<Read_Attributes>(
      () =>
        function (el: _Element): Read_Attributes {
          /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          let pathname: OPTIONAL<Pathname_Attribute>;
          let object_type: OPTIONAL<Object_Type_Attribute>;
          let permitted_actions: OPTIONAL<Permitted_Actions_Attribute>;
          let contents_type: OPTIONAL<Contents_Type_Attribute>;
          let linked_Object: OPTIONAL<Pathname_Attribute>;
          let child_objects: OPTIONAL<Child_Objects_Attribute>;
          let primaty_pathname: OPTIONAL<Pathname_Attribute>;
          let storage_account: OPTIONAL<Account_Attribute>;
          let date_and_time_of_creation: OPTIONAL<Date_and_Time_Attribute>;
          let date_and_time_of_last_modification: OPTIONAL<Date_and_Time_Attribute>;
          let date_and_time_of_last_read_access: OPTIONAL<Date_and_Time_Attribute>;
          let date_and_time_of_last_attribute_modification: OPTIONAL<Date_and_Time_Attribute>;
          let identity_of_creator: OPTIONAL<User_Identity_Attribute>;
          let identity_of_last_modifier: OPTIONAL<User_Identity_Attribute>;
          let identity_of_last_reader: OPTIONAL<User_Identity_Attribute>;
          let identity_last_attribute_modifier: OPTIONAL<User_Identity_Attribute>;
          let object_availability: OPTIONAL<Object_Availability_Attribute>;
          let object_size: OPTIONAL<Object_Size_Attribute>;
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
            'linked-Object': (_el: _Element): void => {
              linked_Object = $._decode_explicit<Pathname_Attribute>(
                () => _decode_Pathname_Attribute
              )(_el);
            },
            'child-objects': (_el: _Element): void => {
              child_objects = $._decode_explicit<Child_Objects_Attribute>(
                () => _decode_Child_Objects_Attribute
              )(_el);
            },
            'primaty-pathname': (_el: _Element): void => {
              primaty_pathname = $._decode_explicit<Pathname_Attribute>(
                () => _decode_Pathname_Attribute
              )(_el);
            },
            'storage-account': (_el: _Element): void => {
              storage_account = $._decode_explicit<Account_Attribute>(
                () => _decode_Account_Attribute
              )(_el);
            },
            'date-and-time-of-creation': (_el: _Element): void => {
              date_and_time_of_creation = $._decode_explicit<Date_and_Time_Attribute>(
                () => _decode_Date_and_Time_Attribute
              )(_el);
            },
            'date-and-time-of-last-modification': (_el: _Element): void => {
              date_and_time_of_last_modification = $._decode_explicit<Date_and_Time_Attribute>(
                () => _decode_Date_and_Time_Attribute
              )(_el);
            },
            'date-and-time-of-last-read-access': (_el: _Element): void => {
              date_and_time_of_last_read_access = $._decode_explicit<Date_and_Time_Attribute>(
                () => _decode_Date_and_Time_Attribute
              )(_el);
            },
            'date-and-time-of-last-attribute-modification': (
              _el: _Element
            ): void => {
              date_and_time_of_last_attribute_modification = $._decode_explicit<Date_and_Time_Attribute>(
                () => _decode_Date_and_Time_Attribute
              )(_el);
            },
            'identity-of-creator': (_el: _Element): void => {
              identity_of_creator = $._decode_explicit<User_Identity_Attribute>(
                () => _decode_User_Identity_Attribute
              )(_el);
            },
            'identity-of-last-modifier': (_el: _Element): void => {
              identity_of_last_modifier = $._decode_explicit<User_Identity_Attribute>(
                () => _decode_User_Identity_Attribute
              )(_el);
            },
            'identity-of-last-reader': (_el: _Element): void => {
              identity_of_last_reader = $._decode_explicit<User_Identity_Attribute>(
                () => _decode_User_Identity_Attribute
              )(_el);
            },
            'identity-last-attribute-modifier': (_el: _Element): void => {
              identity_last_attribute_modifier = $._decode_explicit<User_Identity_Attribute>(
                () => _decode_User_Identity_Attribute
              )(_el);
            },
            'object-availability': (_el: _Element): void => {
              object_availability = $._decode_explicit<Object_Availability_Attribute>(
                () => _decode_Object_Availability_Attribute
              )(_el);
            },
            'object-size': (_el: _Element): void => {
              object_size = $._decode_explicit<Object_Size_Attribute>(
                () => _decode_Object_Size_Attribute
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
            _root_component_type_list_1_spec_for_Read_Attributes,
            _extension_additions_list_spec_for_Read_Attributes,
            _root_component_type_list_2_spec_for_Read_Attributes,
            undefined
          );
          return new Read_Attributes /* SEQUENCE_CONSTRUCTOR_CALL */(
            pathname,
            object_type,
            permitted_actions,
            contents_type,
            linked_Object,
            child_objects,
            primaty_pathname,
            storage_account,
            date_and_time_of_creation,
            date_and_time_of_last_modification,
            date_and_time_of_last_read_access,
            date_and_time_of_last_attribute_modification,
            identity_of_creator,
            identity_of_last_modifier,
            identity_of_last_reader,
            identity_last_attribute_modifier,
            object_availability,
            object_size,
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
  return _cached_decoder_for_Read_Attributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Read_Attributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Read_Attributes */
let _cached_encoder_for_Read_Attributes: $.ASN1Encoder<Read_Attributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Read_Attributes */

/* START_OF_SYMBOL_DEFINITION _encode_Read_Attributes */
/**
 * @summary Encodes a(n) Read_Attributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Read_Attributes, encoded as an ASN.1 Element.
 */
export function _encode_Read_Attributes(
  value: Read_Attributes,
  elGetter: $.ASN1Encoder<Read_Attributes>
) {
  if (!_cached_encoder_for_Read_Attributes) {
    _cached_encoder_for_Read_Attributes = $._encode_implicit(
      _TagClass.application,
      18,
      () =>
        function (
          value: Read_Attributes,
          elGetter: $.ASN1Encoder<Read_Attributes>
        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat([
                /* IF_ABSENT  */ value.pathname === undefined
                  ? undefined
                  : _encode_Pathname_Attribute(value.pathname, $.BER),
                /* IF_ABSENT  */ value.object_type === undefined
                  ? undefined
                  : $._encode_implicit(
                      _TagClass.context,
                      18,
                      () => _encode_Object_Type_Attribute,
                      $.BER
                    )(value.object_type, $.BER),
                /* IF_ABSENT  */ value.permitted_actions === undefined
                  ? undefined
                  : $._encode_implicit(
                      _TagClass.context,
                      1,
                      () => _encode_Permitted_Actions_Attribute,
                      $.BER
                    )(value.permitted_actions, $.BER),
                /* IF_ABSENT  */ value.contents_type === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      2,
                      () => _encode_Contents_Type_Attribute,
                      $.BER
                    )(value.contents_type, $.BER),
                /* IF_ABSENT  */ value.linked_Object === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      19,
                      () => _encode_Pathname_Attribute,
                      $.BER
                    )(value.linked_Object, $.BER),
                /* IF_ABSENT  */ value.child_objects === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      23,
                      () => _encode_Child_Objects_Attribute,
                      $.BER
                    )(value.child_objects, $.BER),
                /* IF_ABSENT  */ value.primaty_pathname === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      20,
                      () => _encode_Pathname_Attribute,
                      $.BER
                    )(value.primaty_pathname, $.BER),
                /* IF_ABSENT  */ value.storage_account === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      3,
                      () => _encode_Account_Attribute,
                      $.BER
                    )(value.storage_account, $.BER),
                /* IF_ABSENT  */ value.date_and_time_of_creation === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      4,
                      () => _encode_Date_and_Time_Attribute,
                      $.BER
                    )(value.date_and_time_of_creation, $.BER),
                /* IF_ABSENT  */ value.date_and_time_of_last_modification ===
                undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      5,
                      () => _encode_Date_and_Time_Attribute,
                      $.BER
                    )(value.date_and_time_of_last_modification, $.BER),
                /* IF_ABSENT  */ value.date_and_time_of_last_read_access ===
                undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      6,
                      () => _encode_Date_and_Time_Attribute,
                      $.BER
                    )(value.date_and_time_of_last_read_access, $.BER),
                /* IF_ABSENT  */ value.date_and_time_of_last_attribute_modification ===
                undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      7,
                      () => _encode_Date_and_Time_Attribute,
                      $.BER
                    )(
                      value.date_and_time_of_last_attribute_modification,
                      $.BER
                    ),
                /* IF_ABSENT  */ value.identity_of_creator === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      8,
                      () => _encode_User_Identity_Attribute,
                      $.BER
                    )(value.identity_of_creator, $.BER),
                /* IF_ABSENT  */ value.identity_of_last_modifier === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      9,
                      () => _encode_User_Identity_Attribute,
                      $.BER
                    )(value.identity_of_last_modifier, $.BER),
                /* IF_ABSENT  */ value.identity_of_last_reader === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      10,
                      () => _encode_User_Identity_Attribute,
                      $.BER
                    )(value.identity_of_last_reader, $.BER),
                /* IF_ABSENT  */ value.identity_last_attribute_modifier ===
                undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      11,
                      () => _encode_User_Identity_Attribute,
                      $.BER
                    )(value.identity_last_attribute_modifier, $.BER),
                /* IF_ABSENT  */ value.object_availability === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      12,
                      () => _encode_Object_Availability_Attribute,
                      $.BER
                    )(value.object_availability, $.BER),
                /* IF_ABSENT  */ value.object_size === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      13,
                      () => _encode_Object_Size_Attribute,
                      $.BER
                    )(value.object_size, $.BER),
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
  return _cached_encoder_for_Read_Attributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Read_Attributes */

/* eslint-enable */
