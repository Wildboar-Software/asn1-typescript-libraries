/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EASEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASEventType  ::=  ENUMERATED
 * {
 *     eASAvailabilityChange(1),
 *     eASDynamicInfoChange(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EASEventType {
    eASAvailabilityChange = 1,
    eASDynamicInfoChange = 2,
}

/**
 * @summary EASEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASEventType  ::=  ENUMERATED
 * {
 *     eASAvailabilityChange(1),
 *     eASDynamicInfoChange(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EASEventType = _enum_for_EASEventType;

/**
 * @summary EASEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASEventType  ::=  ENUMERATED
 * {
 *     eASAvailabilityChange(1),
 *     eASDynamicInfoChange(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EASEventType = _enum_for_EASEventType;

/**
 * @summary EASEventType_eASAvailabilityChange
 * @constant
 * @type {number}
 */
export
const EASEventType_eASAvailabilityChange: EASEventType = EASEventType.eASAvailabilityChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eASAvailabilityChange
 * @constant
 * @type {number}
 */
export
const eASAvailabilityChange: EASEventType = EASEventType.eASAvailabilityChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EASEventType_eASDynamicInfoChange
 * @constant
 * @type {number}
 */
export
const EASEventType_eASDynamicInfoChange: EASEventType = EASEventType.eASDynamicInfoChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eASDynamicInfoChange
 * @constant
 * @type {number}
 */
export
const eASDynamicInfoChange: EASEventType = EASEventType.eASDynamicInfoChange; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_EASEventType: $.ASN1Decoder<EASEventType> = $._decodeEnumerated;

export const _encode_EASEventType: $.ASN1Encoder<EASEventType> = $._encodeEnumerated;


/* eslint-enable */
