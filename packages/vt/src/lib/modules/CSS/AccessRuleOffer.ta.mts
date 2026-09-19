/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessRuleOffer
 * @description
 *
 * Offered `CO-access` rules. Set bits are offered, unset are
 * not. Default `"NSAC"`. Combined rules and `"no-access"`
 * (and WACI/WACA in S-mode) need Enhanced Access-rules FU.
 * Display objects cannot use combined rules; COs can (with
 * the FU). WAVAR* rules are S-mode only (WAVAR does not
 * exist in A-mode). ISO/IEC 9040:1997 §9, §10.5, §20.1.3,
 * table 1, table 11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessRuleOffer  ::=  BIT STRING {
 *     wavar           (0),
 *     waci            (1),
 *     waca            (2),
 *     nsac            (3),
 *     wavar-and-waci  (4),
 *     wavar-and-waca  (5),
 *     no-access       (6)
 * }
 * ```
 */
export
type AccessRuleOffer = BIT_STRING;

/**
 * @summary AccessRuleOffer_wavar
 * @description
 *
 * Only the WAVAR-token owner may update (S-mode).
 * ISO/IEC 9040:1997 §9, table 1, §20.1.3.
 * @constant
 */
export
const AccessRuleOffer_wavar: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary wavar
 * @description
 *
 * Only the WAVAR-token owner may update (S-mode).
 * ISO/IEC 9040:1997 §9, table 1, §20.1.3.
 * @constant
 */
export
const wavar: number = AccessRuleOffer_wavar; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRuleOffer_waci
 * @description
 *
 * Only the association initiator may update.
 * ISO/IEC 9040:1997 §9, table 1, §20.1.3.
 * @constant
 */
export
const AccessRuleOffer_waci: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary waci
 * @description
 *
 * Only the association initiator may update.
 * ISO/IEC 9040:1997 §9, table 1, §20.1.3.
 * @constant
 */
export
const waci: number = AccessRuleOffer_waci; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRuleOffer_waca
 * @description
 *
 * Only the association acceptor may update.
 * ISO/IEC 9040:1997 §9, table 1, §20.1.3.
 * @constant
 */
export
const AccessRuleOffer_waca: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary waca
 * @description
 *
 * Only the association acceptor may update.
 * ISO/IEC 9040:1997 §9, table 1, §20.1.3.
 * @constant
 */
export
const waca: number = AccessRuleOffer_waca; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRuleOffer_nsac
 * @description
 *
 * Either VT-user may update at any time. Default `"NSAC"`.
 * Collisions are not prevented by the service provider.
 * ISO/IEC 9040:1997 §9, table 1, §20.1.3.
 * @constant
 */
export
const AccessRuleOffer_nsac: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary nsac
 * @description
 *
 * Either VT-user may update at any time. Default `"NSAC"`.
 * Collisions are not prevented by the service provider.
 * ISO/IEC 9040:1997 §9, table 1, §20.1.3.
 * @constant
 */
export
const nsac: number = AccessRuleOffer_nsac; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRuleOffer_wavar_and_waci
 * @description
 *
 * Initiator and currently owns WAVAR (S-mode). Requires
 * Enhanced Access-rules FU. Display objects cannot use this
 * combined rule. ISO/IEC 9040:1997 §9, §10.5, table 1,
 * table 11.
 * @constant
 */
export
const AccessRuleOffer_wavar_and_waci: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary wavar_and_waci
 * @description
 *
 * Initiator and currently owns WAVAR (S-mode). Requires
 * Enhanced Access-rules FU. Display objects cannot use this
 * combined rule. ISO/IEC 9040:1997 §9, §10.5, table 1,
 * table 11.
 * @constant
 */
export
const wavar_and_waci: number = AccessRuleOffer_wavar_and_waci; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRuleOffer_wavar_and_waca
 * @description
 *
 * Acceptor and currently owns WAVAR (S-mode). Requires
 * Enhanced Access-rules FU. Display objects cannot use this
 * combined rule. ISO/IEC 9040:1997 §9, §10.5, table 1,
 * table 11.
 * @constant
 */
export
const AccessRuleOffer_wavar_and_waca: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary wavar_and_waca
 * @description
 *
 * Acceptor and currently owns WAVAR (S-mode). Requires
 * Enhanced Access-rules FU. Display objects cannot use this
 * combined rule. ISO/IEC 9040:1997 §9, §10.5, table 1,
 * table 11.
 * @constant
 */
export
const wavar_and_waca: number = AccessRuleOffer_wavar_and_waca; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRuleOffer_no_access
 * @description
 *
 * Neither VT-user may update. Content is defined in a
 * register entry or profile. Requires Enhanced Access-rules
 * FU. ISO/IEC 9040:1997 §9, §10.5, §20.1.3, table 1.
 * @constant
 */
export
const AccessRuleOffer_no_access: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary no_access
 * @description
 *
 * Neither VT-user may update. Content is defined in a
 * register entry or profile. Requires Enhanced Access-rules
 * FU. ISO/IEC 9040:1997 §9, §10.5, §20.1.3, table 1.
 * @constant
 */
export
const no_access: number = AccessRuleOffer_no_access; /* SHORT_NAMED_BIT */
export const _decode_AccessRuleOffer = $._decodeBitString;
export const _encode_AccessRuleOffer = $._encodeBitString;


/* eslint-enable */
