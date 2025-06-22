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
 * @summary Equality_Comparision
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Equality-Comparision  ::=  BIT STRING {
 *   no-value-available-matches(0),
 *   -- Set impies No Value Available matches the test.
 *   -- Clear implies No Value Availabie fails the test.
 *   equals-matches(1)
 *
 * -- Set implies equal items match the test.
 * -- Clear implies equal items fail the test.
 * }
 * ```
 */
export type Equality_Comparision = BIT_STRING;


/**
 * @summary Equality_Comparision_no_value_available_matches
 * @constant
 */
export const Equality_Comparision_no_value_available_matches: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary no_value_available_matches
 * @constant
 */
export const no_value_available_matches: number = Equality_Comparision_no_value_available_matches; /* SHORT_NAMED_BIT */


/**
 * @summary Equality_Comparision_equals_matches
 * @constant
 */
export const Equality_Comparision_equals_matches: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary equals_matches
 * @constant
 */
export const equals_matches: number = Equality_Comparision_equals_matches; /* SHORT_NAMED_BIT */




export const _decode_Equality_Comparision = $._decodeBitString;




export const _encode_Equality_Comparision = $._encodeBitString;


/* eslint-enable */
