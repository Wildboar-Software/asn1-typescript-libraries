/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Community
 * @description
 *
 * Which community an object belongs to: GENSER (general
 * service, marked R), SI (special intelligence, marked
 * Y), or both (R/Y).
 *
 * [draft-dally-acp133-and-ldap-01, section 3.36](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.36)
 * and
 * [section 6.9](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-6.9).
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
 * Which community an object belongs to: GENSER (general
 * service, marked R), SI (special intelligence, marked
 * Y), or both (R/Y).
 *
 * [draft-dally-acp133-and-ldap-01, section 3.36](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.36)
 * and
 * [section 6.9](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-6.9).
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
 * Which community an object belongs to: GENSER (general
 * service, marked R), SI (special intelligence, marked
 * Y), or both (R/Y).
 *
 * [draft-dally-acp133-and-ldap-01, section 3.36](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.36)
 * and
 * [section 6.9](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-6.9).
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
 * General service (R).
 * @summary Community_genser
 * @constant
 * @type {number}
 */
export
const Community_genser: Community = Community.genser; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link Community_genser}.
 * @summary genser
 * @constant
 * @type {number}
 */
export
const genser: Community = Community.genser; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * Special intelligence (Y).
 * @summary Community_si
 * @constant
 * @type {number}
 */
export
const Community_si: Community = Community.si; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link Community_si}.
 * @summary si
 * @constant
 * @type {number}
 */
export
const si: Community = Community.si; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * Both GENSER and SI (R/Y).
 * @summary Community_both
 * @constant
 * @type {number}
 */
export
const Community_both: Community = Community.both; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link Community_both}.
 * @summary both
 * @constant
 * @type {number}
 */
export
const both: Community = Community.both; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Community = $._decodeEnumerated;
export const _encode_Community = $._encodeEnumerated;


/* eslint-enable */
