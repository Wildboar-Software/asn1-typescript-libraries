/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InitiatingParty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiatingParty  ::=  ENUMERATED {
 *    network       ( 0 ),
 *    subscriber    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_InitiatingParty {
    network = 0,
    subscriber = 1,
}

/**
 * @summary InitiatingParty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiatingParty  ::=  ENUMERATED {
 *    network       ( 0 ),
 *    subscriber    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type InitiatingParty = _enum_for_InitiatingParty;

/**
 * @summary InitiatingParty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiatingParty  ::=  ENUMERATED {
 *    network       ( 0 ),
 *    subscriber    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const InitiatingParty = _enum_for_InitiatingParty;

/**
 * @summary InitiatingParty_network
 * @constant
 * @type {number}
 */
export
const InitiatingParty_network = InitiatingParty.network; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary network
 * @constant
 * @type {number}
 */
export
const network = InitiatingParty.network; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InitiatingParty_subscriber
 * @constant
 * @type {number}
 */
export
const InitiatingParty_subscriber = InitiatingParty.subscriber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriber
 * @constant
 * @type {number}
 */
export
const subscriber = InitiatingParty.subscriber; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_InitiatingParty: $.ASN1Decoder<InitiatingParty> = $._decodeEnumerated;

export
const _encode_InitiatingParty: $.ASN1Encoder<InitiatingParty> = $._encodeEnumerated;

/* eslint-enable */
