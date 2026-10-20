/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FamilyReturn_memberSelect
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FamilyReturn-memberSelect ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FamilyReturn_memberSelect {
    contributingEntriesOnly = 1,
    participatingEntriesOnly = 2,
    compoundEntry = 3,
}

/**
 * @summary FamilyReturn_memberSelect
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FamilyReturn-memberSelect ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type FamilyReturn_memberSelect = _enum_for_FamilyReturn_memberSelect;

/**
 * @summary FamilyReturn_memberSelect
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FamilyReturn-memberSelect ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const FamilyReturn_memberSelect = _enum_for_FamilyReturn_memberSelect;

/**
 * @summary FamilyReturn_memberSelect_contributingEntriesOnly
 * @constant
 * @type {number}
 */
export
const FamilyReturn_memberSelect_contributingEntriesOnly: FamilyReturn_memberSelect = FamilyReturn_memberSelect.contributingEntriesOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contributingEntriesOnly
 * @constant
 * @type {number}
 */
export
const contributingEntriesOnly: FamilyReturn_memberSelect = FamilyReturn_memberSelect.contributingEntriesOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FamilyReturn_memberSelect_participatingEntriesOnly
 * @constant
 * @type {number}
 */
export
const FamilyReturn_memberSelect_participatingEntriesOnly: FamilyReturn_memberSelect = FamilyReturn_memberSelect.participatingEntriesOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary participatingEntriesOnly
 * @constant
 * @type {number}
 */
export
const participatingEntriesOnly: FamilyReturn_memberSelect = FamilyReturn_memberSelect.participatingEntriesOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FamilyReturn_memberSelect_compoundEntry
 * @constant
 * @type {number}
 */
export
const FamilyReturn_memberSelect_compoundEntry: FamilyReturn_memberSelect = FamilyReturn_memberSelect.compoundEntry; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary compoundEntry
 * @constant
 * @type {number}
 */
export
const compoundEntry: FamilyReturn_memberSelect = FamilyReturn_memberSelect.compoundEntry; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_FamilyReturn_memberSelect: $.ASN1Decoder<FamilyReturn_memberSelect> = $._decodeEnumerated;

export
const _encode_FamilyReturn_memberSelect: $.ASN1Encoder<FamilyReturn_memberSelect> = $._encodeEnumerated;

/* eslint-enable */
