/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_FamilyReturn_memberSelect */
export enum _enum_for_FamilyReturn_memberSelect {
    contributingEntriesOnly = 1,
    participatingEntriesOnly = 2,
    compoundEntry = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_FamilyReturn_memberSelect */

/* START_OF_SYMBOL_DEFINITION FamilyReturn_memberSelect */
/**
 * @summary FamilyReturn_memberSelect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FamilyReturn-memberSelect ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type FamilyReturn_memberSelect =
    | _enum_for_FamilyReturn_memberSelect
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION FamilyReturn_memberSelect */

/* START_OF_SYMBOL_DEFINITION FamilyReturn_memberSelect_contributingEntriesOnly */
/**
 * @summary FamilyReturn_memberSelect_contributingEntriesOnly
 * @constant
 * @type {number}
 */
export const FamilyReturn_memberSelect_contributingEntriesOnly: FamilyReturn_memberSelect = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FamilyReturn_memberSelect_contributingEntriesOnly */

/* START_OF_SYMBOL_DEFINITION contributingEntriesOnly */
/**
 * @summary contributingEntriesOnly
 * @constant
 * @type {number}
 */
export const contributingEntriesOnly: FamilyReturn_memberSelect = FamilyReturn_memberSelect_contributingEntriesOnly; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION contributingEntriesOnly */

/* START_OF_SYMBOL_DEFINITION FamilyReturn_memberSelect_participatingEntriesOnly */
/**
 * @summary FamilyReturn_memberSelect_participatingEntriesOnly
 * @constant
 * @type {number}
 */
export const FamilyReturn_memberSelect_participatingEntriesOnly: FamilyReturn_memberSelect = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FamilyReturn_memberSelect_participatingEntriesOnly */

/* START_OF_SYMBOL_DEFINITION participatingEntriesOnly */
/**
 * @summary participatingEntriesOnly
 * @constant
 * @type {number}
 */
export const participatingEntriesOnly: FamilyReturn_memberSelect = FamilyReturn_memberSelect_participatingEntriesOnly; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION participatingEntriesOnly */

/* START_OF_SYMBOL_DEFINITION FamilyReturn_memberSelect_compoundEntry */
/**
 * @summary FamilyReturn_memberSelect_compoundEntry
 * @constant
 * @type {number}
 */
export const FamilyReturn_memberSelect_compoundEntry: FamilyReturn_memberSelect = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FamilyReturn_memberSelect_compoundEntry */

/* START_OF_SYMBOL_DEFINITION compoundEntry */
/**
 * @summary compoundEntry
 * @constant
 * @type {number}
 */
export const compoundEntry: FamilyReturn_memberSelect = FamilyReturn_memberSelect_compoundEntry; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION compoundEntry */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FamilyReturn_memberSelect */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FamilyReturn_memberSelect */

/* START_OF_SYMBOL_DEFINITION _decode_FamilyReturn_memberSelect */
export const _decode_FamilyReturn_memberSelect = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_FamilyReturn_memberSelect */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FamilyReturn_memberSelect */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FamilyReturn_memberSelect */

/* START_OF_SYMBOL_DEFINITION _encode_FamilyReturn_memberSelect */
export const _encode_FamilyReturn_memberSelect = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_FamilyReturn_memberSelect */

/* eslint-enable */
