/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_EncryptedPayloadType {
    unknown = 1,
    part2 = 2,
    part3 = 3,
    part4 = 4,
    part5 = 5,
    part6 = 6,
    part7 = 7,
    part1 = 8,
}

/**
 * @summary EncryptedPayloadType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncryptedPayloadType  ::=  ENUMERATED
 * {
 *     unknown(1),
 *     part2(2),
 *         -- encrypted payload is ETSI TS 102 232-2 [5]
 *     part3(3),
 *         -- encrypted payload is ETSI TS 102 232-3 [6]
 *     part4(4),
 *         -- encrypted payload is ETSI TS 102 232-4 [32]
 *     part5(5),
 *         -- encrypted payload is ETSI TS 102 232-5 [37]
 *     part6(6),
 *         -- encrypted payload is ETSI TS 102 232-6 [36]
 *     part7(7),
 *         -- encrypted payload is ETSI TS 102 232-7 [38]
 *     ...,
 *     part1(8)
 *         -- encrypted payload is ETSI TS 102 232-1 (the present document)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EncryptedPayloadType = _enum_for_EncryptedPayloadType | ENUMERATED;

/**
 * @summary EncryptedPayloadType_unknown
 * @constant
 * @type {number}
 */
export
const EncryptedPayloadType_unknown: EncryptedPayloadType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: EncryptedPayloadType = EncryptedPayloadType_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptedPayloadType_part2
 * @constant
 * @type {number}
 */
export
const EncryptedPayloadType_part2: EncryptedPayloadType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary part2
 * @constant
 * @type {number}
 */
export
const part2: EncryptedPayloadType = EncryptedPayloadType_part2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptedPayloadType_part3
 * @constant
 * @type {number}
 */
export
const EncryptedPayloadType_part3: EncryptedPayloadType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary part3
 * @constant
 * @type {number}
 */
export
const part3: EncryptedPayloadType = EncryptedPayloadType_part3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptedPayloadType_part4
 * @constant
 * @type {number}
 */
export
const EncryptedPayloadType_part4: EncryptedPayloadType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary part4
 * @constant
 * @type {number}
 */
export
const part4: EncryptedPayloadType = EncryptedPayloadType_part4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptedPayloadType_part5
 * @constant
 * @type {number}
 */
export
const EncryptedPayloadType_part5: EncryptedPayloadType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary part5
 * @constant
 * @type {number}
 */
export
const part5: EncryptedPayloadType = EncryptedPayloadType_part5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptedPayloadType_part6
 * @constant
 * @type {number}
 */
export
const EncryptedPayloadType_part6: EncryptedPayloadType = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary part6
 * @constant
 * @type {number}
 */
export
const part6: EncryptedPayloadType = EncryptedPayloadType_part6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptedPayloadType_part7
 * @constant
 * @type {number}
 */
export
const EncryptedPayloadType_part7: EncryptedPayloadType = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary part7
 * @constant
 * @type {number}
 */
export
const part7: EncryptedPayloadType = EncryptedPayloadType_part7; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptedPayloadType_part1
 * @constant
 * @type {number}
 */
export
const EncryptedPayloadType_part1: EncryptedPayloadType = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary part1
 * @constant
 * @type {number}
 */
export
const part1: EncryptedPayloadType = EncryptedPayloadType_part1; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EncryptedPayloadType: $.ASN1Decoder<EncryptedPayloadType> = $._decodeEnumerated;
export const _encode_EncryptedPayloadType: $.ASN1Encoder<EncryptedPayloadType> = $._encodeEnumerated;


/* eslint-enable */
