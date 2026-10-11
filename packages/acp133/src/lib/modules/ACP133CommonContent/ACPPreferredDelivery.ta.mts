/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACPPreferredDelivery
 * @description
 *
 * Messaging system a user prefers for delivery.
 * `mhs` is X.400 (1984 or 1988) or ACP 123. When the
 * value is `acp127`, {@link ACPLegacyFormat} names the
 * legacy format.
 *
 * [draft-dally-acp133-and-ldap-01, section 3.8](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.8)
 * and
 * [section 6.2](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-6.2).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACPPreferredDelivery  ::=  ENUMERATED { smtp(0), acp127(1), mhs(2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ACPPreferredDelivery {
    smtp = 0,
    acp127 = 1,
    mhs = 2,
}

/**
 * @summary ACPPreferredDelivery
 * @description
 *
 * Messaging system a user prefers for delivery.
 * `mhs` is X.400 (1984 or 1988) or ACP 123. When the
 * value is `acp127`, {@link ACPLegacyFormat} names the
 * legacy format.
 *
 * [draft-dally-acp133-and-ldap-01, section 3.8](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.8)
 * and
 * [section 6.2](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-6.2).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACPPreferredDelivery  ::=  ENUMERATED { smtp(0), acp127(1), mhs(2) }
 * ```
 * 
 * @enum {number}
 */
export
type ACPPreferredDelivery = _enum_for_ACPPreferredDelivery;

/**
 * @summary ACPPreferredDelivery
 * @description
 *
 * Messaging system a user prefers for delivery.
 * `mhs` is X.400 (1984 or 1988) or ACP 123. When the
 * value is `acp127`, {@link ACPLegacyFormat} names the
 * legacy format.
 *
 * [draft-dally-acp133-and-ldap-01, section 3.8](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.8)
 * and
 * [section 6.2](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-6.2).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACPPreferredDelivery  ::=  ENUMERATED { smtp(0), acp127(1), mhs(2) }
 * ```
 * 
 * @enum {number}
 */
export
const ACPPreferredDelivery = _enum_for_ACPPreferredDelivery;

/**
 * SMTP.
 * @summary ACPPreferredDelivery_smtp
 * @constant
 * @type {number}
 */
export
const ACPPreferredDelivery_smtp: ACPPreferredDelivery = ACPPreferredDelivery.smtp; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link ACPPreferredDelivery_smtp}.
 * @summary smtp
 * @constant
 * @type {number}
 */
export
const smtp: ACPPreferredDelivery = ACPPreferredDelivery.smtp; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * ACP 127. {@link ACPLegacyFormat} names the format.
 * @summary ACPPreferredDelivery_acp127
 * @constant
 * @type {number}
 */
export
const ACPPreferredDelivery_acp127: ACPPreferredDelivery = ACPPreferredDelivery.acp127; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link ACPPreferredDelivery_acp127}.
 * @summary acp127
 * @constant
 * @type {number}
 */
export
const acp127: ACPPreferredDelivery = ACPPreferredDelivery.acp127; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * X.400 (1984 or 1988), or ACP 123.
 * @summary ACPPreferredDelivery_mhs
 * @constant
 * @type {number}
 */
export
const ACPPreferredDelivery_mhs: ACPPreferredDelivery = ACPPreferredDelivery.mhs; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link ACPPreferredDelivery_mhs}.
 * @summary mhs
 * @constant
 * @type {number}
 */
export
const mhs: ACPPreferredDelivery = ACPPreferredDelivery.mhs; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ACPPreferredDelivery = $._decodeEnumerated;
export const _encode_ACPPreferredDelivery = $._encodeEnumerated;


/* eslint-enable */
