/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DNAIChangeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNAIChangeType  ::=  ENUMERATED
 * {
 *     early(1),
 *     earlyAndLate(2),
 *     late(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DNAIChangeType {
    early = 1,
    earlyAndLate = 2,
    late = 3,
}

/**
 * @summary DNAIChangeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNAIChangeType  ::=  ENUMERATED
 * {
 *     early(1),
 *     earlyAndLate(2),
 *     late(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DNAIChangeType = _enum_for_DNAIChangeType;

/**
 * @summary DNAIChangeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNAIChangeType  ::=  ENUMERATED
 * {
 *     early(1),
 *     earlyAndLate(2),
 *     late(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const DNAIChangeType: typeof _enum_for_DNAIChangeType = _enum_for_DNAIChangeType;

/**
 * @summary DNAIChangeType_early
 * @constant
 * @type {number}
 */
export
const DNAIChangeType_early: _enum_for_DNAIChangeType.early = DNAIChangeType.early; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary early
 * @constant
 * @type {number}
 */
export
const early: _enum_for_DNAIChangeType.early = DNAIChangeType.early; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNAIChangeType_earlyAndLate
 * @constant
 * @type {number}
 */
export
const DNAIChangeType_earlyAndLate: _enum_for_DNAIChangeType.earlyAndLate = DNAIChangeType.earlyAndLate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary earlyAndLate
 * @constant
 * @type {number}
 */
export
const earlyAndLate: _enum_for_DNAIChangeType.earlyAndLate = DNAIChangeType.earlyAndLate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNAIChangeType_late
 * @constant
 * @type {number}
 */
export
const DNAIChangeType_late: _enum_for_DNAIChangeType.late = DNAIChangeType.late; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary late
 * @constant
 * @type {number}
 */
export
const late: _enum_for_DNAIChangeType.late = DNAIChangeType.late; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_DNAIChangeType: $.ASN1Decoder<DNAIChangeType> = $._decodeEnumerated;
export const _encode_DNAIChangeType: $.ASN1Encoder<DNAIChangeType> = $._encodeEnumerated;


/* eslint-enable */
