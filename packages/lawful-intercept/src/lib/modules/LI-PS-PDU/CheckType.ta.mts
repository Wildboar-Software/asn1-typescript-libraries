/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_CheckType {
    hash = 1,
    signature = 2,
}

/**
 * @summary CheckType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CheckType  ::=  ENUMERATED
 * {
 *     hash(1),
 *         -- hash value
 *     signature(2),
 *         -- DSS/DSA signature
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CheckType = _enum_for_CheckType | ENUMERATED;

/**
 * @summary CheckType_hash
 * @constant
 * @type {number}
 */
export
const CheckType_hash: CheckType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hash
 * @constant
 * @type {number}
 */
export
const hash: CheckType = CheckType_hash; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CheckType_signature
 * @constant
 * @type {number}
 */
export
const CheckType_signature: CheckType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary signature
 * @constant
 * @type {number}
 */
export
const signature: CheckType = CheckType_signature; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CheckType: $.ASN1Decoder<CheckType> = $._decodeEnumerated;
export const _encode_CheckType: $.ASN1Encoder<CheckType> = $._encodeEnumerated;


/* eslint-enable */
