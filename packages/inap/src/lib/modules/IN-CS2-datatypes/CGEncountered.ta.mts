/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CGEncountered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CGEncountered  ::=  ENUMERATED {
 *   noCGencountered(0), manualCGencountered(1), scpOverload(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CGEncountered {
    noCGencountered = 0,
    manualCGencountered = 1,
    scpOverload = 2,
}

/**
 * @summary CGEncountered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CGEncountered  ::=  ENUMERATED {
 *   noCGencountered(0), manualCGencountered(1), scpOverload(2)}
 * ```
 * 
 * @enum {number}
 */
export
type CGEncountered = _enum_for_CGEncountered;

/**
 * @summary CGEncountered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CGEncountered  ::=  ENUMERATED {
 *   noCGencountered(0), manualCGencountered(1), scpOverload(2)}
 * ```
 * 
 * @enum {number}
 */
export
const CGEncountered = _enum_for_CGEncountered;

/**
 * @summary CGEncountered_noCGencountered
 * @constant
 * @type {number}
 */
export
const CGEncountered_noCGencountered: CGEncountered = CGEncountered.noCGencountered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noCGencountered
 * @constant
 * @type {number}
 */
export
const noCGencountered: CGEncountered = CGEncountered.noCGencountered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CGEncountered_manualCGencountered
 * @constant
 * @type {number}
 */
export
const CGEncountered_manualCGencountered: CGEncountered = CGEncountered.manualCGencountered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary manualCGencountered
 * @constant
 * @type {number}
 */
export
const manualCGencountered: CGEncountered = CGEncountered.manualCGencountered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CGEncountered_scpOverload
 * @constant
 * @type {number}
 */
export
const CGEncountered_scpOverload: CGEncountered = CGEncountered.scpOverload; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary scpOverload
 * @constant
 * @type {number}
 */
export
const scpOverload: CGEncountered = CGEncountered.scpOverload; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CGEncountered: $.ASN1Decoder<CGEncountered> = $._decodeEnumerated;

export
const _encode_CGEncountered: $.ASN1Encoder<CGEncountered> = $._encodeEnumerated;

/* eslint-enable */
