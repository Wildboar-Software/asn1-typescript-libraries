/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ServiceControlOptions
 * @description
 *
 * Empty ≡ prefer chaining not required, chaining allowed, copies allowed,
 * aliases deref'd except modify, subentries inaccessible, incomplete
 * shadow data chained further. Search-rules may overwrite.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceControlOptions  ::=  BIT STRING {
 *   preferChaining          (0),
 *   chainingProhibited      (1),
 *   localScope              (2),
 *   dontUseCopy             (3),
 *   dontDereferenceAliases  (4),
 *   subentries              (5),
 *   copyShallDo             (6),
 *   partialNameResolution   (7),
 *   manageDSAIT             (8),
 *   noSubtypeMatch          (9),
 *   noSubtypeSelection      (10),
 *   countFamily             (11),
 *   dontSelectFriends       (12),
 *   dontMatchFriends        (13),
 *   allowWriteableCopy      (14)}
 * ```
 */
export type ServiceControlOptions = BIT_STRING;

/**
 * @summary ServiceControlOptions_preferChaining
 * @description
 *
 * Preference only; Directory is not obliged to chain.
 *
 * @constant
 */
export const ServiceControlOptions_preferChaining: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary preferChaining
 * @description
 *
 * Preference only; Directory is not obliged to chain.
 *
 * @constant
 */
export const preferChaining: number = ServiceControlOptions_preferChaining; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_chainingProhibited
 * @description
 *
 * Chaining and other distribution methods prohibited. Ignored if
 * `manageDSAIT` is SET (that bit already forbids chaining).
 *
 * @constant
 */
export const ServiceControlOptions_chainingProhibited: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary chainingProhibited
 * @description
 *
 * Chaining and other distribution methods prohibited. Ignored if
 * `manageDSAIT` is SET (that bit already forbids chaining).
 *
 * @constant
 */
export const chainingProhibited: number = ServiceControlOptions_chainingProhibited; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_localScope
 * @description
 *
 * Local matter (one DSA or one DMD).
 *
 * @constant
 */
export const ServiceControlOptions_localScope: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary localScope
 * @description
 *
 * Local matter (one DSA or one DMD).
 *
 * @constant
 */
export const localScope: number = ServiceControlOptions_localScope; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_dontUseCopy
 * @description
 *
 * No copied/shadow data (X.518). `copyShallDo` is meaningful only if this
 * is unset.
 *
 * @constant
 */
export const ServiceControlOptions_dontUseCopy: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary dontUseCopy
 * @description
 *
 * No copied/shadow data (X.518). `copyShallDo` is meaningful only if this
 * is unset.
 *
 * @constant
 */
export const dontUseCopy: number = ServiceControlOptions_dontUseCopy; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_dontDereferenceAliases
 * @description
 *
 * Needed to operate on the alias entry itself. Modify ops do not deref
 * aliases unless the `useAliasOnUpdate` critical extension is set.
 *
 * @constant
 */
export const ServiceControlOptions_dontDereferenceAliases: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary dontDereferenceAliases
 * @description
 *
 * Needed to operate on the alias entry itself. Modify ops do not deref
 * aliases unless the `useAliasOnUpdate` critical extension is set.
 *
 * @constant
 */
export const dontDereferenceAliases: number = ServiceControlOptions_dontDereferenceAliases; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_subentries
 * @description
 *
 * Search/List only; ignored otherwise. Access subentries only; normal
 * entries treated as non-existent. Schema/ACI/collective still apply.
 * Base object may still be a normal entry.
 *
 * @constant
 */
export const ServiceControlOptions_subentries: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary subentries
 * @description
 *
 * Search/List only; ignored otherwise. Access subentries only; normal
 * entries treated as non-existent. Schema/ACI/collective still apply.
 * Base object may still be a normal entry.
 *
 * @constant
 */
export const subentries: number = ServiceControlOptions_subentries; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_copyShallDo
 * @description
 *
 * If a copy only partly satisfies, do not chain. Meaningful only if
 * `dontUseCopy` is unset. Incomplete because of missing
 * attrs/values/contexts or unsupported matching rules. If SET and not
 * fully satisfied, set `incompleteEntry`. Distinct from
 * `allowWriteableCopy`.
 *
 * @constant
 */
export const ServiceControlOptions_copyShallDo: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary copyShallDo
 * @description
 *
 * If a copy only partly satisfies, do not chain. Meaningful only if
 * `dontUseCopy` is unset. Incomplete because of missing
 * attrs/values/contexts or unsupported matching rules. If SET and not
 * fully satisfied, set `incompleteEntry`. Distinct from
 * `allowWriteableCopy`.
 *
 * @constant
 */
export const copyShallDo: number = ServiceControlOptions_copyShallDo; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_partialNameResolution
 * @description
 *
 * Read/Search only. About to `nameError` ⇒ treat last resolved RDNs as
 * target and set `partialName` TRUE. Can disclose context-prefix
 * existence despite DiscloseOnError deny.
 *
 * @constant
 */
export const ServiceControlOptions_partialNameResolution: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary partialNameResolution
 * @description
 *
 * Read/Search only. About to `nameError` ⇒ treat last resolved RDNs as
 * target and set `partialName` TRUE. Can disclose context-prefix
 * existence despite DiscloseOnError deny.
 *
 * @constant
 */
export const partialNameResolution: number = ServiceControlOptions_partialNameResolution; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_manageDSAIT
 * @description
 *
 * All DSEs visible; `noUserModification` attrs may be changed; knowledge
 * is just an attr; never chain, never refer. DUA must BIND directly to
 * that DSA. Ignored: `operationProgress`, `referenceType`, `entryOnly`,
 * `nameResolveOnMaster`, `chainingProhibited`.
 *
 * @constant
 */
export const ServiceControlOptions_manageDSAIT: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary manageDSAIT
 * @description
 *
 * All DSEs visible; `noUserModification` attrs may be changed; knowledge
 * is just an attr; never chain, never refer. DUA must BIND directly to
 * that DSA. Ignored: `operationProgress`, `referenceType`, `entryOnly`,
 * `nameResolveOnMaster`, `chainingProhibited`.
 *
 * @constant
 */
export const manageDSAIT: number = ServiceControlOptions_manageDSAIT; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_noSubtypeMatch
 * @description
 *
 * Compare/Search only; ignore otherwise.
 *
 * @constant
 */
export const ServiceControlOptions_noSubtypeMatch: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary noSubtypeMatch
 * @description
 *
 * Compare/Search only; ignore otherwise.
 *
 * @constant
 */
export const noSubtypeMatch: number = ServiceControlOptions_noSubtypeMatch; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_noSubtypeSelection
 * @description
 *
 * Do not auto-select subtypes.
 *
 * @constant
 */
export const ServiceControlOptions_noSubtypeSelection: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary noSubtypeSelection
 * @description
 *
 * Do not auto-select subtypes.
 *
 * @constant
 */
export const noSubtypeSelection: number = ServiceControlOptions_noSubtypeSelection; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_countFamily
 * @description
 *
 * Each family member counts as a separate entry for size/admin limits and
 * relaxation. Unset ⇒ compound entry counts as one.
 *
 * @constant
 */
export const ServiceControlOptions_countFamily: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary countFamily
 * @description
 *
 * Each family member counts as a separate entry for size/admin limits and
 * relaxation. Unset ⇒ compound entry counts as one.
 *
 * @constant
 */
export const countFamily: number = ServiceControlOptions_countFamily; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_dontSelectFriends
 * @description
 *
 * Selecting an anchor does not auto-select friends.
 *
 * @constant
 */
export const ServiceControlOptions_dontSelectFriends: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary dontSelectFriends
 * @description
 *
 * Selecting an anchor does not auto-select friends.
 *
 * @constant
 */
export const dontSelectFriends: number = ServiceControlOptions_dontSelectFriends; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_dontMatchFriends
 * @description
 *
 * Filter item on an anchor is not satisfied by friend attrs.
 *
 * @constant
 */
export const ServiceControlOptions_dontMatchFriends: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary dontMatchFriends
 * @description
 *
 * Filter item on an anchor is not satisfied by friend attrs.
 *
 * @constant
 */
export const dontMatchFriends: number = ServiceControlOptions_dontMatchFriends; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_allowWriteableCopy
 * @description
 *
 * writeableCopy DSE acceptable for queries. Not the same as
 * `copyShallDo` (complete copy that need not be master vs any copy).
 *
 * @constant
 */
export const ServiceControlOptions_allowWriteableCopy: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary allowWriteableCopy
 * @description
 *
 * writeableCopy DSE acceptable for queries. Not the same as
 * `copyShallDo` (complete copy that need not be master vs any copy).
 *
 * @constant
 */
export const allowWriteableCopy: number = ServiceControlOptions_allowWriteableCopy; /* SHORT_NAMED_BIT */


export const _decode_ServiceControlOptions = $._decodeBitString;


export const _encode_ServiceControlOptions = $._encodeBitString;


/* eslint-enable */
