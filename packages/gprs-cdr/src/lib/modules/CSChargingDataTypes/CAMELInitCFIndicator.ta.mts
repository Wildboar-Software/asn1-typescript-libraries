/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CAMELInitCFIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELInitCFIndicator  ::=  ENUMERATED {
 *    noCAMELCallForwarding    ( 0 ),
 *    cAMELCallForwarding      ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CAMELInitCFIndicator {
    noCAMELCallForwarding = 0,
    cAMELCallForwarding = 1,
}

/**
 * @summary CAMELInitCFIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELInitCFIndicator  ::=  ENUMERATED {
 *    noCAMELCallForwarding    ( 0 ),
 *    cAMELCallForwarding      ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type CAMELInitCFIndicator = _enum_for_CAMELInitCFIndicator;

/**
 * @summary CAMELInitCFIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELInitCFIndicator  ::=  ENUMERATED {
 *    noCAMELCallForwarding    ( 0 ),
 *    cAMELCallForwarding      ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const CAMELInitCFIndicator = _enum_for_CAMELInitCFIndicator;

/**
 * @summary CAMELInitCFIndicator_noCAMELCallForwarding
 * @constant
 * @type {number}
 */
export
const CAMELInitCFIndicator_noCAMELCallForwarding: CAMELInitCFIndicator = CAMELInitCFIndicator.noCAMELCallForwarding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noCAMELCallForwarding
 * @constant
 * @type {number}
 */
export
const noCAMELCallForwarding: CAMELInitCFIndicator = CAMELInitCFIndicator.noCAMELCallForwarding; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CAMELInitCFIndicator_cAMELCallForwarding
 * @constant
 * @type {number}
 */
export
const CAMELInitCFIndicator_cAMELCallForwarding: CAMELInitCFIndicator = CAMELInitCFIndicator.cAMELCallForwarding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cAMELCallForwarding
 * @constant
 * @type {number}
 */
export
const cAMELCallForwarding: CAMELInitCFIndicator = CAMELInitCFIndicator.cAMELCallForwarding; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CAMELInitCFIndicator: $.ASN1Decoder<CAMELInitCFIndicator> = $._decodeEnumerated;

export
const _encode_CAMELInitCFIndicator: $.ASN1Encoder<CAMELInitCFIndicator> = $._encodeEnumerated;

/* eslint-enable */
