/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACRInterimLost
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACRInterimLost  ::=  ENUMERATED {
 *    no          ( 0 ),
 *    yes         ( 1 ),
 *    unknown     ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ACRInterimLost {
    no = 0,
    yes = 1,
    unknown = 2,
}

/**
 * @summary ACRInterimLost
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACRInterimLost  ::=  ENUMERATED {
 *    no          ( 0 ),
 *    yes         ( 1 ),
 *    unknown     ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ACRInterimLost = _enum_for_ACRInterimLost;

/**
 * @summary ACRInterimLost
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACRInterimLost  ::=  ENUMERATED {
 *    no          ( 0 ),
 *    yes         ( 1 ),
 *    unknown     ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ACRInterimLost = _enum_for_ACRInterimLost;

/**
 * @summary ACRInterimLost_no
 * @constant
 * @type {number}
 */
export
const ACRInterimLost_no: ACRInterimLost = ACRInterimLost.no; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no
 * @constant
 * @type {number}
 */
export
const no: ACRInterimLost = ACRInterimLost.no; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRInterimLost_yes
 * @constant
 * @type {number}
 */
export
const ACRInterimLost_yes: ACRInterimLost = ACRInterimLost.yes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary yes
 * @constant
 * @type {number}
 */
export
const yes: ACRInterimLost = ACRInterimLost.yes; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRInterimLost_unknown
 * @constant
 * @type {number}
 */
export
const ACRInterimLost_unknown: ACRInterimLost = ACRInterimLost.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: ACRInterimLost = ACRInterimLost.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ACRInterimLost: $.ASN1Decoder<ACRInterimLost> = $._decodeEnumerated;

export
const _encode_ACRInterimLost: $.ASN1Encoder<ACRInterimLost> = $._encodeEnumerated;

/* eslint-enable */
