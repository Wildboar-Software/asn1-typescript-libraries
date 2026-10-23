/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PartyToBeCharged
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyToBeCharged  ::=  ENUMERATED {orignating(0), terminating(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PartyToBeCharged {
    orignating = 0,
    terminating = 1,
}

/**
 * @summary PartyToBeCharged
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyToBeCharged  ::=  ENUMERATED {orignating(0), terminating(1)}
 * ```
 * 
 * @enum {number}
 */
export
type PartyToBeCharged = _enum_for_PartyToBeCharged;

/**
 * @summary PartyToBeCharged
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyToBeCharged  ::=  ENUMERATED {orignating(0), terminating(1)}
 * ```
 * 
 * @enum {number}
 */
export
const PartyToBeCharged = _enum_for_PartyToBeCharged;

/**
 * @summary PartyToBeCharged_orignating
 * @constant
 * @type {number}
 */
export
const PartyToBeCharged_orignating: PartyToBeCharged = PartyToBeCharged.orignating; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary orignating
 * @constant
 * @type {number}
 */
export
const orignating: PartyToBeCharged = PartyToBeCharged.orignating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyToBeCharged_terminating
 * @constant
 * @type {number}
 */
export
const PartyToBeCharged_terminating: PartyToBeCharged = PartyToBeCharged.terminating; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating
 * @constant
 * @type {number}
 */
export
const terminating: PartyToBeCharged = PartyToBeCharged.terminating; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PartyToBeCharged: $.ASN1Decoder<PartyToBeCharged> = $._decodeEnumerated;

export
const _encode_PartyToBeCharged: $.ASN1Encoder<PartyToBeCharged> = $._encodeEnumerated;

/* eslint-enable */
