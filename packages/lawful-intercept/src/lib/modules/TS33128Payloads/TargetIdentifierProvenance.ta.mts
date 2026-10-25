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
const TargetIdentifierProvenance: typeof _enum_for_TargetIdentifierProvenance = _enum_for_TargetIdentifierProvenance;

/**
 * @summary TargetIdentifierProvenance_lEAProvided
 * @constant
 * @type {number}
 */
export
const TargetIdentifierProvenance_lEAProvided: _enum_for_TargetIdentifierProvenance.lEAProvided = TargetIdentifierProvenance.lEAProvided; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lEAProvided
 * @constant
 * @type {number}
 */
export
const lEAProvided: _enum_for_TargetIdentifierProvenance.lEAProvided = TargetIdentifierProvenance.lEAProvided; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetIdentifierProvenance_observed
 * @constant
 * @type {number}
 */
export
const TargetIdentifierProvenance_observed: _enum_for_TargetIdentifierProvenance.observed = TargetIdentifierProvenance.observed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary observed
 * @constant
 * @type {number}
 */
export
const observed: _enum_for_TargetIdentifierProvenance.observed = TargetIdentifierProvenance.observed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetIdentifierProvenance_matchedOn
 * @constant
 * @type {number}
 */
export
const TargetIdentifierProvenance_matchedOn: _enum_for_TargetIdentifierProvenance.matchedOn = TargetIdentifierProvenance.matchedOn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary matchedOn
 * @constant
 * @type {number}
 */
export
const matchedOn: _enum_for_TargetIdentifierProvenance.matchedOn = TargetIdentifierProvenance.matchedOn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetIdentifierProvenance_other
 * @constant
 * @type {number}
 */
export
const TargetIdentifierProvenance_other: _enum_for_TargetIdentifierProvenance.other = TargetIdentifierProvenance.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: _enum_for_TargetIdentifierProvenance.other = TargetIdentifierProvenance.other; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TargetIdentifierProvenance: $.ASN1Decoder<TargetIdentifierProvenance> = $._decodeEnumerated;
export const _encode_TargetIdentifierProvenance: $.ASN1Encoder<TargetIdentifierProvenance> = $._encodeEnumerated;


/* eslint-enable */
