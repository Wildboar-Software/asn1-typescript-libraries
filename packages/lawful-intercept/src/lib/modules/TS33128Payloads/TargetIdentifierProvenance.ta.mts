/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TargetIdentifierProvenance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TargetIdentifierProvenance  ::=  ENUMERATED
 * {
 *     lEAProvided(1),
 *     observed(2),
 *     matchedOn(3),
 *     other(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TargetIdentifierProvenance {
    lEAProvided = 1,
    observed = 2,
    matchedOn = 3,
    other = 4,
}

/**
 * @summary TargetIdentifierProvenance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TargetIdentifierProvenance  ::=  ENUMERATED
 * {
 *     lEAProvided(1),
 *     observed(2),
 *     matchedOn(3),
 *     other(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TargetIdentifierProvenance = _enum_for_TargetIdentifierProvenance;

/**
 * @summary TargetIdentifierProvenance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TargetIdentifierProvenance  ::=  ENUMERATED
 * {
 *     lEAProvided(1),
 *     observed(2),
 *     matchedOn(3),
 *     other(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TargetIdentifierProvenance = _enum_for_TargetIdentifierProvenance;

/**
 * @summary TargetIdentifierProvenance_lEAProvided
 * @constant
 * @type {number}
 */
export
const TargetIdentifierProvenance_lEAProvided = TargetIdentifierProvenance.lEAProvided satisfies TargetIdentifierProvenance; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lEAProvided
 * @constant
 * @type {number}
 */
export
const lEAProvided = TargetIdentifierProvenance.lEAProvided satisfies TargetIdentifierProvenance; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetIdentifierProvenance_observed
 * @constant
 * @type {number}
 */
export
const TargetIdentifierProvenance_observed = TargetIdentifierProvenance.observed satisfies TargetIdentifierProvenance; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary observed
 * @constant
 * @type {number}
 */
export
const observed = TargetIdentifierProvenance.observed satisfies TargetIdentifierProvenance; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetIdentifierProvenance_matchedOn
 * @constant
 * @type {number}
 */
export
const TargetIdentifierProvenance_matchedOn = TargetIdentifierProvenance.matchedOn satisfies TargetIdentifierProvenance; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary matchedOn
 * @constant
 * @type {number}
 */
export
const matchedOn = TargetIdentifierProvenance.matchedOn satisfies TargetIdentifierProvenance; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetIdentifierProvenance_other
 * @constant
 * @type {number}
 */
export
const TargetIdentifierProvenance_other = TargetIdentifierProvenance.other satisfies TargetIdentifierProvenance; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other = TargetIdentifierProvenance.other satisfies TargetIdentifierProvenance; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TargetIdentifierProvenance: $.ASN1Decoder<TargetIdentifierProvenance> = $._decodeEnumerated;
export const _encode_TargetIdentifierProvenance: $.ASN1Encoder<TargetIdentifierProvenance> = $._encodeEnumerated;


/* eslint-enable */
