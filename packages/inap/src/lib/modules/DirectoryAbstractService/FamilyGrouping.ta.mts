/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FamilyGrouping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FamilyGrouping  ::=  ENUMERATED {
 *   entryOnly(1), compoundEntry(2), strands(3), multiStrand(4)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FamilyGrouping {
    entryOnly = 1,
    compoundEntry = 2,
    strands = 3,
    multiStrand = 4,
}

/**
 * @summary FamilyGrouping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FamilyGrouping  ::=  ENUMERATED {
 *   entryOnly(1), compoundEntry(2), strands(3), multiStrand(4)}
 * ```
 * 
 * @enum {number}
 */
export
type FamilyGrouping = _enum_for_FamilyGrouping;

/**
 * @summary FamilyGrouping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FamilyGrouping  ::=  ENUMERATED {
 *   entryOnly(1), compoundEntry(2), strands(3), multiStrand(4)}
 * ```
 * 
 * @enum {number}
 */
export
const FamilyGrouping = _enum_for_FamilyGrouping;

/**
 * @summary FamilyGrouping_entryOnly
 * @constant
 * @type {number}
 */
export
const FamilyGrouping_entryOnly: FamilyGrouping = FamilyGrouping.entryOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary entryOnly
 * @constant
 * @type {number}
 */
export
const entryOnly: FamilyGrouping = FamilyGrouping.entryOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FamilyGrouping_compoundEntry
 * @constant
 * @type {number}
 */
export
const FamilyGrouping_compoundEntry: FamilyGrouping = FamilyGrouping.compoundEntry; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary compoundEntry
 * @constant
 * @type {number}
 */
export
const compoundEntry: FamilyGrouping = FamilyGrouping.compoundEntry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FamilyGrouping_strands
 * @constant
 * @type {number}
 */
export
const FamilyGrouping_strands: FamilyGrouping = FamilyGrouping.strands; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary strands
 * @constant
 * @type {number}
 */
export
const strands: FamilyGrouping = FamilyGrouping.strands; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FamilyGrouping_multiStrand
 * @constant
 * @type {number}
 */
export
const FamilyGrouping_multiStrand: FamilyGrouping = FamilyGrouping.multiStrand; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiStrand
 * @constant
 * @type {number}
 */
export
const multiStrand: FamilyGrouping = FamilyGrouping.multiStrand; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_FamilyGrouping: $.ASN1Decoder<FamilyGrouping> = $._decodeEnumerated;

export
const _encode_FamilyGrouping: $.ASN1Encoder<FamilyGrouping> = $._encodeEnumerated;

/* eslint-enable */
