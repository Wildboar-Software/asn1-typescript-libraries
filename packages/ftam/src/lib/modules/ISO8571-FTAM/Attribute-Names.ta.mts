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

/* START_OF_SYMBOL_DEFINITION Attribute_Names */
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
/* END_OF_SYMBOL_DEFINITION Attribute_Names */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_pathname */
/**
 * @summary Attribute_Names_read_pathname
 * @constant
 */
export const Attribute_Names_read_pathname: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_pathname */

/* START_OF_SYMBOL_DEFINITION read_pathname */
/**
 * @summary read_pathname
 * @constant
 */
export const read_pathname: number = Attribute_Names_read_pathname; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_pathname */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_Object_type */
/**
 * @summary Attribute_Names_read_Object_type
 * @constant
 */
export const Attribute_Names_read_Object_type: number = 18; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_Object_type */

/* START_OF_SYMBOL_DEFINITION read_Object_type */
/**
 * @summary read_Object_type
 * @constant
 */
export const read_Object_type: number = Attribute_Names_read_Object_type; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_Object_type */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_permitted_actions */
/**
 * @summary Attribute_Names_read_permitted_actions
 * @constant
 */
export const Attribute_Names_read_permitted_actions: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_permitted_actions */

/* START_OF_SYMBOL_DEFINITION read_permitted_actions */
/**
 * @summary read_permitted_actions
 * @constant
 */
export const read_permitted_actions: number = Attribute_Names_read_permitted_actions; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_permitted_actions */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_contents_type */
/**
 * @summary Attribute_Names_read_contents_type
 * @constant
 */
export const Attribute_Names_read_contents_type: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_contents_type */

/* START_OF_SYMBOL_DEFINITION read_contents_type */
/**
 * @summary read_contents_type
 * @constant
 */
export const read_contents_type: number = Attribute_Names_read_contents_type; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_contents_type */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_linked_Object */
/**
 * @summary Attribute_Names_read_linked_Object
 * @constant
 */
export const Attribute_Names_read_linked_Object: number = 19; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_linked_Object */

/* START_OF_SYMBOL_DEFINITION read_linked_Object */
/**
 * @summary read_linked_Object
 * @constant
 */
export const read_linked_Object: number = Attribute_Names_read_linked_Object; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_linked_Object */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_Child_objects */
/**
 * @summary Attribute_Names_read_Child_objects
 * @constant
 */
export const Attribute_Names_read_Child_objects: number = 23; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_Child_objects */

/* START_OF_SYMBOL_DEFINITION read_Child_objects */
/**
 * @summary read_Child_objects
 * @constant
 */
export const read_Child_objects: number = Attribute_Names_read_Child_objects; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_Child_objects */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_primary_pathname */
/**
 * @summary Attribute_Names_read_primary_pathname
 * @constant
 */
export const Attribute_Names_read_primary_pathname: number = 20; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_primary_pathname */

/* START_OF_SYMBOL_DEFINITION read_primary_pathname */
/**
 * @summary read_primary_pathname
 * @constant
 */
export const read_primary_pathname: number = Attribute_Names_read_primary_pathname; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_primary_pathname */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_storage_account */
/**
 * @summary Attribute_Names_read_storage_account
 * @constant
 */
export const Attribute_Names_read_storage_account: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_storage_account */

/* START_OF_SYMBOL_DEFINITION read_storage_account */
/**
 * @summary read_storage_account
 * @constant
 */
export const read_storage_account: number = Attribute_Names_read_storage_account; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_storage_account */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_date_and_time_of_creation */
/**
 * @summary Attribute_Names_read_date_and_time_of_creation
 * @constant
 */
export const Attribute_Names_read_date_and_time_of_creation: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_date_and_time_of_creation */

/* START_OF_SYMBOL_DEFINITION read_date_and_time_of_creation */
/**
 * @summary read_date_and_time_of_creation
 * @constant
 */
export const read_date_and_time_of_creation: number = Attribute_Names_read_date_and_time_of_creation; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_date_and_time_of_creation */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_date_and_time_of_last_modification */
/**
 * @summary Attribute_Names_read_date_and_time_of_last_modification
 * @constant
 */
export const Attribute_Names_read_date_and_time_of_last_modification: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_date_and_time_of_last_modification */

/* START_OF_SYMBOL_DEFINITION read_date_and_time_of_last_modification */
/**
 * @summary read_date_and_time_of_last_modification
 * @constant
 */
export const read_date_and_time_of_last_modification: number = Attribute_Names_read_date_and_time_of_last_modification; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_date_and_time_of_last_modification */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_date_and_time_of_last_read_access */
/**
 * @summary Attribute_Names_read_date_and_time_of_last_read_access
 * @constant
 */
export const Attribute_Names_read_date_and_time_of_last_read_access: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_date_and_time_of_last_read_access */

/* START_OF_SYMBOL_DEFINITION read_date_and_time_of_last_read_access */
/**
 * @summary read_date_and_time_of_last_read_access
 * @constant
 */
export const read_date_and_time_of_last_read_access: number = Attribute_Names_read_date_and_time_of_last_read_access; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_date_and_time_of_last_read_access */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_date_and_time_of_last_attribute_modification */
/**
 * @summary Attribute_Names_read_date_and_time_of_last_attribute_modification
 * @constant
 */
export const Attribute_Names_read_date_and_time_of_last_attribute_modification: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_date_and_time_of_last_attribute_modification */

/* START_OF_SYMBOL_DEFINITION read_date_and_time_of_last_attribute_modification */
/**
 * @summary read_date_and_time_of_last_attribute_modification
 * @constant
 */
export const read_date_and_time_of_last_attribute_modification: number = Attribute_Names_read_date_and_time_of_last_attribute_modification; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_date_and_time_of_last_attribute_modification */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_identity_of_creator */
/**
 * @summary Attribute_Names_read_identity_of_creator
 * @constant
 */
export const Attribute_Names_read_identity_of_creator: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_identity_of_creator */

/* START_OF_SYMBOL_DEFINITION read_identity_of_creator */
/**
 * @summary read_identity_of_creator
 * @constant
 */
export const read_identity_of_creator: number = Attribute_Names_read_identity_of_creator; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_identity_of_creator */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_identity_of_last_modifier */
/**
 * @summary Attribute_Names_read_identity_of_last_modifier
 * @constant
 */
export const Attribute_Names_read_identity_of_last_modifier: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_identity_of_last_modifier */

/* START_OF_SYMBOL_DEFINITION read_identity_of_last_modifier */
/**
 * @summary read_identity_of_last_modifier
 * @constant
 */
export const read_identity_of_last_modifier: number = Attribute_Names_read_identity_of_last_modifier; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_identity_of_last_modifier */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_identity_of_last_reader */
/**
 * @summary Attribute_Names_read_identity_of_last_reader
 * @constant
 */
export const Attribute_Names_read_identity_of_last_reader: number = 10; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_identity_of_last_reader */

/* START_OF_SYMBOL_DEFINITION read_identity_of_last_reader */
/**
 * @summary read_identity_of_last_reader
 * @constant
 */
export const read_identity_of_last_reader: number = Attribute_Names_read_identity_of_last_reader; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_identity_of_last_reader */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_identity_of_last_attribute_modifier */
/**
 * @summary Attribute_Names_read_identity_of_last_attribute_modifier
 * @constant
 */
export const Attribute_Names_read_identity_of_last_attribute_modifier: number = 11; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_identity_of_last_attribute_modifier */

/* START_OF_SYMBOL_DEFINITION read_identity_of_last_attribute_modifier */
/**
 * @summary read_identity_of_last_attribute_modifier
 * @constant
 */
export const read_identity_of_last_attribute_modifier: number = Attribute_Names_read_identity_of_last_attribute_modifier; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_identity_of_last_attribute_modifier */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_Object_availability */
/**
 * @summary Attribute_Names_read_Object_availability
 * @constant
 */
export const Attribute_Names_read_Object_availability: number = 12; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_Object_availability */

/* START_OF_SYMBOL_DEFINITION read_Object_availability */
/**
 * @summary read_Object_availability
 * @constant
 */
export const read_Object_availability: number = Attribute_Names_read_Object_availability; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_Object_availability */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_Object_size */
/**
 * @summary Attribute_Names_read_Object_size
 * @constant
 */
export const Attribute_Names_read_Object_size: number = 13; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_Object_size */

/* START_OF_SYMBOL_DEFINITION read_Object_size */
/**
 * @summary read_Object_size
 * @constant
 */
export const read_Object_size: number = Attribute_Names_read_Object_size; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_Object_size */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_future_Object_size */
/**
 * @summary Attribute_Names_read_future_Object_size
 * @constant
 */
export const Attribute_Names_read_future_Object_size: number = 14; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_future_Object_size */

/* START_OF_SYMBOL_DEFINITION read_future_Object_size */
/**
 * @summary read_future_Object_size
 * @constant
 */
export const read_future_Object_size: number = Attribute_Names_read_future_Object_size; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_future_Object_size */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_access_control */
/**
 * @summary Attribute_Names_read_access_control
 * @constant
 */
export const Attribute_Names_read_access_control: number = 15; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_access_control */

/* START_OF_SYMBOL_DEFINITION read_access_control */
/**
 * @summary read_access_control
 * @constant
 */
export const read_access_control: number = Attribute_Names_read_access_control; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_access_control */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_path_access_control */
/**
 * @summary Attribute_Names_read_path_access_control
 * @constant
 */
export const Attribute_Names_read_path_access_control: number = 21; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_path_access_control */

/* START_OF_SYMBOL_DEFINITION read_path_access_control */
/**
 * @summary read_path_access_control
 * @constant
 */
export const read_path_access_control: number = Attribute_Names_read_path_access_control; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_path_access_control */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_l8gal_qualifiCatiOnS */
/**
 * @summary Attribute_Names_read_l8gal_qualifiCatiOnS
 * @constant
 */
export const Attribute_Names_read_l8gal_qualifiCatiOnS: number = 16; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_l8gal_qualifiCatiOnS */

/* START_OF_SYMBOL_DEFINITION read_l8gal_qualifiCatiOnS */
/**
 * @summary read_l8gal_qualifiCatiOnS
 * @constant
 */
export const read_l8gal_qualifiCatiOnS: number = Attribute_Names_read_l8gal_qualifiCatiOnS; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_l8gal_qualifiCatiOnS */

/* START_OF_SYMBOL_DEFINITION Attribute_Names_read_private_use */
/**
 * @summary Attribute_Names_read_private_use
 * @constant
 */
export const Attribute_Names_read_private_use: number = 17; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Names_read_private_use */

/* START_OF_SYMBOL_DEFINITION read_private_use */
/**
 * @summary read_private_use
 * @constant
 */
export const read_private_use: number = Attribute_Names_read_private_use; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_private_use */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Names */
let _cached_decoder_for_Attribute_Names: $.ASN1Decoder<Attribute_Names> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Names */

/* START_OF_SYMBOL_DEFINITION _decode_Attribute_Names */
/**
 * @summary Decodes an ASN.1 element into a(n) Attribute_Names
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute_Names} The decoded data structure.
 */
export function _decode_Attribute_Names(el: _Element) {
  if (!_cached_decoder_for_Attribute_Names) {
    _cached_decoder_for_Attribute_Names = $._decodeBitString;
  }
  return _cached_decoder_for_Attribute_Names(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Attribute_Names */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Names */
let _cached_encoder_for_Attribute_Names: $.ASN1Encoder<Attribute_Names> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Names */

/* START_OF_SYMBOL_DEFINITION _encode_Attribute_Names */
/**
 * @summary Encodes a(n) Attribute_Names into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute_Names, encoded as an ASN.1 Element.
 */
export function _encode_Attribute_Names(
  value: Attribute_Names,
  elGetter: $.ASN1Encoder<Attribute_Names>
) {
  if (!_cached_encoder_for_Attribute_Names) {
    _cached_encoder_for_Attribute_Names = $._encodeBitString;
  }
  return _cached_encoder_for_Attribute_Names(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Attribute_Names */

/* eslint-enable */
