/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChangedParameters_changeFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangedParameters-changeFlags ::= BIT STRING {
 *    callingPartyNumberModified  (0 ),
 *    callingPartyCategoryModified  (1 ),
 *    originalCalledPartyNumberModified  (2 ),
 *    genericNumbersModified  (3 ),
 *    redirectingPartyNumberModified  (4 ),
 *    redirectionCounterModified  (5 )
 * }
 * ```
 */
export
type ChangedParameters_changeFlags = BIT_STRING;

/**
 * @summary ChangedParameters_changeFlags_callingPartyNumberModified
 * @constant
 */
export
const ChangedParameters_changeFlags_callingPartyNumberModified: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callingPartyNumberModified
 * @constant
 */
export
const callingPartyNumberModified: number = ChangedParameters_changeFlags_callingPartyNumberModified; /* SHORT_NAMED_BIT */

/**
 * @summary ChangedParameters_changeFlags_callingPartyCategoryModified
 * @constant
 */
export
const ChangedParameters_changeFlags_callingPartyCategoryModified: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary callingPartyCategoryModified
 * @constant
 */
export
const callingPartyCategoryModified: number = ChangedParameters_changeFlags_callingPartyCategoryModified; /* SHORT_NAMED_BIT */

/**
 * @summary ChangedParameters_changeFlags_originalCalledPartyNumberModified
 * @constant
 */
export
const ChangedParameters_changeFlags_originalCalledPartyNumberModified: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary originalCalledPartyNumberModified
 * @constant
 */
export
const originalCalledPartyNumberModified: number = ChangedParameters_changeFlags_originalCalledPartyNumberModified; /* SHORT_NAMED_BIT */

/**
 * @summary ChangedParameters_changeFlags_genericNumbersModified
 * @constant
 */
export
const ChangedParameters_changeFlags_genericNumbersModified: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary genericNumbersModified
 * @constant
 */
export
const genericNumbersModified: number = ChangedParameters_changeFlags_genericNumbersModified; /* SHORT_NAMED_BIT */

/**
 * @summary ChangedParameters_changeFlags_redirectingPartyNumberModified
 * @constant
 */
export
const ChangedParameters_changeFlags_redirectingPartyNumberModified: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary redirectingPartyNumberModified
 * @constant
 */
export
const redirectingPartyNumberModified: number = ChangedParameters_changeFlags_redirectingPartyNumberModified; /* SHORT_NAMED_BIT */

/**
 * @summary ChangedParameters_changeFlags_redirectionCounterModified
 * @constant
 */
export
const ChangedParameters_changeFlags_redirectionCounterModified: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary redirectionCounterModified
 * @constant
 */
export
const redirectionCounterModified: number = ChangedParameters_changeFlags_redirectionCounterModified; /* SHORT_NAMED_BIT */

export
const _decode_ChangedParameters_changeFlags: $.ASN1Decoder<ChangedParameters_changeFlags> = $._decodeBitString;

export
const _encode_ChangedParameters_changeFlags: $.ASN1Encoder<ChangedParameters_changeFlags> = $._encodeBitString;

/* eslint-enable */
