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
 * @constant
 */
export
const AccessRuleOffer_wavar: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary wavar
 * @constant
 */
export
const wavar: number = AccessRuleOffer_wavar; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRuleOffer_waci
 * @constant
 */
export
const AccessRuleOffer_waci: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary waci
 * @constant
 */
export
const waci: number = AccessRuleOffer_waci; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRuleOffer_waca
 * @constant
 */
export
const AccessRuleOffer_waca: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary waca
 * @constant
 */
export
const waca: number = AccessRuleOffer_waca; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRuleOffer_nsac
 * @constant
 */
export
const AccessRuleOffer_nsac: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary nsac
 * @constant
 */
export
const nsac: number = AccessRuleOffer_nsac; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRuleOffer_wavar_and_waci
 * @constant
 */
export
const AccessRuleOffer_wavar_and_waci: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary wavar_and_waci
 * @constant
 */
export
const wavar_and_waci: number = AccessRuleOffer_wavar_and_waci; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRuleOffer_wavar_and_waca
 * @constant
 */
export
const AccessRuleOffer_wavar_and_waca: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary wavar_and_waca
 * @constant
 */
export
const wavar_and_waca: number = AccessRuleOffer_wavar_and_waca; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRuleOffer_no_access
 * @constant
 */
export
const AccessRuleOffer_no_access: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary no_access
 * @constant
 */
export
const no_access: number = AccessRuleOffer_no_access; /* SHORT_NAMED_BIT */
export const _decode_AccessRuleOffer = $._decodeBitString;
export const _encode_AccessRuleOffer = $._encodeBitString;


/* eslint-enable */
