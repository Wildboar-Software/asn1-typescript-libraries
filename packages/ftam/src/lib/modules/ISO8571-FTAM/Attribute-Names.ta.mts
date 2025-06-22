/* eslint-disable */
import {
  BIT_STRING,
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


/**
 * @summary Attribute_Names
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute-Names  ::=  BIT STRING -- Kernel group
 *                     {
 *   read-pathname(0), read-Object-type(18), read-permitted-actions(1),
 *   read-contents-type(2), read-linked-Object(19),
 *   read-Child-objects(23),
 *   -- Storage group
 *   read-primary-pathname(20), read-storage-account(3),
 *   read-date-and-time-of-creation(4),
 *   read-date-and-time-of-last-modification(5),
 *   read-date-and-time-of-last-read-access(6),
 *   read-date-and-time-of-last-attribute-modification(7),
 *   read-identity-of-creator(8), read-identity-of-last-modifier(9),
 *   read-identity-of-last-reader(10),
 *   read-identity-of-last-attribute-modifier(11), read-Object-availability(12),
 *   read-Object-size(13),
 *   read-future-Object-size(14),
 *   -- Security group
 *   read-access-control(15), read-path-access-control(21),
 *   read-l8gal-qualifiCatiOnS(16),
 *   -- Private group
 *   read-private-use(17)}
 * ```
 */
export type Attribute_Names = BIT_STRING;


/**
 * @summary Attribute_Names_read_pathname
 * @constant
 */
export const Attribute_Names_read_pathname: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary read_pathname
 * @constant
 */
export const read_pathname: number = Attribute_Names_read_pathname; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_Object_type
 * @constant
 */
export const Attribute_Names_read_Object_type: number = 18; /* LONG_NAMED_BIT */


/**
 * @summary read_Object_type
 * @constant
 */
export const read_Object_type: number = Attribute_Names_read_Object_type; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_permitted_actions
 * @constant
 */
export const Attribute_Names_read_permitted_actions: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary read_permitted_actions
 * @constant
 */
export const read_permitted_actions: number = Attribute_Names_read_permitted_actions; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_contents_type
 * @constant
 */
export const Attribute_Names_read_contents_type: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary read_contents_type
 * @constant
 */
export const read_contents_type: number = Attribute_Names_read_contents_type; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_linked_Object
 * @constant
 */
export const Attribute_Names_read_linked_Object: number = 19; /* LONG_NAMED_BIT */


/**
 * @summary read_linked_Object
 * @constant
 */
export const read_linked_Object: number = Attribute_Names_read_linked_Object; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_Child_objects
 * @constant
 */
export const Attribute_Names_read_Child_objects: number = 23; /* LONG_NAMED_BIT */


/**
 * @summary read_Child_objects
 * @constant
 */
export const read_Child_objects: number = Attribute_Names_read_Child_objects; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_primary_pathname
 * @constant
 */
export const Attribute_Names_read_primary_pathname: number = 20; /* LONG_NAMED_BIT */


/**
 * @summary read_primary_pathname
 * @constant
 */
export const read_primary_pathname: number = Attribute_Names_read_primary_pathname; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_storage_account
 * @constant
 */
export const Attribute_Names_read_storage_account: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary read_storage_account
 * @constant
 */
export const read_storage_account: number = Attribute_Names_read_storage_account; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_date_and_time_of_creation
 * @constant
 */
export const Attribute_Names_read_date_and_time_of_creation: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary read_date_and_time_of_creation
 * @constant
 */
export const read_date_and_time_of_creation: number = Attribute_Names_read_date_and_time_of_creation; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_date_and_time_of_last_modification
 * @constant
 */
export const Attribute_Names_read_date_and_time_of_last_modification: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary read_date_and_time_of_last_modification
 * @constant
 */
export const read_date_and_time_of_last_modification: number = Attribute_Names_read_date_and_time_of_last_modification; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_date_and_time_of_last_read_access
 * @constant
 */
export const Attribute_Names_read_date_and_time_of_last_read_access: number = 6; /* LONG_NAMED_BIT */


/**
 * @summary read_date_and_time_of_last_read_access
 * @constant
 */
export const read_date_and_time_of_last_read_access: number = Attribute_Names_read_date_and_time_of_last_read_access; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_date_and_time_of_last_attribute_modification
 * @constant
 */
export const Attribute_Names_read_date_and_time_of_last_attribute_modification: number = 7; /* LONG_NAMED_BIT */


/**
 * @summary read_date_and_time_of_last_attribute_modification
 * @constant
 */
export const read_date_and_time_of_last_attribute_modification: number = Attribute_Names_read_date_and_time_of_last_attribute_modification; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_identity_of_creator
 * @constant
 */
export const Attribute_Names_read_identity_of_creator: number = 8; /* LONG_NAMED_BIT */


/**
 * @summary read_identity_of_creator
 * @constant
 */
export const read_identity_of_creator: number = Attribute_Names_read_identity_of_creator; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_identity_of_last_modifier
 * @constant
 */
export const Attribute_Names_read_identity_of_last_modifier: number = 9; /* LONG_NAMED_BIT */


/**
 * @summary read_identity_of_last_modifier
 * @constant
 */
export const read_identity_of_last_modifier: number = Attribute_Names_read_identity_of_last_modifier; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_identity_of_last_reader
 * @constant
 */
export const Attribute_Names_read_identity_of_last_reader: number = 10; /* LONG_NAMED_BIT */


/**
 * @summary read_identity_of_last_reader
 * @constant
 */
export const read_identity_of_last_reader: number = Attribute_Names_read_identity_of_last_reader; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_identity_of_last_attribute_modifier
 * @constant
 */
export const Attribute_Names_read_identity_of_last_attribute_modifier: number = 11; /* LONG_NAMED_BIT */


/**
 * @summary read_identity_of_last_attribute_modifier
 * @constant
 */
export const read_identity_of_last_attribute_modifier: number = Attribute_Names_read_identity_of_last_attribute_modifier; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_Object_availability
 * @constant
 */
export const Attribute_Names_read_Object_availability: number = 12; /* LONG_NAMED_BIT */


/**
 * @summary read_Object_availability
 * @constant
 */
export const read_Object_availability: number = Attribute_Names_read_Object_availability; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_Object_size
 * @constant
 */
export const Attribute_Names_read_Object_size: number = 13; /* LONG_NAMED_BIT */


/**
 * @summary read_Object_size
 * @constant
 */
export const read_Object_size: number = Attribute_Names_read_Object_size; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_future_Object_size
 * @constant
 */
export const Attribute_Names_read_future_Object_size: number = 14; /* LONG_NAMED_BIT */


/**
 * @summary read_future_Object_size
 * @constant
 */
export const read_future_Object_size: number = Attribute_Names_read_future_Object_size; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_access_control
 * @constant
 */
export const Attribute_Names_read_access_control: number = 15; /* LONG_NAMED_BIT */


/**
 * @summary read_access_control
 * @constant
 */
export const read_access_control: number = Attribute_Names_read_access_control; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_path_access_control
 * @constant
 */
export const Attribute_Names_read_path_access_control: number = 21; /* LONG_NAMED_BIT */


/**
 * @summary read_path_access_control
 * @constant
 */
export const read_path_access_control: number = Attribute_Names_read_path_access_control; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_l8gal_qualifiCatiOnS
 * @constant
 */
export const Attribute_Names_read_l8gal_qualifiCatiOnS: number = 16; /* LONG_NAMED_BIT */


/**
 * @summary read_l8gal_qualifiCatiOnS
 * @constant
 */
export const read_l8gal_qualifiCatiOnS: number = Attribute_Names_read_l8gal_qualifiCatiOnS; /* SHORT_NAMED_BIT */


/**
 * @summary Attribute_Names_read_private_use
 * @constant
 */
export const Attribute_Names_read_private_use: number = 17; /* LONG_NAMED_BIT */


/**
 * @summary read_private_use
 * @constant
 */
export const read_private_use: number = Attribute_Names_read_private_use; /* SHORT_NAMED_BIT */




export const _decode_Attribute_Names = $._decodeBitString;




export const _encode_Attribute_Names = $._encodeBitString;


/* eslint-enable */
