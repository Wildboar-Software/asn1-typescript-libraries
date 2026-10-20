/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChangeFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeFlags  ::=  BIT STRING {
 *    callingPartyNumberModified  (0 ),
 *    callingPartyCategoryModified  (1 ),
 *    originalCalledPartyNumberModified  (2 ),
 *    genericNumbersModified  (3 ),
 *    redirectingPartyNumberModified  (4 ),
 *    redirectionCounterModified  (5 )}
 * ```
 */
export
type ChangeFlags = BIT_STRING;

/**
 * @summary ChangeFlags_callingPartyNumberModified
 * @constant
 */
export
const ChangeFlags_callingPartyNumberModified: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callingPartyNumberModified
 * @constant
 */
export
const callingPartyNumberModified: number = ChangeFlags_callingPartyNumberModified; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeFlags_callingPartyCategoryModified
 * @constant
 */
export
const ChangeFlags_callingPartyCategoryModified: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary callingPartyCategoryModified
 * @constant
 */
export
const callingPartyCategoryModified: number = ChangeFlags_callingPartyCategoryModified; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeFlags_originalCalledPartyNumberModified
 * @constant
 */
export
const ChangeFlags_originalCalledPartyNumberModified: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary originalCalledPartyNumberModified
 * @constant
 */
export
const originalCalledPartyNumberModified: number = ChangeFlags_originalCalledPartyNumberModified; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeFlags_genericNumbersModified
 * @constant
 */
export
const ChangeFlags_genericNumbersModified: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary genericNumbersModified
 * @constant
 */
export
const genericNumbersModified: number = ChangeFlags_genericNumbersModified; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeFlags_redirectingPartyNumberModified
 * @constant
 */
export
const ChangeFlags_redirectingPartyNumberModified: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary redirectingPartyNumberModified
 * @constant
 */
export
const redirectingPartyNumberModified: number = ChangeFlags_redirectingPartyNumberModified; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeFlags_redirectionCounterModified
 * @constant
 */
export
const ChangeFlags_redirectionCounterModified: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary redirectionCounterModified
 * @constant
 */
export
const redirectionCounterModified: number = ChangeFlags_redirectionCounterModified; /* SHORT_NAMED_BIT */

export
const _decode_ChangeFlags: $.ASN1Decoder<ChangeFlags> = $._decodeBitString;

export
const _encode_ChangeFlags: $.ASN1Encoder<ChangeFlags> = $._encodeBitString;

/* eslint-enable */
