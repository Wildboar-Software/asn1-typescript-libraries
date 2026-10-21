/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DiversionReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiversionReason  ::=  ENUMERATED {
 *     unknown(0),
 *     cfu(1),
 *     cfb(2),
 *     cfnr(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DiversionReason {
    unknown = 0,
    cfu = 1,
    cfb = 2,
    cfnr = 3,
}

/**
 * @summary DiversionReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiversionReason  ::=  ENUMERATED {
 *     unknown(0),
 *     cfu(1),
 *     cfb(2),
 *     cfnr(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DiversionReason = _enum_for_DiversionReason;

/**
 * @summary DiversionReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiversionReason  ::=  ENUMERATED {
 *     unknown(0),
 *     cfu(1),
 *     cfb(2),
 *     cfnr(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const DiversionReason = _enum_for_DiversionReason;

/**
 * @summary DiversionReason_unknown
 * @constant
 * @type {number}
 */
export
const DiversionReason_unknown: DiversionReason = DiversionReason.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: DiversionReason = DiversionReason.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DiversionReason_cfu
 * @constant
 * @type {number}
 */
export
const DiversionReason_cfu: DiversionReason = DiversionReason.cfu; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cfu
 * @constant
 * @type {number}
 */
export
const cfu: DiversionReason = DiversionReason.cfu; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DiversionReason_cfb
 * @constant
 * @type {number}
 */
export
const DiversionReason_cfb: DiversionReason = DiversionReason.cfb; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cfb
 * @constant
 * @type {number}
 */
export
const cfb: DiversionReason = DiversionReason.cfb; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DiversionReason_cfnr
 * @constant
 * @type {number}
 */
export
const DiversionReason_cfnr: DiversionReason = DiversionReason.cfnr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cfnr
 * @constant
 * @type {number}
 */
export
const cfnr: DiversionReason = DiversionReason.cfnr; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DiversionReason: $.ASN1Decoder<DiversionReason> = $._decodeEnumerated;

export
const _encode_DiversionReason: $.ASN1Encoder<DiversionReason> = $._encodeEnumerated;

/* eslint-enable */
