/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACPPreferredDelivery
 * @description
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
 * @summary ACPPreferredDelivery_smtp
 * @constant
 * @type {number}
 */
export
const ACPPreferredDelivery_smtp: ACPPreferredDelivery = ACPPreferredDelivery.smtp; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary smtp
 * @constant
 * @type {number}
 */
export
const smtp: ACPPreferredDelivery = ACPPreferredDelivery.smtp; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACPPreferredDelivery_acp127
 * @constant
 * @type {number}
 */
export
const ACPPreferredDelivery_acp127: ACPPreferredDelivery = ACPPreferredDelivery.acp127; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary acp127
 * @constant
 * @type {number}
 */
export
const acp127: ACPPreferredDelivery = ACPPreferredDelivery.acp127; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACPPreferredDelivery_mhs
 * @constant
 * @type {number}
 */
export
const ACPPreferredDelivery_mhs: ACPPreferredDelivery = ACPPreferredDelivery.mhs; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mhs
 * @constant
 * @type {number}
 */
export
const mhs: ACPPreferredDelivery = ACPPreferredDelivery.mhs; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ACPPreferredDelivery = $._decodeEnumerated;
export const _encode_ACPPreferredDelivery = $._encodeEnumerated;


/* eslint-enable */
