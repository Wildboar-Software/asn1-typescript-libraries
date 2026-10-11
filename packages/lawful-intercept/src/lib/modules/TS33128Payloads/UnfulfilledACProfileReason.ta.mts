/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UnfulfilledACProfileReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnfulfilledACProfileReason  ::=  ENUMERATED
 * {
 *     eASNotAvailable(1),
 *     requirementsUnfulfilled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UnfulfilledACProfileReason {
    eASNotAvailable = 1,
    requirementsUnfulfilled = 2,
}

/**
 * @summary UnfulfilledACProfileReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnfulfilledACProfileReason  ::=  ENUMERATED
 * {
 *     eASNotAvailable(1),
 *     requirementsUnfulfilled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UnfulfilledACProfileReason = _enum_for_UnfulfilledACProfileReason;

/**
 * @summary UnfulfilledACProfileReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnfulfilledACProfileReason  ::=  ENUMERATED
 * {
 *     eASNotAvailable(1),
 *     requirementsUnfulfilled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UnfulfilledACProfileReason = _enum_for_UnfulfilledACProfileReason;

/**
 * @summary UnfulfilledACProfileReason_eASNotAvailable
 * @constant
 * @type {number}
 */
export
const UnfulfilledACProfileReason_eASNotAvailable: UnfulfilledACProfileReason = UnfulfilledACProfileReason.eASNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eASNotAvailable
 * @constant
 * @type {number}
 */
export
const eASNotAvailable: UnfulfilledACProfileReason = UnfulfilledACProfileReason.eASNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnfulfilledACProfileReason_requirementsUnfulfilled
 * @constant
 * @type {number}
 */
export
const UnfulfilledACProfileReason_requirementsUnfulfilled: UnfulfilledACProfileReason = UnfulfilledACProfileReason.requirementsUnfulfilled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requirementsUnfulfilled
 * @constant
 * @type {number}
 */
export
const requirementsUnfulfilled: UnfulfilledACProfileReason = UnfulfilledACProfileReason.requirementsUnfulfilled; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_UnfulfilledACProfileReason: $.ASN1Decoder<UnfulfilledACProfileReason> = $._decodeEnumerated;

export const _encode_UnfulfilledACProfileReason: $.ASN1Encoder<UnfulfilledACProfileReason> = $._encodeEnumerated;


/* eslint-enable */
