/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Community
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Community  ::=  ENUMERATED { genser(0), si(1), both(2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Community {
    genser = 0,
    si = 1,
    both = 2,
}

/**
 * @summary Community
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Community  ::=  ENUMERATED { genser(0), si(1), both(2) }
 * ```
 * 
 * @enum {number}
 */
export
type Community = _enum_for_Community;

/**
 * @summary Community
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Community  ::=  ENUMERATED { genser(0), si(1), both(2) }
 * ```
 * 
 * @enum {number}
 */
export
const Community = _enum_for_Community;

/**
 * @summary Community_genser
 * @constant
 * @type {number}
 */
export
const Community_genser: Community = Community.genser; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary genser
 * @constant
 * @type {number}
 */
export
const genser: Community = Community.genser; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Community_si
 * @constant
 * @type {number}
 */
export
const Community_si: Community = Community.si; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary si
 * @constant
 * @type {number}
 */
export
const si: Community = Community.si; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Community_both
 * @constant
 * @type {number}
 */
export
const Community_both: Community = Community.both; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary both
 * @constant
 * @type {number}
 */
export
const both: Community = Community.both; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Community = $._decodeEnumerated;
export const _encode_Community = $._encodeEnumerated;


/* eslint-enable */
