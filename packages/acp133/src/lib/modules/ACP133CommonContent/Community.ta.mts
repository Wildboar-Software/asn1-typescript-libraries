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
const _enum_for_Community = {
    genser: 0,
    si: 1,
    both: 2,
} as const;

export
type _enum_for_Community =
    (typeof _enum_for_Community)[keyof typeof _enum_for_Community];

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
const Community_genser = Community.genser satisfies Community; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link Community_genser}.
 * @summary genser
 * @constant
 * @type {number}
 */
export
const genser = Community.genser satisfies Community; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * Special intelligence (Y).
 * @summary Community_si
 * @constant
 * @type {number}
 */
export
const Community_si = Community.si satisfies Community; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link Community_si}.
 * @summary si
 * @constant
 * @type {number}
 */
export
const si = Community.si satisfies Community; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * Both GENSER and SI (R/Y).
 * @summary Community_both
 * @constant
 * @type {number}
 */
export
const Community_both = Community.both satisfies Community; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link Community_both}.
 * @summary both
 * @constant
 * @type {number}
 */
export
const both = Community.both satisfies Community; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Community: $.ASN1Decoder<Community> =
    $._decodeEnumerated as $.ASN1Decoder<Community>;
export const _encode_Community: $.ASN1Encoder<Community> =
    $._encodeEnumerated as $.ASN1Encoder<Community>;


/* eslint-enable */
