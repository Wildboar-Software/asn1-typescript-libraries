/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACREventIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACREventIDs  ::=  ENUMERATED
 * {
 *     targetInformation(1),
 *     aCRComplete(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ACREventIDs {
    targetInformation = 1,
    aCRComplete = 2,
}

/**
 * @summary ACREventIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACREventIDs  ::=  ENUMERATED
 * {
 *     targetInformation(1),
 *     aCRComplete(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ACREventIDs = _enum_for_ACREventIDs;

/**
 * @summary ACREventIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACREventIDs  ::=  ENUMERATED
 * {
 *     targetInformation(1),
 *     aCRComplete(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ACREventIDs = _enum_for_ACREventIDs;

/**
 * @summary ACREventIDs_targetInformation
 * @constant
 * @type {number}
 */
export
const ACREventIDs_targetInformation = ACREventIDs.targetInformation satisfies ACREventIDs; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary targetInformation
 * @constant
 * @type {number}
 */
export
const targetInformation = ACREventIDs.targetInformation satisfies ACREventIDs; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACREventIDs_aCRComplete
 * @constant
 * @type {number}
 */
export
const ACREventIDs_aCRComplete = ACREventIDs.aCRComplete satisfies ACREventIDs; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aCRComplete
 * @constant
 * @type {number}
 */
export
const aCRComplete = ACREventIDs.aCRComplete satisfies ACREventIDs; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ACREventIDs: $.ASN1Decoder<ACREventIDs> = $._decodeEnumerated;
export const _encode_ACREventIDs: $.ASN1Encoder<ACREventIDs> = $._encodeEnumerated;


/* eslint-enable */
