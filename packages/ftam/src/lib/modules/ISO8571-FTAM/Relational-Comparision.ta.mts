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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Relational_Comparision
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Relational-Comparision  ::=  BIT STRING {
 *   no-value-available-matches(0),
 *   -- Set impies No Value Available matches the test.
 *   -- Clear implies No Value Available fails the test.
 *   equals-matches(1),
 *   -- Set implies equal items match the test.
 *   -- Clear implies equal items fail the test.
 *   less-than-matches(2),
 *   -- Set implies a value less than the test cke matches.
 *   -- Clear implies a value less than the test case fails.
 *   greater-than-matches(3)
 *
 * -- Set implies a value greater than the test case matches.
 * -- Clear implies a value greater than the test case fails.
 * }
 * ```
 */
export type Relational_Comparision = BIT_STRING;


/**
 * @summary Relational_Comparision_no_value_available_matches
 * @constant
 */
export const Relational_Comparision_no_value_available_matches: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary no_value_available_matches
 * @constant
 */
export const no_value_available_matches: number = Relational_Comparision_no_value_available_matches; /* SHORT_NAMED_BIT */


/**
 * @summary Relational_Comparision_equals_matches
 * @constant
 */
export const Relational_Comparision_equals_matches: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary equals_matches
 * @constant
 */
export const equals_matches: number = Relational_Comparision_equals_matches; /* SHORT_NAMED_BIT */


/**
 * @summary Relational_Comparision_less_than_matches
 * @constant
 */
export const Relational_Comparision_less_than_matches: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary less_than_matches
 * @constant
 */
export const less_than_matches: number = Relational_Comparision_less_than_matches; /* SHORT_NAMED_BIT */


/**
 * @summary Relational_Comparision_greater_than_matches
 * @constant
 */
export const Relational_Comparision_greater_than_matches: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary greater_than_matches
 * @constant
 */
export const greater_than_matches: number = Relational_Comparision_greater_than_matches; /* SHORT_NAMED_BIT */




export const _decode_Relational_Comparision = $._decodeBitString;




export const _encode_Relational_Comparision = $._encodeBitString;


/* eslint-enable */
